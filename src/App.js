import React, {useState, useEffect} from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import StockFrame from "./StockFrame"
import {stockData} from "./stockdata"
import "./App.css"

export default function App(){

  const stocks = ["AAPL", "TSLA", "MMM"]


  const sandbox = {
    token: "Tpk_7c7ac42249ea4ef5ae1664d89176b0c1",
    api: "sandbox.iexapis.com/"
  }

  const live = {
    token: "pk_ee2bf833c68549a29adeadc486e495e0",
    api:  "cloud.iexapis.com/"
  }

  useEffect(() => {

  }, [])


  const mappedData = stockData.map(item => <StockFrame key={item.companyName} data={item}/>)
  
  

  return (
    <>
    <Header />
    <div className="main">
      <Navbar />
      <div className="app">
        <h1 className="component-title">This is the app component</h1>
        <div className="stockdata-grid">
          {mappedData}
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}