import React, {useEffect, useState} from 'react';
import CountryStats from './CountryStats';
import HeroImage from './HeroImage';

// AIzaSyCOCxMa8GnHsSSYSXqB1cBuOla_bjRjMQM


export default function Landing() {
 const [data, setData] = useState([]);
 const [selected, setSelected] = useState({});
 const [chosen , setChosen] = useState('');
 const [imgLink, setImgLink] = useState('');
 const [test, setTest] = useState([]);
 

  useEffect(() => {
    const fetchApi = async () => {
    const res = await fetch("https://api.teleport.org/api/urban_areas/");
    const resJSON = await res.json();
    const arr = await resJSON._links["ua:item"];
    const test = await resJSON._links;
    setTest(test);
    setData(arr);
      };

    fetchApi();
    
  }, [])


  function handleSelect(e){
    //console.log("yoo",e.target.value);
    setChosen(e.target.value);
    setSelected(e.target.value)

  }
  console.log(test);
    const pull_data = (img) => {
    setImgLink(img); // SETS DATA FROM CHILD 
  }
  return (
    <>
    <div className='w-full flex justify-center relative items-center h-64'>
          <HeroImage link={imgLink} />

     <select value={selected} onChange={handleSelect} className="z-20 text-white h-10 mb-20 font-size-3 text-center bg-bg-darker border-2 border-grey-">       
     {data.map((item) =>{
       return(
         <option className='text-black' key={item.name} value={item.href}>{item.name}</option>
         )
        })}
    </select>
        </div>
    <div className='flex flex-col items-center px-96 bg-bg-dark'>
    <div className='w-full'>
      
        {chosen && <CountryStats func={pull_data} key={chosen} link={chosen} />}

    </div>
   
    </div>
    </>
  )
}
