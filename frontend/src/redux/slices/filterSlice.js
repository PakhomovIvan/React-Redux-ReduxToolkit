import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },

    resetFilters: () => {
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

// export const selectFilters = (state) => state.filters // Для всех фильтров, приводит к ререндерингу всех компонентов, где используется.

export default filterSlice.reducer
