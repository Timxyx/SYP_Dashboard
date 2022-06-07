import React, { useEffect, useState } from 'react'
import Scores from './Scores'
import MDetails from './MDetails'
import View from './View'

function CountryStats(props) {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [imgLink, setImgLink] = useState('');
    const [detailsLink, setDetailsLink] = useState([]);
    const [lat, setLat] = useState([46.9171876]);
    const [long, setLong] = useState([17.8951832]);
    
     useEffect(() => {
       if(props.link){

         const fetchApi = async () => {
           const res = await fetch(props.link);
           const resJSON = await res.json();
           const arr = await resJSON._links["ua:scores"];
           const imgLink = await resJSON._links["ua:images"];
           const detailsLink = await resJSON._links["ua:details"];
           
           setData(arr);
           setDetailsLink(detailsLink);
           setImgLink(imgLink);
          };
          fetchApi();
        }
    }, [])
      props.func(imgLink);
    //console.log(data);
  return (
    <div className='w-full bg-bg-darker'>
        <div className='w-full'>
        <Scores link={data.href} />
        </div>
        <div className='w-full'>
          <MDetails link={detailsLink.href} />
        </div>
        <div>
          <View lat={46.9171876} long={17.8951832} />
        </div>
        </div>
  )
}

export default CountryStats