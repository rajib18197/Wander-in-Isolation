"use client";

export function AlgorithmSteps({ title, children }) {
  return (
    <section className="algorithm-steps">
      {title && <h3 className="algorithm-title">{title}</h3>}
      <div className="algorithm-body">{children}</div>
    </section>
  );
}

export function Step({ title, children }) {
  return (
    <div className="algorithm-step">
      <h4 className="step-title">{title}</h4>
      <div className="step-content">{children}</div>
    </div>
  );
}
