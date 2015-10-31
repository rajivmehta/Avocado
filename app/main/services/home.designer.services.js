/// <reference path="../../../bower_components/angular/angular.min.js" />
angular.module('avocado.home.service', [])
    .factory('avaocadoHomeService', [function () {
        return {
            test: function () {
                alert('invoked')
            }
        }
    }])


//function test() {
//    var data = [1, 2, 3, 4, 5];

//    for (var i = 0, l = data.length; i < l; i++) {
//        console.log(data[i]);
//    }

//    for (var i = data.length; i >= 0; i--) {
//        console.log(data[i]);
//    }
//}

//test();


//function test() {
//    var data = [1, 2, 3, 4, 5];

//    for (var i = 0, l = data.length; i < l; i++) {

//        console.log(data[i]);
//    }

//    for (var i = data.length; i >= 0; i--) {
//        console.log(data[i]);
//    }
//}


//int[] ary = { 1, 2, 3, 4, 5,6,7,8,9,10 };


//for (int i = 0; i < ary.Length; i++)
//{
//    //Console.Write(ary[i].ToString());
//    Console.Write(ary[ary.Length - 1 - i].ToString());

//}
//Console.Read();