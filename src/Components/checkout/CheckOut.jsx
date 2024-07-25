import React, { useState } from 'react';
import { useFood } from '../../Context/food-context';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';

const CheckOut = () => {
  const { cartItem } = useFood();
  const [selectedPayment, setSelectedPayment] = useState('credit');

  const sum = cartItem.reduce((acc, curr) => acc + curr.price, 0);

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody className="p-4">
          <MDBRow>
            <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio
                      type="radio"
                      name="radio1"
                      value="credit"
                      checked={selectedPayment === 'credit'}
                      onChange={handlePaymentChange}
                      aria-label="Credit Card"
                    />
                  </div>
                  <div className="rounded border w-100 p-3">
                    <p className="d-flex align-items-center mb-0">
                      <MDBIcon fab icon="cc-mastercard fa-2x text-dark pe-2" />
                      Credit Card
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio
                      type="radio"
                      name="radio1"
                      value="debit"
                      checked={selectedPayment === 'debit'}
                      onChange={handlePaymentChange}
                      aria-label="Debit Card"
                    />
                  </div>
                  <div className="rounded border w-100 p-3">
                    <p className="d-flex align-items-center mb-0">
                      <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                      Debit Card
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio
                      type="radio"
                      name="radio1"
                      value="paypal"
                      checked={selectedPayment === 'paypal'}
                      onChange={handlePaymentChange}
                      aria-label="PayPal"
                    />
                  </div>
                  <div className="rounded border w-100 p-3">
                    <p className="d-flex align-items-center mb-0">
                      <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                      PayPal
                    </p>
                  </div>
                </div>
              </form>
            </MDBCol>
            <MDBCol md="6" lg="4" xl="6">
              <MDBRow>
                <MDBCol size="12" xl="6">
                  <MDBInput
                    className="mb-4 mb-xl-5"
                    label="Name on card"
                    placeholder="John Smith"
                    size="lg"
                  />
                  <MDBInput
                    className="mb-4 mb-xl-5"
                    label="Expiration"
                    placeholder="MM/YY"
                    size="lg"
                    maxLength={7}
                    minLength={7}
                  />
                </MDBCol>

                <MDBCol size="12" xl="6">
                  <MDBInput
                    className="mb-4 mb-xl-5"
                    label="Card Number"
                    placeholder="1111 2222 3333 4444"
                    size="lg"
                    maxLength="19"
                    minLength="19"
                  />
                  <MDBInput
                    className="mb-4 mb-xl-5"
                    label="CVV"
                    placeholder="&#9679;&#9679;&#9679;"
                    size="lg"
                    maxLength="3"
                    minLength="3"
                    type="password"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol lg="4" xl="3">
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: '500' }}
              >
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">${sum.toFixed(2)}</p>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: '500' }}
              >
                <p className="mb-0">Shipping</p>
                <p className="mb-0">$2.99</p>
              </div>

              <hr className="my-4" />

              <div
                className="d-flex justify-content-between mb-4"
                style={{ fontWeight: '500' }}
              >
                <p className="mb-2">Total (tax included)</p>
                <p className="mb-2">${(sum + 2.99).toFixed(2)}</p>
              </div>

              <MDBBtn block size="lg" onClick={handleSubmit}>
                <div className="d-flex justify-content-between">
                  <span>Checkout</span>
                  <span>${(sum + 2.99).toFixed(2)}</span>
                </div>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export { CheckOut };
