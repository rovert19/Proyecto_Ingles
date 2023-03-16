import { Carousel } from "react-bootstrap";
import "./Review.css";
import { Custom } from "./Custom";
export const Review = () => {
  return (
    
    <Carousel indicators={false} interval={null} className="carousel-container">
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100 customx">
          <Custom
            className="text-center"
            title="First slide"
            description="This is the description for the first slide."
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100 customx">
          <Custom
            className="text-center"
            title="Second slide"
            description="This is the description for the first slide."
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100 customx">
          <Custom
            className="text-center"
            title="Third slide"
            description="This is the description for the first slide."
            alt="First slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
