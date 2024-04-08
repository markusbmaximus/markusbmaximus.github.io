import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DefaultValues from "../../defaultValues.json";

const cardImgStyle = () => {
  return {
    width: "100%",
    height: "15vw",
    "object-fit": "cover",
  };
};
const GameInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4>The Games...</h4>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Adventurers
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/adventurers.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /adventurers
              </Card.Title>
              <Card.Text>
                Collect treasures and gold over the course of 5 days and compete
                to bring back the most money to camp. But keep an eye out of
                idols and watch out for hazards!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Battle Boats
            </Card.Header>
            {
              //<Card.Img variant="top" style={cardImgStyle()} src="/img/adventurers.png" />
            }
            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /boats
              </Card.Title>
              <Card.Text>
                C2 (<i>HIT!</i>) that all enemy fleets are sunk B4 (<i>MISS!</i>
                ) your team’s ships are destroyed to claim victory!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Codebreaker
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/codebreaker.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /codebreaker
              </Card.Title>
              <Card.Text>
                Can you crack the code before everyone else?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Dice Dare
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/dice.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /dice
              </Card.Title>
              <Card.Text>
                Roll the dice and race to 100, but don’t get too greedy or you
                may roll a skull!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Hangman
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/hangman.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /hangman
              </Card.Title>
              <Card.Text>Play a classic game of hangman!</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Higher or Lower
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/higherlower.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /higherlower
              </Card.Title>
              <Card.Text>
                Guess the randomly selected number given a range and pay close
                attention to the clues given! Guess incorrectly based on a
                previously given clue and earn a strike. Three strikes and
                you’re out!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Math Race
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/mathrace.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /dice
              </Card.Title>
              <Card.Text>
                Race to the math equation and be the fastest to answer!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Memory
            </Card.Header>
            {/* <Card.Img
                variant="top"
                style={cardImgStyle()}
                src="/img/dice.png"
              />*/}
            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /memory
              </Card.Title>
              <Card.Text>
                How good is your memory? A board is shown for 3 seconds. You
                must try repeat the image before your time runs out.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Red Light, Green Light
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/rlgl.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /rlgl
              </Card.Title>
              <Card.Text>
                Red light. Blue light. Select the correct light in the
                designated time to move on, but you’ll have to act fast! You
                don’t want to be &quot;Too slow! 💀&quot;.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Rock, Paper, Scissors, Lizard, Spock
            </Card.Header>
            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/rpsls.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /rpsls
              </Card.Title>
              <Card.Text>
                A twist on the classic game of rock, paper, scissors. Can you
                defeat your opponents and claim victory?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Shootout
            </Card.Header>
            {/*
              <Card.Img
                variant="top"
                style={cardImgStyle()}
                src="/img/dice.png"
              />
            */}
            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /shootout
              </Card.Title>
              <Card.Text>
                Test your reflexes and be the first to shoot your opponent to
                move on and claim victory. Careful, don’t shoot prematurely or
                you will be met with a disadvantage.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Two Up
            </Card.Header>

            <Card.Img
              variant="top"
              style={cardImgStyle()}
              src="/img/twoup.png"
            />

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /twoup
              </Card.Title>
              <Card.Text>
                Heads or tails? Take a guess at what the outcome will be and try
                to be the last player standing!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header as="h5" className="bg-primary text-light">
              Werewolf
            </Card.Header>
            {/*
              <Card.Img
                variant="top"
                style={cardImgStyle()}
                src="/img/dice.png"
        />*/}

            <Card.Body>
              <Card.Title as="small">
                <strong>Usage:</strong> /ww
              </Card.Title>
              <Card.Text>
                A game of detective where you have to sniff out the wolves. Be
                careful of who you trust.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" href={DefaultValues.InviteLink}>
                Invite Larry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GameInfo;
