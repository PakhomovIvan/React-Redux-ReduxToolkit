import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
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
      // Благодаря immner можно изменять текущее состояние компонента.
      // return { ...state, title: action.payload }
      // Традиционный подход.
    },

    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },

    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author

export default filterSlice.reducer
