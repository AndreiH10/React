import './Welcome.css';

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

export default Welcome;