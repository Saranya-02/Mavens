import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

async function loginUser(credentials) {
  return fetch('localhost:8080/doctor/docdetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 const theme = createTheme();

export default function Doctormaster() {
  const [serial_number, setserial_number] = useState();
  const [doctorname, setdoctorname] = useState();
  const [speciality, setspeciality] = useState();
  const [workspace, setworkspace] = useState();
  const [area, setarea] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [status, setstatus] = useState();
  const [street_name, setstreet_name] = useState();
  const [pincode, setpincode] = useState();  


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      serial_number,
      doctorname,
      speciality,
      workspace,
      area,
      city,
      state,
      status,
      street_name,
      pincode
    });
    window.location.href = '/pop'
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LocalHospitalIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Doctor Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="serialid"
                  type="number"
                  required
                  fullWidth
                  id="serial_number"
                  label="Serial Id"
                  autoFocus
                  onChange={e => setserial_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="doctorname"
                  label="Doctor Name"
                  name="doctorname"
                  onChange={e => setdoctorname(e.target.value)}
                />
                 </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="workspace"
                  label="Work Space"
                  name="workspace"
                  onChange={e => setworkspace(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="speciality"
                  label="Speciality"
                  type="text"
                  id="speciality"
                  onChange={e => setspeciality(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "text"
                  id="status"
                  label="status"
                  name="status"
                  onChange={e => setstatus(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "text"
                  id="area"
                  label="Area"
                  name="area"
                  onChange={e => setarea(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "text"
                  id="street_name"
                  label="street name"
                  name="street name"
                  onChange={e => setstreet_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                  onChange={e => setcity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  maxlength="6"
                  id="pincode"
                  label="Pin Code"
                  name="pincode"
                  onChange={e => setpincode(e.target.value)}
                />
              </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "text"
                  id="state"
                  label="State"
                  name="state"
                  onChange={e => setstate(e.target.value)}
                />
              </Grid>
             </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}