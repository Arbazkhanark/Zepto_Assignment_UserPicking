import { useEffect, useState } from "react";
import { USERS_API } from "./constants";

const useUsers=()=>{
    const [users,setUsers]=useState(null)

    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers=async()=>{
        const data=await fetch(USERS_API);
        const userInfo=await data.json();
        console.log(userInfo)
        setUsers(userInfo);
    }
    
    return users;
}


export default useUsers;