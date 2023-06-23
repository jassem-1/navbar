import AssetsSection from "./components/assets/AssetsSection";
import Navbar from "./components/navbar/navbar";
import Forex from "./components/forex";
import User from "./components/user";
import TradeProf from "./components/tradeProf";
import TradingSteps from "./components/tradingSteps";



function App() {
  return (
    <div>
    <Navbar/>
    <Forex/>
    <AssetsSection/>
    <User/>
    <TradeProf/>
    <TradingSteps/>
    </div>
    
  

    
  );
}

export default App;
