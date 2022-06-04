<style>
	.card {
		box-shadow: 0px 0px 15px #ccc;
		padding: 15px 20px;
		border-radius: 15px;
	}

	.card .title {
		margin: 0;
	}

	.liked {
		color: red;
	}
</style>

<script lang="ts">
	import { fly } from "svelte/transition";

	let heart: HTMLElement;
	let likes: number = 0;
	let liked: boolean = false;

	function like() {
		if(liked) {
			likes--;
			liked = false;
		}
		else {
			likes++;
			liked = true;
		}
	}
</script>

<div class="card">
	<h2 class="title">Card title</h2>
	<span>Made by someperson</span>
	<p>image here</p>
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
</div>