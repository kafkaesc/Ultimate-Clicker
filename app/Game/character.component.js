(function() {
    'use strict';

    angular.module('ultimateClicker').component('character', {
        bindings: {
            name: '@',
            onClick: '&'
        },
        controllerAs: 'vm',
        controller: function() {
            let vm = this;

            vm.characterClickCount = 0;
            vm.characterSprite = '';

            vm.$onInit = function() {
                switch(vm.name) {
                    case 'Bubblegum': vm.characterSprite = 'content/images/char_bubblegum.png'; break;
                    case 'Capt. Birdman': vm.characterSprite = 'content/images/char_captainbirdman.png'; break;
                    case 'Danky Kang': vm.characterSprite = 'content/images/char_dankykang.png'; break;
                    case 'Dinosaur': vm.characterSprite = 'content/images/char_dinosaur.png'; break;
                    case 'Fox': vm.characterSprite = 'content/images/char_fox.png'; break;
                    case 'Jiggy Withit': vm.characterSprite = 'content/images/char_jiggywithit.png'; break;
                    case 'Louie G': vm.characterSprite = 'content/images/char_louie.png'; break;
                    case 'Mauricio': vm.characterSprite = 'content/images/char_mauricio.png'; break;
                    case 'Ness': vm.characterSprite = 'content/images/char_ness.png'; break;
                    case 'Sammy': vm.characterSprite = 'content/images/char_sammy.png'; break;
                    case 'Sparkrat': vm.characterSprite = 'content/images/char_sparkrat.png'; break;
                    case 'Zorldo': vm.characterSprite = 'content/images/char_zorldo.png'; break;
                    default: break;
                }
            };

            vm.click = function() {
                vm.characterClickCount++;
                vm.onClick()();
            };
        },
        templateUrl: 'app/Game/character.component.html'
    })
})();
