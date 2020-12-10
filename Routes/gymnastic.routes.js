const gymnasticController = require('../Controllers/gymnastic.controller');

module.exports = router => {
    router.post('/create', gymnasticController.createGymnastic);
    router.get('/read', gymnasticController.getGymnastics);
    router.get('/read/:name', gymnasticController.getGymnastic);
    router.post('/readByIds', gymnasticController.getGymnasticByIds);
    router.put('/update/:id', gymnasticController.updateGymnastic);
    router.delete('/delete/:id', gymnasticController.removeGymnastic);
}