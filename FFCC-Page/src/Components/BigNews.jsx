import react from "react"
import App from "../App.jsx";
export const BigNews = ({
                            onShowPopup
                        }) => {
    
    const imgStyle = {
        objectFit: "fill",
    }
    
    const letterStyle = {
        color: "#d80026"
    }
    
    const margin = {
        marginTop: "20px",
    }
    
    const handleClick = () => {
        onShowPopup(
            "Incidente en el Ferrocarril San Martín reaviva el debate sobre la industria nacional\n",
            "Un desperfecto mecánico ocurrido en la mañana de hoy en una locomotora del Ferrocarril General San Martín, en las inmediaciones de la estación Retiro, causó demoras en el transporte de mercancías y generó preocupación entre los comerciantes porteños, quienes aguardaban con impaciencia la llegada de productos destinados al abastecimiento de la ciudad.\n" +
            "El suceso, aunque de carácter menor, ha reavivado un antiguo debate en la esfera económica y política nacional: el de nuestra dependencia del comercio exterior y la urgente necesidad de consolidar una industria argentina fuerte y autosuficiente.\n" +
            "Tras los difíciles años de la crisis del ’29 y la reciente Segunda Guerra Mundial, el intercambio internacional se ha visto profundamente alterado. Las importaciones, otrora abundantes, se tornaron escasas y costosas, lo que obligó a las naciones latinoamericanas a mirar hacia adentro y promover la producción nacional.\n" +
            "En este marco, el actual gobierno ha reafirmado su compromiso con el modelo de Industrialización por Sustitución de Importaciones. A través de aranceles protectores, créditos accesibles, subsidios estatales y la nacionalización de sectores estratégicos, se busca fortalecer la industria local y reducir la dependencia de los bienes manufacturados extranjeros.\n" +
            "Una fuente oficial declaró esta tarde:\n" +
            "“La Argentina debe fabricar lo que consume. No podemos continuar sujetos a los vaivenes del comercio internacional ni a la voluntad de las potencias industriales.”\n" +
            "El Estado nacional ocupa hoy un lugar central en esta nueva etapa económica. No sólo planifica la producción y regula el comercio, sino que invierte en infraestructura, transporte y energía, pilares fundamentales para el desarrollo fabril.\n" +
            " Asimismo, la clase obrera urbana ha cobrado un protagonismo inédito: los sindicatos se organizan con fuerza, se amplían los derechos laborales y los trabajadores industriales se convierten en el motor de esta nueva Argentina productiva.\n" +
            "Por otra parte, los empresarios industriales locales celebran el impulso estatal, que les permite expandir sus talleres y fábricas bajo la protección de un mercado interno cada vez más vigoroso. Sin embargo, no todos se muestran conformes: los sectores agroexportadores y las élites tradicionales, antaño dominantes durante el modelo agroexportador, observan con recelo la pérdida de privilegios y la creciente intervención estatal en la economía.\n" +
            "El avance industrial ha traído consigo una mayor generación de empleo y consumo, pero también presiones inflacionarias que inquietan a algunos economistas y comerciantes. A pesar de ello, las autoridades sostienen que tales dificultades son propias de un proceso de transformación estructural y que el rumbo elegido es el correcto.\n" +
            "Mientras los técnicos del Ferrocarril General San Martín trabajan en reparar el desperfecto que interrumpió el servicio, la discusión trasciende las vías del tren: ¿puede la Argentina sostener su crecimiento sin depender del extranjero?\n" +
            "La respuesta, según la visión oficial, es clara:\n" +
            "“Sólo una nación que produce lo que necesita puede ser verdaderamente libre.”\n" +
            "Con la mirada puesta en el porvenir, el país continúa avanzando por los rieles de la industria, convencido de que en sus fábricas, talleres y obreros reside el futuro de una Argentina moderna, soberana e industrializada.\n",
            "Buenos Aires, 1946\n"
        );
    }
    
    return (
        <div className={"w-49 height pointer"} onClick={handleClick}>
            <img 
                style={imgStyle}
                src={"https://tn.com.ar/resizer/v2/tren-antiguo-CVD3LGVU25FR7GT6G4FIJNFKFY.jpeg?auth=dbe8fa31a2b6c7056c536d5fe1387568f43be8b7eabc10185815f96b9da49163&width=1440"} 
                className={"h-60 width"} 
                alt={"hola"}
            />
            <div style={margin} className={"h-50 flex column font-responsive-medium-huge font-title font-header"}>
                <span style={letterStyle} className={"m-0"}>Incidente en el Ferrocarril y debate</span>
                <p className={"m-0 font-bold"}>
                    En el Ferrocarril San Martin, hubo un desperfecto mecánico registrado esta mañana en una locomotora del Ferrocarril generó demoras y preocupación entre comerciantes que esperaban mercancías importadas para abastecer sus negocios.
                </p>
            </div>
        </div>
    )
}