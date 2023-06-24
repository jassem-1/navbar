import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBolt,
  faChartLine,
  faShieldAlt,
  faClock,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import "./reasons.css";

function ReasonsComponent() {
  return (
    <div className="reasons-container">
      <h2 className="reasons-title">6 Reasons to Open an Account</h2>
      <div className="reasons-row">
        <div className="reason">
          <FontAwesomeIcon icon={faPhone} className="reason-icon" />
          <p>Multilingual 24x7 Professional Online Support</p>
        </div>
        <div className="reason">
          <FontAwesomeIcon icon={faBolt} className="reason-icon" />
          <p>Ultra fast, convenient fund withdrawal process</p>
        </div>
        <div className="reason">
          <FontAwesomeIcon icon={faChartLine} className="reason-icon" />
          <p>Unlimited virtual funds for demo account</p>
        </div>
        <div className="reason">
          <FontAwesomeIcon icon={faShieldAlt} className="reason-icon" />
          <p>Recognized by all over the globe</p>
        </div>
        <div className="reason">
          <FontAwesomeIcon icon={faClock} className="reason-icon" />
          <p>Real time Quotation Notification</p>
        </div>
        <div className="reason">
          <FontAwesomeIcon icon={faBullseye} className="reason-icon" />
          <p>Professional Market Analysis</p>
        </div>
      </div>
    </div>
  );
}

export default ReasonsComponent;
