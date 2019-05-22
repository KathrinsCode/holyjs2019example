import React from 'react';

class StepContent extends React.Component {

  render() {
    const {step, maxStep} = this.props;

    return (
      <div style={{flexGrow: 1}}>
        {step < maxStep+1 ? "Какой-то текст": "Конец"}
      </div>
    )
  }
}

export default StepContent
