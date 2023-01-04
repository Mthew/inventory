import express from "express";

class App {

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

export default App;

