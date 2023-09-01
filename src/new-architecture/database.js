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

export const CurrentLocation = sequelize.define('CurrentLocation', {
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  location_time: {
    type: DataTypes.DATE,
    allowNull: false,
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
  indexes: [
    {
      fields: ['location_time'],
    },
  ],
});
