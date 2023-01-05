import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const inputDetailModel =dataBase.define ('InputDetail', {
    productId: {type: DataTypes.BIGINT},
    quantity: {type: DataTypes.BIGINT},
    unitPrice: {type: DataTypes.FLOAT},
    totalPrice: {type: DataTypes.FLOAT},
    entryId: {type: DataTypes.BIGINT},

}) 

export default inputDetailModel