import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

// Components
import Header from './components/Headers/Header-demo'
import HomePage from './components/Pages/homePage';
import checkoutPage from './components/Pages/checkout-page'
import ShopPage from './components/Pages/shoppage'
import SignInModal from './components/SignIn-Modal/sign-in-sign-up'
//Utils
import { selectCurrentUser } from './Redux/User/user.selector';
import { fetchCollectionStart } from './Redux/Shop/shop.actions'
import { selectIsCollectionFetching } from './Redux/Shop/shop.selector'
import { SpinnerRoundFilled, SpinnerDotted } from 'spinners-react';
import MetaTags from 'react-meta-tags';

// Styling and Plugins
import './assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css'
import 'react-toastify/dist/ReactToastify.min.css';
//  <!-- Plugins CSS File -->
import './assets/css/bootstrap.min.css'
import './assets/css/plugins/owl-carousel/owl.carousel.css'
import './assets/css/plugins/magnific-popup/magnific-popup.css'
import './assets/css/plugins/jquery.countdown.css'
// <!-- Main CSS File -->
import './assets/css/style.css'
import './assets/css/skins/skin-demo-6.css'
import './assets/css/demos/demo-6.css'
import image from './Images/fashion.jpg'




class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    const { isCollectionFetching, currentUser } = this.props;
    const styles = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "250px",
      fontSize: 200
    };

    return (

      <div className='App'>
        <div class='page-wrapper'>
        <MetaTags>
            <title>Fashion Shop</title>
            <meta name="description" content="A modern fashion store where fashion meets elegance." />
            <meta property="og:title" content="Ecommerce" />
            <meta property="og:image" content="https://ibb.co/f0WMLGJ" />
            <meta property="og:image" content={image} />
          </MetaTags>
          <Header />
          <Switch>
            {
              isCollectionFetching ?
                <SpinnerRoundFilled size={100} thickness={180} speed={90} color="rgba(172, 137, 57, 1)" style={styles} /> :
                <Route exact path="/" render={props => (<HomePage isLoading={isCollectionFetching} {...props} />)} />
            }
            {
              currentUser === null / undefined ?
                <SpinnerDotted size={100} thickness={180} speed={91} color="rgba(172, 137, 57, 1)" style={styles} /> :
                <Route exact path="/checkout" component={checkoutPage} />
            } 

            {isCollectionFetching ?
              <SpinnerRoundFilled size={100} thickness={180} speed={91} color="rgba(172, 137, 57, 1)" style={styles} /> :
              <Route exact path="/shop" component={ShopPage} />}
              <Route exact path="/login" component={SignInModal} />
             

          </Switch>
        

        </div>
      
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionFetching: selectIsCollectionFetching,
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
