const CalculatorRoute = {
  path: 'calculator',
  title: 'Calculator',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Calculator.js').default);
    });
  },
};

export default CalculatorRoute;

