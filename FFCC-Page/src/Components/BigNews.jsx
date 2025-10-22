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
        <div className={"w-49 height pointer"}>
            <img 
                style={imgStyle}
                src={"https://tn.com.ar/resizer/v2/tren-antiguo-CVD3LGVU25FR7GT6G4FIJNFKFY.jpeg?auth=dbe8fa31a2b6c7056c536d5fe1387568f43be8b7eabc10185815f96b9da49163&width=1440"} 
                className={"h-60 width"} 
                alt={"hola"}
            />
            <div style={margin} className={"h-50 flex column font-responsive-medium-huge font-title font-header"}>
                <span style={letterStyle} className={"m-0"}>Fuerte protesta y violencia</span>
                <p className={"m-0 font-bold"}>Trabajadores afirman que el ferrocarril les esta quitando la posibilidad de entrar en el mercado</p>
            </div>
        </div>
    )
}