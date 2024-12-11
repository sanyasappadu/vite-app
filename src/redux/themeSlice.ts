import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  value: string
}

const initialState: ThemeState = {
  value: "system",
}

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<string>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { themeChange } = themeSlice.actions

export default themeSlice.reducer