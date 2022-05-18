import React, { useEffect, useState } from 'react'

function CountryStats(props) {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});

    
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(props.link);
            const resJSON = await res.json();
            const arr = await resJSON;
            setData(arr);
        };
        fetchApi();
    }, [])
    
    console.log(data);
  return (
    <div>
        <div>
        <div>CountryStats</div>
        {props.link}</div>
        </div>
  )
}

export default CountryStats