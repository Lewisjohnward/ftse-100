import React from "react"
import "./StockFrame.css"

export default function StockFrame(props){

    //const dayChange = (props.data.currentPrice/props.data.dayStartPrice).toFixed(2)

    //if dayChange is > 0 then background color is green

    //extremely light green is a more positive lighter red is more negative black is 0


    const style = props.priceChange > 0 ? "green" : "red"
    const hide = props.sharePrice ? "block" : "none"

    return (
        <div 
            className= "stock-frame" 
            style={{backgroundColor: style, display: hide}}
            >
            <h2>{props.companyName}</h2>
            <p className="text-center">Current price: {props.sharePrice}</p>
            <p>day change: {props.priceChange}</p>
            <p>day change: {props.percentageChange}</p>
        </div>
    )
}