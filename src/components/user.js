import "./user.css";
function User() {
  return (
    <div class="containerUser">
      <div class="titleUser">Powerful & User-friendly Trading Platform</div>
      <div class="textUser">
        MTFE - 5-star reviewed in App Store that has a simple, intuitive
        interface and excellent trading tools. It is a professional investment
        app integrating account opening, trading, strategy analysis, information
        hub, and investment education. Our official website also has asset price
        trends, news hotspot analysis, video teaching, and web trade, allowing
        investors to view investment quotations, analyze strategies, and place
        orders more intuitively.
      </div>
      <div class="tableUser">
        <div class="columnU">
          <img class="imageU" src="web.png" alt="Image 1" />
          <div class="labelUser">WebTrader</div>
        </div>
        <div class="columnU">
          <img class="imageU" src="apple.png" alt="Image 2" />
          <div class="labelUser">iPhone</div>
        </div>
        <div class="columnU">
          <img class="imageU" src="android.png" alt="Image 3" />
          <div class="labelUser">Android</div>
        </div>
      </div>
    </div>
  );
}

export default User;
