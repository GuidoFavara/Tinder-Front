import React, { useState } from 'react'
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name: 'Ellen',
            Image: '...',
            message: 'hii!',
        },
        {
            name: 'Ellen',
            Image: '...',
            message: 'hii 2!',
        },
        {
            message: 'hii too!',
        }
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
