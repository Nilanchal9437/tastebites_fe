import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";

import { setMessage } from "@/toolkits/universal";
import { severityType } from "@/toolkits/types/universal";

function CustomSnackbar() {
  const dispatch = useAppDispatch();

  const universal = useAppSelector((store) => store.universal);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={universal.open}
      autoHideDuration={5000}
      onClose={() =>
        dispatch(
          setMessage({
            open: false,
            message: "",
            severity: severityType.success,
          })
        )
      }
    >
      <MuiAlert
        onClose={() =>
          dispatch(
            setMessage({
              open: false,
              message: "",
              severity: severityType.success,
            })
          )
        }
        elevation={6}
        variant="filled"
        severity={universal.severity}
      >
        {universal.message}
      </MuiAlert>
    </Snackbar>
  );
}

export default CustomSnackbar;
