import { configureStore } from "@reduxjs/toolkit";
// import fetchSubmitMusic from "../slice/SubmitMusicSlice";
// import fetchSubmitArt from "../slice/SubmitArtSlice";
import submitMusicReducer from "../slice/SubmitMusicSlice";
import submitArtReducer from "../slice/SubmitArtSlice";
import joinUsReducer from "../slice/JoinUsSlice";
import yourInfoReducer from "../slice/YourInfoSlice"

export const store = configureStore({
  reducer: {
    submitMusic: submitMusicReducer,
    submitArt: submitArtReducer,
    submitJoinUsSlice: joinUsReducer, 
     submitYourInfo: yourInfoReducer,
  },
});



