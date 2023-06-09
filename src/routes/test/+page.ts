import type { ShareTarget } from '$lib/web-share-target';
import { error } from '@sveltejs/kit';

function isValidUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        if (error instanceof TypeError) {
            return false;
        }
        throw error;
    }
}

function validateShareTarget(shareTarget: unknown, manifestUrl: string): asserts shareTarget is ShareTarget {
    if (shareTarget == undefined) {
        throw error(400, `Web App Manifest located at '${manifestUrl}' does not have 'share_target' member`)
    } else if (typeof shareTarget !== 'object') {
        throw error(400, `Web App Manifest located at '${manifestUrl}' does not have valid 'share_target'. Found ${shareTarget} value.`)
    }
}

export const load: import('./$types').PageLoad = async ({ url, fetch }) => {
    const manifestUrl = url.searchParams.get('manifest');
    if (!manifestUrl) {
        throw error(400, `Missing 'manifest' URL`)
    } else if (!isValidUrl(manifestUrl)) {
        throw error(400, `'manifest' value '${manifestUrl}' is not a valid URL`)
    }

    const response = await fetch(manifestUrl);
    if (response.status === 404) {
        throw error(404, `'manifest' URL '${manifestUrl}' points to a 404 page`)
    } else if (response.status === 401) {
        throw error(401, `'manifest' URL '${manifestUrl}' points to unauthorized page`)
    } else if (!response.ok) {
        throw error(421, `'manifest' URL '${manifestUrl}' returned a ${response.status} error`)
    }

    let shareTarget: unknown;
    try {
        const manifestJson = await response.json()
        shareTarget = manifestJson.share_target;
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw error(400, `'manifest' URL '${manifestUrl}' points to invalid JSON. Content type was ${response.headers.get('Content-Type') ?? 'not sent'}`)
        }
        throw err;
    }

    validateShareTarget(shareTarget, manifestUrl);

    return {
        shareTarget,
        manifestUrl
    };
}