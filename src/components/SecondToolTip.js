import React,{useState} from "react";

const SecondToolTip = ({text, children}) =>{

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () =>{
        setIsHover(true);
    }

    const handleMouseLeave = () =>{
        setIsHover(false);
    }

    return(
        <div className = "tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHover && (
                <div className="tooltiptext">
                    <p className="tooltip">{text}</p>
                </div>
            )}
        </div>
    )
}

export default SecondToolTip;