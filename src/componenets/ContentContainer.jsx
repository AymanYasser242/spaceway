import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const ContentContainer = () => {
  return (
    <Box
      className="content-container"
      sx={{
        overflowX: "hidden",
      }}
    >
    <Header />
      <Outlet />
    </Box>
  );
};
export default ContentContainer;
