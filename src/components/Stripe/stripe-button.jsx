import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
//utils
import Swal from 'sweetalert2'
import StripeCheckout from 'react-stripe-checkout'
import emailjs from 'emailjs-com';
//Selectors
import { removeAllItems } from '../../Redux/Cart/cart.actions'
import { selectCurrentUser } from '../../Redux/User/user.selector'


const StripeButton = ({ price, removeAllItems, currentUser, cartItems }) => {

    //Stripe
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GtT6REG60pL9LLKS9OU4fum817gXi2wIdqnuzum0XjwwW18bD9zHShhPLssLlMjBmdyYa53RP26h6ShbZ8o3VTn00CZmUz1IP';


let items;
    cartItems.forEach((element) => {
        var { name, price } = element
        items = {name , price}
       
    });


    // console.log(cartItems);


    const onToken = (token) => {
        console.log(token);
        Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
        });
     
        sendEmail();
        // removeAllItems();
    }



    //Emailjs
    var templateParams = {
        
        to_name: `${currentUser.displayName}`,
        from_name: 'Ecommerce Store',
        message: `${items.name + items.price}`,
        to_email: `${currentUser.email}`
    };


    function sendEmail() {
        emailjs.send('service_316jper', 'template_wg1i4e2', templateParams, 'user_xgFmJwDxzgnYRkNSAQouv')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecommerce Store'
            ComponentClass="div"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        >
            <button className="btn btn-outline-primary-2 btn-order btn-block"><span style={{ paddingRight: "10px" }}>&#128179;</span>SUBMIT PAYMENT</button>

        </StripeCheckout>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeAllItems: () => dispatch(removeAllItems())
})

const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser

})





export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);