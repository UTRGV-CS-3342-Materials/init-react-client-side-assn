import { Section } from './Section.jsx';

// Mockup: one table row -- the course number, its sections, and an "Add Section..." select.
export function Course() {
	return (
		<tr>
			<th scope="row">1370</th>
			<td>
				<div className="row g-2">
					<Section />
					<Section />

					<div className="col-auto">
						<select className="form-select" defaultValue={-1}>
							<option disabled value={-1}>
								Add Section...
							</option>
							<option value={12}>Ayati</option>
							<option value={7}>Gao</option>
							<option value={2}>Kim</option>
							<option value={23}>Schweller</option>
							<option value={31}>Tomai</option>
							<option value={3}>Wylie</option>
						</select>
					</div>
				</div>
			</td>
		</tr>
	);
}
