import { Buffer } from 'node:buffer';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  pool: {
    max: 10,
    min: 5,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});
await sequelize.authenticate();

const CurrentLocation = sequelize.define('CurrentLocation', {
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  location_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false,
  },

}, {
  createdAt: false,
  updatedAt: false,
});

// await CurrentLocation.sync({ force: true });

export const handler = async ({ Records }) => {
  const time = new Date();

  const promises = Records.map(record => {
    const payload = JSON.parse(Buffer.from(record.kinesis.data, 'base64').toString());

    return CurrentLocation.upsert({
      car_id: payload.car_id,
      location_time: new Date(payload.created_at),
      latitude: payload.coordinates.latitude,
      longitude: payload.coordinates.longitude,
    });
  })

  await Promise.all(promises);

  console.log(`${Records.length} received. Processing time: ${new Date().getTime() - time} ms`);
};
