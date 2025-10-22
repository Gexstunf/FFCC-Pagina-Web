import React from "react";

export const Line = ({ classes = "", width = "100%", height="2px", color="grey", vertical=false }) => {
    const lineStyle = {
        height: height,
        width: width,
        backgroundColor: color
    }
    
    return (
        <div style={lineStyle} className={classes}>
        </div>
    )
}