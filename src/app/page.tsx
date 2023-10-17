import React from "react";
import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  return (
    <div className="question">
      <h1>Welcome to Flavio&apos;s Design System</h1>
      <h4>Which example do you want to see?</h4>
      <div>
        <PrimaryButton to={'/marketing'} label={'Marketing'} />
        <PrimaryButton to={'/construction'} label={'Construction'} />
      </div>
    </div>
  );
};
