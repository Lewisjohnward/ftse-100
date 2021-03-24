import React, {useState, useEffect} from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import StockFrame from "./StockFrame"
import "./App.css"

export default function App(){
  const [stockData, setStockData] = useState()

  useEffect(() => {
    fetch('https://spreadsheets.google.com/feeds/list/0AhySzEddwIC1dEtpWF9hQUhCWURZNEViUmpUeVgwdGc/1/public/basic?alt=json')
      .then(response => response.json())
      .then(data => setStockData(data.feed.entry))
  }, [])


  const mappedData = stockData ?
    stockData.map(item => {
      const regex = /[\w\s]*.?\d?/gi
      const dataArray = item.content.$t.match(regex)
      const companyName = ""
      const price = 0
      const change = 0
      return (
        <StockFrame key={dataArray[1]} data={dataArray} />
      )
    }):
  'null'
  
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