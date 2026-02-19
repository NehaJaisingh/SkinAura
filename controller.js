// Controller for SkinAura Application
app.controller("SkinAuraController", function ($scope) {

    // Firebase reference
    var database = firebase.database();
    var ref = database.ref("skinaura_customers");

    // Form object
    $scope.customer = {};

    // List to display data
    $scope.customersList = [];

    // Track edit mode
    $scope.selectedId = null;

    // ---------------- CREATE ----------------
    $scope.addCustomer = function () {
        ref.push($scope.customer);
        $scope.customer = {};
    };

    // ---------------- READ ----------------
    ref.on("value", function (snapshot) {
        $scope.customersList = [];

        snapshot.forEach(function (child) {
            var data = child.val();
            data.id = child.key;
            $scope.customersList.push(data);
        });

        $scope.$apply();
    });

    // ---------------- EDIT ----------------
    $scope.editCustomer = function (cust) {
        $scope.customer = angular.copy(cust);
        $scope.selectedId = cust.id;
    };

    // ---------------- UPDATE ----------------
    $scope.updateCustomer = function () {
        ref.child($scope.selectedId).set($scope.customer);
        $scope.customer = {};
        $scope.selectedId = null;
    };

    // ---------------- DELETE ----------------
    $scope.deleteCustomer = function (id) {
        ref.child(id).remove();
    };

});
