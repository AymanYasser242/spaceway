import { Box } from "@mui/material";
import TravelCard from "./TravelCard";

const celestialBodies = [
  {
    imgSrc: "/moon.jpg",
    description:
      "The Moon, Earth's natural satellite, is a celestial body that has fascinated humanity for millennia. It's the brightest and prominent object in Earth's sky.",
    destination: "Moon",
    link: "moon",
  },
  {
    imgSrc: "/mars.jpg",
    description:
      "Mars, often referred to as the 'Red Planet,' is the fourth planet from the Sun in our solar system. It's characterized by its distinctive reddish appearance.",
    destination: "Mars",
    link: "mars",
  },
  {
    imgSrc: "/saturn.jpg",
    description:
      "Saturn, often described as the 'Ringed Planet,' is a magnificent and enigmatic member of our solar system, renowned for its stunning and intricate ring system.",
    destination: "Saturn",
    link: "saturn",
  },
];

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
        <Box
          className="wrapper"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
        px:{xs : "1rem" , lg : "5rem" , xl : "8rem"}
          }}
        >
          {celestialBodies.map((body, index) => (
            <TravelCard
              key={index}
              imgSrc={body.imgSrc}
              description={body.description}
              destination={body.destination}
              link={body.link}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Travel;
