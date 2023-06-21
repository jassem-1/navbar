
import './forex1.css';
function Forex() {
    return (
<div className="header" id="home">
  <div className="container1">
    <div className="infos">
      <h6 className="title">Trade Forex, commodities, indices, stocks and even more popular financial products on MTFE</h6>
      <div className="buttons pt-3">
        <button className="btn1 btn1-primary rounded blue-button">start trading now</button>
        <button className="btn1 btn1-dark rounded transparent-button">free training account</button>
      </div>
    </div>
    <div className="img-wrapper">
      <div className="img-holder">
        <img src="screen1.png" alt="" />
        <img src="screen3.png" alt="Second Picture" className="overlay-image" />
      </div>
    </div>
  </div>
</div>
);
}

export default Forex;
