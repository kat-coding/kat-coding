import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function BioComponent() {
  return (
    <Container>
      <br></br>
      <Row>
        <Col xs={6}>
          <p className="bio">
            Hi, my name is Katherine Watkins and I'm currently a senior in the
            Software Development BaS program at Green River College. I've worked
            as a full-stack software engineering intern at Paylocity, and am
            currently the lead intern managing a team of 5 interns at Green
            River College. I'm a highly motivated self-learner with a strong
            desire to understand how things work.
          </p>
        </Col>
        <Col>
          <Image
            src="src/assets/images/headshot.jpg"
            fluid
            className="headshot"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BioComponent;
