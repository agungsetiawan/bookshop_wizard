import React from 'react'

class BookList extends React.Component {
  constructor() {
    super()
    this.state = { books: [
        { title: 'Zero to One', author: 'Peter Thiel'},
        { title: 'Monk who sold his Ferrari', author: 'Robin Sharma'},
        { title: 'Wings of Fire', author: 'A.P.J Abdul Karim'}
      ]
      , selectedBooks: [], error : false
    }
  }

  renderBook(book) {
    return (
      <div className='checkbox'>
        <label>
          <input type='checkbox' value={book.title} onChange={this.handleChange.bind(this)} /> {book.title} -- {book.author}
        </label>
      </div>
    )
  }

  renderError(){
    if (this.state.error) {
      return (
        <div className='alert alert-danger'>
          {this.state.error}
        </div>
      )
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.selectedBooks.length === 0){
      this.setState({error : 'Pilih buku minimal 1'})
    } else {
      this.setState({error : false})
      this.props.updateFormData({selectedBooks: this.state.selectedBooks})
    }
  }

  handleChange(event){
    const selectedBooks = this.state.selectedBooks
    const index = selectedBooks.indexOf(event.target.value)

    if (event.target.checked) {
      if (index === -1) {
        selectedBooks.push(event.target.value)
      }
    } else {
      selectedBooks.splice(index, 1)
    }

    this.setState({selectedBooks : selectedBooks})
  }

  render(){
    return (
      <div>
        <h2>Pilihan buku bermutu tinggi</h2>

        { this.renderError() }

        <form onSubmit={this.handleSubmit.bind(this)}>
          {
            this.state.books.map((book) => {
              return this.renderBook(book)
            })
          }
          <input className='btn btn-default' type='submit'/>
        </form>
      </div>
    )
  }
}

export default BookList
