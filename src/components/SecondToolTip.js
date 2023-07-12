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
            {isHover && (
                <div className="tooltiptext">
                    <p>{text}</p>
                </div>
            )}
            {children}
        </div>
    )
}

export default SecondToolTip;