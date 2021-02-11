
export const fetchCollectionStart = (CollectionsObject) => ({
  type: "FETCH_COLLECTION_START"
});

export const fetchCollectionFailure = (errorMessage) => ({
    type: "FETCH_COLLECTION_FAILURE",
    payload: errorMessage,
  });

export const fetchCollectionSuccess = (collectionsObject) => ({
  type: "FETCH_COLLECTION_SUCCESS",
  payload: collectionsObject,
});

