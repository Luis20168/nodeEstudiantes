

import express from "express";
import router from "./routes/rutas.routes.js"
import cors from "cors"
import bd from "./bases/mibase.js"




const app= express();
app.use(cors());

app.set('port', 3000);

app.use('/user', router);






app.listen(app.get('port'), ()=>{
    console.log("server on port", app.get('port'));
})


try{
    await bd.authenticate();
    console.log('base de datos conectada', )
}catch(error){
    console.log(error);

}



