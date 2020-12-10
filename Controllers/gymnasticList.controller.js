const gymnasticListModel = require('../Data Access Objects/gymnasticList.dao');
const gymnasticModel = require('../Data Access Objects/gymnastic.dao');

exports.createGymnasticList = (request, response, next) => {
    try {
        const gymnasticList = request.body.gymnasticList;
    
        gymnasticListModel.create(gymnasticList, (err, gymnasticList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic List created successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnasticLists = (request, response, next) => {
    try {
        gymnasticListModel.read({}, (err, gymnasticLists) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    gymnasticLists: gymnasticLists
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnasticList = (request, response, next) => {
    try {
        gymnasticListModel.read({createdAt: {$gte: request.params.date}}, async (err, gymnasticList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {     
                const gymnastics = gymnasticList[0].gymnastics;
                const todayList = [];
                for (obj of gymnastics) {
                    await gymnasticModel.read({_id: obj.id}, (err, gymnastic) => {
                        if (err) {
                            response.json({
                                error: err
                            });
                        } else {
                            const newObj = {
                                id: gymnastics[0].id,
                                name: gymnastic[0].name,
                                times: obj.times,
                                units: gymnastic[0].units
                            }
                            todayList.push(newObj);
                        }
                    });
                }
                response.json({
                    gymnasticList: {
                        gymnasticObj: gymnasticList[0],
                        list:todayList
                    }
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateGymnasticList = (request, response, next) => {
    try {
        const gymnasticList = request.body.gymnasticList;
        if (gymnasticList.gymnastics.length) {
            gymnasticListModel.update({_id: request.params.id}, gymnasticList, (err, gymnasticList) => {
                if (err) {
                    response.json({
                        error: err
                    });
                } else {
                    response.json({
                        message: "Gymnastic List updated successfully",
                        gymnasticList: gymnasticList
                    });
                }
            });
        } else {
            gymnasticListModel.delete({_id: request.params.id}, (err, gymnasticList) => {
                if (err) {
                    response.json({
                        error: err
                    });
                } else {
                    response.json({
                        message: "Gymnastic List deleted successfully",
                        gymnasticList: gymnasticList
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

exports.removeGymnasticList = (request, response, next) => {
    try {
        gymnasticListModel.delete({_id: request.params.id}, (err, gymnasticList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic List deleted successfully",
                    gymnasticList: gymnasticList
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}