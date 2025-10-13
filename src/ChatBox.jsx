import React, { useState, useEffect } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from 'axios';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai'; 
// Set up Echo with your Pusher credentials
window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
});

const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        console.log('Pusher Key:', import.meta.env.VITE_PUSHER_APP_KEY);
        console.log('Pusher Cluster:', import.meta.env.VITE_PUSHER_APP_CLUSTER);
        // Listen for events on the chat-channel
        window.Echo.channel('chat-channel')
            .listen('MessageSent', (e) => {
                setMessages(prevMessages => [...prevMessages, e.message]);
            });

        // Fetch initial messages from Laravel API
        axios.get('/api/messages').then(response => {
            setMessages(response.data);
        });

        return () => {
            window.Echo.leaveChannel('chat-channel');
        };
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        axios.post('/api/messages', { message: newMessage })
            .then(response => {
                setNewMessage('');
            });
    };

    return (
        <>
          {/* Floating Chat Icon - Hidden when the chatbox is open */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 p-4 rounded-full bg-[#F8B400] text-white shadow-lg z-50 hover:bg-[#F8B400] transition-colors"
            >
              <AiOutlineMessage size={24} />
            </button>
          )}
    
          {/* Full Chatbox Window - Only visible when isOpen is true */}
          {isOpen && (
            <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col z-50">
              {/* Header */}
              <div className="flex justify-between items-center p-4 bg-gray-100 border-b rounded-t-lg">
                <h3 className="text-lg font-semibold">Chat</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <AiOutlineClose size={20} />
                </button>
              </div>
    
              {/* Messages Display */}
              <div className="flex-1 p-4 overflow-y-auto">
              {Array.isArray(messages) && messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.user === 'Me' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-lg ${msg.user === 'Me' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                      {msg.text}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No messages yet</p>
              )}
            </div>
    
              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-l-lg p-2 focus:outline-none"
                  />
                  <button type="submit" className="bg-[#F8B400] text-white p-2 rounded-r-lg hover:bg-[#F8B400] transition-colors">
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      );
};

export default Chatbox;