<style>
	.card {
		box-shadow: 0px 0px 15px #ccc;
		padding: 15px 20px;
		border-radius: 15px;
	}

	.card .title {
		margin: 0;
	}

	.card .buttoncontainer {
		display: grid;
		grid-template-columns: 75px 75px;
	}

	.card .buttoncontainer>span {
		display: flex;
		align-items: center;
	}

	.card .buttoncontainer>span>span {
		margin-left: 10px;
	}

	#like {
		cursor: pointer;
	}

	.liked {
		color: red;
	}

	#share {
		color: initial;
		cursor: pointer;
		transition: 150ms;
	}

	#share:hover {
		color: midnightblue;
	}
</style>

<script lang="ts">
	import "bootstrap-icons/font/bootstrap-icons.css";
	import { fly } from "svelte/transition";
	import { isLoggedIn, notificationSystem } from "../stores.js";

	type Submission = {
		submissionOwner: string, 
		title: string, 
		image: string, 
		likes: number
	};
	export let submissionData: Submission;
	export let submissionId: string;
	let heart: HTMLElement;
	let likes: number = 0;
	let liked: boolean = false;

	function like() {
		if(!$isLoggedIn) {
			$notificationSystem.notify("Please login first!");
			return;
		}
		if(liked) {
			likes--;
			liked = false;
		}
		else {
			likes++;
			liked = true;
		}
	}

	function share() {
		navigator.clipboard.writeText(`${window.location.host}/submissions/${submissionId}`);
		$notificationSystem.notify("Copied!");
	}
</script>

<div class="card">
	<h2 class="title">{submissionData?.title}</h2>
	<span>Made by someperson</span>
	<p>image here</p>
	<div class="buttoncontainer">
		<span id="like" title="Like" on:click={like}>
			<i class={liked ? "bi bi-heart-fill liked" : "bi bi-heart"} bind:this={heart}></i>
			{#key likes}
				<span   style="display: inline-block;" 
						id="likecount" 
						in:fly={{ y: -20, delay: 300, duration: 150 }} 
						out:fly={{ y: 20, duration: 150 }}>
					{likes}
				</span>
			{/key}
		</span>
		<span   id="share"
				title="Share this submission" 
				on:click={share}>
			<i class="bi bi-share"></i>
		</span>
	</div>
</div>