import React, {useState, useEffect, useRef} from "react";



const Place = ({title,imageUrl, description,id, onClick}) => {
  const [hover, setHover] = useState(false);

  return (
      <div onMouseEnter={()=>setHover(true)}
           onMouseLeave={()=>setHover(false)}
           style={hover ? {backgroundColor: '#AAC9FF', cursor: 'pointer'} : null}
           onClick={()=>onClick(id)}
      >
        <img style={{width: '200px'}} src={imageUrl} />
        <div>{title}</div>
        <div>{description}</div>
        <div>{title}</div>
      </div>
  )
}

export default Place;
