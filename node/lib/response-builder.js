

exports.metabuilder = function(request, response) {
    return {
        "request_id": null,
        "current_time": {
            "value": new Date(Date.now()),
            "timestamp": Math.floor(Date.now()/1000)
        },
        "user_uuid": null,
        "api": {
            "service": request.baseUrl,
            "status": response.statusCode
        }
    }
}