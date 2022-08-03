import { useEffect, useState } from "react";

import axios from "axios";

import './Edition.css'

const Edition = () => {

    const [ infos, setInfos ] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get(
                `${process.env.REACT_APP_API_ROUTE}/homepage`
            )
            setInfos(resData.data)
            console.log(resData.data);
        }
        getData()
    }, [])

    return ( 
        <div className="edition-container">
            {
                infos.length > 0 && 
                <>
                <h2>
                    {infos[0].home_title}
                </h2>
                <img src={infos[0].home_img} alt=""></img>
            </>
            }
        </div>
     );
}
 
export default Edition;