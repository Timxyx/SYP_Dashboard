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
    
    //console.log(data);
  return (
    <div>
        {data.map((item)=>{
            return(
                <div key={item.name}>
                    <div className='grid grid-cols-12 items-center mb-1'>
                        <span className='col-span-3 text-right pr-1 text-white'>{item.name}</span>
                        <span className='col-span-9'>
                        <ProgressBar bgcolor={item.color} completed={Math.floor(item.score_out_of_10*10)} />
                        </span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Scores