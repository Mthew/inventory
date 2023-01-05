import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const productModel =dataBase.define ('Product', {
    sku: {type: DataTypes.STRING},
    productName: {type: DataTypes.STRING},
    quantity: {type: DataTypes.BIGINT},
    minimunQuantity: {type: DataTypes.BIGINT},
    purchasePrice: {type: DataTypes.FLOAT},
    salePrice: {type: DataTypes.FLOAT},
}) 

export default productModel