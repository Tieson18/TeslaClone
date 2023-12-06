import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: []
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.cars = action.payload
        },
    }
})

export const { setCar } = carSlice.actions
export default carSlice.reducer
