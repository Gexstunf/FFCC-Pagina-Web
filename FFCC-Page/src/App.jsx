import React, { useState } from 'react'
import './App.css'
import  './GlobalCSS/Title.css'
import  './GlobalCSS/RootCSS.css'
import {Title} from "./Components/Title.jsx";
import {MainContent} from "./Components/MainContent.jsx";
import {Line} from "./Components/LineComponent.jsx";
import {Banner} from "./Components/BannerComp.jsx";
import {HeadOptions} from "./Components/HeadOptionsComp.jsx";
import {CatalogueOptions, NeckOptions} from "./Components/NeckOptionsComp.jsx";

function App() {
    const [count, setCount] = useState(0)
    
    const rootStyle = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
        <div style={rootStyle}>
            <div style={marginStyle}>
                <Banner/>
                <HeadOptions/>
                <Title/>
                <NeckOptions/>
                <CatalogueOptions/>
                <div style={lineStyle} className={"width flex align-end justify-center"}>
                    <Line width={"85%"} height={"1px"} color={"lightgray"} />
                </div>
                <MainContent/>
            </div>
        </div>
    )
}

export default App
