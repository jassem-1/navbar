
import './assistance.css'; // Import your component's CSS file

function Assistance (){
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="assis-container">
    <div className='need'>
    <span className="assistance-sentence">Need assistance?</span>
    <button className="support-button">Support</button>
    </div>
     
      <div className="scroll-back-container">
        <button className="scroll-back-button" onClick={scrollToTop}>
          <p className='scroll-back-text'>Scroll Back</p>
          <span className="arrowTop">▲</span>
        </button>
      </div>
    </div>
  );
};

export default Assistance;
