import React, { Component } from 'react';
import './index.css';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountDetails: {
        name: '',
        email: '',
        phone: '',
      },
      deliveryOption: 'pickup', 
      deliveryType: 'normal', 
      deliveryAddress: '',
      dropOffLocation: '',
      subtotal: 0, 
      deliveryFee: 5, 
      tip: 0,
    };
  }

  handleAccountDetailsChange = (e) => {
    this.setState({
      accountDetails: {
        ...this.state.accountDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleDeliveryOptionChange = (e) => {
    this.setState({
      deliveryOption: e.target.value,
    });
  };

  handleDeliveryTypeChange = (e) => {
    this.setState({
      deliveryType: e.target.value,
    });
  };

  handleDeliveryAddressChange = (e) => {
    this.setState({
      deliveryAddress: e.target.value,
    });
  };

  handleDropOffLocationChange = (e) => {
    this.setState({
      dropOffLocation: e.target.value,
    });
  };


  handleTipChange = (e) => {
    this.setState({
      tip: parseFloat(e.target.value) || 0,
    });
  };

  handleTipOption = (amount) => {
    this.setState({
      tip: amount,
    });
  };

  handleCheckout = () => {
    const total = this.state.subtotal + this.state.deliveryFee + this.state.tip;

    console.log('Checkout clicked. Data to submit:', {
      ...this.state,
      total,
    });
  };

  render() {
    return (
      <div className="checkout-container">
        <h2 className="check">Checkout</h2>

        <div className="form-section">
          <h3 className="check">Account Details</h3>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.accountDetails.name}
              onChange={this.handleAccountDetailsChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.accountDetails.email}
              onChange={this.handleAccountDetailsChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={this.state.accountDetails.phone}
              onChange={this.handleAccountDetailsChange}
            />
          </form>
        </div>

        {/* Delivery Options Section */}
        <div className="form-section">
          <h3 className="check">Delivery Options</h3>
          <form>
            <label>
              <input
                type="radio"
                name="deliveryOption"
                value="pickup"
                checked={this.state.deliveryOption === 'pickup'}
                onChange={this.handleDeliveryOptionChange}
              />
              Pickup
            </label>
            <label>
              <input
                type="radio"
                name="deliveryOption"
                value="delivery"
                checked={this.state.deliveryOption === 'delivery'}
                onChange={this.handleDeliveryOptionChange}
              />
              Delivery
            </label>

            {this.state.deliveryOption === 'delivery' && (
              <div>
                <label>
                  <input
                    type="radio"
                    name="deliveryType"
                    value="normal"
                    checked={this.state.deliveryType === 'normal'}
                    onChange={this.handleDeliveryTypeChange}
                  />
                  Normal Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="deliveryType"
                    value="express"
                    checked={this.state.deliveryType === 'express'}
                    onChange={this.handleDeliveryTypeChange}
                  />
                  Express Delivery
                </label>

                <input
                  type="text"
                  name="deliveryAddress"
                  placeholder="Delivery Address"
                  value={this.state.deliveryAddress}
                  onChange={this.handleDeliveryAddressChange}
                />
                <input
                  type="text"
                  name="dropOffLocation"
                  placeholder="Drop-off Location"
                  value={this.state.dropOffLocation}
                  onChange={this.handleDropOffLocationChange}
                />
              </div>
            )}
          </form>
        </div>

        <div className="form-section">
          <h3 className="check">Tip Options</h3>
          <div className="tip-options">
            <button onClick={() => this.handleTipOption(2)}>$2.00</button>
            <button onClick={() => this.handleTipOption(3)}>$3.00</button>
            <button onClick={() => this.handleTipOption(4)}>$4.00</button>
            <button onClick={() => this.handleTipOption(5)}>$5.00</button>
          </div>
        </div>

        <button onClick={this.handleCheckout}>Place Order</button>
      </div>
    );
  }
}

export default Checkout;
