import React from 'react'

class Success extends React.Component {
  render() {
    return (
      <div>
        <h2>Terima kasih sudah berbelanja {this.props.data.name}</h2>

        <div>
          Buku {this.props.data.selectedBooks.join(", ")} yang kamu pesan akan dikirimkan ke alamat {this.props.data.address} dalam beberapa hari.
        </div>
      </div>
    )
  }
}

export default Success
