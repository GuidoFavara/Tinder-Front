import React, { useState } from 'react'
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

const ChatScreen = () => {
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
    const handleSend = e => {
        e.preventDefault();
        setMessage([...message, { message: input }]);
        setInput('');
    }
    return (
        <div className="Inbox__Screen">
            <p className="Matched__timestamp">You matched with Ellen on 13/12/2020</p>
            {message.map(message => (
                message.name ? (
                    < div className="Chatscreen__Message" >
                        <Avatar className="Chat__Convo" alt={message.name} src={message.Image} />
                        <p className="ChatScreen__Message">{message.message}</p>
                    </div>
                ) : (
                        < div className="Chatscreen__Message" >
                            <p className="ChatScreen__MessageUser   ">{message.message}</p>
                        </div>
                    )

            ))
            }

            <form className="ChatScreen_Input">
                <input value={input} onChange={(e) => setInput(e.target.value)} className="ChatScreen__Input__Field" placeholder="Type message..." type="text" />
                <button type="submit" onClick={handleSend} className="ChatScreen__Input__Button">Send</button>
            </form>

        </div >
    )
}

export default ChatScreen
