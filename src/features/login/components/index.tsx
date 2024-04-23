"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Formik } from "formik";

import * as yup from "yup";

import { useAppDispatch } from "@/hooks/redux";

import loginIcon from "@/features/login/assets/login.svg";

import login from "@/features/login/apis/login";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email!")
    .required("Please enter a email!"),
  password: yup.string().trim().required("Please enter a password!")
});

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const dispatch = useAppDispatch();
  return (
    <Grid
      container
      justifyContent={{ xs: "center", md: "space-between" }}
      columnSpacing={{ xs: 0, md: 10 }}
      py={5}
    >
      <Grid item xs={11} md={6}>
        <Box sx={{ ml: { xs: 0, md: 8 } }}>
          <Typography variant="h5" fontWeight={900} color="#03337B">
            LOGIN TO YOUR ACCOUNT
          </Typography>
          <Box
            sx={{ width: { xs: "60%", sm: "40%", md: "30%" } }}
            border="3px solid #E50000"
            borderRadius={2}
            my={2}
          />
          <Typography variant="body2" sx={{ width: { xs: "100%", md: "60%" } }}>
            There are many variations of passages of Lorem Ipsu available, but
            the majority have suffered alte.
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={(values, action) => {
              dispatch(
                login({ email: values.email, password: values.password })
              );
            }}
            validationSchema={schema}
          >
            {formik => (
              <form onSubmit={formik.handleSubmit}>
                <Box mt={5}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    variant="filled"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email ? true : false}
                    helperText={formik.errors.email ? formik.errors.email : ""}
                    placeholder="Email *"
                  />
                </Box>
                <Box mt={5}>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    variant="filled"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password ? true : false}
                    helperText={
                      formik.errors.password ? formik.errors.password : ""
                    }
                    placeholder="Password *"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff color="primary" />
                          ) : (
                            <Visibility color="primary" />
                          )}
                        </IconButton>
                      )
                    }}
                  />
                </Box>
                <Box textAlign="end" mt={2}>
                  <Typography color="error">Forgot password?</Typography>
                </Box>
                <Box mt={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ width: 150 }}
                  >
                    Login
                  </Button>
                </Box>
                <Box display="flex" alignItems="center" mt={2} flexWrap="wrap">
                  <Typography>Don’t have an account?</Typography>
                  <Link href="/register">
                    <Button
                      color="primary"
                      sx={{ textTransform: "none", fontWeight: 600 }}
                    >
                      Register now!
                    </Button>
                  </Link>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { md: "grid", xs: "none" },
          justifyContent: "end",
          "& img": { width: { lg: 620, md: 500 }, height: { lg: 500, md: 400 } }
        }}
      >
        <Image src={loginIcon.src} alt="login icon" height={500} width={620} />
      </Grid>
    </Grid>
  );
}

export default Login;
