import React from "react"
import "./StockFrame.css"

export default function StockFrame(props){
    console.log(props)
    //const dayChange = (props.data.currentPrice/props.data.dayStartPrice).toFixed(2)

    //if dayChange is > 0 then background color is green

    const style = props.data[6] > 0 ? "green" : "red"

    return (
        <div 
            className= "stock-frame" 
            style={{backgroundColor: style}}
            >
            <h2>{props.data[1]}</h2>
            <p>Current price: {props.data[3]}</p>
            <p>day change:{props.data[6]}</p>
        </div>
    )
}