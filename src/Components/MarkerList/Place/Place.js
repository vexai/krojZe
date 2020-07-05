import React, {useState, useEffect, useRef} from "react";
import PlaceStyle from "./PlaceStyle.scss"



const Place = ({title,imageUrl, description,id, onClick}) => {
  const [hover, setHover] = useState(false);

  return (
      <div onMouseEnter={()=>setHover(true)}
           onMouseLeave={()=>setHover(false)}
      style={hover ? {cursor: 'pointer'} : null}
           onClick={()=>onClick(id)}
      >
        <img style={{width: '200px'}} src={imageUrl} />
        <div className="place__title-desc">
        <div>{title}</div>
        <div>{description}</div>
        </div>
      </div>
  )
}

export default Place;
