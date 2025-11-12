import React from "react";

export const HeadOptions = () => {
    
    const style = {
        height: "5vh"
    }
    
    const scrollStyle = {
        marginRight: "0.5rem"
    }

    const topics = [
        "Dólar hoy",
        "Javier Milei",
        "Elecciones 2025",
        "Israel-Hamas",
        "Aeroparque",
        "Explosión Palermo",
        "Horóscopo Hoy",
        "Argentina vs Colombia",
        "IDEA",
        "Mar del Plata",
        "Cayo en cana",
        "Papanuel",
    ];
    
    return (
        <div style={style} className={"flex justify-center"}>
            <div className={"w-content flex row justify-between relative properties"}>
                <p style={scrollStyle} className={"font-bold font-responsive-small flex align-center"}>Noticias hoy</p>
                <div className="scroll-container w-70">
                    {topics.map((text, i) => (
                        <div key={i} className="item font-responsive-small">{text}</div>
                    ))}
                </div>
                <p className={"font-responsive-small flex absolute abs-right abs-middle"}>Miércoles, 15 de Octubre de 1946</p>
            </div>
        </div>
    )
}