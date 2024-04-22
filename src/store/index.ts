import { configureStore } from "@reduxjs/toolkit"; 
import toolkits from "@/toolkits";

const store = configureStore({
  reducer: toolkits
});

export default store;
