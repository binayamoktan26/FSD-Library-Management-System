import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar";

const UserLayouts = () => {
  return (
    <div>
      {/* navbar  */}

      <Header />

      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">
              <div> Welcome back</div>
              <h4>Binaya Moktan</h4>
              <hr />
              <Sidebar />
            </div>
          </Col>
          <Col md={9} xl={10}>
            {" "}
            {/* main body  */}
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default UserLayouts;
