var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.controllersStatus = 'Working';
    var controller = this;
    
    controller.friends = [];
    
    controller.addFriend = function(){
        controller.friends.push(controller.newFriend);
        controller.newFriend = "";
    }
    
}