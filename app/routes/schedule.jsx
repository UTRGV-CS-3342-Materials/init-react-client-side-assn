import { Page } from '../Page.jsx';

// specially named function meta sets this route's <title> (and other head tags);
// <Meta /> in root.jsx is where they end up
export function meta() {
	return [{ title: 'Build-A-Schedule' }];
}

// specially named function action is run on a POST back to this route (the Add Course form).
// Read the course number from the form data and save the new course to the db.
export async function action({ request }) {}

// loader is a specially-named function that is run first and the result passed to the render function.
// Get all the data the page needs from the db and return it as one object.
export function loader() {}

// whatever function is default exported is considered the render function.
// Pass the loader's data (loaderData) to Page as props.
export default function ScheduleRoute({ loaderData }) {
	return <Page />;
}
