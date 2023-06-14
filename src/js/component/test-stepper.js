import React from 'react';
import '../../styles/orderStatusStepper.css';

const OrderStatusStepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper-point ${index <= currentStep ? 'active' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default OrderStatusStepper;