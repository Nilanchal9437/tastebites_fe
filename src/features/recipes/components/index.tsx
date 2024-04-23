"use client";

import Image from "next/image";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import banner from "@/features/recipes/assets/banner.svg";

function Recipes() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        <Box
          sx={{
            "& img": {
              width: "100%",
              borderRadius: 1,
              objectFit: "cover",
              height: { xs: 100, sm: 200, md: 300 }
            }
          }}
        >
          <Image height={300} width={300} alt="banner icon" src={banner.src} />
        </Box>
        <Box my={4}>
          <Typography variant="h5" fontWeight={800}>
            Pumpkin marshmallow pie
          </Typography>
        </Box>
        <Box my={4} bgcolor="#F9F9F9" sx={{ p: { xs: 2, md: 4, lg: 6 } }}>
          <Typography variant="h6" fontWeight={600}>
            Recipe
          </Typography>
          <Box mt={3}>
            <Typography variant="subtitle2">
              Here&apos;s a simple recipe for Pumpkin Marshmallow Pie:
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">Ingredients:</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              - 1 9-inch pie crust (pre-made or homemade)
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              - 1 cup canned pumpkin puree
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              - 3/4 cup granulated sugar
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">- 1/2 tsp ground ginger</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">- 1/4 tsp ground nutmeg</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">- 2 large eggs</Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle2">Instructions:</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              1. Preheat your oven to 425°F (220°C).
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              2. Place the pie crust in a 9-inch pie dish and crimp the edges as
              desired.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              3. In a large mixing bowl, combine the pumpkin puree, sugar,
              cinnamon, ginger, nutmeg, and salt. Mix until well
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              4. Beat in the eggs, one at a time, until fully incorporated.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              5. Gradually stir in the evaporated milk until the mixture is
              smooth.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">
              6. Pour the pumpkin mixture into the prepared pie crust.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle2">
              Enjoy your delicious Pumpkin Marshmallow Pie!
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Recipes;
