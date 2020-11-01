import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAutsfh6G18rZIETeDGh69VMu2u3B5n0-w',
	authDomain: 'crwn-clothing5-project.firebaseapp.com',
	databaseURL: 'https://crwn-clothing5-project.firebaseio.com',
	projectId: 'crwn-clothing5-project',
	storageBucket: 'crwn-clothing5-project.appspot.com',
	messagingSenderId: '642741262650',
	appId: '1:642741262650:web:353cf90976b8852a889803',
	measurementId: 'G-8T38YX2T20',
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userObj, additionalData) => {
	if (!userObj) return;
	const userRef = firestore.doc(`users/${userObj.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userObj;
		const createdAt = firebase.firestore.FieldValue.serverTimestamp();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error(error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
