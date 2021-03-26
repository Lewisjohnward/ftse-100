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

      const nameRegex = /(?<=name:.).*?(?=,)/gi
      const priceRegex = /(?<=price:.)[\w\s.]*(?=,)/gi
      const changeRegex = /(?<=change:.).*/gi

      const companyName = item.content.$t.match(nameRegex).toString() 
      //console.log("name", companyName)

      const sharePrice = item.content.$t.match(priceRegex) ? item.content.$t.match(priceRegex).toString() : null
      //console.log("sharePrice", sharePrice)

      const priceChange = item.content.$t.match(changeRegex) ? item.content.$t.match(changeRegex).toString() : null
      //console.log("price change", priceChange)

      const percentageChange = (Math.abs(priceChange) / sharePrice).toFixed(2)

      return (
        <StockFrame key={companyName}  companyName={companyName} sharePrice={sharePrice} priceChange={priceChange} percentageChange={percentageChange} />
      )
    }):
  'Loading'
  
  return (  
    <>
    <Header />
    <div className="main">
      <Navbar />
      <div className="app">
        <div className="stockdata-grid">
          {mappedData}
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}