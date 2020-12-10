const foodModel = require('../Data Access Objects/food.dao');

exports.createFood = (request, response, next) => {
    try {
        const food = request.body.food;
    
        foodModel.create(food, (err, food) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Food created successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getAllFood = (request, response, next) => {
    try {
        foodModel.read({}, (err, allFood) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    allFood: allFood
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getFood = (request, response, next) => {
    try {
        foodModel.read({name: request.params.name}, (err, food) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    food: food
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getFoodByIds = (request, response, next) => {
    try {
        const ids = request.body.array.map(id => mongoose.Types.ObjectId(id));
        foodModel.read({_id: {$in: ids}}, (err, food) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    food: food
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateFood = (request, response, next) => {
    try {
        const food = request.body.food;
    
        foodModel.update({_id: request.params.id}, food, (err, food) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Food updated successfully",
                    food: food
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeFood = (request, response, next) => {
    try {
        foodModel.delete({_id: request.params.id}, (err, food) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Food deleted successfully",
                    food: food
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}