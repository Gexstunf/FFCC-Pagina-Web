import React, { useState } from 'react'
import './App.css'
import  './GlobalCSS/Title.css'
import  './GlobalCSS/RootCSS.css'
import  './GlobalCSS/Anims.css'
import {Title} from "./Components/Title.jsx";
import {MainContent} from "./Components/MainContent.jsx";
import {Line} from "./Components/LineComponent.jsx";
import {Banner} from "./Components/BannerComp.jsx";
import {HeadOptions} from "./Components/HeadOptionsComp.jsx";
import {CatalogueOptions, NeckOptions} from "./Components/NeckOptionsComp.jsx";
import {NotaComp} from "./Components/NotaComp.jsx";

let showNota = false;

function App() {
    const [popupData, setPopupData] = useState(null)

    const openPopup = (title, text) => {
        console.log(title, text);
        setPopupData({ title, text });
    };

    const closePopup = () => {
        if (popupData != null) setPopupData(null);
    };
    
    const rootStyle = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
    }
    
    const marginStyle = {
        marginBottom: "5%",
        width: "100%",
        height: "100%",
    }
    
    const lineStyle = {
        height: '4vh',
    }
    
    return (
        <div style={rootStyle} className={"relative"} onClick={() => closePopup()}>
            <div style={marginStyle}>
                <Banner/>
                <HeadOptions/>
                <Title/>
                <NeckOptions/>
                <CatalogueOptions/>
                <div style={lineStyle} className={"width flex align-end justify-center"}>
                    <Line width={"85%"} height={"1px"} color={"lightgray"} />
                </div>
                <MainContent onShowPopup={openPopup}/>
            </div>
            {popupData != null ? <NotaComp text={popupData.text} title={popupData.title}/> : null}
        </div>
    )
}

export default App
