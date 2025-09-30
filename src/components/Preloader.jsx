import React, { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show preloader on first page load
    const timer = setTimeout(() => setLoading(false), 1500); // adjust duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div className="loader"></div>
    </div>
  );
}

export default Preloader;
