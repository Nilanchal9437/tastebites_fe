"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import store from "@/store";
import theme from "@/theme";

import Layout from "@/layout/components";
import Loader from "@/components/Loader";
import CustomSnackbar from "@/components/SnackBar";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
        <CssBaseline />
        <Loader />
        <CustomSnackbar />
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
