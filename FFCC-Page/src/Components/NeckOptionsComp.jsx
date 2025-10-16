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
                        <div style={itemStyle} key={i} className="item font-responsive-small font-bold underline">{text.toUpperCase()}</div>
                    ))}
                </div>
            </div> 
        </div>
    )
}

export const CatalogueOptions = ({
    isNews = false,
    color = "#F5F5F5"
}) => {
    
    const style = {
        backgroundColor: color,
        height: "7.5%"
    }
    
    const liveStyle = {
        width: "5vw",
    }
    
    return (
        <div className={"width flex justify-center"} style={style}>
            <div className={"w-content height flex align-center"}>
                {isNews ? <DevelopingNew/> : <Options/>}
            </div>
        </div>
    )
}

const Options = ({}) => {
    
    const liveStyle = {
        width: "5vw",
    }
    
    const topics = [
        "Javier Milei y sus medidas",
        "Argentina vs Colombia",
        "Elecciones 2025",
        "Israel-Hamas",
        "Dólar hoy"
    ];
    
    return (
        <>
            <div style={liveStyle} className={"flex row"}>
                <span className={"detail-logo flex align-center"}></span>
                <p className={"font-bold"}>En Vivo</p>
            </div>
            {topics.map((text, i) => (
                <CatalogueOpt key={i} txt={text} />
            ))}
        </>
    )
}

const DevelopingNew = ({}) => {
    
    const style = {
        fontSize: "2.4vh",
        color: "white"
    }
    return (
        <div className={"flex column height"}>
            <p style={style} className={"font-responsive-medium-big"}>Aerolineas argentina retira 8 aviones para revisar fallas!</p>
            <p>En desarollo</p>
        </div>
    )
}

const CatalogueOpt = ({ txt = "" }) => {
    
    const pStyle = {
        color: "grey",
        textAlign: "center",
    }
    
    const style = {
        paddingLeft: "1vw",
        paddingRight: "1vw",
        borderLeft: "1px solid lightgrey",
    }
    
    return (
        <div style={style} className={"h-40 flex align-center justify-center pointer"}>
            <p style={pStyle} className={"font-title font-bold width"}>{txt}</p>
        </div>
    )
}