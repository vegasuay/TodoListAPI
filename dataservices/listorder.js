//** list mi list */
exports.list = function (model, response,namefind) {
    model.find({username:namefind},
        (error, result) =>{
            if(error){
                console.error(error);
                response.status(500).send(error);
            }

            if(result)
                response.status(200).send(result);
            else
                response.status(301).send('No found');
        }
    )
}

//** create y update mi list */
exports.create = function (model, response, data) {  
    data.forEach(function(obj) { 
        var listorder = _tolistorder(obj, model);
        if (obj.hasOwnProperty('_id')) {
            //update
            model.findById(obj._id,
                (error, todo)=>{
                    if (error){
                        console.error(error);
                        response.status(500).send(error);
                    }
                    
                    todo.precio= obj.precio || todo.precio;
                    todo.count= obj.count || todo.count;
                    todo.sharedusers= obj.sharedusers || todo.sharedusers;
                    todo.save((error, todo)=>{
                        if (error) {
                            console.error(error);
                            response.status(500).send(error)
                        }

                        response.status(200).send(todo);
                    })
            });
        }else{
            //create
            listorder.save((error) =>{
                if(error){
                    console.error(error);
                    response.status(500).send(error);
                    return;
                }

                response.status(200).send(obj);
            });
        }
    });
}

//** delete  */
exports.delete = function (model, response, data){
    data.forEach(function(obj) { 
        model.findByIdAndRemove(obj._id,
            (error,todo) =>{
                if(error){
                    console.error(error);
                    response.status(500).send(error);
                }

                response.status(200).send(todo);
            }
        ) 
    });
}

//AUX
//----------------------------------------------
function _tolistorder(body, ListOrder) {
    return new ListOrder({
        username: body.username,
        listname: body.listname,
        product: body.product,
        precio: body.precio,
        count: body.count,
        sharedusers: body.sharedusers
    });
}