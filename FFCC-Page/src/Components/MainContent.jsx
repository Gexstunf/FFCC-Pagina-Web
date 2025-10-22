import React from "react";
import {BigNews} from "./BigNews.jsx";
import {Line} from "./LineComponent.jsx";
import {NewsBlock} from "./NewsBlock.jsx";

export const MainContent = () => {
    
    const style = {
        height: "60vh",
        marginTop: "25px",
    }
    
    return (
        <div style={style} className={"width flex justify-center"}>
            <div className={"w-content flex align-center space-between"}>
                <BigNews/>
                <Line height={"100%"} width={"0.5px"} color={"lightgrey"}/>
                <NewsBlock/>
            </div>
        </div>
    )
}