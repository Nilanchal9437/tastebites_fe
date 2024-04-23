/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";

// Next.js Components
import Image from "next/image";
import Link from "next/link";

// MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// Images
import logo from "@/layout/assets/icon.svg";

import routes from "@/layout/components/routes";

import nookies, { destroyCookie } from "nookies";

const drawerWidth = 240;

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const [isToken, setIsToken] = React.useState(false);

  React.useEffect(() => {
    if (nookies.get(null)?.tastebites) {
      setIsToken(true);
    }
  }, [JSON.stringify(nookies.get(null).tastebites)]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ mx: "auto" }}>
        <Image src={logo.src} height={50} width={100} alt="logo taste bityes" />
      </Box>
      <Divider />
      <Box height="80vh">
        <List>
          {routes.map(item => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link href={item.link}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {isToken ? (
        <Button
          color="primary"
          sx={{ fontWeight: 600, mt: "auto" }}
          variant="contained"
          onClick={() => {
            destroyCookie(null, "user", { path: "/" });
            destroyCookie(null, "tastebites", { path: "/" });
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button
            color="primary"
            sx={{ fontWeight: 600, mt: "auto" }}
            variant="contained"
          >
            Login / Register
          </Button>
        </Link>
      )}
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" color="inherit">
        <Grid container justifyContent="center" sx={{ my: { xs: 0, md: 2 } }}>
          <Grid xs={11} md={11}>
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  ml: { xs: "auto", md: "none" },
                  flexGrow: { xs: 0, md: 1 }
                }}
              >
                <Image
                  src={logo.src}
                  height={50}
                  width={100}
                  alt="logo taste bityes"
                />
              </Box>
              <Stack
                direction="row"
                columnGap={{ xs: 0, md: 3 }}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {routes.map(item => (
                  <Link key={item.name} href={item.link}>
                    <Button color="primary" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Button>
                  </Link>
                ))}
                {isToken ? (
                  <Button
                    color="primary"
                    sx={{ fontWeight: 600, mt: "auto" }}
                    variant="contained"
                    onClick={() => {
                      destroyCookie(null, "user", { path: "/" });
                      destroyCookie(null, "tastebites", { path: "/" });
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button
                      color="primary"
                      sx={{ fontWeight: 600, mt: "auto" }}
                      variant="contained"
                    >
                      Login / Register
                    </Button>
                  </Link>
                )}
              </Stack>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {mobileOpen ? drawer : ""}
        </Drawer>
      </nav>
    </>
  );
}

export default NavBar;
