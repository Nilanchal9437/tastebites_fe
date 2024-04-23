// Next.js components
import Link from "next/link";
import Image from "next/image";

// MUI components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import logo from "@/layout/assets/icon.svg";

import routes from "@/layout/components/routes";

function Footer() {
  return (
    <Box bgcolor="#F9F9F9">
      <Grid container justifyContent="center">
        <Grid item xs={11} md={11}>
          <Grid container justifyContent="center" mt={5} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              <Image
                src={logo.src}
                height={100}
                width={200}
                alt="logo taste bityes"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={4}
                sx={{ justifyContent: { xs: "center", md: "end" } }}
              >
                {routes.map(item => (
                  <Link href={item.link} key={item.name}>
                    {item.name}
                  </Link>
                ))} 
                <Link href="#">Article</Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box mt={3}>
                <Divider />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box textAlign="center" my={5}>
                <Typography variant="body2">
                  {new Date().getFullYear()} © Copyright | All Right Reserved
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
