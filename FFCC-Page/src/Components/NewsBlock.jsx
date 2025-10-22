import react from "react"
import {SmallNews} from "./SmallNews.jsx";
import {Line} from "./LineComponent.jsx";

export const NewsBlock = () => {
    
    const styleBorder = {
        borderBottom: "1px solid lightgray",
    }
    return (
        <div className={"w-49 flex column height relative"}>
            <div className={"width h-50 flex row"}>
                <Block
                    title={"Trabajadores en huelga"}
                    txt={"Protesta de solidaridad entre trabajadores, termina con fuertes amenazas y 2 muertos"}
                    imgsrc={"https://serajusticia.ar/wp-content/uploads/2021/01/Manifestacion-del-6-de-diciembre-de-1961-en-solidaridad-con-los-obreros-ferroviarios-despedidos.jpg"}
                />
                <Block 
                    title={`"En tu naríz!"`}
                    txt={"Trump hace burla de Mickey Mouse, resaltando que no apoyará la creación de la Mouskeherramienta"}
                    right={true} 
                    imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjsLM_zEywDI0oOxz3YjUVpA8MB5LJ3LaKOyXTz7FCmOd2WS09PYt_v4XzHNbxNPbRx8&usqp=CAU"}
                />
            </div>
            <Line classes={"absolute abs-actual-middle"} height={"0.5px"}/>
            <div className={"width h-50 flex row"}>
                <Block/>
                <Block 
                    right={true}
                />
            </div>
        </div>
    )
}

export const Block = ({
    right = false,
    title = "Cayo en cana papanuel",
    txt = "Testigos dicen que se estaba clavando un pedazo de fazo enfrente de los niños y ofrecia drogas psicoactivas",
    imgsrc = "https://media.minutouno.com/p/a4b9cb3dbcd88a1c88acee30bacbc2e1/adjuntos/150/imagenes/025/808/0025808103/610x0/smart/papa-noel-preso.png"
}) => {
    return (
        <div className={`height w-50 flex ${right? "justify-right" : ""}`}>
            <SmallNews imgsrc={imgsrc} text={txt} title={title} />
        </div>
    )
}