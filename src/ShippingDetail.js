import React from 'react'

class ShippingDetail extends React.Component {
  constructor(){
    super()
    this.state = {name: '', address: '', phone: '', error: false}
  }

  handleChange(event, attribute){
    const newState = this.state
    newState[attribute] = event.target.value
    this.setState(newState)
  }

  validate(){
    if (this.state.name === '') {
      this.setState({error: 'Nama harus diisi'})
      return false
    } else if (this.state.address === '') {
      this.setState({error: 'Alamat harus diisi'})
      return false
    } else if (this.state.phone === '') {
      this.setState({error: 'Nomor telepon harus diisi'})
      return false
    } else {
      return true
    }
  }

  renderError(){
    if (this.state.error){
      return (
        <div className='alert alert-danger'>
          {this.state.error}
        </div>
      )
    }
  }

  handleSubmit(event){
    event.preventDefault()

    if (this.validate()) {
      const formData = {
        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone
      }
      this.props.updateFormData(formData)
    }
  }

  render() {
    return (
      <div>
        <h2>Masukkan alamat tujuan</h2>

        { this.renderError() }

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Nama</label>
            <input value={this.state.name} onChange={ (e) => this.handleChange(e, 'name')} className="form-control" type="text" />
          </div>

          <div className="form-group">
            <label>Alamat</label>
            <input value={this.state.address} onChange={ (e) => this.handleChange(e, 'address')} className="form-control" type="text" />
          </div>

          <div className="form-group">
            <label>Nomor Telepon</label>
            <input value={this.state.phone} onChange={ (e) => this.handleChange(e, 'phone')} className="form-control" type="text" />
          </div>

          <input className="btn btn-default" type="submit" />
        </form>
      </div>
    )
  }
}

export default ShippingDetail
