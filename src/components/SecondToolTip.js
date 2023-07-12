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
        <div className = "tooltiptext" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHover && (
                <div className="tooltip">
                    <p>{text}</p>
                </div>
            )}
            {children}
        </div>
    )
}

export default SecondToolTip;