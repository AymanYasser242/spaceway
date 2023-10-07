import { Container, Navbar, Nav } from "react-bootstrap";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  //////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const handleBrandClick = () => {
    navigate("/");
  };
  ///////////////////////////////

  return (
    <Navbar
      className="mainNav"
      expand="md"
      variant="dark"
      color="#fff"
      fixed="top"
    >
      <Container>
        <Navbar.Brand onClick={handleBrandClick}>
          <Box
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.5rem",
                lg: "1.6rem",
                xl: "1.7rem",
              },
            }}
          >
            <h3>SpaceWay</h3>
          </Box>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul className="nav-manu-list">
              <li>
                <a href="/#travel">Travel</a>
              </li>
              <li>
                <a href="/#explore">Explore</a>
              </li>
              <li>
                <Link to="/reserve">Book</Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
