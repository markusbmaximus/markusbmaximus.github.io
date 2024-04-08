import GameInfo from "../GameInfo/GameInfo";
import MainContent from "../MainContent/MainContent";
import MainNav from "../Nav/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Container>
        <Row>
          <Col>
            <h4>What is Larry Games?</h4>
          </Col>
        </Row>

        <Row>
          <Col>
            Host game nights easily with Larry Games, a group game bot with
            various unique games! Regular updates and improvements are being
            made.
          </Col>
          <Col>
            Need extra help? Join our{" "}
            <a href="https://discord.gg/r9WZ4ywbEx">support server</a>.
          </Col>
        </Row>
      </Container>
      <hr />
      <GameInfo />
      <hr />
      <MainContent />
    </div>
  );
}

export default App;
