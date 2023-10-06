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
              width: {
                xs: "9rem",
                sm: "11rem",
                md: "20rem",
              },
            }}
          >
            <h3>SpaceWay</h3>
          </Box>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="nav-manu-list">
              <li><a href="#travel">Travel</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><Link to="/reserve">Book</Link></li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
