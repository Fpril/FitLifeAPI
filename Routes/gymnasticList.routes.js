const gymnasticListController = require('../Controllers/gymnasticList.controller');

module.exports = router => {
    router.post('/create', gymnasticListController.createGymnasticList);
    router.get('/read', gymnasticListController.getGymnasticLists);
    router.get('/read/:date', gymnasticListController.getGymnasticList);
    router.put('/update/:id', gymnasticListController.updateGymnasticList);
    router.delete('/delete/:id', gymnasticListController.removeGymnasticList);
}