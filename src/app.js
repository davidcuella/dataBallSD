const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// rutas importantes
const jugadorrutas = require('./routes/jugadorrutas');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'mysql-quesofresco.alwaysdata.net',
  user: '283619_free',
  password: 'contrasenasinletras1234',
  port: 3306,
  database: 'quesofresco_databall'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', jugadorrutas);


// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// runeando el servidor
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
