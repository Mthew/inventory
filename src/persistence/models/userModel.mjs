import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const userModel =dataBase.define ('User', {
    userName: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    personId: {type: DataTypes.BIGINT},
    idRole: {type: DataTypes.BIGINT},
}) 

export default userModel