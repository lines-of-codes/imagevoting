<style>
	#notificationBox {
		border-radius: 25px;
		background-color: midnightblue;
		color: white;
		position: fixed;
		margin: auto;
		left: 50%;
		transform: translate(-50%, 0);
		bottom: 50px;
		padding: 10px 20px;
	}
</style>

<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<div id="notificationBox" in:fly={{ y: 50 }} out:fly={{ y: 50 }}>
	<slot></slot>
</div>