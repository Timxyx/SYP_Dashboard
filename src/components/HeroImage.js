import React, { useState, useEffect } from 'react'

function HeroImage(props) {
    const [link, setLink] = useState(null);

    const iFrameStyles = {
        "background-image": `url(${link})`,
        width: '100vw',
        height: '100%',
        "background-position": "center",
    }
   

 useEffect(() => {
    const fetchApi = async () => {
    const res = await fetch(props.link.href);
    const resJSON = await res.json();
    setLink(resJSON.photos[0].image.web);
      };


    props.link && fetchApi();
    
  }, [props.link])
  console.log("this is a link: ", link);

  return (
    <div className='z-10 w-full absolute' style={iFrameStyles}>
        {/*link && <iframe style={iFrameStyles} className='' alt="City Picture" src={`${link}`} />*/ }
    </div>
  )
}

export default HeroImage