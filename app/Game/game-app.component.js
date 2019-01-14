(function() {
    'use strict';

    angular.module('ultimateClicker').component('game', {
        controllerAs: 'vm',
        controller: function () {
            let vm = this;

            vm.victory = false;
            vm.message = "Click around and see who else you can unlock!";
            vm.totalClickCount = 0;


            vm.checkForVictory = function() {
                if(vm.totalClickCount >= 50) {
                    vm.updateMessage();
                    vm.victory = true;
                }
            };

            vm.clickCharacter = function() {
                vm.totalClickCount++;
                vm.checkForVictory();
            };

            vm.updateMessage = function () {
                vm.message = "Wow you unlocked all the characters!";
            };

        },
        templateUrl: 'app/Game/game-app.component.html'
    })
})();
