import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h1 className="h1">Our Services</h1>
      <div className="container2">
        <div className="con">
          <ion-icon name="boat-outline" class="icon"></ion-icon>
          <div className="section">
            <h1 className="h1">World Wide Delivery</h1>
            <p className="p">For Order Over $100</p>
          </div>
        </div>
        <div className="con">
          <ion-icon name="rocket-outline" class="icon"></ion-icon>
          <div className="section">
            <h1 className="h1">Next Day Delivery</h1>
            <p className="p">UK Orders only</p>
          </div>
        </div>
        <div className="con">
          <ion-icon name="call-outline" class="icon"></ion-icon>
          <div className="section">
            <h1 className="h1">Best Online Support</h1>
            <p className="p">Hours: 8AM - 11PM</p>
          </div>
        </div>
        <div className="con">
          <ion-icon name="arrow-undo-outline" class="icon"></ion-icon>
          <div className="section">
            <h1 className="h1">Return Policy</h1>
            <p className="p">Easy & Free return</p>
          </div>
        </div>
        <div className="con">
          <ion-icon name="ticket-outline" class="icon"></ion-icon>
          <div className="section">
            <h1 className="h1">30% Money Back</h1>
            <p className="p">For Order Over $100</p>
          </div>
        </div>
        <div className="con"></div>
      </div>
    </div>
  );
};

export default Services;
