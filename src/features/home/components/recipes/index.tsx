import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import type {
  FreshRecipeListingType,
  LatestRecipeListingType
} from "@/toolkits/types/home";

function Recipes({
  latestRecipes,
  freshRecipes
}: {
  freshRecipes: FreshRecipeListingType[];
  latestRecipes: LatestRecipeListingType[];
}) {
  return (
    <>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12} md={9}>
          <Box mb={4}>
            <Typography variant="h5" fontWeight={800}>
              Latest recipes
            </Typography>
          </Box>
          {latestRecipes.map((items, index) => (
            <Grid key={index} item xs={12} mb={2}>
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
                  <Image
                    src={items.image}
                    alt="about"
                    height={400}
                    width={300}
                  />
                </Box>
                <Box px={2} pb={2}>
                  <Typography fontWeight={600} variant="body2">
                    {items.name}
                  </Typography>
                </Box>
                <Box px={2} pb={2}>
                  <Typography fontWeight={600} variant="body2">
                    {items.recipes}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={3}>
          <Box mb={4}>
            <Typography variant="h5" fontWeight={800}>
              Fresh Recipes
            </Typography>
          </Box>
          <Grid container justifyContent="space-between" spacing={2}>
            {freshRecipes.map((items, index) => (
              <Grid key={index} item xs={12}>
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
                    <Image
                      src={items.image}
                      alt="about"
                      height={200}
                      width={300}
                    />
                  </Box>
                  <Box px={2} pb={2}>
                    <Typography fontWeight={600} variant="body2">
                      {items.name}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Recipes;
