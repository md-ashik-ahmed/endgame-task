import { useState } from "react";
import { useEffect } from "react";

const useCollege = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        fetch('https://endgame-server-md-ashik-ahmed.vercel.app/college')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
    },[])
    return [users, loading]
       
};

export default useCollege;