
import "./tradingSteps.css";


function TradingSteps() {
  return (
    <div className="steps">
      <h1>Start Trading in 3 simple Steps</h1>
      <div className="step-container">
        <div className="step">
          <span className="step-number">1</span>
          <div className="sayings">
          <span className="step-text">Sign In</span>
          <p>Register an account with phone number/ e-mail

          </p></div>
          
          
        </div>
        <span className="arrow">{'>'}</span>
        <div className="step">
          <span className="step-number">2</span>
          <div className="sayings">
          <span className="step-text">Register</span>
          <p>Download the app to sign in or directly on the web trading interface</p>
          </div>
          
        </div>
        <span className="arrow">{'>'}</span>
        <div className="step">
          <span className="step-number">3</span>
          <div className="sayings">
          <span className="step-text">Investment</span>
          <p>Select the trending trading products to seize profit opportunities

          </p></div>
          
        </div>
      </div>
      <div className="center-container">
        <button className="start-trading-btn">
        <div className="button-text-container">
            <span className="button-text">Start Trading Now</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TradingSteps;
