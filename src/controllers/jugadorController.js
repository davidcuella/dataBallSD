const controller = {};
//tabla jugador
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM quesofresco_databall.jugador', (err, jugadores) => {
     if (err) {
      res.json(err);
     }
     res.render('jugadores', {
        data: jugadores
     });
    });
  });
};

controller.save = (req, res) => {
  
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO jugador set ?', data, (err,jugador) => {
      console.log(jugador)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM jugador WHERE id = ?", [id], (err, rows) => {
      res.render('jugadores_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newJugador = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE jugador set ? where id = ?', [newJugador, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM jugador WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}


module.exports = controller;


