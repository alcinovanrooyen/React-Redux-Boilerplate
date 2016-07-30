import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CalculatorComponentButton from './components/CalculatorButtons.js';
import * as CalculatorActions from './actions/CalculatorActions.js';

const { number, object } = React.PropTypes;

const Calculator = ({ answer, actions }) => (
  <div>
    <h2>Calculator App </h2>
    <p>
     That took me so long to create, ai! Hope this react thing is worth it
    </p>

    <input type="number" id="num_1"/>
    <input type="number" id="num_2"/>
 
 	<CalculatorComponentButton btnText="Add" btnAction={actions.add} />
 	<CalculatorComponentButton btnText="Subtract" btnAction={actions.subtract} />
 	<CalculatorComponentButton btnText="Multiply" btnAction={actions.multiply} />
  <CalculatorComponentButton btnText="Divide" btnAction={actions.divide} />
 	<CalculatorComponentButton btnText="CLEAR" btnAction={actions.clear} />

 	<p>The answer is: {answer} </p>
   </div>
);

const mapStateToProps = (state) => (
  { answer: state.CalculatorReducer.run }
);

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(CalculatorActions, dispatch),
  }
);

Calculator.propTypes = {
  answer: number.isRequired,
  actions: object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
