import React, { useEffect, useState } from "react";

const FadeInSections = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <section
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </section>
  );
};

export default FadeInSections;
