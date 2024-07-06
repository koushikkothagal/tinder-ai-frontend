import './App.css'
import { User, MessageCircle, X, Heart } from 'lucide-react';
import React, { useState } from 'react';

const ProfileSelector = () => (
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src="http://127.0.0.1:8081/0fd2a36a-97ff-4d6e-b2a3-214e4c96a48b.jpg" />
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
        <h2 className='text-3xl font-bold'>Foo Bar, 30</h2>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 mb-4">I am a software engineer with 10 years of experience in the industry. I am looking for a new job.</p>
    </div>
    <div className="p-4 flex justify-center space-x-4">
      <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
        onClick={() => console.log("left")}>
        <X size={24} />
      </button>
      <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
        onClick={() => console.log("right")}>
        <Heart size={24} />
      </button>
    </div>
  </div>
);

const MatchesList = ({ onSelectMatch }) => (
  <div className="rounded-lg shadow-lg p-4">
    <h2 className="text-2xl font-bold mb-4">Matches</h2>
    <ul>
      {[
        { id: 1, firstName: 'Foo', lastName: 'Bar', imageUrl: 'http://127.0.0.1:8081/0efd4353-dd34-42bb-b26f-0ee85278e099.jpg' },
        { id: 2, firstName: 'Baz', lastName: 'Qux', imageUrl: 'http://127.0.0.1:8081/2ee98151-fd09-4241-bfb2-4fa939546cb6.jpg' }
      ].map(match => (
        <li key={match.id} className="mb-2">
          <button 
              className="w-full hover:bg-gray-100 rounded flex item-center"
              onClick={onSelectMatch}
              >
            <img src={match.imageUrl} className="w-16 h-16 rounded-full mr-3 object-cover" />
            <span>
              <h3 className='font-bold'>{match.firstName} {match.lastName}</h3>
            </span>
          </button>
        </li>
      ))
      }
    </ul>
  </div>
)

const ChatScreen = () => {
  
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      console.log(input);
      setInput('');
    }
  }

  return (
    <div className='rounded-lg shadow-lg p-4'>
      <h2 className="text-2xl font-bold mb-4">Chat with Foo Bar</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-2">
      {[
        "Hi",
        "How are you?",
        "How are you?",
        "How are you?",
        "How are you?",
        "How are you?",
        "How are you?",
        "How are you?",
      ]
        .map((message, index) => (
          <div key={index}>
            <div className="mb-4 p-2 rounded bg-gray-100">{message}</div>
          </div>)
        )}
        </div>
        <div className='flex'>
          <input 
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='border flex-1 rounded p-2 mr-2' 
            placeholder='Type a message...'
            />
          <button 
            className='bg-blue-500 text-white rounded p-2'
            onClick={handleSend}
          >Send</button>
        </div>
    </div>
  )
}

function App() {

  const [currentScreen, setCurrentScreen] = useState('profile');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'profile':
        return <ProfileSelector />;
      case 'matches':
        return <MatchesList onSelectMatch={() => setCurrentScreen('chat')} />;
      case 'chat':
        return <ChatScreen />;
    }
  }
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex justify-between mb-4">
        <User onClick={() => setCurrentScreen("profile")} />
        <MessageCircle onClick={() => setCurrentScreen("matches")} />
      </nav>
      {renderScreen()}
    </div>
  )
}

export default App
