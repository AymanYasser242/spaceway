import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Reserve = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentNumber: "",
    email: "",
    parentNumber: "",
    grade: "",
    password: "",
  });

  /*--------------------------------------------------------------------*/
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };
  /*--------------------------------------------------------------------*/
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  /*--------------------------------------------------------------------*/

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="reserve"
    >
      <Grid
        container
        className="form-container"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleFormSubmit}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                xs={12}
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  mt: "1rem",
                  mb: "2rem",
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    width: "100%",
                    fontSize: "1.6rem",
                    fontWeight: "500",
                    textAlign: "center",
                    padding: "0.5rem",
                    color: "#fff",
                  }}
                >
                  <i
                    style={{ padding: "0rem 0.5rem" }}
                    className="fa-solid fa-user-plus"
                  />
                  Book a <span style={{ color: "#0d6efd" }}>Trip</span>
                </Typography>
              </Grid>
              <Grid
                xs={12}
                md={6}
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 2rem",
                }}
              >
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    label={
                      <span>
                        <i
                          style={{ marginLeft: "0.5rem", color: "#0d6efd" }}
                          className="fa-solid fa-user"
                        />
                        Name
                      </span>
                    }
                    size="medium"
                    type="text"
                    id="studentNameInput"
                    name="studentName"
                    placeholder="Enter Name"
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>

              <Grid
                xs={12}
                md={6}
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 2rem",
                }}
              >
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    label={
                      <span>
                        <i
                          style={{ marginLeft: "0.5rem", color: "#0d6efd" }}
                          className="fa-solid fa-phone-flip"
                        />
                        Age
                      </span>
                    }
                    size="medium"
                    type="text"
                    id="studentNumberInput"
                    name="studentNumber"
                    placeholder="Enter Age"
                    required
                    value={formData.studentNumber}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>

              <Grid
                xs={12}
                md={6}
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 1.5rem",
                  
                }}
              >
                <FormControl fullWidth>
                <FormLabel>Choose Examination Date</FormLabel>
                  <TextField
                    variant="standard"
                    sx={{color:"#fff"}}
                    size="medium"
                    type="date"
                    id="parentNumberInput"
                    name="parentNumber"
                    required
                    value={formData.parentNumber}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>

              <Grid
                xs={12}
                md={6}
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 2rem",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel
                    id="grade"
                    sx={{
                      transformOrigin: "top right",
                      left: "auto",
                      right: "2.3rem",
                    }}
                  >
                    <i
                      style={{ marginLeft: "0.5rem", color: "#0d6efd" }}
                      className="fa-solid fa-graduation-cap"
                    />
                    Choose a trip
                  </InputLabel>
                  <Select
                    variant="standard"
                    size="medium"
                    labelId="grade-label"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                  >
                    <MenuItem value={1}>Moon Exploration</MenuItem>
                    <MenuItem value={2}>Mars Exploration</MenuItem>
                    <MenuItem value={3}>Saturn Exploration</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 2rem",
                }}
              >
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    label={
                      <span>
                        <i
                          style={{ marginLeft: "0.5rem", color: "#0d6efd" }}
                          className="fa-solid fa-at"
                        />
                        Email
                      </span>
                    }
                    size="medium"
                    type="email"
                    id="emailInput"
                    name="email"
                    placeholder="example@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Typography variant="p" sx={{
                width:"100%",
                textAlign:"center",
                color:"#fff",
                padding:"0.5rem"

              }}>You will recieve an email containing all details</Typography>

              <Grid item>
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{
                    my: "2rem",
                    color: "#fff",
                    backgroundColor: "#0d6efd",
                    fontSize: "1.15rem",
                    padding: "0.3rem 5rem",
                    borderRadius: "0.8rem",
                    "&:hover": {
                      color: "#0d6efd",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reserve;
