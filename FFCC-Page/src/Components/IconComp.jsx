import React from "react";

export const Icon = ({
    imgSrc = ""
                     }) => {
    const style = {
        height: "50%"
    }

    return (
        <img alt={"L"} src={imgSrc} style={style} className={"flex items-center justify-center icon"}>
        </img>
    )
}