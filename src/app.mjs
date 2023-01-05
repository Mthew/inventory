import express from "express";
import dataBase from "../database/dataBaseConnection.mjs";
import cors from 'cors';
/* class App {

    app;

    constructor() {
        this.app = express();
        this.config();
    };

    config() {
        this.app.set("port", 4000);
    
        this.app.get("/", (req, res) => {
          res.json({ msg: "hola Gonorrea!" });
        });
        
        this.app.listen(this.app.get("port"), () => console.log("App running on port 4000"));
    }
}
 */

const app = express();
const port = 4000;

try {
  await dataBase.authenticate();
  console.log("Se conectó a la base de datos correctamente");
  console.log("Servidor corriendo en el puerto " + port);
  console.log(`http://localhost:${port}`);
  
} catch (error) {
  console.log("Conexión no exitosa "+error);
  
}

app.use(cors())
app.use(express.json())
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:4000`)
  });
export default App;

