import react from "react"

export const BigNews = () => {
    
    const imgStyle = {
        objectFit: "fill",
    }
    
    const letterStyle = {
        color: "#d80026"
    }
    
    const margin = {
        marginTop: "20px",
    }
    
    return (
        <div className={"w-49 height"}>
            <img 
                style={imgStyle}
                src={"https://media.minutouno.com/p/a4b9cb3dbcd88a1c88acee30bacbc2e1/adjuntos/150/imagenes/025/808/0025808103/610x0/smart/papa-noel-preso.png"} 
                className={"h-50 width"} 
                alt={"hola"}
            />
            <div style={margin} className={"h-50 flex column font-responsive-medium-huge font-title font-header"}>
                <span style={letterStyle} className={"m-0"}>Cayo en cana papanuel</span>
                <p className={"m-0 font-bold"}>Testigos dicen que se estaba clavando un pedazo de fazo enfrente de los niños y ofrecia drogas psicoactivas</p>
            </div>
        </div>
    )
}