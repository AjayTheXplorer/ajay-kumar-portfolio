function Credibility() {
  const capabilities = [
    'Android Engineering',
    'Realtime Systems',
    'IoT',
    'Product Engineering',
  ];

  return (
    <section className="credibility">
      <div className="container credibility__inner">
        <p className="credibility__label">
          ENGINEERING ACROSS
        </p>

        <div className="credibility__items">
          {capabilities.map((item) => (
            <span key={item} className="credibility__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credibility;