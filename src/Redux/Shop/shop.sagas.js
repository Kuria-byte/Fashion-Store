import { takeLatest, call, put } from 'redux-saga/effects'
import { firestore, convertShopCollectionsToObject } from '../../Firebase/firebase.utils'
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions'

export function* fetchCollectionStartAsync() {
    try {
        const collectionRef = firestore.collection('shopCollections')
        const snapshot = yield collectionRef.get()
        const collectionsObject = yield call(convertShopCollectionsToObject, snapshot)
        yield put(fetchCollectionSuccess(collectionsObject));

    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest('FETCH_COLLECTION_START', fetchCollectionStartAsync)
}