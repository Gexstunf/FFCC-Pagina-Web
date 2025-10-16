import React from "react";
import {Icon} from "./IconComp.jsx";

export const NeckOptions = () => {

    const style = {
        height: "5%",
    }

    const itemStyle = {
        marginLeft: "0.5rem"
    }
    
    const marginStyle = {
        marginLeft: "1rem",
    }

    const topics = [
        "último Momento",
        "Economia",
        "Rural",
        "Sociedad",
        "Mundo",
        "Deportes",
        "Espectáculos",
        "Juegos",
        "Dólar",
        "Nación"
    ];
    
    return (
        <div style={style} className={"width flex justify-center"}>
            <div className={"w-content height flex align-center"}>
                <Icon imgSrc={"/public/group.svg"}/>
                <div style={marginStyle} className={"flex row"}>
                    {topics.map((text, i) => (
                        <div style={itemStyle} key={i} className="item font-responsive-small font-bold">{text.toUpperCase()}</div>
                    ))}
                </div>
            </div> 
        </div>
    )
}

export const CatalogueOptions = ({
    
                                 }) => {
    
    const style = {
        backgroundColor: "#F5F5F5",
        height: "7.5%"
    }
    
    return (
        <div className={"width"} style={style}>
            <div className={"w-content height flex align-center"}>
                
            </div>
        </div>
    )
}