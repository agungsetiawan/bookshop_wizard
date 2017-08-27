import React from 'react'

class Confirmation extends React.Component {
  handleSubmit(event){
    event.preventDefault()
    this.props.updateFormData(this.props.data)
  }

  render(){
    return (
      <div>
        <h2>Konfirmasi Pemesanan</h2>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <b>Nama</b> : {this.props.data.name}
          </div>
          <div className="form-group">
            <b>Alamat</b> : {this.props.data.address}
          </div>
          <div className="form-group">
            <b>Nomor Telepon</b> : {this.props.data.phone}
          </div>
          <div className="form-group">
            <b>Buku yang dipesan</b> : {this.props.data.selectedBooks.join(", ")}
          </div>
          <div className="form-group">
            <b>Tipe Pengiriman</b> : {this.props.data.selectedDelivery}
          </div>

          <input type='submit' className='btn btn-default' />
        </form>
      </div>
    )
  }
}

export default Confirmation
