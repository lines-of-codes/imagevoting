import { isLoggedIn } from "./stores.ts";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBOw2PK65VOtj4sC2ssRJbDyUfV2afT2G0",
	authDomain: "imagevoting-linesofcodes.firebaseapp.com",
	projectId: "imagevoting-linesofcodes",
	storageBucket: "imagevoting-linesofcodes.appspot.com",
	messagingSenderId: "822010908684",
	appId: "1:822010908684:web:324d35d3ab16d8bdf5de29",
	measurementId: "G-ZEMQFYM8RV"
};

export function initializeFirebase() {
	const app = initializeApp(firebaseConfig);
	const appCheck = initializeAppCheck(app, {
		provider: new ReCaptchaV3Provider("6Lc5PUQgAAAAAH_Cr7-sZNcSQ0QAgonopXA3n1pu"),
		isTokenAutoRefreshEnabled: true
	});
	const analytics = getAnalytics(app);
	onAuthStateChanged(getAuth(app), (user) => {
		if(user) isLoggedIn.set(true);
		else isLoggedIn.set(false);
	})
}