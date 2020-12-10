const foodListModel = require('../Data Access Objects/foodList.dao');

exports.createFoodList = (request, response, next) => {
    try {
        const foodList = request.body.foodList;
    
        foodListModel.create(foodList, (err, foodList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Food List created successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getFoodLists = (request, response, next) => {
    try {
        foodListModel.read({}, (err, foodLists) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    foodLists: foodLists
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getFoodList = (request, response, next) => {
    try {
        foodListModel.read({createdAt: {$gte: request.params.date}}, (err, foodList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                if (foodList[0]) {
                    response.json({
                        foodList: foodList
                    });
                } else {
                    response.json({
                        foodList: null
                    })
                }
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateFoodList = (request, response, next) => {
    try {
        const foodList = request.body.foodList;
        if (foodList.food.length) {
            foodListModel.update({_id: request.params.id}, foodList, (err, foodList) => {
                if (err) {
                    response.json({
                        error: err
                    });
                } else {
                    response.json({
                        message: "Food List updated successfully",
                        gymnasticList: foodList
                    });
                }
            });
        } else {
            foodListModel.delete({_id: request.params.id}, (err, foodList) => {
                if (err) {
                    response.json({
                        error: err
                    });
                } else {
                    response.json({
                        message: "Food List deleted successfully"
                    });
                }
            });
        }
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeFoodList = (request, response, next) => {
    try {
        foodListModel.delete({_id: request.params.id}, (err, foodList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Food List deleted successfully",
                    foodList: foodList
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}