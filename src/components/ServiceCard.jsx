

function ServiceCard({
  title,
  description,
  icon,
  buttonText,
  isAvailable,
  onSelect,
}) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>

      <h2 className="service-title">{title}</h2>

      <p className="service-description">{description}</p>

      <p
        className={
          isAvailable
            ? "service-status available"
            : "service-status unavailable"
        }
      >
        {isAvailable ? "Available" : "Not Available"}
      </p>

      <button
        type="button"
        className="service-button"
        onClick={onSelect}
        disabled={!isAvailable}
      >
        {isAvailable ? buttonText : "Unavailable"}
      </button>
    </article>
  );
}

export default ServiceCard;