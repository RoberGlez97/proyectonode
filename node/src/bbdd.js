var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "tallerservidores"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  let sql = "SELECT * from datos_usuario where id_usuario = 2";
    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));
    });