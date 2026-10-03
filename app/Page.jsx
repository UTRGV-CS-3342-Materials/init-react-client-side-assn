import { Course } from './Course.jsx';

// Mockup: static markup, to be driven by the data from the loader.
export function Page() {
	return (
		<>
			<h1 className="my-4">Build-A-Schedule</h1>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">Course</th>
						<th scope="col">Sections</th>
					</tr>
				</thead>
				<tbody>
					<Course />
					<Course />
				</tbody>
			</table>

			<div className="row my-4">
				<div className="col-auto">
					<form method="POST">
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Course Number" name="course_number" />
							<button type="submit" className="btn btn-primary">
								Add Course
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
