import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const menuModel =dataBase.define ('Menu', {
    name: {type: DataTypes.STRING},
    route: {type: DataTypes.STRING}
}) 

export default menuModel