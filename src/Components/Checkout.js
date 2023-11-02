// Checkout.js

import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerInfo: {
        name: '',
        email: '',
        phone: '',
      },
      deliveryInfo: {
        address: '',
        deliveryTime: '',
      },
      paymentInfo: {
        customerName:'',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        tip: '',
      },
      couponCode: '',
    };
  }

  // Functions to handle form input changes
  handleCustomerInfoChange = (e) => {
    this.setState({
      customerInfo: {
        ...this.state.customerInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleDeliveryInfoChange = (e) => {
    this.setState({
      deliveryInfo: {
        ...this.state.deliveryInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  handlePaymentInfoChange = (e) => {
    this.setState({
      paymentInfo: {
        ...this.state.paymentInfo,
        [e.target.name]: e.target.value,
      },
    });
  };
  
  handleCouponCodeChange = (e) => {
    this.setState({
      couponCode: e.target.value,
    });
  };

  // Function to handle checkout
  handleCheckout = () => {
    console.log('Checkout clicked. Data to submit:', this.state);
  };

  render() {
    return (
      <div className="checkout-container">
        <h2 className="check">Checkout</h2>

        <div className="form-sections">
          <div className="form-section">
            <h3 className="check">Customer Information</h3>
            <form id="intake-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.customerInfo.name}
                onChange={this.handleCustomerInfoChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.customerInfo.email}
                onChange={this.handleCustomerInfoChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={this.state.customerInfo.phone}
                onChange={this.handleCustomerInfoChange}
              />
            </form>
          </div>

          <div className="form-section">
            <h3 className="check">Delivery Information</h3>
            <form>
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={this.state.deliveryInfo.address}
                onChange={this.handleDeliveryInfoChange}
              />
              <input
                type="text"
                name="deliveryTime"
                placeholder="Delivery Time"
                value={this.state.deliveryInfo.deliveryTime}
                onChange={this.handleDeliveryInfoChange}
              />
            </form>
          </div>

          <div className="form-section">
            <h3 className="check">Payment Information</h3>
            <form>
              <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={this.state.paymentInfo.customerName}
                onChange={this.handlePaymentInfoChange}
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={this.state.paymentInfo.cardNumber}
                onChange={this.handlePaymentInfoChange}
              />
              <input
                type="text"
                name="expirationDate"
                placeholder="Expiration Date (MM/YY)"
                value={this.state.paymentInfo.expirationDate}
                onChange={this.handlePaymentInfoChange}
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={this.state.paymentInfo.cvv}
                onChange={this.handlePaymentInfoChange}
              />
              <input
                type="text"
                name="tip"
                placeholder="Tip Amount"
                value={this.state.paymentInfo.tip}
                onChange={this.handlePaymentInfoChange}
              />
            </form>
          </div>
        </div>

        <div className="form-section">
          <h3 className="check">Coupon Code</h3>
          <form id="intake-form">
            <input
              type="text"
              name="couponCode"
              placeholder="Enter coupon code"
              value={this.state.couponCode}
              onChange={this.handleCouponCodeChange}
            />
          </form>
        </div>
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

export default Checkout;
