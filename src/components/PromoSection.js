import React from "react";
import "./PromoSection.css";

function PromoSection() {
  return (
    <div className="promo-content">
      <div className="logo">
        <button>Spark</button>
      </div>
      <p>Learn more about Air Drive on <a href="https://spark.pl" target="_blank" rel="noreferrer">Spark.pl</a></p>
    </div>
  );
}

export default PromoSection;
