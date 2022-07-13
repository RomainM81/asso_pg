import { useEffect, useState } from "react";

import axios from "axios"

import './Press.css'
import NavBar from "../../components/NavBar/NavBar";

const Press = () => {

    const [press, setPress] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get(
                `${process.env.REACT_APP_API_ROUTE}/press`
            )
            setPress(resData.data)
        }
        getData()
    }, [])
    
    return ( 
        <>
            <NavBar />
            <div>
                <h1>Press</h1>
                {press.length > 0
                ? press.map((a) => 
                    <p>{a.article_title}</p>
                ) 
                : null
                }
            </div>
        </>
     );
}
 
export default Press;