<!-- Viewing single submissions -->
<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Header from "../../components/Header.svelte";
	import Submission from "../../components/Submission.svelte";
	import NotificationBox from "../../components/NotificationBox.svelte";
	import Footer from "../../components/Footer.svelte";
	import { notificationSystem } from "../../stores.js";
	import { initializeFirebase } from "../../firebase.js";

	let id = $page.params.submissionId;
	let hasNotification: boolean = false;
	let notificationContent: string = "";

	function notify(content: string) {
		notificationContent = content;
		hasNotification = true;
		setTimeout(() => {
			hasNotification = false;
		}, 2500);
	}

	$notificationSystem.notify = notify;
	onMount(initializeFirebase);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
	<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
	<title>Submission {id} - imagevoting</title>
</svelte:head>

<style>
	#maincontent {
		font-family: Lato, sans-serif;
		margin: 50px;
	}
</style>

<main id="maincontent">
	{#if hasNotification}
		<NotificationBox>
			{notificationContent}
		</NotificationBox>		
	{/if}
	<Header />
	<br/>
	<Submission submissionData={null} submissionId={id} />
</main>

<Footer />
