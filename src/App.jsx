import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import ContentContainer from "./componenets/ContentContainer";
import Content from "./componenets/Content";
import Travel from "./componenets/travel/Travel";
import Educational from "./componenets/educational/educational";
import Reserve from "./componenets/Reserve";

function App() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
      className="main-container"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentContainer />}>
            <Route index element={<Content />} />
            <Route path="travel" element={<Travel />} />
            <Route path="eductional/:planet" element={<Educational />} />
            <Route path="reserve" element={<Reserve />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
