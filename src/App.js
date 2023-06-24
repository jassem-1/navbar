import AssetsSection from "./components/assets/AssetsSection";
import Navbar from "./components/navbar/navbar";
import Forex from "./components/forex";
import User from "./components/user";
import TradeProf from "./components/tradeProf";
import TradingSteps from "./components/tradingSteps";


import MarketNews from "./components/marketnews";
import ReasonsComponent from "./components/reasons";
import Assistance from "./components/assistance";
import AdditionalInfo from "./components/additionalInfos";




function App() {
  return (
    <div>
    <Navbar/>
    <Forex/>
    <AssetsSection/>
    <User/>
    <TradeProf/>
    <TradingSteps/>
    <ReasonsComponent/>
    <MarketNews/>
    <Assistance/>
    <AdditionalInfo/>
    
   
    
    
    </div>
    
  

    
  );
}

export default App;
