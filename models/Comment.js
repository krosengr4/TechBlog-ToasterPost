//! This file contains model for how comments get stored in the db

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// Model for how comments get stored to the db
Comment.init (
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        blogPost_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blogPost',
                key: 'id'
            },
        },
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;