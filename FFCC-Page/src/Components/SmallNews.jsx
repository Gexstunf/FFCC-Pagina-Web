import react from "react"

export const SmallNews = ({
    imgsrc="",
    title="",
    text =""
                          }) => {

    const imgStyle = {
        objectFit: "fill",
    }

    const letterStyle = {
        color: "#d80026"
    }

    const textStyle = {
        marginTop: "10px",
        fontSize: "2vh"
    }

    return (
        <div className={"w-95 height pointer"}>
            <img
                style={imgStyle}
                src={imgsrc}
                className={"h-60 width"}
                alt={"hola"}
            />
            <div style={textStyle} className={"h-50 flex column font-r-2vh font-title font-header"}>
                <span style={letterStyle} className={"m-0"}>{title}</span>
                <p className={"m-0 font-bold"}>{text}</p>
            </div>
        </div>
    )
}