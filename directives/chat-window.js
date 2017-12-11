/**
 * Created by Dipam on 12/11/2017.
 */
app.directive("chatWindow", function(){
   return {
       restrict: "E",
       scope: {
           sender: "<",
           messages: "=",
           closeWindow: "&"
       },
       replace:true,
       templateUrl : "templates/chat-window.html",
       link: function(scope, element, attr){
            scope.send = function(msgToSend){
                var message = new Message(scope.sender.id, msgToSend, scope.sender.name);
                scope.messages.push(message);
                element.find("textarea").val("");
            };
           scope.close = function(){
               scope.closeWindow({sender: scope.sender});
           }
       }
   }
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                if (event.ctrlKey) {
                    $(this).val( $(this).val() + "\n" );
                }
                else {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });
                }
                event.preventDefault();
            }
        });
    };
});