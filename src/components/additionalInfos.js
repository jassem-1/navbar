
import './additionalInfos.css'; 
function AdditionalInfo() {
  return (
    <div className="additional-info">
      <div className="navbarInfos">
        <ul>
          <li><a href="#">User Agreement</a></li>
          <li><a href="#">Website Terms</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies Agreement</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Anti Money Laundering Policy</a></li>
          <li><a href="#">KYC Policy</a></li>
        </ul>
      </div>
      <p className="hover-text-Infos">
        Risk Warning | Withdrawal: Withdrawal request will be processed quickly,
         and funds will be deposited into your bank account immediately. 
         Please keep in mind that financial products involve a high level of risk,
          and you may lose your entire principal. Margin trading may not be suitable for all investors,
           please ensure that you fully understand the risks involved. Before using our services, please read carefully
            our risk warnings, terms and conditions.
             Traders do not own the underlying assets and related rights and interests of the transaction.
      </p>
      <p className='scndText'>
        MTFE does not provide any advice, advice or opinion on the purchase,
         holding or sale of our trading products. 
         All products we offer are OTC derivatives based on global assets.
          All services provided by MTFE are based solely on the execution of trading orders.
      </p>
      <p className='thrdText'>
        MTFE Group is registered in 500-7030 WOODBINE AVE MARKHAM ON L3R 6G2 MTFE (METAVERSE FOREIGN EXCHANGE GROUP INC).
         companies provide services in accordance with local regulations and have their own licenses and licenses to operate services.
          MTFE is regulated by the Canadian FINTRAC - Money services business. Authorized Regulatory Authority (MSB). (No.: M22076570) 
          provides corresponding financial services to professional and institutional clients.
        The information on this website is not directed to residents of the United States,
         Belgium, Iran and North Korea; the information on this website is not intended for use by anyone in any
          country or jurisdiction where publication or use would violate local laws or regulations.
      </p>
    </div>
  );
};

export default AdditionalInfo;
