<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
	<title>The Great Sphere - imagevoting</title>
</svelte:head>

<script lang="ts">
	import Submission from "../components/Submission.svelte";
	import "bootstrap-icons/font/bootstrap-icons.css";

	import { initializeApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	const firebaseConfig = {
		apiKey: "AIzaSyBOw2PK65VOtj4sC2ssRJbDyUfV2afT2G0",
		authDomain: "imagevoting-linesofcodes.firebaseapp.com",
		projectId: "imagevoting-linesofcodes",
		storageBucket: "imagevoting-linesofcodes.appspot.com",
		messagingSenderId: "822010908684",
		appId: "1:822010908684:web:324d35d3ab16d8bdf5de29",
		measurementId: "G-ZEMQFYM8RV"
	};

	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
</script>

<style>
	#maincontent {
		font-family: Lato, sans-serif;
		margin: 50px;
	}

	#footer {
		background-color: whitesmoke;
		padding: 15px 20px;
		margin: 25px;
		font-family: Lato, sans-serif;
		border-radius: 25px;
	}

	#footer a#svelte {
		color: #ff3e00;
	}

	#eventtitle {
		font-family: "Times new Roman", sans-serif;
	}

	#submissions {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
	}

	#signinwithgoogle {
		border: none;
		border-radius: 15px;
		padding: 5px 10px;
		box-shadow: 0px 0px 5px #ccc;
	}
</style>

<main id="maincontent">
	<div>
		<h1 id="eventtitle"><i>The Great Sphere</i></h1>
		<button id="signinwithgoogle">Sign in with Google</button>
	</div>
	<p>
		Vote for the winner of The Great Sphere icon making competition!
	</p>
	<br>
	<section id="submissions">
		<Submission />
		<Submission />
		<Submission />
	</section>
</main>

<footer id="footer">
	Created using the magic of <a id="svelte" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a>.<br>
	Made with &hearts; from <a href="https://github.com/lines-of-codes" target="_blank" rel="noopener noreferrer">lines-of-codes</a>
</footer>
