var app = angular.module('myApp', []);

app.controller("myCtrl", function ($scope, $http, $compile) {

    $scope.listComponents = [
        {
            type: "Label",
            name: "label1",
            placeholder: "test de Place Holder"
        },
        {
            type: "Label",
            name: "label2",
            placeholder: "Segundo test"
        },
        {
            type: "Combo",
            name: "combo4",
            placeholder: "x"
        },
        {
            type: "Label",
            name: "label3",
            placeholder: "OKOKOKO test"
        }
    ]

    $scope.componentsView = [];
    HeadBuilder.scope = $scope;
    for(var i = 0; i < $scope.listComponents.length; i++){
        HeadBuilder.add($scope.listComponents[i]);
    }
    
});