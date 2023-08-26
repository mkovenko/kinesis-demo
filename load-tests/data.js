export const generateTelemetry = () => ({
  car_id: Math.ceil(Math.random() * 100000000),
  created_at: (new Date()).getTime(),
  coordinates: {
    latitude: Math.random() * 180 - 90,
    longitude: Math.random() * 360 - 180,
  },
});
