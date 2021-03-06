import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

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
// // const settings = { timestampInSnapshots: true };
// firestore.settings(settings);

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig),
	reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	notify: notifyReducer,
	settings: settingsReducer
});

//Check settings for local storage
if (localStorage.getItem('settings') == null) {
	//Default settings
	const defaultSettings = {
		disableBalanceOnAdd: false,
		disableBalanceOnEdit: false,
		allowRegistration: true
	};
	//Set to localStorage
	localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

//Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

// Create store with reducers
const store = createStoreWithFirebase(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
