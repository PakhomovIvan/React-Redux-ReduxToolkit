import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload

      // return (state = { // или так
      //   title: action.payload,
      // })

      // state.title = action.payload // Благодаря immner можно изменять текущее состояние компонента.
      // return { ...state, title: action.payload } // Традиционный подход.
    },

    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilters } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
