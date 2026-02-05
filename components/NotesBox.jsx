export default function NotesBox({ title, children }) {
  return (
    <div className="notes">
      <div className="notes__title">
        <span>{title}</span>
      </div>

      <div className="notes__description">{children}</div>
    </div>
  );
}
