import React from 'react';
import OrderStatusStepper from "../component/test-stepper";



class App extends React.Component {
  render() {
    const orderStatusSteps = ['Order Placed', 'In Progress', 'Delivered'];

    return (
      <div>
        <h1>My App</h1>
        <OrderStatusStepper steps={orderStatusSteps} />
      </div>
    );
  }
}

export default App;