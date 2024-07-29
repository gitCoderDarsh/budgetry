import React, {useEffect, useState} from "react";
import axios from "axios";

const HelloWorld = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3001/api/greet')
        .then(res => {
            setMessage(res.data.text);
        })
        .catch(err => {
            console.error('error fetching data: ', err);
        });
    }, []);

    return <h1>{message || 'Loading...'}</h1>;
}

export default HelloWorld;