<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
	<link href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@700&display=swap" rel="stylesheet"> 
	<title>Submit image - imagevoting</title>
</svelte:head>

<script lang="ts">
	import { onMount } from "svelte";
	import { initializeFirebase } from "../firebase.js";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	let submittedFiles: FileList;

	onMount(() => {
		document.body.style.margin = "0";
		initializeFirebase();
	});
</script>

<style>
	h2 {
		font-family: Poppins, Lato, sans-serif;
		font-weight: bold;
	}

	.maincontent {
		font-family: Lato, sans-serif;
		padding: 50px;
	}

	.submitworkgradient {
		background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
	}

	#submitwork {
		margin: 25px;
		padding: 10px 25px;
		border: 5px solid gray;
		border-radius: 25px;
	}

	@media only screen and (max-width: 463px) {
		#submitwork {
			margin: 0;
			margin-top: 25px;
		}
	}

	#submitwork>form input[type=text] {
		font-family: Lato, sans-serif;
		border-radius: 15px;
		padding: 10px;
		border: none;
		box-shadow: 0px 0px 5px #aaa;
		transition: 250ms;
	}

	#submitwork>form input[type=text]:hover {
		box-shadow: 0px 0px 10px #aaa;
	}

	#submitwork>form input[type=text]:focused {
		border: 2px solid gray;
	}

	#guidelines {
		background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
	}

	#guidelinesdetails details {
		padding: 15px;
		border-bottom: 1px solid gray;
	}

	#guidelinesdetails a {
		color: inherit;
		transition: 250ms;
	}

	#guidelinesdetails a:hover {
		color: midnightblue;
	}
</style>

<main class="maincontent submitworkgradient">
	<Header />
	<section id="submitwork">
		<h2>Submit your work</h2>
		<p>
			First, Please make sure you are logged in and you're submitting your work with the display name you wanted.<br />
			Second, Please make sure your work matches the <a href="#guidelines">guidelines</a> of the work we'd accept.<br />
			Then, you're all set! You can submit the work below:
		</p>
		<form on:submit|preventDefault={() => null}>
			<input type="text" placeholder="Title (optional)" id="title" /><br /><br />
			<!-- TODO: Style the file selector -->
			<label for="submittedIcon">Upload your icon...</label>
			<input type="file" accept="image/png, image/jpeg, image/svg+xml" id="submittedIcon"
					bind:files={submittedFiles} multiple={false} />
		</form>
	</section>
</main>

<section class="maincontent" id="guidelines">
	<h2>Icon guidelines & Questions</h2>
	<p>
		Here, you can read about what the icons required, and some questions you might be curious about.
	</p>
	<div id="guidelinesdetails">
		<details>
			<summary>Typography</summary>
			<p>
				You are required to be using <strong>only</strong> fonts from <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a>.<br />
				If you do not know what to use, some recommendations are <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer">Poppins</a>, <a href="https://fonts.google.com/specimen/Lato" target="_blank" rel="noopener noreferrer">Lato</a>, and <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="noopener noreferrer">Montserrat</a>.
			</p>
		</details>
		<details>
			<summary>What needs to be in the icon?</summary>
			<p>
				The icon should have things that represents the game, like the default red player character, or the game name, etc.
			</p>
		</details>
		<details>
			<summary>What would I get If I win the competition?</summary>
			<p>
				Your icon will be used in the game, and you will also be in the credits too.
			</p>
		</details>
	</div>
</section>

<Footer />