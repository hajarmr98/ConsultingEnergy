const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 2626;

//El back va a tener un nodemailer que envíe la info contenida en el formulario
//Colección de imagenes o se pueden enviar directamente?
//Base de datos no relacional para las opiniones

app.get('/', (req, res) => {
	let chiste1=" - Mamá, mamá, los spaghetti se están pegando\n - Déjalos que se maten"
	res.send(chiste1);
});




app.listen(port, () => console.log(`Escuchando por el puerto ${port} :)`));
