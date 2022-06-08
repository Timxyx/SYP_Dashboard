import React, {useState, useEffect} from 'react'
import View from './View'

function viewLoader(props) {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});

    
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(props.link);
            const resJSON = await res.json();
            const arr = await resJSON.location.latlon;
            setData(arr);
        };
        props.link && fetchApi();
    }, [props.link])
    
    console.log("location",data.longitude);
  return (
    <div>
        {/*<View lat={61.21806} long={-149.90028} /> crazy location*/}
        {data.latitude && data.longitude && <View lat={data.latitude} long={data.longitude} />}
    </div>
  )
}

export default viewLoader