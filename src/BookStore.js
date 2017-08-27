import React from 'react'
import BookList from './BookList'
import ShippingDetail from './ShippingDetail'
import DeliveryDetail from './DeliveryDetail'
import Confirmation from './Confirmation'
import Success from './Success'

class BookStore extends React.Component {
  constructor() {
    super()
    this.state = {currentStep : 1, formData: {}}
  }

  updateFormData(formData){
    const newFormData = Object.assign({}, this.state.formData, formData)
    const nextStep = this.state.currentStep + 1
    this.setState({formData : newFormData, currentStep : nextStep})
  }

  render() {
    switch (this.state.currentStep) {
      case 1:
        return <BookList updateFormData={this.updateFormData.bind(this)} />
      case 2:
        return <ShippingDetail updateFormData={this.updateFormData.bind(this)} />
      case 3:
        return <DeliveryDetail updateFormData={this.updateFormData.bind(this)}/>
      case 4:
        return <Confirmation updateFormData={this.updateFormData.bind(this)} data={this.state.formData}/>
      case 5:
          return <Success data={this.state.formData} />
    }
  }
}

export default BookStore
