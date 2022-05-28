import { useState, useEffect } from 'react';

const useToken = user =>{

    const [token ,setToken] = useState('');

    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email : email};
        if(email){
            fetch(`https://calm-dusk-71886.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }

    },[user]);
    return [token]
}
export default useToken;