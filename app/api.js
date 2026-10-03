// A convenience for calling the JSON API routes: the same fetch() as A06, wrapped up.
// Posts `body` as JSON to `url` and returns the parsed JSON reply.
// Unlike A06's `if (!response.ok) return;`, this throws on an error status
// (as well as when the request never reaches the server), so catch it.
export async function post(url, body) {
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	});
	if (!response.ok) throw new Error(`HTTP ${response.status}`);
	return response.json();
}
