import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import DefaultValues from "../../defaultValues.json";

const MainContent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h5 id="conditions">Conditions</h5>
          <p>
            General conditions regarding <strong>Larry Games</strong>:
          </p>
          <ul>
            <li>
              Our terms and conditions apply to each and every user of{" "}
              <strong>Larry Games</strong>.
            </li>
            <li>
              By inviting <strong>Larry Games</strong> to your server, you agree
              to these terms of service and the future terms which we may add
              after a notice.
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {" "}
          <h5 id="terms">Terms of Use</h5>
          <ol>
            <li>
              Intentional command spam or attempts to crash the bot should not
              be made.
            </li>
            <li>
              <strong>Larry Games</strong> should not be used in bot spam
              servers which cause command spam.
            </li>
            <li>
              The <strong>Larry Games</strong> team reserves the rights to
              prohibit any server or user from using{" "}
              <strong>Larry Games</strong>.
            </li>
            <li>
              The <strong>Larry Games</strong> team have the rights to update
              terms of service anytime with a notice in the support server
              (Larry's Lab).
            </li>
          </ol>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5 id="privacy">Privacy Policy</h5>
          <p>
            The use of this application ("Bot") in a server requires the
            collection of some specific user data ("Data"). The Data collected
            includes, but is not limited to Discord user ID values. Use of the
            Bot is considered an agreement to the terms of this Policy.
          </p>
          <h6>Access to Data</h6>
          <p>
            Access to Data is only permitted to Bot's developers, and only in
            the scope required for the development, testing, and implementation
            of features for Bot. Data is not sold, provided to, or shared with
            any third party, except where required by law or a Terms of Service
            agreement.
          </p>
          <h6>Data Storage</h6>
          <p>
            Data is stored in an Oracle Autonomous database. The database is
            secured to prevent external access, however no guarantee is provided
            and the Bot owners assume no liability for the unintentional or
            malicious breach of Data. In the event of an unauthorised Data
            access, users will be notified through the Discord client
            application.
          </p>
          <h6>User Rights</h6>
          <p>
            At any time, you have the right to request to view the Data
            pertaining to your Discord account. You may submit a request through
            the Larry Games support server. You have the right to request the
            removal of relevant Data.
          </p>
          <h6>Underage Users</h6>
          <p>
            The use of the Bot is not permitted for minors under the age of 13,
            or under the age of legal consent for their country. This is in
            compliance with the{" "}
            <a href="https://discord.com/terms">Discord Terms of Service</a>. No
            information will be knowingly stored from an underage user. If it is
            found out that a user is underage we will take all necessary action
            to delete the stored data.
          </p>
          <h6>Questions</h6>
          <p>
            If you have any questions or are concerned about what data might be
            being stored from your account, ask in the{" "}
            <a href={DefaultValues.InviteLink}>Larry Games support server</a>.
            For more information check the{" "}
            <a href="https://discord.com/terms">Discord Terms of Service</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
