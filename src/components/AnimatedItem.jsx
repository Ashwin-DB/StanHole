import React, { useEffect, useRef, useState } from "react";

function AnimatedItem({ children, className = "" }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} animate-item ${visible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default AnimatedItem;
