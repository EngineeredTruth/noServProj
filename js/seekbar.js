angular.module('noServApp').directive('seekbar', function(){
  return{
    templateUrl: '../views/seekbar.html',
    controller: function($scope) {
      $scope.seekVal = 0;
      $scope.seekVal2 = 0;
      $scope.seekVal3 = 0;
      $scope.seekVal4 = 0;
      $scope.seekVal5 = 0;

      $scope.test = "test";

      $scope.calculate = function(a,b,c,d,e,lowStr,highStr,billStr) {
        $scope.errorMessage = " ";
        console.log("billstr " + billStr)
        console.log("high: " + highStr);
        console.log("low: " + lowStr)
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
        // console.log(e);
        var billTotal = parseInt(billStr);
        console.log("BillTotal " + typeof billTotal);
        var avg = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e)) / 5;
        var low = parseInt(lowStr);
        var high = parseInt(highStr);
        // console.log("avg: " + avg);
        // console.log("low: " + low);
        // console.log("high: " + high);
        var mult = (high - low) / 5;
        // console.log("mult: " + mult);
        var getTipPerc = function (low, mult, avg){
          var tip = low + (mult * avg)
          tip = tip / 100;
          return tip;
        }
        var tipPerc = getTipPerc(low,mult,avg);
        $scope.tipPerc = (tipPerc * 100).toFixed(1) + "%"
        // console.log("tipPerc: " + tipPerc)
        var getTipAmt = function(billTotal, tipPerc) {
          // console.log(typeof billTotal)
          // console.log(typeof tipPerc)
          var tipAmt = billTotal * tipPerc;
          //console.log(typeof tipAmtStr)
          // var tipAmt = parseFloat(tipAmtStr)
          // console.log("tipss" + typeof tipAmt)
          return tipAmt;
        }
        var tipAmt = getTipAmt(billTotal, tipPerc);
        $scope.tipAmt = "$" + tipAmt.toFixed(2);
        // console.log("tipAmt: " + tipAmt)
        // console.log("tipAmt: " + typeof tipAmt)
        var getFinalTotal = function(billTotal, tipAmt) {
          // console.log(billTotal, tipAmt)
          var total = billTotal + tipAmt;
          return total.toFixed(2);
        }
        var finalTotal = getFinalTotal(billTotal, tipAmt);
        $scope.finalTotal = "$" + finalTotal;
        // console.log("finalTotal: " + typeof finalTotal);

        var errorFunc = function(str){
          $scope.finalTotal = " ";
          $scope.tipAmt = " ";
          $scope.tipPerc = " ";
          return str;
        }
        if (billTotal === undefined) {
          $scope.errorMessage = errorFunc("Please enter a valid bill total.");
        } else if (billTotal === NaN) {
          $scope.errorMessage = errorFunc("Please enter a valid bill total.");
        } else if (billStr === undefined) {
          $scope.errorMessage = errorFunc("Please enter a valid bill total.");
        } else if (billStr === NaN) {
          $scope.errorMessage = errorFunc("Please enter a valid bill total.");
        } else if (low > high){
          $scope.errorMessage = errorFunc("Low value cannot be higher than the high value.");
        } else if (low === high){
          $scope.errorMessage = errorFunc("Low and High values cannot be the same.");
        } else if (low === null && high === null) {
          $scope.errorMessage = errorFunc("Please select a value for Low and High");
        } else if (lowStr === null) {
          $scope.errorMessage = errorFunc("Please select a value for Low");
        } else if (highStr === null) {
          $scope.errorMessage = errorFunc("Please select a value for High");
        }
      }
      $scope.test = function(a) {
        $scope.cal2 = parseInt(a) + 5;
      }
      $scope.clicked = function() {
        console.log("cliked")
      }


      $scope.lowData = {
        model: null,
        options: [
          {name: '0%', value: 0},
          {name: '5%', value: 5},
          {name: '10%', value: 10},
          {name: '15%', value: 15},
          {name: '20%', value: 20}
        ],
      }
      $scope.highData = {
        model: null,
        options: [
          {name: '15%', value: 15},
          {name: '20%', value: 20},
          {name: '25%', value: 25},
          {name: '30%', value: 30},
          {name: '35%', value: 35}
        ],
      }
      // $scope.high = $scope.highData.model;
      // console.log($scope.high);
      // $scope.low = $scope.lowData.model;
      // console.log($scope.low);
    }
  }
});
