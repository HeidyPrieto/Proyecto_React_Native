const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs_base1',

    authPlugins: {
        mysql_clear_password: () => Buffer.from('root', 'utf-8'),
    }

});
db.connect(function (err) {
    if (err) throw err;
    console.log('Base de datos conectada');

});
module.exports = db; 