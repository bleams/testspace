(function(){
   'use strict';

    angular
        .module('petStoreApp')
        .controller('addNewPetController', addNewPetController);

    addNewPetController.$inject = ['PetStoreService'];

    function addNewPetController(PetStoreService) {
        var vm = this;

        // a list of elements to be displayed in the table
        // the new elements will be added in that list
        vm.petsList = [{
            'name' : 'testDog'
        },{
            'name' : 'lassie'
        }];

        // information coming from the form in our index.html
        vm.petFormData = {};

        // function to add a pet to the store list
        vm.addNewPet = function() {

            // add a pet to the list by pushin a new object
            vm.petsList.push({
                'name': vm.petFormData.name
            });

            vm.PostData = {
                'name': vm.petFormData.name
            };

        /*    vm.PostData = $.param({
                name : vm.petFormData.name
            });*/

            PetStoreService.sendPetData(vm.PostData)
                .then(function (response) {
                    vm.PostResponseData = response.data;
                },
                    function (response) {
                    console.log('error content ', response);
                });

            vm.petFormData = {};

        };

    }



})();
