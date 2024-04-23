import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Link from "next/link";

import type { CollectionListingType } from "@/toolkits/types/home";

function Collection({ collection }: { collection: CollectionListingType[] }) {
  return (
    <>
      <Box mb={4}>
        <Typography variant="h5" fontWeight={800}>
          Curated Collections
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {collection.map((items, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Link href="/recipe">
              <Paper elevation={0} sx={{ height: "100%" }}>
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
                <Box px={2} pb={2}>
                  <Button variant="outlined" color="secondary">
                    {items.recipes} Recipes
                  </Button>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Collection;
