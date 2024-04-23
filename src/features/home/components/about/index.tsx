import Link from "next/link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import type { AboutType } from "@/toolkits/types/home";

function About({ aboutUS, aboutlisting }: AboutType) {
  return (
    <>
      <Grid container justifyContent="space-between" spacing={2}>
        {aboutlisting.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Box
                textAlign="center"
                sx={{
                  "& img": {
                    width: "100%",
                    borderRadius: 1,
                    objectFit: "cover"
                  }
                }}
              >
                <Image src={item.image} alt="about" height={350} width={300} />
              </Box>
              <Box p={2}>
                <Rating value={item.rating} readOnly precision={0.5} />
              </Box>
              <Box px={2} pb={2}>
                <Typography fontWeight={600} variant="body2">
                  {item.name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper sx={{ mt: 10, p: 2 }} elevation={4}>
        <Grid
          container
          justifyContent="space-between"
          spacing={{ xs: 2, md: 4 }}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                "& img": {
                  width: "100%",
                  borderRadius: 1,
                  height: { xs: "100%", md: "100%" }
                }
              }}
            >
              <Image
                src={aboutUS.image}
                alt="about image"
                height={400}
                width={400}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box mt={4}>
              <Typography variant="h4" fontWeight={600}>
                {aboutUS.title}
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body1">{aboutUS.description}</Typography>
            </Box>
            <Box mt={4}>
              <Link href={aboutUS.link}>
                <Button variant="contained">Read More</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default About;
