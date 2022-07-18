function myfunction(event) {
  event.preventDefault();
  var feet = $("#feet").val();
  var changefeet = parseInt(feet) * 12;
  var inches = $("#inches").val();
  var sumins = changefeet + parseInt(inches);
  var lbs = $("#lbs").val();

  if (feet == "" || inches == "" || lbs == "") {
    console.log("ok");
    if (feet == "") {
      $("#feet").addClass("is-invalid");
    } else {
      $("#feet").removeClass("is-invalid");
      $("#feet").addClass("is-valid");
    }
    if (inches == "") {
      $("#inches").addClass("is-invalid");
    } else {
      $("#inches").removeClass("is-invalid");
      $("#inches").addClass("is-valid");
    }
    if (lbs == "") {
      $("#lbs").addClass("is-invalid");
    } else {
      $("#lbs").removeClass("is-invalid");
      $("#lbs").addClass("is-valid");
    }
    return;
  } else {
    $("#feet").removeClass("is-invalid");
    $("#inches").removeClass("is-invalid");
    $("#lbs").removeClass("is-invalid");

    $("#feet").addClass("is-valid");
    $("#inches").addClass("is-valid");
    $("#lbs").addClass("is-valid");
  }
  console.log(sumins, lbs);

  var res = (lbs / (sumins * sumins)) * 703;
  var result = res.toFixed(2);
  console.log(result);
  $("#result").text(result);

  if (result <= 18.5) {
    $("#showresult").html(`<span class="text-danger">Under Weight</span>`);

    // $("#showresult").html(`Underweith`);
    // $("#showresult").css({color:'red'});

    // $("#showresult").html(`Underweith`);
    // $("#showresult").addClass( "text-danger" );
  } else if (result > 18.5 && result <= 24.9) {
    $("#showresult").html(`<span style="color:#00c851">Healthy Weight</span>`);
  } else if (result > 24.9 && result <= 29.9) {
    $("#showresult").html(`<span style="color:#ffbb33" >Over Weight</span>`);
  } else {
    $("#showresult").html(`<span class="text-danger">Obese Weight</span>`);
  }
}
