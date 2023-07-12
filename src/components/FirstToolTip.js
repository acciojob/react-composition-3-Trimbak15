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
        <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showTooltip && (
            <div >
              <h2  className="tooltiptext">{text}</h2>
            </div>
          )}
          {children}
          
        </div>
      );
}

export default FirstToolTip;
