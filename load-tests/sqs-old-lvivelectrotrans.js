import http from 'k6/http';
import { generateTelemetry } from './data.js';
import { generateScenario } from './scenario.js';

// Each car sends 1 request per second
export const options = generateScenario({ numberOfCars: 85 });

const url = 'http://52.59.220.151:8080/telemetry';

export default function () {
  const payload = generateTelemetry();

  const response = http.post(url, JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== 200) {
    console.error(`Received HTTP ${response.status}, body: ${JSON.stringify(response.body)}`);
  }
}
