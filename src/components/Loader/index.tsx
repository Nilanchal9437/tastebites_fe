import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppSelector } from "@/hooks/redux";

function Loader() {
  const universal = useAppSelector(store => store.universal);

  return (
    <>
      <Dialog open={universal.loading}>
        <DialogTitle>
          <CircularProgress color="info" />
        </DialogTitle>
      </Dialog>
    </>
  );
}

export default Loader;
