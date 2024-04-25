// import React from 'react'
import "./SignUpBenefits.css";
import HardwareIcon from "@mui/icons-material/Hardware";

const SignUpBenefits = () => {
  const benefits = [
    "Learn from over 50 DIY topics",
    "Earn reputation by helping others",
    "Build a FixIt community",
    "Make your DIY project dream a reality! "
  ];

  return (
    <div className="sign-up-benefits-container">
      <span>Why not sign up today?</span>
      {benefits.map((benefit) => (
        <div key={benefit}>
          <HardwareIcon />
          {benefit}
        </div>
      ))}
    </div>
  );
};

export default SignUpBenefits;
