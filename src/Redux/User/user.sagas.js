import { takeLatest, put, all } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../Firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure, emailSignUpSuccssful, emailSignUpFailure } from './user.actions'
import Swal from 'sweetalert2';
import Toastify from 'toastify-js'


export function* emailSignUpStart() {
    yield takeLatest('EMAIL_SIGNUP_START', emailSignUp)
}

export function* emailSignUp({ payload: { email, password, displayName } }) {

    try {

        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield createUserProfileDocument(user, { displayName });
        const userSnapShot = yield userRef.get();
        yield put(emailSignUpSuccssful({ id: userSnapShot.id, ...userSnapShot.data() }));

        yield setTimeout(3000);

        yield Swal.fire({
            icon: 'success',
            title: 'Cheers 🎉',
            text: (`${userSnapShot.data().displayName }'s account created successfully`),
            footer: `<a href ="/">Login in to start shopping</a>`
        })
    }
    catch (error) {
        yield Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: (error),
            footer: '<a href>Why do I have this issue?</a>'
        })
        yield put(emailSignUpFailure(error));

    }
}

export function* signInWithGoogle() {

    try {

        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield createUserProfileDocument(user);
        const userSnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
        yield (Toastify({
            text: `Welcome ${userSnapShot.data().displayName} 🎉`,
            backgroundColor: "linear-gradient(to right top, #cc9966, #c6946c, #bf9072, #b68c77, #ac897b)",
            className: "success",
            duration: 7000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true,
        }).showToast()
        )
    } catch (error) {
        yield Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: (error),
            footer: '<a href>Why do I have this issue?</a>'
        })
        yield put(googleSignInFailure(error));
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest('GOOGLE_SIGNIN_START', signInWithGoogle)
}


export function* signInWithEmail({ payload: { email, password } }) {

    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield createUserProfileDocument(user);
        const userSnapShot = yield userRef.get();
        yield put(emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
        yield (Toastify({
            text: `Signed in as ${userSnapShot.data().email} 🎉`,
            backgroundColor: "linear-gradient(to right top, #cc9966, #c6946c, #bf9072, #b68c77, #ac897b)",
            className: "success",
            duration: 7000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true,
        }).showToast()
        )


    } catch (error) {
        yield Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: (error),
            footer: '<a href>Why do I have this issue?</a>'
        })
        yield put(emailSignInFailure(error));
    }


}

export function* onEmailSignInStart() {
    yield takeLatest('EMAIL_SIGNIN_START', signInWithEmail)
}



export function* userSagas() {
    yield all([onGoogleSignInStart(), onEmailSignInStart(), emailSignUpStart()])
}