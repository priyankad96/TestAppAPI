const {Router} = require('express')
var router = new Router()
const {post, get, put, deleteUser, getUser} = require('../controller/user.controller');

router.post('/', (req, res) => {
    console.log("body is", req.body)
    post(req.body, (err, result) => {
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        } else {
            res.json(result)
            res.statusCode = 200;
            console.log("result is", result)
        }
    })
});


//get user by its name and password for login
router.post('/getuser', (req, res) => {
    console.log("body is user and pass", req.body)
    getUser(req.body, (err, result) => {
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
            res.send({'sucess': false, 'message': 'could not connect with db'});
        }/*else{
            res.json(result)
            res.statusCode = 200;
            console.log("result is" ,result[0][0])
            console.log(typeof(result));
        }*/

        if (result[0][0]) {
            res.send({'success': true, 'user': result[0][0]});
            // res.json(result);
            res.statusCode = 200;
            console.log("result is", result[0][0])
            console.log(result);
        } else {
            res.send({'success': false, 'message': 'User not found'});
        }
    })
});

router.get('/', (req, res) => {

    get((err, result) => {
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
            // res.send({'sucess':false,'message':'could not connect with db'});
        } else {
            res.json(result)
            res.statusCode = 200;
            console.log("result is", result)
        }
    })
});


router.put('/', (req, res) => {
    console.log("body is", req.body)
    put(req.body, (err, result) => {
       let f=result[0].affectedRows;
        console.log(f);
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
            res.send({'sucess': false, 'message': 'could not connect with db'});
        } else if (f>0) {
          // res.json(result)
            res.statusCode = 200;
            console.log("result is", result[0]);
            res.send({'success': true});
        } else if(f===0){
            console.log("result is--", result[0])
            res.send({'success': false, 'message': 'User not found'});
        }

    })
});

router.delete('/:id', (req, res) => {
    console.log("body is", req.body)
    deleteUser(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        } else {
            res.json(result)
            res.statusCode = 200;
            console.log("result is", result)
        }
    })
});

module.exports = router;
