import { Icon } from "@iconify/react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const TravelCard = ({ imgSrc, description, destination, link }) => {
  return (
    <Card className="travel-card">
      <CardMedia>
        <img src={imgSrc} alt="card-img" />
      </CardMedia>
      <CardContent>
        <Box className="destination">
          <Icon
            icon="solar:rocket-bold-duotone"
            style={{
              color: "#fff",
              width: "35px",
              height: "35px",
            }}
          />
        </Box>
        <Typography component={"h3"} variant="h3">
          {destination}
          <br />
          Exploration
        </Typography>
        <Typography component={"p"} variant="p">
          {description}
        </Typography>
      </CardContent>
      <Link to={`../eductional/${link}`} className="more">
        Explore More
      </Link>
      <Link to="reserve" className="reserve">
      Book a Trip 
      </Link>
    </Card>
  );
};
TravelCard.propTypes = {
  imgSrc: PropTypes.node.isRequired,
  destination: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};
export default TravelCard;
