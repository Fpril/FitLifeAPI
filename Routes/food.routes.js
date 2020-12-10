const foodController = require('../Controllers/food.controller');

module.exports = router => {
    router.post('/create', foodController.createFood);
    router.get('/read', foodController.getAllFood);
    router.get('/read/:name', foodController.getFood);
    router.post('/readByIds', foodController.getFoodByIds);
    router.put('/update/:id', foodController.updateFood);
    router.delete('/delete/:id', foodController.removeFood);
}