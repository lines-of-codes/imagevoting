<script lang="ts">
	import { isLoggedIn } from "../stores.js";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { getAuth, 
			signInWithPopup, 
			GoogleAuthProvider, 
			onAuthStateChanged, 
			updateProfile, 
			signOut } from "firebase/auth";

	function login() {
		const auth = getAuth();
		signInWithPopup(auth, new GoogleAuthProvider())
			.catch((error) => {
				if(error.code === "auth/popup-closed-by-user") {
					return;
				}
				alert(error.message);
			});
	}

	function logout() {
		signOut(getAuth());
	}
</script>

<style>
	#eventtitle {
		font-family: Poppins, Lato, sans-serif;
		margin: 0;
		font-size: calc(1.375rem + 1.5vw); /* I stole this from bootstrap h1 font-size */
	}

	.button {
		border: none;
		border-radius: 15px;
		padding: 10px 15px;
		background: white;
		box-shadow: 0px 0px 5px #ccc;
		transition: 250ms;
		cursor: pointer;
		display: inline-block;
	}

	.button:hover {
		box-shadow: 0px 0px 10px #ccc;
	}

	#pageheader {
		display: flex;
		justify-content: space-between;
	}

	#headerbuttons {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 15px;
	}

	@media only screen and (max-width: 463px) {
		#pageheader {
			flex-direction: column-reverse;
		}

		#headerbuttons {
			all: initial;
		}
	}
</style>

<header id="pageheader">
	<h1 id="eventtitle">The Great Sphere</h1>
	<div id="headerbuttons">
		{#if !$isLoggedIn}
			<button class="button" id="signinwithgoogle" on:click={login} in:fly={{ x: 20, delay: 500 }} out:fly={{ x: 20 }}>
				Sign in with Google
			</button>
		{:else}
			<button class="button" on:click={logout} in:fly={{ x: 20, delay: 500 }} out:fly={{ x: 20 }}>Sign out</button>
		{/if}
	</div>
</header>