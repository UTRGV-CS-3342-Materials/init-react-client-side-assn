// Finished, ready to use: wrap anything that can be busy saving. While busy is true,
// a translucent cover with a spinner sits on top of it (styled by .busy-overlay in main.css).
//   <Pending busy={saving}>...</Pending>
export function Pending({ busy, children }) {
	return (
		<div className="position-relative">
			{children}
			{busy && (
				<div className="busy-overlay">
					<div className="spinner-border spinner-border-sm text-primary" role="status" />
				</div>
			)}
		</div>
	);
}
