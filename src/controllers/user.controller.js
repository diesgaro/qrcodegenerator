const controller = {};
const { v4: uuidv4 } = require('uuid');
const qrcode = require('../utillities/qrcode');
const router = require('../routes/user.routes');

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users;', (err, rows) => {
            if (err) {
                res.json(err);
            }

            for (let i = 0; i < rows.length; i++){
                //console.log("CALL:: "+qrcode.qr_generator(rows[i].url));
                const code = qrcode.qr_generator(rows[i].url);
                
                const mycode = code.then((result) => {
                    console.log(result);
                });
                
                rows[i].qrcode = mycode;
                console.log('hey::'+rows[i].qrcode);
                
            }

            //console.log(rows[0].url);
            res.render('user.view.ejs', {
                data: rows
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    data.code = uuidv4();
    data.url = 'localhost:3000/'+data.code;

    //console.log(data);

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO users SET ?', [data], (err, rows) => {
            if (err) {
                res.json(err);
            }
            //console.log(rows);
            res.redirect('/');
        });
    });
};

module.exports = controller;