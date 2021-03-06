import React, { useEffect, useState } from "react";


const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const [prog, setProg] = useState(0);
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  let fillerStyles = {
    height: '100%',
    width: `${prog}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',

  }
  

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  useEffect(() => {
    setProg(completed)
  }, [])
  
  

  return (
    <div className="" style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
