import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const invoiceDetailModel =dataBase.define ('InvoiceDetail', {
  invoiceId: {type: DataTypes.BIGINT},
  productId: {type: DataTypes.BIGINT},
  quantity: {type: DataTypes.BIGINT},
  unitPrice: {type: DataTypes.FLOAT},
  total: {type: DataTypes.FLOAT},
  discount: {type: DataTypes.FLOAT},

}) 

export default invoiceDetailModel