/**
 * Created by Dipam on 12/11/2017.
 */
app.controller("LandingController", ["$scope", function($scope){
    $scope.chatBoxes = [];
    $scope.persons = [];
    $scope.personName = "";
    $scope.addPerson = function(personName){
        $scope.persons.push(new Person(personName));
        $scope.personName = "";
    };

    $scope.addChatBox = function(person){
        if($scope.chatBoxes.indexOf(person)<0)
            $scope.chatBoxes.push(person);
    };

    $scope.removeChatBox = function(person){
        var index = $scope.chatBoxes.map(function(s){
            return s["id"];
        }).indexOf(person.id);
        if(index>=0)
            $scope.chatBoxes.splice(index, 1);
    };

    $scope.messages = [];
    $scope.addPerson("Dipam");
    $scope.addPerson("Sachin");
    $scope.addPerson("Bhupendra");
    $scope.addPerson("Somnath");
}]);