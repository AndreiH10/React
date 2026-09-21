import { useEffect, useState } from 'react';

import './App.css'

import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import Welcome from './components/Welcome';
import { Chatbot } from 'supersimpledev';

function App() {
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || 
    [{
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1',
        time: 1736127288920
    }, {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        id: 'id2',
        time: 1736127291230
    }]);

    useEffect(() => {
        Chatbot.addResponses(
            {
                'oi': 'Oi, tudo bem?',
                'goodbye': 'goodbye'
            }
        )
    }, []);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages))
    }, [chatMessages])

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

export default App
