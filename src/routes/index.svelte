<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
	<title>The Great Sphere - imagevoting</title>
</svelte:head>

<script lang="ts">
	import Submission from "../components/Submission.svelte";
	import Header from "../components/Header.svelte";
	import NotificationBox from "../components/NotificationBox.svelte";
	import { onMount } from "svelte";
	import { initializeFirebase } from "../firebase.ts";
	import { notificationSystem } from "../stores.ts";

	let hasNotification: boolean = false;
	let notificationContent: string = "";

	function notify(content) {
		notificationContent = content;
		hasNotification = true;
		setTimeout(() => {
			hasNotification = false;
		}, 2500);
	}

	$notificationSystem.notify = notify;

	onMount(initializeFirebase);
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

	#submissions {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
	}
</style>

<main id="maincontent">
	{#if hasNotification}
		<NotificationBox>
			{notificationContent}
		</NotificationBox>		
	{/if}
	<Header />
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
