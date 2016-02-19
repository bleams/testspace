(function(){
    'use strict';

    angular
        .module('petStoreApp')
        .factory('PetStoreService', PetStoreService);

    function PetStoreService($http){

        var PetStoreFactory = {};

        var config = {
            headers: {
                "Authorization": "api_key",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        },
            apiUrl = 'http://petstore.swagger.io/v2/pet/';


        // function for creating a pet
        PetStoreFactory.sendPetData = function (petDataPost) {
            return $http.post(apiUrl, petDataPost, config);
        };

        // get a pet by its ID
        PetStoreFactory.getPetbyId = function (petId){
            return $http.get(apiUrl + petId)
        };


        return PetStoreFactory;

    }


})();



