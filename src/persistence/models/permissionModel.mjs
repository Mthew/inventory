import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const permissionModel =dataBase.define ('Permission', {
    permissionName: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
}) 

export default permissionModel