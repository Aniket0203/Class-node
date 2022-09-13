

$(function () {
  console.log("jquery loaded");
//   console.log($);

  $("#login-btn").click(function () {
    var record = $("#login-form").serialize();
    console.log(record);

    $.ajax({
      type: "post",
      url: "http://localhost:6500/login-action/",
      data: record,
      success: function (response) {
        console.log("DATA FROM NODE JS");
        console.log(response);
        $("#err_msg_login").html(response.msg);
      },
    });
  });

  $("#register-btn").click(function () {
    var record = $("#register-form").serialize();
    // console.log(record);

    $.ajax({
      type: "post",
      url: "http://localhost:6500/register-action/",
      data: record,
      success: function (response) {
        console.log("DATA FROM NODE JS 2");
        console.log(response);
        $("#err_msg_register").html(response.msg);
      },
    });
  });
});
