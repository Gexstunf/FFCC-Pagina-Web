import React from "react";
import {Icon} from "./IconComp.jsx";

export const UserButton = ({
    color = "white",
    solid = true,
    text = ""
}) => {
    
    const style = {
        height: "50%",
        width: solid ? "45%" : "35%",
        backgroundColor: color,
        border: solid ? "" : "1px solid grey"
    }
    
    const imgStyle = {
        marginTop: "7.5%",
        marginLeft: "3%",
        height: "50%",
        width: "auto",
        display: "block",
    }

    return (
        <div style={style} className={"br-40 flex items-center justify-center button"}>
            <p className={`font-responsive-medium flex items-center ${solid ? "font-bold" : ""}`}>
                {text}
            </p>
            {!solid ? <img alt={"l"} src={"/public/person.svg"} style={imgStyle}/> : null}
        </div>
    )
}