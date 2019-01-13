(function() {
    'use strict';

    angular.module('ultimateClicker').component('character', {
        bindings: {
            name: '@',
            onClick: '&'
        },
        controllerAs: 'vm',
        controller: function() {
            var vm = this;

            vm.characterClickCount = 0;

            vm.click = function() {
                vm.characterClickCount++;
                vm.onClick()();
            };
        },
        templateUrl: 'app/Game/character.component.html'
    })
})();
