import {DataTypes} from "sequelize";
import dataBase from "../../../database/dataBaseConnection.mjs";

const rolePermissionMenuModel =dataBase.define ('RolePermissionMenu', {
    permissionId: {type: DataTypes.BIGINT},
    menuId: {type: DataTypes.BIGINT},
    roleId: {type: DataTypes.BIGINT}
}) 

export default rolePermissionMenuModel