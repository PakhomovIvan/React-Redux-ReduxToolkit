import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook, thinkFunction } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import createBookWithID from '../../utils/createBookWithID'
import './BookForm.css'

const BookForm = () => {
  // const [formData, setFormData] = useState({})
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithID(randomBook, 'Random')))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, 'Manual')))
      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBookAPI = () => {
    dispatch(thinkFunction)
  }

  // const handleAddRandomBookAPI = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:4000/random-book')
  //     if (res?.data?.title && res?.data?.author) {
  //       dispatch(addBook(createBookWithID(res.data, 'API')))
  //     }
  //   } catch (error) {
  //     console.log('error fetching random book', error)
  //   }
  // }

  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} autoComplete={'off'}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter title:"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            placeholder="Enter author:"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookAPI}>
          Add Random API
        </button>
      </form>
    </div>
  )
}

export default BookForm
