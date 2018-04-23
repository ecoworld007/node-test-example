const express = require('express');

let app = express();

app.get('/',(req, res) => {
    res.status(404).send({
        error: 'Page not found'
    });
});

app.get('/users',(req, res) => {
    res.send([{
        name: 'Zoro'
    },{
        name: 'Mike'
    },{
        name: 'Himanshu'
    }]);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

module.exports = {
    app
};