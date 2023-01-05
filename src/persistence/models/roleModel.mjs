import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const roleModel =dataBase.define ('Role', {
    roleName: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
}) 

export default roleModel