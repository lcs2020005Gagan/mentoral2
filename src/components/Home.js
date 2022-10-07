import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import student from "./pic.jpg"
import mentor from "./pic.jpg"
const Home = () => {
  return (
    <div className="home-cards-container">
        <div className="card-one">
        <div className="typer-container">
            <h1 className="typed">For Mentors ! </h1>
        </div>
      <Card className="home-cards col-md-6" style={{ width: "18rem" }}>
        
        <Card.Body>
        <Card.Img variant="top" src={mentor} />
          <Card.Text className="card-text">
            Want to shape the world with your knowledge and skills? Here's everything for you!
          </Card.Text>
          <Button variant="primary" className="home-btn"><span>Continue as a Mentor!</span></Button>
        </Card.Body>
      </Card>
      </div>
      <div className="card-two">
      <div className="typer-container">
            <h1 className="typed">For Students ! </h1>
        </div>
      <Card className="home-cards" style={{ width: "18rem" }}>
        <Card.Body>
        <Card.Img variant="top" src={student} />
          
          <Card.Text className="card-text">
            One stop solution for all your mentorship needs.All top mentors at one place!
          </Card.Text>
          <Button variant="primary" className="home-btn"><span>Continue as a Student!</span></Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};
export default Home;