import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const inputModel =dataBase.define ('Input', {
    dateEntry: {type: DataTypes.DATE},
    invoiceNumber: {type: DataTypes.BIGINT},
    total: {type: DataTypes.FLOAT},
    providerId: {type: DataTypes.BIGINT},

}) 

export default inputModel