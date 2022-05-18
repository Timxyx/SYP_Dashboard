import React, {useEffect, useState} from 'react';
import CountryStats from './CountryStats';

export default function Landing() {
 const [data, setData] = useState([]);
 const [selected, setSelected] = useState({});
 const [chosen , setChosen] = useState('');
 

  useEffect(() => {
    const fetchApi = async () => {
    const res = await fetch("https://api.teleport.org/api/urban_areas/");
    const resJSON = await res.json();
    const arr = await resJSON._links["ua:item"];
    setData(arr);
      };


    fetchApi();
    
  }, [])


  function handleSelect(e){
    console.log(e.target.value);
    setChosen(e.target.value);
    setSelected(e.target.value)

  }
  //console.log(chosen)
  
  return (
    <div className='flex flex-col items-center px-96'>
      Choose one of the urban areas in our database.
     <select value={selected} onChange={handleSelect}>       
     {data.map((item) =>{
       return(
           <option key={item.name} value={item.href}>{item.name}</option>
         )
     })}
    </select>
    <div className='w-full'>
      
        {chosen && <CountryStats key={chosen} link={chosen} />}

    </div>
    </div>
  )
}
