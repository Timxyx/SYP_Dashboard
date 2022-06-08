import React, { useEffect, useState } from 'react'
import Scores from './Scores'
import MDetails from './MDetails'
import ViewLoader from './ViewLoader'

function CountryStats(props) {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [imgLink, setImgLink] = useState('');
    const [detailsLink, setDetailsLink] = useState([]);
    const [locationLink, setLocationLink] = useState([]);
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
           const latLongLink = await resJSON._links["ua:identifying-city"];
           console.log("json",resJSON);
           setLocationLink(latLongLink);
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
        <div className='bg-bg-dark w-full'>
          <ViewLoader link={locationLink.href}/>
        </div>
        </div>
  )
}

export default CountryStats