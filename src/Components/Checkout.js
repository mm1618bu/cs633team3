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
    // You can implement the logic for processing the checkout here
    // For example, send the form data to your backend, integrate with payment gateway, etc.
    // This is a placeholder function, and you need to replace it with your implementation.
    console.log('Checkout clicked. Data to submit:', this.state);
  };

  render() {
    return (
      <div>
        <h2>Checkout</h2>

        {/* Customer Information Form */}
        <h3>Customer Information</h3>
        <form>
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


        {/* Delivery Information Form */}
        <h3>Delivery Information</h3>
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
        {/* Additional delivery information inputs can be added here */}
        </form>


{/* Payment Information Form */}
<h3>Payment Information</h3>
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
        {/* Add the tip option field */}
        <input
            type="text"
            name="tip"
            placeholder="Tip Amount"
            value={this.state.paymentInfo.tip}
            onChange={this.handlePaymentInfoChange}
        />
        {/* Additional payment information inputs can be added here */}
</form>


        {/* Coupon Code Form */}
        <h3>Coupon Code</h3>
        <form>
          <input
            type="text"
            name="couponCode"
            placeholder="Enter coupon code"
            value={this.state.couponCode}
            onChange={this.handleCouponCodeChange}
          />
        </form>

        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

export default Checkout;
