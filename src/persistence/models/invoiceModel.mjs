import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const invoiceModel =dataBase.define ('Invoice', {
  invoiceCode: {type: DataTypes.STRING},
  date: {type: DataTypes.DATE},
  userId: {type: DataTypes.BIGINT},
  status: {type: DataTypes.STRING},
  grossValue: {type: DataTypes.FLOAT},
  netWorth: {type: DataTypes.FLOAT},
  discount: {type: DataTypes.FLOAT},
  taxes: {type: DataTypes.FLOAT},

}) 

export default invoiceModel