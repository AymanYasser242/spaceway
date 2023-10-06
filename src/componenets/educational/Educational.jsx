import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const Educational = () => {
  const params = useParams();
  const planet = params.planet
  return (
    <Box
      sx={{
        width: "100%",
      }}
      component={"section"}
      className="educational"
    >
      <Box className="content-container">
        <iframe
          style={{
            width: "100%",
            height: "80vh",
          }}
          src={`https://eyes.nasa.gov/apps/solar-system/#/${planet}`}
        />
      </Box>
    </Box>
  );
};

export default Educational;
