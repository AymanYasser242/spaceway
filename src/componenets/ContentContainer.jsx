import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


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
      <Footer />
    </Box>
  );
};
export default ContentContainer;
