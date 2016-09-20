app.controller('MainController', ['$scope', function ($scope) {

    $scope.today = new Date();
    $scope.exercises = [

        // create properties of each array object: icon. name and count
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/pushup.jpg',
          name: 'Pushups',
          count: 20
      },
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/squat.jpg',
          name: 'Squats',
          count: 15
      },
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/pullup.jpg',
          name: 'Pullups',
          count: 10
      },
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/row.jpg',
          name: 'Rows',
          count: 10
      },
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/lunge.jpg',
          name: 'Lunges',
          count: 10
      },
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/stepup.jpg',
          name: 'Step Ups',
          count: 10
      },
      {
          icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/situp.jpg',
          name: 'Sit Ups',
          count: 15
      }
    ];

    // this function is called on click of '+' icon to increment the count for the exercise type
    $scope.increase = function ($index) {
        // we have used $index as param to show which iteration you are in when looping

        //$scope.increase. Set it equal to a function that takes in the index of the exercise 
        //that was clicked, and then adds one to that clciked exercise's count propert
        $scope.exercises[$index].count += 1;
    };

    // this function is called on click of '-' icon to decrement the count for the exercise type
    $scope.decrease = function ($index) {
        $scope.exercises[$index].count -= 1;
    };

}]);
