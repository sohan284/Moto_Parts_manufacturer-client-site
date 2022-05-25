import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [parts,setParts] = useState([]);
    useEffect( () =>{
        fetch('https://calm-dusk-71886.herokuapp.com/part')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[]);
    return [parts,setParts]

};

export default useParts;