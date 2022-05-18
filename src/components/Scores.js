import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'

function Scores(props) {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});

    
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(props.link);
            const resJSON = await res.json();
            const arr = await resJSON.categories;
            setData(arr);
        };
        props.link && fetchApi();
    }, [props.link])
    
    console.log(data);
  return (
    <div>
        <div className='w-full'>Scores</div>
        {data.map((item)=>{
            return(
                <div>
                    <div>{item.name}</div>
                    <ProgressBar bgcolor={item.color} completed={Math.floor(item.score_out_of_10*10)} />
                </div>
            )
        })}
    </div>
  )
}

export default Scores