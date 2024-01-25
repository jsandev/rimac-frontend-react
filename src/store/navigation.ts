import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../lib/types";

export interface State {
  currentStep: number;
  user: IUser | null;
}

const initialState: State = {
  currentStep: 0,
  user: null,
} as const;

export const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
    previousStep: (state) => {
      state.currentStep = state.currentStep - 1;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const navigationActions = slice.actions;
export default slice.reducer;
