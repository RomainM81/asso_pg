import { useEffect, useState } from "react";

import axios from "axios"

import './Members.css'
import NavBar from "../../components/NavBar/NavBar";

const Members = () => {

    const [members, setMembers] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get(
                `${process.env.REACT_APP_API_ROUTE}/members`
            )
            setMembers(resData.data)
        }
        getData()
    }, [])

    return ( 
        <>
            <NavBar />
            <div>
                <h1>Members</h1>
                {members.length > 0
                ? members.map((m) => 
                    <p>{m.member_name}</p>
                ) 
                : null
                }
            </div>
        </>
     );
}
 
export default Members;