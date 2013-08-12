/**
 * Created with JetBrains WebStorm.
 * User: yunlong
 * Date: 13-7-30
 * Time: 下午2:34
 * To change this template use File | Settings | File Templates.
 */
sumeru.router.add(

    {
        pattern: '/testpage',
        action: 'App.testpage'
    }

);


App.testpage = sumeru.controller.create(function(env, session){

    env.onrender = function(doRender){
        doRender("testpage", ['push','down']);
    };

});