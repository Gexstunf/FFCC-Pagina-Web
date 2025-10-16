import react from "react"

export const NewsBlock = () => {
    
    const styleBorder = {
        borderBottom: "1px solid lightgray",
    }
    return (
        <div className={"w-49 flex column height"}>
            <div style={styleBorder} className={"width h-50 flex row"}>
                <Block/>
                <Block/>
            </div>
            
            <div className={"width h-50 flex row"}>
                <Block/>
                <Block/>
            </div>
        </div>
    )
}

export const Block = () => {
    return (
        <div className={"height w-50"}>
            
        </div>
    )
}