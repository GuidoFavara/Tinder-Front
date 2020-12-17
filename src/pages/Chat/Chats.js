import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name='Obama'
                message='Hola como estas? :)'
                timestamp='Hace 40 segundos'
                profilePic="https://www.wallpapertip.com/wmimgs/43-435104_portrait-barack-obama-face.jpg" />
             
             <Chat 
                name='Trump'
                message='Ops i did it again'
                timestamp='Hace 1 semana'
                profilePic="https://media.architecturaldigest.com/photos/579933cdb6c434ab487bc12c/16:9/w_2560%2Cc_limit/trump-1985-apartment-AD_06.jpg" />
            
             <Chat 
                name='Bush'
                message='Entonces nos vemos mañana'
                timestamp='Hace 7 horas'
                profilePic="https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg" />
        </div>
    )
}

export default Chats;
