import { createSlice } from "@reduxjs/toolkit";
import { severityType, SnackBarType } from "@/toolkits/types/universal";
import type { PayloadAction } from "@reduxjs/toolkit";
import type universalType from "@/toolkits/types/universal";

const initialState: universalType = {
  loading: false,
  open: false,
  message: "",
  severity: severityType.success
};

const universal = createSlice({
  name: "universal",
  initialState: initialState,
  reducers: {
    setLoading: (state: universalType, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMessage: (state: universalType, action: PayloadAction<SnackBarType>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = action.payload.open;
    }
  }
});

export const { setLoading, setMessage } = universal.actions;
export default universal.reducer;
