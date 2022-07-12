import { useEffect, useState } from "react";

import axios from "axios"

import './Sponsors.css'

const Sponsors = () => {

    const [sponsors, setSponsors] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get(
                `${process.env.REACT_APP_API_ROUTE}/sponsors`
            )
            setSponsors(resData.data)
        }
        getData()
    }, [])


    return ( 
        <div>
            <h1>Sponsors</h1>
            {sponsors.length > 0
            ? sponsors.map((s) => 
                <p>{s.sponsor_name}</p>
            ) 
            : null
            }
        </div>
     );
}
 
export default Sponsors;