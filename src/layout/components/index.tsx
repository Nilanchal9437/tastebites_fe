import * as React from "react";

import NavBar from "@/layout/components/navBar";
import Footer from "@/layout/components/footer";
import Box from "@mui/material/Box";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Box component="main" sx={{ mt: { xs: 9, md: 14 } }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
