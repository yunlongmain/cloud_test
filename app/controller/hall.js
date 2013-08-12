/**
 * Created with JetBrains WebStorm.
 * User: yunlong
 * Date: 13-8-1
 * Time: 下午5:18
 * To change this template use File | Settings | File Templates.
 */
sumeru.router.add(
    {
        pattern: '/hall',
        action : 'App.hall'
    }
);

App.hall = sumeru.controller.create(function(env, session){
    var getMsgs = function(){
        session.messages = env.subscribe('pub-message', function(msgCollection){
            //manipulate synced collection and bind it to serveral view blocks.
            dataP = "1111511111<br/>22222222<br/>33333333";

            session.bind('message-hall', {
                data    : msgCollection.find(),
                data2 : dataP
            });

        });
    };
    //onload is respond for handle all data subscription
    env.onload = function(){
        return [getMsgs];
    };

    //sceneRender is respond for handle view render and transition
    env.onrender = function(doRender){
        doRender('hall', ['rotate', 'left']);
    };

    //onready is respond for event binding and data manipulate
    env.onready = function(){
        session.event('message-hall', function(){
            var messageubmitButton = document.getElementById('messageSubmit');
            var clearHistoryButton = document.getElementById('clearHistory');
            messageubmitButton.addEventListener('click', submitMessage);
            clearHistoryButton.addEventListener('click',clearHistory);
        });
    };

    var submitMessage = function(){
        var input = document.getElementById('messageInput'),
            inputVal = input.value.trim();
        if (inputVal == '') {
            return false;
        };
        session.messages.add({
            content : inputVal
        });
        session.messages.save();
        input.value = '';
    };

    var clearHistory = function(){
        session.messages.destroy();
        session.messages.save();
    }
});