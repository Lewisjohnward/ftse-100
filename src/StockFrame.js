import React from "react"
import "./StockFrame.css"

export default function StockFrame(props){

    const dayChange = (props.data.currentPrice/props.data.dayStartPrice).toFixed(2)

    //if dayChange is > 0 then background color is green

    const style = dayChange > 0 ? "green" : "red"

    return (
        <div className= "stock-frame" style={{backgroundColor: style}}>
            <h2>{props.data.companyName}</h2>
            <p>Start price: {props.data.dayStartPrice}</p>
            <p>Current price: {props.data.currentPrice}</p>
            <p>day change:{dayChange}</p>
        </div>
    )
}