import React, {useEffect, useState} from 'react';
import CountryStats from './CountryStats';

export default function Landing() {
 const [data, setData] = useState([]);
 const [selected, setSelected] = useState({});
 const [chosen , setChosen] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
    const res = await fetch("https://api.teleport.org/api/urban_areas/");
    const resJSON = await res.json();
    const arr = await resJSON._links["ua:item"];
    setData(arr);
      };


    fetchApi();
    
  }, [])



  function consolelog(){
    data.forEach((item) =>{
      console.log(item.name);

    })
  }
  function handleSelect(e){
    setSelected(e.target.value);
    console.log(e.target.value);
    chosen.push(e.target.value);
  }
  
  return (
    <div className='flex flex-col items-center w-full'>
      Chose one of the urban areas in our database.
     <button onClick={consolelog}>hier</button>
     <select value={selected} onChange={handleSelect}>       
     {data.map((item) =>{
       return(
           <option key={item.name} value={item.href}>{item.name}</option>
         )
     })}
    </select>
    <div>
      {chosen.map((country) =>{
        return(
          <CountryStats key={country} link={country} />
        )
      })}
    </div>
    </div>
  )
}
