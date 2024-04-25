// import React from 'react'
import "./SignUpBenefits.css";
import HardwareIcon from "@mui/icons-material/Hardware";

const SignUpBenefits = () => {
  const benefits = [
    "Learn from over 50 DIY topics",
    "Earn reputation by helping others",
    "Build your own FixIt community",
    "Make your DIY project dream a reality! "
  ];

  return (
    <div className="sign-up-benefits-container">
      <span className="sign-up-title">Sign up today!</span>
      {benefits.map((benefit) => (
        <div key={benefit} className="sign-up-benefit-encasing">
          <div className="hardware-icon">
            <HardwareIcon />
          </div>
          <div className="benefit-text">{benefit}</div>
        </div>
      ))}
    </div>
  );
};

export default SignUpBenefits;
