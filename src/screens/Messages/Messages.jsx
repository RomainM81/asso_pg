import { useEffect, useState } from "react";

import axios from "axios"

import './Messages.css'

const Messages = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get(
                `${process.env.REACT_APP_API_ROUTE}/messages`
            )
            setMessages(resData.data)
        }
        getData()
    }, [])

    return ( 
        <div>
            <h1>
                Livre D'Or
            </h1>
            {messages.length > 0
            ? messages.map((m) => 
                <p>{m.message_text}</p>
            ) 
            : null
            }
        </div>
     );
}
 
export default Messages;