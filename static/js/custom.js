/**
 * Created by Dyan on 17/5/23.
 */

function bmi() {
var height = $("#height").val();
var weight = $("#weight").val();
var result = weight * 10000 / height / height;
$("#bmi-result").text(result)
}


function calcVal() {
    var risk = 1;
    var relativeRisk = $("#check-table").find("option:selected");
    //console.log(relativeRisk);
    $.each(relativeRisk, function (index, value) {
        risk = risk * value.value;
        //console.log(value.value);
    });
    //console.log("ok");
    //console.log(risk);
    var absoluteRisk = risk * 2.58e-3;
    $("#check-result-relative").text(risk.toFixed(3)).css({"color":"orange"});
    $("#check-result-absolute").text(absoluteRisk.toFixed(5)).css({"color":"orange","fontSize":"large"});

    var evaluation ;
    if (risk > 1.5 ){
        evaluation = "高";
    } else if(risk < 1.51  && risk > 0.8){
        evaluation = "普通";
    } else{
        evaluation = "低";
    }

    $("#check-result").text(evaluation).css({"color":"orange","fontSize":"large"})
}



