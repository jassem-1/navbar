import AssetsSection from "./components/assets/AssetsSection";
import Navbar from "./components/navbar/navbar";
import Forex from "./components/forex";
import User from "./components/user";
import TradeProf from "./components/tradeProf";
import TradingSteps from "./components/tradingSteps";
import ReasonsComponent from "./components/reasons";
import Assistance from "./components/assistance";



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
    <Assistance/>
    </div>
    
  

    
  );
}

export default App;
