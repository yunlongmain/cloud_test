/**
 * Created with JetBrains WebStorm.
 * User: yunlong
 * Date: 13-8-1
 * Time: 下午5:16
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(fw){
    fw.publish('message', 'pub-message', function(callback){
        var collection = this;
        collection.find({}, {}, function(err, items){
            callback(items);
        });
    });
}


//module.exports = function(fw){
//    fw.publishPlain('webData', 'pub-message', function(callback){
//        var http = require('http');
//        var opts = {
//            host: "http://www.xiangha.com",
//            port: 80,
//            path:"/caipu/15589691.html"
//        }
//
//        allData ="";
//        var req=http.get(opts, function(res) {
//            res.on('data',function(data){
//                allData += data;
//            })
//            res.on("end",function(){
//                callback(allData);
//            });
//        });
//
//        req.end();
//
//    });
//}