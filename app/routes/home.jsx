import { redirect } from 'react-router';

// The page lives at /schedule, not here at /. A plain <form method="POST"> on / posts to
// the root route, not this index route (react-router wants /?index for that), and gets a 405.
export function loader() {
	return redirect('/schedule');
}
