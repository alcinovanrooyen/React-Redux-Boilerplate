import React from 'react';

const { string, func } = React.PropTypes;

const CalculatorComponentButton = ({
  btnAction,
  btnText,
  }) => (
  <div>
    <button onClick={btnAction}>{btnText}</button>
  </div>
);

CalculatorComponentButton.propTypes = {
  btnAction: func,
  btnText: string.isRequired,
};

export default CalculatorComponentButton;
