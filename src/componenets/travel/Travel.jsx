import { Box } from "@mui/material";
import TravelCard from "./TravelCard";

const Travel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
      component={"section"}
      className="travel"
      id="travel"
    >
      <Box className="cards-container">
        <h1>
          Exploration <span>Trips</span>
        </h1>
        <Box className="wrapper">
          <TravelCard
            imgSrc="/moon.jpg"
            description="The Moon, Earth's natural satellite, is a celestial body that has fascinated humanity for millennia. its the brightest and most prominent object in Earth's night sky."
            destination="Moon"
            link="moon"
          />
          <TravelCard
            imgSrc="/mars.jpg"
            description="Mars, often referred to as the 'Red Planet' is the fourth planet from the Sun in our solar system. It's characterized by its distinctive reddish appearance, caused by iron oxide (rust) on its surface."
            destination="Mars"
            link="mars"
          />
          <TravelCard
            imgSrc="/saturn.jpg"
            description="Saturn, often described as the 'Ringed Planet' is a magnificent and enigmatic member of our solar system, its  renowned for its stunning and intricate ring system"
            destination="Saturn"
            link="saturn"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Travel;
