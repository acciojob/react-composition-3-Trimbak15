import React, {useState} from "react";

const FirstToolTip = ({text, children}) => {

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () =>{
        setShowTooltip(true);
        console.log("used");
    }

    const handleMouseLeave = () =>{
        setShowTooltip(false);
    }

    return ( 
        <div className="tooltiptext" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showTooltip && (
            <div >
              <h2  className="tooltip">{text}</h2>
            </div>
          )}
          {children}
          
        </div>
      );
}

export default FirstToolTip;
