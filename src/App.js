import React from "react";
import "./App.css";
import SignInForm from "./components/SignInForm";
import PromoSection from "./components/PromoSection";

function App() {
  return (
    <div className="app-container">
      <div className="sign-in-section">
        <SignInForm />
      </div>
      <div className="promo-section">
        <PromoSection />
      </div>
    </div>
  );
}

export default App;
