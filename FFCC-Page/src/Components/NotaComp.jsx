import React from "react";


export const NotaComp = ({
    text = "",
    title = "",
                         }) => {
    
    const style = {
        backgroundColor: "white",
        border: "solid 1px lightgray",
        borderRadius: "10px",
        left: "25%",
        top: "35vh",
        padding: "20px",
    }
    
    const letterStyle = {
        marginTop: "5vh",
    }
    
    return (
        <div style={style} className={"absolute h-90 w-50 absolute flex column slide-in-Y"}>
            <span className={"font-responsive-medium-huge font-title font-header"}>
                {title}
            </span>
            <p style={letterStyle} className={"font-bold"}>
                {text}
            </p>
        </div>
    )
}