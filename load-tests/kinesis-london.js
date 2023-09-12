import http from 'k6/http';
import { generateTelemetry } from './data.js';
import { generateScenario } from './scenario.js';

// Each car sends 1 request per second
// export const options = generateScenario({ numberOfCars: 10000 });
export const options = generateScenario({ numberOfCars: 10000 });

const url = 'https://hdehac1uhf.execute-api.eu-central-1.amazonaws.com/demo/telemetry';

export default function () {
  const payload = generateTelemetry();

  const response = http.post(url, JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== 200) {
    console.error(`Received HTTP ${response.status}, body: ${JSON.stringify(response.body)}`);
  }
}
