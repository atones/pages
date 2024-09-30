import * as dashboard from './dashboard/+page.js';

/** @type {import('../../../.svelte-kit/types/src/routes/(sidebar)/dashboard').PageLoad} */
export function load(request) {
	return dashboard.load(request);
}
