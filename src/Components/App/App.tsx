import GameInfo from "../GameInfo/GameInfo";
import MainContent from "../MainContent/MainContent";
import MainNav from "../Nav/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BotStatus from "../BotStatus/BotStatus";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Container>
        <Row>
          <Col className="text-center">
            <BotStatus />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h4>What is Larry Games?</h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Host game nights easily with Larry Games, a group game bot with
              various unique games! Regular updates and improvements are being
              made.
            </p>
            <p>
              Need extra help? Join our{" "}
              <a href="https://discord.gg/r9WZ4ywbEx">support server</a>.
            </p>
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
