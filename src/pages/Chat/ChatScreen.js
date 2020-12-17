import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen () {
    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name:'Obama',
            message:'Hola como estas? :)',
            image:"https://www.wallpapertip.com/wmimgs/43-435104_portrait-barack-obama-face.jpg",
        },
        {
            name:'Trump',
            message:'Ops i did it again',
            image:"https://media.architecturaldigest.com/photos/579933cdb6c434ab487bc12c/16:9/w_2560%2Cc_limit/trump-1985-apartment-AD_06.jpg",
        },
        {
            name:'Bush',
            message:'Entonces nos vemos mañana',
            image:"https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg",
        },
        {
            message: 'hola como estas?',
        },

    ])
    const handleSend = (e) => {
        e.preventDefault();
        setMessage([...message, { message: input }]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p classname="chatScreen__timestamp"> Hiciste match con X el 15/12/2020</p>
            {message.map((message) => 
               message.name ? (
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} scr={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                     <p classname="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )}

            <form className="chatScreen__input">
                <input className="chatScreen__inputField" placeholder="Escribir un mensaje" type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button classname="chatScreen__inputButton" onClick={handleSend}>Enviar</button>
            </form>
                </div>
        
        );
    
  }

export default ChatScreen
