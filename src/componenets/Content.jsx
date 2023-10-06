import { Box, Typography, Grid } from "@mui/material";
import Lottie from "lottie-react";
import animation from "../assets/animation2.json";
import arrows from "../assets/arrows.json";
import educational from "../assets/educational.json";
import Travel from "./travel/travel";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
const Content = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  //////////////////////////////////////////////////////////////
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
      }}
      className="content"
    >
      <Box className="hero" data-aos="fade-down">
        <Box className="animation">
          <Lottie
            loop
            animationData={animation}
            style={{ maxWidth: "30rem" }}
          />
        </Box>
        <Box className="slogan">
          <h1>
            <span>S</span>pa<span>c</span>e <span>W</span>ay
          </h1>
          <p>Your GateWay To The Stars</p>
        </Box>
        <Box className="arrows">
          <Lottie loop animationData={arrows} style={{ maxWidth: "20rem" }} />
        </Box>
      </Box>
      <Box className="features">
        <Grid container className="wrapper">
          <h1>Travel</h1>
          <Grid container className="cards-holder">
            <Grid item md={4} className="card" data-aos="slide-right">
              <Typography
                variant="h4"
                component={"h4"}
                sx={{ color: "#004EFF" }}
              >
                Safe
              </Typography>
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/research-pana.png" style={{ maxWidth: "15rem" }} />
              </Box>
            </Grid>
            <Grid item md={4} className="card" data-aos="fade-down">
              <Typography
                variant="h4"
                component={"h4"}
                sx={{ color: "#92E3A9" }}
              >
                Easy
              </Typography>
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/Astronaut-bro.png" style={{ maxWidth: "15rem" }} />
              </Box>
            </Grid>
            <Grid item md={4} className="card" data-aos="slide-left">
              <Typography
                variant="h4"
                component={"h4"}
                sx={{ color: "#FFC727" }}
              >
                Fast
              </Typography>
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/space-cuate.png" style={{ maxWidth: "15rem" }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container className="learn-more" id="explore">
        <Grid item md={6} className="text" data-aos="zoom-in-right">
          <Typography component={"h3"} variant="h3">
            Learn more about <br /> <span>SOLAR SYSTEM</span>🚀
          </Typography>
          <Typography component={"p"} variant="p">
            Experience Earth, our solar system, nearby asteroids, the universe,
            <br />
            and the spacecraft exploring them with immersive
            <br /> real-time 3D web-based apps.
          </Typography>

          <Link className="learn-link" to="../eductional/home">
            Explore Now!
          </Link>
        </Grid>
        <Grid item md={6} data-aos="zoom-in-left">
          <Box className="animation-icon" >
            <Lottie animationData={educational} />
          </Box>
        </Grid>
      </Grid>
      <Travel />
    </Box>
  );
};

export default Content;
