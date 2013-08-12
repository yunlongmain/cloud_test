/**
 * Created with JetBrains WebStorm.
 * User: yunlong
 * Date: 13-8-1
 * Time: 下午5:15
 * To change this template use File | Settings | File Templates.
 */
Model.message = function(exports){
    exports.config = {
        fields : [
            {name: 'content', type: 'text'},
            {name: 'time', type: 'datetime',defaultValue: 'now()'}
        ]
    };
    
};