const foodListController = require('../Controllers/foodList.controller');

module.exports = router => {
    router.post('/create', foodListController.createFoodList);
    router.get('/read', foodListController.getFoodLists);
    router.get('/read/:id', foodListController.getFoodList);
    router.put('/update/:id', foodListController.updateFoodList);
    router.delete('/delete/:id', foodListController.removeFoodList);
}