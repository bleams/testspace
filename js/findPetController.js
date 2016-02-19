(function(){
   'use strict';

    angular
        .module('petStoreApp')
        .controller('findPetController', findPetController);

    findPetController.$inject = ['PetStoreService', '$routeParams'];

    function findPetController(PetStoreService, $routeParams) {
        var vm = this;

        // information coming from the form in our index.html
        vm.petFormData = {};

        // function to add a pet to the store list
        vm.getPet = function() {

            vm.petFormData = {
                'id' : vm.petFormData.id
            };

            PetStoreService.getPetbyId(vm.petFormData.id)
                .then(function (response) {
                    console.log(response);
                    vm.GetResponseData = response.data;
                },
                    function (response) {
                    console.log('error content ', response);
                });

            vm.petFormData = {};

        };

    }



})();
