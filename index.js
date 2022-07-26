import express from 'express';
import router from './routes/index.js';

const app = express();

//definit puerto
const port = process.env.PORT || 4000; 


// habilitar PUG
app.set('view engine', 'pug');

// obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();

})

//definir la carpeta publica
app.use(express.static('public'))

//agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`el servidor ya esta funcionando en el puerto ${port}`)
})

