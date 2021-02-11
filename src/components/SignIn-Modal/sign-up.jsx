import React from 'react'

function SignUp() {
    return (
        <div>
            <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                <form action="#">
                    <div className="form-group">
                        <label for="register-email">Your email address *</label>
                        <input type="email" className="form-control" id="register-email" name="register-email" required />
                    </div>

                    <div className="form-group">
                        <label for="register-password">Password *</label>
                        <input type="password" className="form-control" id="register-password" name="register-password" required />
                    </div>
                    <div className="form-footer">
                        <button type="submit" className="btn btn-outline-primary-2">
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right"></i>
                        </button>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="register-policy" required />
                            <label className="custom-control-label" for="register-policy">I agree to the <a href="/">privacy policy</a> *</label>
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
                        <div className="col-sm-6">
                            <a href="/" className="btn btn-login  btn-f">
                                <i className="icon-facebook-f"></i>
                                                Login With Facebook
                                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp
