import React, { useEffect, useState } from 'react'
import Scores from './Scores'

function CountryStats(props) {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [imgLink, setImgLink] = useState('');
    
    props.link && useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(props.link);
            const resJSON = await res.json();
            const arr = await resJSON._links["ua:scores"];
            const imgLink = await resJSON._links["ua:images"];
            
            setData(arr);
            setImgLink(imgLink);
        };
        fetchApi();
    }, [])
      props.func(imgLink);
    //console.log(data);
  return (
    <div className='w-full bg-bg-darker'>
        <div className='w-full'>
        <Scores link={data.href} />
        </div>
        </div>
  )
}

export default CountryStats