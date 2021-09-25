import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import countries from "./lib/countries";
import axios from "axios";

function Register() {
  const theme = createTheme();

  const [givenName, setGivenName] = useState("");
  const [midlleName, setMidlleName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("particulier");
  const [phonePrefixe, setPhonePrefixe] = useState("FR");
  const [phoneLastNumbers, setPhoneLastNumbers] = useState("");
  const [company, setCompany] = useState("");
  const [activityArea, setActivityArea] = useState("");
  const [profession, setProfession] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleGivenName = (e) => setGivenName(e.target.value);
  const handleMidlleName = (e) => setMidlleName(e.target.value);
  const handleFamilyName = (e) => setFamilyName(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handlePhonePrefixe = (e) => setPhonePrefixe(e.target.value);
  const handlePhoneLastNumbers = (e) => setPhoneLastNumbers(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleActivityArea = (e) => setActivityArea(e.target.value);
  const handleProfession = (e) => setProfession(e.target.value);
  const handleNewsletter = (e) => setNewsletter(e.target.checked);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://boiling-river-63404.herokuapp.com/dash/auth/register", {
        givenName,
        midlleName,
        familyName,
        gender,
        password,
        email,
        type,
        phonePrefixe,
        phoneLastNumbers,
        company,
        activityArea,
        profession,
        newsletter,
      })
      .then((res) => {
        console.log(res);
        console.log(res.headers.get("set-cookie"));
        console.log(document.cookie);
      })
      .catch((err) => console.log(err));
  };

  const listCountries = countries.map((country) => (
    <MenuItem value={country.code} key={country.code}>
      <Box
        component="img"
        marginRight={1}
        loading="lazy"
        width="20"
        src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
        alt=""
      />{" "}
      {country.dial_code}
    </MenuItem>
  ));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="gname"
                  name="givenName"
                  required
                  fullWidth
                  id="givenName"
                  label="Given Name"
                  autoFocus
                  value={givenName}
                  onChange={handleGivenName}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="mname"
                  name="midlleName"
                  fullWidth
                  id="midlleName"
                  label="Middle Name"
                  autoFocus
                  value={midlleName}
                  onChange={handleMidlleName}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  fullWidth
                  id="familyName"
                  label="Family Name"
                  name="familyName"
                  autoComplete="fname"
                  value={familyName}
                  onChange={handleFamilyName}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend" required>
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  required
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    id="male"
                    onChange={handleGender}
                    checked={gender === "male"}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    id="female"
                    onChange={handleGender}
                    checked={gender === "female"}
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend" required>
                  Phone Number
                </FormLabel>
                <Grid container spacing={1}>
                  <Grid item xs={4} sm={2}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={phonePrefixe}
                      onChange={handlePhonePrefixe}
                      required
                    >
                      {listCountries}
                    </Select>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      autoComplete="phoneLastNumbers"
                      name="phoneLastNumbers"
                      required
                      fullWidth
                      id="phoneLastNumbers"
                      autoFocus
                      value={phoneLastNumbers}
                      onChange={handlePhoneLastNumbers}
                      type="number"
                    />
                  </Grid>
                </Grid>
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
                  onChange={handlePassword}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="company"
                  value={company}
                  onChange={handleCompany}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="activityArea"
                  label="Activity Area"
                  name="activityArea"
                  autoComplete="activityArea"
                  value={activityArea}
                  onChange={handleActivityArea}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="profession"
                  label="profession"
                  name="company"
                  autoComplete="profession"
                  value={profession}
                  onChange={handleProfession}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  value={newsletter}
                  onChange={handleNewsletter}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              on
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
