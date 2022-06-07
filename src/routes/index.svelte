<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@700&display=swap" rel="stylesheet"> 
	<title>The Great Sphere - imagevoting</title>
</svelte:head>

<script lang="ts">
	import Submission from "../components/Submission.svelte";
	import Header from "../components/Header.svelte";
	import NotificationBox from "../components/NotificationBox.svelte";
	import Footer from "../components/Footer.svelte";
	import { onMount } from "svelte";
	import { getDatabase, ref, get } from "firebase/database";
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
	let submissions: Object[] = [];

	onMount(() => {
		document.body.style.margin = "0";
		initializeFirebase(async () => {
			const db = getDatabase();
			submissions = await get(ref(db), limit(20))
		});
	});
</script>

<style>
	.maincontent {
		font-family: Lato, sans-serif;
		margin: 50px;
	}

	#submissions {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
	}

	#submitpicture {
		background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
		padding: 50px 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: Lato, sans-serif;
	}

	#bannercontent {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#submitbutton {
		border: none;
		border-radius: 25px;
		background: white;
		padding: 10px 20px;
		cursor: pointer;
		font-family: Lato, sans-serif;
		box-shadow: 0px 0px 10px #aaa;
		transition: 250ms;
	}

	#submitbutton:hover {
		box-shadow: 0px 0px 20px #999;
	}

	h1, h2, h3 {
		font-family: Poppins, Lato, sans-serif;
		font-weight: bold;
	}
</style>

<main class="maincontent">
	{#if hasNotification}
		<NotificationBox>
			{notificationContent}
		</NotificationBox>		
	{/if}
	<Header />
	<p>
		Vote for the winner of The Great Sphere icon making competition!
	</p>
</main>
<section id="submitpicture">
	<div id="bannercontent">
		<h2>Wanna submit your icon?</h2>
		<a href="/submit"><button id="submitbutton">Submit here.</button></a>
	</div>
</section>
<main class="maincontent">
	<section id="submissions">
		{#each submissions as submission}
			<Submission submissionData={submission} />
		{:else}
			<p>No submissions yet, Nothing to see here...</p>
		{/each}
	</section>
</main>

<Footer />
