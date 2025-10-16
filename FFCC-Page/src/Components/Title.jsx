import React from "react";
import {Line} from "./LineComponent.jsx";
import {UserButton} from "./ButtonComp.jsx";
import {Icon} from "./IconComp.jsx";

export const Title = () => {
    
    const h1Style = {
        marginLeft: "1vw",
        color: "#d80026"
    }
    
    const contentStyle = {
        height: "100%"
    }
    
    const elementStyle = {
        height: "10vh"
    }
    
    return (
        <div style={elementStyle} className={"flex column align-center justify-center border-detail"}>
            <div style={contentStyle} className={"flex align-center w-content space-between"}>
                <h1 className={"font-responsive-big font-title"} style={h1Style}>EL CARRIL</h1>
                <div className={"w-30 height flex align-center space-between"}>
                    <UserButton color={"#FDDF37"} text={"Suscribite por $6767"}/>
                    <UserButton solid={false} text={"Ingresar"}/>
                    <Icon imgSrc={"https://images.clarin.com/collections/images/5ec55dd7bab5780006be938c.png"}/>
                </div>
            </div>
        </div>
    )
}