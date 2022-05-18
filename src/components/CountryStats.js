import React, { useEffect, useState } from 'react'
import Scores from './Scores'

function CountryStats(props) {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});

    
    props.link && useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(props.link);
            const resJSON = await res.json();
            const arr = await resJSON._links["ua:scores"];
            setData(arr);
        };
        fetchApi();
    }, [])
    
    //console.log(data);
  return (
    <div className='w-full'>
        <div className='w-full'>
        <div>CountryStats</div>
        <Scores link={data.href} />
        </div>
        </div>
  )
}

export default CountryStats