// Mockup: one section -- a select for its instructor and an X to delete it.
export function Section() {
	return (
		<div className="col-auto">
			<div className="input-group">
				<select className="form-select" defaultValue={12}>
					<option value={12}>Ayati</option>
					<option value={7}>Gao</option>
					<option value={2}>Kim</option>
					<option value={23}>Schweller</option>
					<option value={31}>Tomai</option>
					<option value={3}>Wylie</option>
				</select>
				<button type="button" className="btn btn-outline-danger" aria-label="Delete section">
					✕
				</button>
			</div>
		</div>
	);
}
