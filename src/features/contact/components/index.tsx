"use client";

import Image from "next/image";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { Formik } from "formik";

import * as yup from "yup";

import contacticon from "@/features/contact/assets/contact.svg";

const schema = yup.object().shape({
  name: yup.string().trim().required("Please enter a name!"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email!")
    .required("Please enter a email!"),
  phone: yup
    .string()
    .matches(/^[6-9]{1}[0-9]+/, "Invalid mobile number")
    .required("Please enter a phone number!"),
  message: yup.string().trim().required("Please enter a message!")
});

function Contact() {
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
            LEAVE US A MESSAGE
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
              name: "",
              email: "",
              phone: "",
              message: ""
            }}
            onSubmit={() => {}}
            validationSchema={schema}
          >
            {formik => (
              <form onSubmit={formik.handleSubmit}>
                <Box mt={3}>
                  <TextField
                    fullWidth
                    name="name"
                    type="text"
                    variant="filled"
                    size="small"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name ? true : false}
                    helperText={formik.errors.name ? formik.errors.name : ""}
                    placeholder="Name *"
                  />
                </Box>
                <Box mt={formik.errors.email ? 2 : 3}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    variant="filled"
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email ? true : false}
                    helperText={formik.errors.email ? formik.errors.email : ""}
                    placeholder="Email *"
                  />
                </Box>
                <Box mt={formik.errors.phone ? 2 : 3}>
                  <TextField
                    fullWidth
                    name="phone"
                    type="text"
                    variant="filled"
                    size="small"
                    value={formik.values.phone}
                    onChange={event =>
                      formik.setFieldValue(
                        "phone",
                        event.target.value.replace(/[^\d]/g, "")
                      )
                    }
                    onBlur={formik.handleBlur}
                    error={formik.errors.phone ? true : false}
                    helperText={formik.errors.phone ? formik.errors.phone : ""}
                    placeholder="Phone *"
                  />
                </Box>
                <Box mt={formik.errors.message ? 2 : 3}>
                  <TextField
                    fullWidth
                    name="message"
                    type="text"
                    variant="filled"
                    size="small"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.message ? true : false}
                    helperText={
                      formik.errors.message ? formik.errors.message : ""
                    }
                    multiline
                    rows={4}
                    placeholder="Message *"
                  />
                </Box>
                <Box mt={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ width: 150 }}
                    endIcon={<SendOutlinedIcon />}
                  >
                    Submit
                  </Button>
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
        <Image
          src={contacticon.src}
          alt="login icon"
          height={500}
          width={620}
        />
      </Grid>
    </Grid>
  );
}

export default Contact;
