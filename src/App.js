import React, {useState, useEffect} from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import StockFrame from "./StockFrame"
import "./App.css"

export default function App(){
  const [stockData, setStockData] = useState([])
  const [mappedStocks, setMappedStocks] = useState()
  const [displayStocks, setDisplayStocks] = useState(false)

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
    for (let i = 0; i < stocks.length; i ++){
      fetch(`https://${sandbox.api}/stable/stock/${stocks[i]}/quote?token=${sandbox.token}&period=annual/`)
        .then(response => response.json())
        .then(data => setStockData(prev => {
          return [
            ...prev, data
          ]
        }))
    }
    setDisplayStocks(true)
    const mappedStocks1 = stockData.map(item => <p key={item}>test</p>)
    setMappedStocks(mappedStocks1)
    console.log("stocks mapped")
  }, [])

  console.log(mappedStocks)



  
  

  return (
    <>
    <Header />
    <div className="main">
      <Navbar />
      <div className="app">
        <h1>This is the app component</h1>
        {displayStocks? {mappedStocks}: "no"}
        <Footer />
      </div>
    </div>
    </>
  )
}