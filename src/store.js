import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// Reducers
// TBC

const firebaseConfig = {
	apiKey: 'AIzaSyCvbaAyxBaKZ8ZHd5xgh1Mms7BCKpVUJSI',
	authDomain: 'freelanciful.firebaseapp.com',
	databaseURL: 'https://freelanciful.firebaseio.com',
	projectId: 'freelanciful',
	storageBucket: 'freelanciful.appspot.com',
	messagingSenderId: '746980465964',
	appId: '1:746980465964:web:6e0ab68ae59ed7145fe089',
	measurementId: 'G-WN3FL2309R'
};

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
// const firestore = firebase.firestore();

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig),
	reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
	rootReducer,
	initialState,
	compose(
		reactReduxFirebase(firebase),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
