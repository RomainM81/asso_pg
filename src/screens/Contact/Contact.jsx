import { useState } from "react";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'

const Contact = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        if ( !email || !subject || !message) {
            return toast.error('Veuillez saisir une adresse mail valide, un sujet et un texte')
        }
        try{
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_API_ROUTE}/email`, {
                email,
                subject,
                message
            })
            setLoading(false)
            toast.success(data.message)
        } catch(err) {
            console.log("catch");
            setLoading(false)
            toast.error(
                err.reponse && err.response.data.message
                ? err.response.data.message
                : err.message
            )
        }
    }

    return ( 
        <div>
            <ToastContainer position="bottom-center" limit={1}/>
            {/* <header> */}
                <form onSubmit={submitHandler}>
                    <h2>Nous Contacter</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='email'></input>
                    </div>
                    <div>
                        <label htmlFor="subject">Sujet</label>
                        <input id="subject" type="text" onChange={(e) => setSubject(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label></label>
                        <button disabled={loading} type="submit">
                            { loading ? 'Envoi...' : 'Envoyer'}
                        </button>
                    </div>
                </form>
            {/* </header> */}
        </div>
     );
}
 
export default Contact;