import { Sequelize } from "sequelize";

const dataBase= new Sequelize('Inventory', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default  dataBase