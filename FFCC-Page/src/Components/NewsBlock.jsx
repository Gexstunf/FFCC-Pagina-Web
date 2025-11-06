import react from "react"
import {SmallNews} from "./SmallNews.jsx";
import {Line} from "./LineComponent.jsx";

export const NewsBlock = ({
                              onShowPopup
                          }) => {
    
    const styleBorder = {
        borderBottom: "1px solid lightgray",
    }
    
    const notaEco = {
        date: "Buenos Aires, 1978\n",
        notaText: "Se acelera la apertura económica: empresas públicas bajo revisión\n",
        notaTitle: "\n" +
            "Buenos Aires, 1978\n" +
            "En el marco del nuevo programa económico impulsado por el Ministerio de Economía, fuentes oficiales confirmaron que diversas empresas estatales, entre ellas Aerolíneas Argentinas, Yacimientos Petrolíferos Fiscales y Ferrocarriles Argentinos, se encuentran bajo un proceso de revisión y posible apertura al capital privado.\n" +
            "El propósito declarado de estas medidas es reducir el gasto público, limitar la intervención estatal en la economía y favorecer la libre competencia dentro de un contexto internacional en el que las principales potencias, lideradas por Estados Unidos y el Reino Unido, adoptan políticas de liberalización económica.\n" +
            "Un vocero del Palacio de Hacienda señaló que “la Argentina debe adaptarse a las reglas del mercado mundial para alcanzar eficiencia, competitividad y estabilidad monetaria”. Estas declaraciones reflejan la orientación del actual modelo, inspirado en los principios del neoliberalismo económico, que busca reemplazar el control estatal por el dinamismo del sector privado.\n" +
            "Desde el inicio del Proceso de Reorganización Nacional, el gobierno ha avanzado en la desregulación de mercados, la reducción de subsidios y la apertura a las importaciones. Estas políticas, impulsadas por el ministro José Alfredo Martínez de Hoz, procuran combatir la inflación a través de la contención monetaria y la disciplina fiscal.\n" +
            "Los resultados inmediatos han sido dispares: mientras los grandes grupos financieros y exportadores celebran la modernización y la mayor libertad comercial, sectores industriales locales acusan un impacto negativo por la entrada masiva de productos extranjeros, lo que ha derivado en cierres de fábricas y pérdida de empleos.\n" +
            "En el plano internacional, organismos como el Fondo Monetario Internacional han expresado su apoyo al rumbo adoptado, destacando la necesidad de “integrar a la Argentina en la economía global bajo las normas de mercado”.\n" +
            "Los sindicatos de Luz y Fuerza, La Fraternidad y los trabajadores de ENTEL manifestaron su preocupación por las posibles consecuencias sociales de la privatización. Temen despidos masivos, pérdida de derechos laborales y una eventual reducción de servicios públicos, especialmente en las regiones del interior.\n" +
            "Por su parte, los grupos empresariales y financieros celebraron la decisión, calificándola como “un paso necesario hacia la eficiencia y la modernización de la economía nacional”. Destacan que el Estado debe limitarse a garantizar reglas claras, estabilidad monetaria y protección a la inversión privada.\n" +
            "El nuevo modelo económico ha comenzado a reconfigurar el territorio nacional. Mientras Buenos Aires y los principales centros urbanos concentran la actividad económica y financiera, las provincias menos industrializadas enfrentan una creciente marginalidad. El cierre de fábricas, la retracción del empleo público y la centralización de inversiones acentúan las diferencias regionales, marcando una nueva etapa en la organización del espacio argentino.\n" +
            "Aunque las autoridades insisten en que la apertura permitirá “construir una economía moderna, estable y competitiva”, economistas advierten sobre el endeudamiento externo y la desindustrialización que podrían derivarse de esta orientación.\n" +
            "La Argentina se encuentra, así, ante una encrucijada histórica: el tránsito desde un Estado interventor hacia un mercado libre que promete progreso, pero también impone sacrificios. Mientras tanto, la sociedad observa expectante, entre la esperanza de estabilidad y el temor a que la modernización deje atrás a quienes menos tienen.\n"
    }
    
    const notaChoque = {
        date: "Buenos Aires, 1978\n",
        notaText: "El choque que deja paralizada a la Argentina moderna\n",
        notaTitle: "El día de la fecha, un lamentable accidente ha dejado consternados a todos los vecinos de nuestra joven Nación, especialmente a los distinguidos señores propietarios y directivos del Ferrocarril del Oeste de Buenos Aires. Esta línea, orgullo del progreso argentino, fue la primera en tender sus rieles sobre nuestra vasta llanura, uniendo el interior con la Capital y abriendo camino al comercio, la civilización y la riqueza.\n" +
            "El siniestro tuvo lugar durante la tarde, cuando la histórica locomotora “La Porteña”, primera de su tipo en arribar desde Inglaterra, descarriló de manera repentina, causando graves daños materiales y dejando suspendido el tránsito de mercancías hacia el puerto. Lo que podría parecer un simple accidente técnico ha tenido, sin embargo, profundas repercusiones para la economía nacional, pues los vagones transportaban cosechas y carnes destinadas a la exportación, pilares fundamentales de nuestra prosperidad actual.\n" +
            "Para comprender la gravedad del hecho, es menester recordar el lugar que ocupa hoy nuestra patria dentro del concierto mundial. Desde hace algunos años, la República Argentina ha encontrado su senda de progreso bajo el llamado Modelo Agroexportador, por el cual nuestras tierras fértiles proveen de trigo, maíz y carne a las grandes potencias industriales de Europa. Mientras ellos fabrican los productos manufacturados que importamos, nosotros ofrecemos los frutos de nuestro suelo, en un intercambio que ha permitido la entrada de capitales, el desarrollo del ferrocarril y el crecimiento de nuestras ciudades.\n" +
            "El ferrocarril ha sido el instrumento más poderoso de esta transformación. Financiado en gran parte por capitales británicos, entre ellos la renombrada empresa The Railway Foundry Leeds, ha extendido sus rieles a lo largo y ancho del territorio, conectando estancias, pueblos y puertos. Cada nueva estación que se erige en el interior representa una puerta abierta al comercio exterior y al progreso.\n" +
            " Por ello, la interrupción de su servicio, aun por unas horas, significa un golpe al corazón del sistema productivo nacional. Miles de toneladas de granos y cueros aguardan su traslado, y los productores temen que los retrasos afecten las ganancias y comprometan los acuerdos con los comerciantes ingleses.\n" +
            "El desarrollo del campo argentino ha sido posible gracias a la labor incansable de los trabajadores rurales, muchos de ellos inmigrantes europeos llegados en busca de un porvenir mejor. Mientras los grandes propietarios y la oligarquía terrateniente dominan las extensas estancias, son estos hombres quienes siembran, cosechan y trasladan los productos que hoy dan nombre a la Argentina como “el granero del mundo”.\n" +
            " El Estado, bajo una conducción activa y previsora, ha promovido la inmigración y la expansión territorial, extendiendo la red ferroviaria hasta los confines más lejanos de la Pampa. Sin embargo, los beneficios no alcanzan a todos por igual: los trabajadores continúan recibiendo salarios modestos, y las decisiones económicas recaen en manos de unos pocos.\n" +
            "El accidente de hoy no es tan solo un hecho fortuito; es un recordatorio de la fragilidad del sistema que sostiene nuestra riqueza. Dependemos del buen funcionamiento de los rieles, de los capitales extranjeros y de la estabilidad de los mercados europeos. Si uno de estos elementos falla, toda la maquinaria puede detenerse.\n" +
            " Que este suceso sirva, pues, como lección: el progreso no debe depender únicamente de la fortuna o del favor de las potencias, sino de nuestra propia capacidad para producir, administrar y prever.\n" +
            "Así, mientras los ingenieros trabajan arduamente en reparar los daños y devolver “La Porteña” a su cauce, la Nación observa expectante, consciente de que en aquellos rieles no sólo viaja el fruto del trabajo argentino, sino también el destino de nuestra modernidad.\n"
    }
    
    return (
        <div className={"w-49 flex column height relative"}>
            <div className={"width h-50 flex row"}>
                <Block
                    onShowPopup={onShowPopup}
                    title={"Trabajadores en huelga"}
                    txt={"Protesta de solidaridad entre trabajadores, termina con fuertes amenazas y 2 muertos"}
                    imgsrc={"https://serajusticia.ar/wp-content/uploads/2021/01/Manifestacion-del-6-de-diciembre-de-1961-en-solidaridad-con-los-obreros-ferroviarios-despedidos.jpg"}
                />
                <Block 
                    onShowPopup={onShowPopup}
                    title={`"En tu naríz!"`}
                    txt={"Trump hace burla de Mickey Mouse, resaltando que no apoyará la creación de la Mouskeherramienta"}
                    right={true} 
                    imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjsLM_zEywDI0oOxz3YjUVpA8MB5LJ3LaKOyXTz7FCmOd2WS09PYt_v4XzHNbxNPbRx8&usqp=CAU"}
                />
            </div>
            <Line classes={"absolute abs-actual-middle"} height={"0.5px"}/>
            <div className={"width h-50 flex row"}>
                <Block
                    title={"Empresas públicas bajo revisión"}
                    txt={"Nuevo programa económico impulsado por el Ministerio de Economía, fuentes oficiales confirmaron que diversas empresas estatales estan en revisión."}
                    notaData={notaEco}
                    onShowPopup={onShowPopup}
                />
                <Block 
                    notaData={notaChoque}
                    title={"El choque que deja paralizada a la Argentina moderna\n"}
                    txt={"El día de la fecha, un lamentable accidente ha dejado consternados a todos los vecinos de nuestra joven Nación"}
                    onShowPopup={onShowPopup}
                    right={true}
                />
            </div>
        </div>
    )
}

export const Block = ({
    notaData = {
        date: "",
        notaText: "",
        notaTitle: "",
    },
    onShowPopup,
    right = false,
    title = "Cayo en cana papanuel",
    txt = "Testigos dicen que se estaba choreando los regalos enfrente de los niños",
    imgsrc = "https://media.minutouno.com/p/a4b9cb3dbcd88a1c88acee30bacbc2e1/adjuntos/150/imagenes/025/808/0025808103/610x0/smart/papa-noel-preso.png"
}) => {
    return (
        <div className={`height w-50 flex ${right? "justify-right" : ""}`}>
            <SmallNews onShowPopup={onShowPopup} imgsrc={imgsrc} text={txt} title={title} 
                       notaTitle={notaData.notaTitle} notaText={notaData.notaText} notaDate={notaData.date}/>
        </div>
    )
}