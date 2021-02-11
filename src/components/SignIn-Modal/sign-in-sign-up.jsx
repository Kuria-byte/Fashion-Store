import React, { Component } from 'react'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import Toastify from 'toastify-js'
// Utils
import { googleSignInStart, emailSignInStart, emailSignUpStart } from '../../Redux/User/user.actions'


class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            password: '',
            email: '',
            show: false
        };
    }


    handleSignin = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleEmailSignUp = async (event) => {
        event.preventDefault();
        const { displayName, email, password } = this.state;
        const { emailSignUpStart } = this.props

        try {
            emailSignUpStart(email, password, displayName);
            this.setState({
                displayName: '',
                email: '',
                password: '',
            });
        }

        catch (error) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: (error),
                footer: '<a href>Why do I have this issue?</a>'
            })
        }
    };


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };

    handleFaceBook = () => {

        Toastify({
            text: 'Oops! Facebook Login is still under development, we suggest you use Google or email to sign up',
            backgroundColor: "linear-gradient(to right top, #cc9966, #c6946c, #bf9072, #b68c77, #ac897b)",
            className: "info",
            duration: 8000,
            newWindow: true,
            close: true,
            gravity: "Top", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true,
        }).showToast()
    }





    render() {
        const { googleSignInStart } = this.props;

        return (

            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form onSubmit={this.handleSignin} >

                                                <div className="form-group">
                                                    <label htmlFor="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" onChange={this.handleChange} defaultValue={this.state.email} name="email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password">Password *</label>
                                                    <input type="password" className="form-control" defaultValue={this.state.password} onChange={this.handleChange} name="password" required />
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span onClick={emailSignInStart}>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                        <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                                                    </div>

                                                    <a href="/" className="forgot-link">Forgot Your Password?</a>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6" onClick={googleSignInStart}>
                                                        <span className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                Login With Google
                                            </span>
                                                    </div>
                                                    <div className="col-sm-6" onClick={() => Toastify({
                                                        text: 'Oops! we suggest you use Google or email to sign up',
                                                        className: "info",
                                                        duration: 8000,
                                                        newWindow: true,
                                                        close: true,
                                                        gravity: "Top", // `top` or `bottom`
                                                        position: 'center', // `left`, `center` or `right`
                                                        stopOnFocus: true,
                                                    }).showToast()} >
                                                        <span className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                Login With Facebook
                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form onSubmit={this.handleEmailSignUp}>
                                                <div className="form-group">
                                                    <label htmlFor="register-user">Full name *</label>
                                                    <input type="text" className="form-control" defaultValue={this.displayName} onChange={this.handleChange} name="displayName" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="register-email1">Email address *</label>
                                                    <input type="email" className="form-control" defaultValue={this.email} onChange={this.handleChange} name="email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password1">Password *</label>
                                                    <input type="password" className="form-control" defaultValue={this.password} onChange={this.handleChange} name="password" required />
                                                </div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span onClick={emailSignUpStart} >SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                                        <label className="custom-control-label" htmlFor="register-policy">I agree to the <span>privacy policy</span> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="/" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                Login With Google
                                            </a>
                                                    </div>
                                                    <div className="col-sm-6" onClick={() => Toastify({
                                                        text: 'Oops! we suggest you use Google or email to sign up',
                                                        className: "info",
                                                        duration: 8000,
                                                        newWindow: true,
                                                        close: true,
                                                        gravity: "Top", // `top` or `bottom`
                                                        position: 'center', // `left`, `center` or `right`
                                                        stopOnFocus: true,
                                                    }).showToast()}>
                                                        <span className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                Login With Facebook
                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({

    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
    emailSignUpStart: (email, password, displayName) => dispatch(emailSignUpStart({ email, password, displayName }))

})

export default connect(null, mapDispatchToProps)(SignInModal)
