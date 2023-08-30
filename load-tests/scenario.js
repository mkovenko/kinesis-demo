export const generateScenario = ({ numberOfCars }) => ({
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      duration: '30s',
      rate: numberOfCars,
      timeUnit: '1s',
      preAllocatedVUs: 1000,
      maxVUs: 3000,
    },
  },
});
