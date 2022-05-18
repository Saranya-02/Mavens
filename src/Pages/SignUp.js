import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

async function loginUser(credentials) {
  return fetch('localhost:8080/login/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
const theme = createTheme();

export default function SignUp() {

  const [serial_number, setserial_number] = useState();
  const [email, setemail] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [password, setpassword] = useState();
  const [username, setusername] = useState();
  const [higher_institutename, sethigher_institutename] = useState();
  const [higher_percentage, sethigher_percentage] = useState();
  const [college_name, setcollege_name] = useState();
  const [college_percentage, setcollege_percentage] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [languageknown, setlanguageknown] = useState();
  const [date_of_birth, setdate_of_birth] = useState();
  const [city, setcity] = useState();
  const [pincode, setpincode] = useState();
  const [street, setstreet] = useState();
  const [door_number, setdoor_number] = useState();
  const [area, setarea] = useState();
  const [state, setstate] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      serial_number,
      email,
      firstname,
      lastname,
      password,
      username,
      higher_institutename,
      higher_percentage,
      college_name,
      college_percentage,
      phonenumber,
      languageknown,
      date_of_birth,
      city,
      pincode,
      street,
      door_number,
      area,
      state
    });
    alert("The data has been submitted");
    window.location.href = '/'
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  onChange={e => setfirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={e => setlastname(e.target.value)}
                />
                 </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  onChange={e => setusername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={e => setpassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e => setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  name="Higher education institute name"
                  required
                  fullWidth
                  id="higher_institutename"
                  label="Higher education institute"
                  autoFocus
                  onChange={e => sethigher_institutename(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="higher_percentage"
                  label="percentage"
                  name="h percentage"
                  onChange={e => sethigher_percentage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  name="College name"
                  required
                  fullWidth
                  id="college_name"
                  label="College name"
                  autoFocus
                  onChange={e => setcollege_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="college_percentage"
                  label="percentage"
                  name="c percentage"
                  onChange={e => setcollege_percentage(e.target.value)}
                />
              </Grid>
            {/* <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "number"
                  id="experience"
                  label="Experience"
                  name="experience"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "text"
                  id="skills"
                  label="Skills"
                  name="skills"
                />
              </Grid> */}
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "text"
                  id="languageknown"
                  label="Languages Known"
                  name="languages"
                  onChange={e => setlanguageknown(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "date"
                  id="date_of_birth"
                  label=".........................Date Of Birth"
                  name="dob"
                  onChange={e => setdate_of_birth(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type="number"
                  maxlength="6"
                  id="door_number"
                  label="door number"
                  name="door"
                  onChange={e => setdoor_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "textarea"
                  id="street"
                  label="Street Name"
                  name="street"
                  onChange={e => setstreet(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "textarea"
                  id="area"
                  label="Area"
                  name="area"
                  onChange={e => setarea(e.target.value)}
                />
              </Grid><Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "textarea"
                  id="city"
                  label="city"
                  name="city"
                  onChange={e => setcity(e.target.value)}
                />
              </Grid><Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type = "textarea"
                  id="state"
                  label="state"
                  name="state"
                  onChange={e => setstate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type="number"
                  maxlength="6"
                  id="pincode"
                  label="pincode"
                  name="pincode"
                  onChange={e => setpincode(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type = "tel"
                  id="phonenumber"
                  label="Phone Number"
                  name="phonenum"
                  onChange={e => setphonenumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  type="number"
                  id="serial_number"
                  label="Serial Number"
                  name="serialnum"
                  onChange={e => setserial_number(e.target.value)}
                />
              </Grid>
             </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
