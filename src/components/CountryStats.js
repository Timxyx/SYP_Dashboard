import React, { useEffect, useState } from 'react'
import Scores from './Scores'
import MDetails from './MDetails'

function CountryStats(props) {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [imgLink, setImgLink] = useState('');
    const [detailsLink, setDetailsLink] = useState([]);
    
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
        </div>
  )
}

export default CountryStats