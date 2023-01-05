import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";


const personModel =dataBase.define ('Person', {
    name: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
    cellPhoneNumber: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    documentType: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
}) 

export default personModel