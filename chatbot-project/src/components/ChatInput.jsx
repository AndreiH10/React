import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingGif from '../assets/loading-spinner.gif';
import './ChatInput.css';
import dayjs from 'dayjs';

function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');

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
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            },
        ]

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={LoadingGif} className="loading-spinner"/>,
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
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            },
        ])
        
        
    }

    function keyEvents(event){
        if(event.key === 'Enter') sendMessage();
        if(event.key === 'Escape') setInputText('');
    }

    const [on, setOn] = useState(false);
    function isButtonOn(){
        if(on === false){
            setOn(true)
        } else{
            setOn(false);
        }
    }

    function clearMessages(){
        setChatMessages([]);
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

                >{on ? 'On' : 'Off'}
            </button>
            <button
                onClick={clearMessages}
                className="clear-button"
            >Clear</button>
        </div>
    );
}

export default ChatInput;