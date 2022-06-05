import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const notificationSystem = writable({
	notify: (content) => null
});
