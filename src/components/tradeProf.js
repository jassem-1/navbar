import "./tradeProf.css";
function TradeProf() {
  return (
    <div className="headerProf" id="home">
      <div className="containerProf">
        <div className="infosProf">
          <h5 className="titleProf">Trade Professional</h5>
          <h6>MTFE - Join together the global financial market</h6>
          <br />
          <ul class="listProf">
            <li class="itemProf">
              <span class="span">
                Millions of virtual fund to practice trading skills
              </span>
            </li>
            <li class="itemProf">
              <span class="span">
                Share trading skills with millions of investors
              </span>
            </li>
            <li class="itemProf">
              <span class="span">
                Practical trading to seize your investment opportunities
              </span>
            </li>
            <li class="itemProf">
              <span class="span">
                Get your trading question solved right away with our 24 hours
                customer representative
              </span>
            </li>
          </ul>
          <br />
          <div className="buttonsProf pt-3">
            <button className="btnProf ">
              more
            </button>
          </div>
        </div>
       
          <div className="imgProf-holder">
            <img src="trade.png" alt="" />
          </div>
       
      </div>
    </div>
  );
}

export default TradeProf;
