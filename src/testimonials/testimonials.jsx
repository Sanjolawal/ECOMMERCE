import "./testimonials.css";
import avatar from "../images/avatar4-min.jpg";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <h1 className="h1">Testimonial</h1>
      <div className="container1">
        <img src={avatar} alt="avatar" className="avatar" />
        <h1 className="h1">SANJO </h1>
        <p className="p">CEO & Founder Invision</p>
        <ion-icon name="cube" class="cube"></ion-icon>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
          amet.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
