function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = React.useState('');

    function saveInputText(event){
        setInputText(event.target.value);
    }

    async function sendMessage(){
        setInputText('');

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            },
        ]

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src="loading-spinner.gif" className="loading-spinner"/>,
                sender: 'robot',
                id: crypto.randomUUID()
            },
        ])

        const response = await Chatbot.getResponseAsync(inputText);

        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            },
        ])
        
        
    }

    function keyEvents(event){
        if(event.key === 'Enter') sendMessage();
        if(event.key === 'Escape') setInputText('');
    }

    const [on, setOn] = React.useState(false);
    function isButtonOn(){
        if(on === false){
            setOn(true)
        } else{
            setOn(false);
        }
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={keyEvents}
                className="chat-input"
                />
            <button 
                onClick={sendMessage}
                className="send-button"
                >
                Send
            </button>
            <button
                className={on ? 'button-on' : 'button-off'}
                onClick={isButtonOn}

                >{on ? 'On' : 'Off'}</button>
        </div>
    );
}

function ChatMessage(props) {
    const { message, sender } = props;

    /*
    if(sender === 'robot'){
      return(
        <div>
          <img src="robot.png" width="50" />
          {message}
        </div>
      )
    }
    */

    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img 
                    src="robot.png" 
                    width="50" 
                    className="chat-message-profile"
                />
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img 
                    src="user.png" 
                    width="50" 
                    className="chat-message-profile"
                />
            )}
        </div>
    )
}

function useAutoScroll(dependencies){
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const containerElem = containerRef.current;
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, dependencies);

    return containerRef;
}

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll([chatMessages]);

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                )

            }
            )
        }
        </div>
    )
}

function Welcome({ chatMessages }){
    if(chatMessages.length === 0){
        return(
            <>
            <p className="welcome">Welcome to chatbot project!</p>
            <p className="welcome">Send a message using the text below</p>
            </>

        )
    }

}

function App() {
    const [chatMessages, setChatMessages] = React.useState([]);

    //const chatMessages = array[0];
    //const setChatMessages = array[1];
    //const [ chatMessages, setChatMessages ] = array;

    return (
        <div className="app-container">
            <Welcome
                chatMessages={chatMessages}
            />
            <ChatMessages
                chatMessages={chatMessages}
            />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);