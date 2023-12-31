const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const User = require('./User');
const Branch = require('./Branch')
class Story extends Model {}

Story.init(
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    user_id:{
      type: DataTypes.UUID,
      references: {
        model: 'user',
        key: 'id'
      },
      allowNull: false
    },
    reference_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    story_title: {
        type: DataTypes.STRING(24),
        allowNull: false
    },
    start_branch: {
        type: DataTypes.UUID,
        allowNull: true,
        // references: {
        //   model: 'branch',
        //   key: 'id'
        // }  
    },
    story_content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'story',
  }
);

module.exports = Story;
