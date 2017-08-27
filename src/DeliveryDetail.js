import React from 'react'

class DeliveryDetail extends React.Component {
  constructor(){
    super()
    this.state = {selectedDelivery: 'Express', deliveryOptions: ['Express', 'Reguler', 'Slow']}
  }

  renderOption(option){
    return (
      <div className='radio'>
        <input type='radio' value={option} checked={this.state.selectedDelivery === option} onChange={this.handleChange.bind(this)}/> {option}
      </div>
    )
  }

  handleChange(event) {
    this.setState({selectedDelivery: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.updateFormData({selectedDelivery: this.state.selectedDelivery})
  }

  render() {
    return (
      <div>
        <h2>Masukkan metode pengiriman di sini</h2>

        <form onSubmit={this.handleSubmit.bind(this)}>
        {
          this.state.deliveryOptions.map((delivery) => {
            return this.renderOption(delivery)
          })
        }

        <input type="submit" className="btn btn-default" />
        </form>
      </div>
    )
  }
}

export default DeliveryDetail
