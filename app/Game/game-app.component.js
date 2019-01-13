(function() {
    'use strict';

    angular.module('ultimateClicker').component('game', {
        controllerAs: 'vm',
        controller: function () {
            let vm = this;

            vm.victory = false;
            vm.totalClickCount = 0;

            vm.checkForVictory = function() {
                if(vm.totalClickCount >= 10) {
                    vm.victory = true;
                }
            };

            vm.clickCharacter = function() {
                vm.totalClickCount++;
                vm.checkForVictory();
            };

        },
        templateUrl: 'app/Game/game-app.component.html'
    })
})();
