import { index, route } from '@react-router/dev/routes';

// Routing is now data, not a sequence of app.get() calls.
// The framework reads this to build both the server router and the client one.
export default [
	index('routes/home.jsx'),
	route('schedule', 'routes/schedule.jsx'),
	route('.well-known/appspecific/com.chrome.devtools.json', 'routes/devtools.jsx'),
];
