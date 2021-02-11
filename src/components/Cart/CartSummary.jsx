import { React, useState } from 'react'
import StripeButton from '../Stripe/stripe-button';
import Swal from 'sweetalert2'
//utils
import cards from '../../assets/images/payments-summary.png'

const CartSummary = ({ total, cartItems }) => {

    const [fee, setFee] = useState(0)
    const [paymentMethod, SetPaymentMethod] = useState('Stripe')

    const handleRadioSelect = (event) => {
        const selectedValue = Number(event.target.value);
        parseInt(total)
        setFee(selectedValue)

    }

    const handlePayment = (event) => {
        const selectedMethod = event.target.id;
        SetPaymentMethod(selectedMethod)
    }

  const handleBankTransfer =() =>{
        Swal.mixin({
            icon: 'info',
            heightAuto:'false',
            width: '40.5rem',
            customClass: 'swal-wide',
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
          }).queue([
            {
              title: 'Step 1',
              text: `Deposit $${total} : To the account number 123-456-789`,
              input: ``
            },
            {
                title: 'Step 2',
                text: 'Attatch transaction reference below',
                input: 'file'
              },
              {
                title: 'Step 3',
                text: 'Enter Your Delivery Address'
              },
           
          
          ]).then((result) => {
            if (result.value) {
            //   const answers = JSON.stringify(result.value)
              Swal.fire({
                 icon: 'success' ,
                title: 'All done!',
                width: '40.5rem',
                height: '35.5rem',
                titleText: 'Your transaction will be confirmed shortly',
                // html: `
                //   Your response:
                //   <pre><code>${answers}</code></pre>
                // `,
                confirmButtonText: 'Thank you!'
              })
            }
          })


    }

    return (

        <aside className="col-lg-3">
            <div className="summary summary-cart">
                <h3 className="summary-title">Cart Total</h3>

                <table className="table table-summary">
                    <tbody>
                        <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>${total}</td>
                        </tr>
                        <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" value={0} onClick={handleRadioSelect} />
                                    <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                                </div>
                            </td>
                            <td>${0}.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" value={10} onClick={handleRadioSelect} />
                                    <label className="custom-control-label" htmlFor="standart-shipping">Standard:</label>
                                </div>
                            </td>
                            <td>${10}.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="express-shipping" name="shipping" className="custom-control-input" value={25} onClick={handleRadioSelect} />
                                    <label className="custom-control-label" htmlFor="express-shipping">Express:</label>
                                </div>
                            </td>
                            <td>${25}.00</td>
                        </tr>

                        {/* <tr className="summary-shipping-estimate">
                            <td>Estimate for Your Country<br /> <a href="/">Change address</a></td>
                            <td>&nbsp;</td>
                        </tr> */}

                        <tr className="summary-total">
                            <td>Total:</td>
                            <td>${total + fee}</td>
                        </tr>

                        <div className="accordion-summary" id="accordion-payment">
                            <div className="card">
                                <div className="card-header" id="heading-1">
                                    <h2 className="card-title">
                                        <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="false" aria-controls="collapse-1" onClick={handlePayment} id="BankTransfer">
                                            Direct bank transfer
										                </a>
                                    </h2>
                                </div>
                                <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
                                    <div className="card-body">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference.
										            </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-header" id="heading-3">
                                    <h2 className="card-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3" onClick={handlePayment} id="COD">
                                            Cash on delivery
										                </a>
                                    </h2>
                                </div>
                                <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
                                    <div className="card-body">If the goods are not paid for, they are returned to the retailer
										            </div>
                                </div>
                            </div>



                            <div className="card">
                                <div className="card-header" id="heading-5">
                                    <h2 className="card-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5" onClick={handlePayment} id="Stripe">
                                            Credit Card (Stripe)
										                    <img src={cards} alt="payments cards" />
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
                                    <div className="card-body"> Stripe is a fast & secure way to make online payments
										            </div>
                                </div>
                            </div>
                        </div>


                    </tbody>
                </table>

                {(() => {
                    if (paymentMethod === "Stripe") {
                        return (
                            <StripeButton price={total + fee} cartItems={cartItems} />
                        )
                    } else if (paymentMethod === "COD") {
                        return (
                            <button className="btn btn-outline-primary-2 btn-order btn-block"><span style={{ paddingRight: "10px" }}>&#128179;</span>CASH ON DELIVERY</button>
                        )
                    } else {
                        return (
                            <button className="btn btn-outline-primary-2 btn-order btn-block" onClick={handleBankTransfer}><span style={{ paddingRight: "10px" }}>&#128179;</span>DIRECT BANK TRANSFER</button>
                        )
                    }
                })()}




            </div>

            <a href="/" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-shopping-cart"></i></a>
        </aside>


    )
}



export default CartSummary
