import React from "react";


const PaymentForm = () => {
  
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card border-success shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Make your payment here</h2>
              <div className="border-bottom border-success pb-2">
                <h3 className="text-success font-weight-bold mb-3">Billing Information</h3>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" id="address" className="form-control" placeholder="Enter your address" />
                </div>
                <div className="row g-3">
                  <div className="col">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" id="city" className="form-control" placeholder="Enter your city" />
                  </div>
                  <div className="col">
                    <label htmlFor="zip" className="form-label">ZIP</label>
                    <input type="text" id="zip" className="form-control" placeholder="Enter your ZIP code" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select id="country" className="form-select">
                    <option value="SriLanka">Sri Lanka</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-bottom border-success pb-2">
                  <h3 className="text-success font-weight-bold mb-3">Card Information</h3>
                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input type="text" id="cardNumber" className="form-control" placeholder="Enter your card number" />
                  </div>
                  <div className="row g-3">
                    <div className="col">
                      <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                      <input type="text" id="expiryDate" className="form-control" placeholder="MM/YY" />
                    </div>
                    <div className="col">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input type="text" id="cvv" className="form-control" placeholder="CVV" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-end">
                <button className="btn btn-success me-2">Submit</button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
