export default function Notes({ title, description }) {
  return (
    <div className="notes">
      <div className="notes__title">
        <span>{title}</span>
      </div>

      <div className="notes__description">{description}</div>
    </div>
  );
}
