var p = document.getElementsByTagName('p');
var img = document.getElementsByTagName('i');
var oBtn = document.getElementById('btn');
var m = 0;
var Calculator = function () {
    //验证用户名
    this.Matchthename = function () {
        var input = document.getElementsByTagName('input')[0];
        var regexp = /^[\u4e00-\u9fa5_a-zA-Z0-9-]{1,16}$/;
        fn_input(input, regexp, 0)
    };
    //验证邮箱
    this.Matchingemail = function () {
        var input = document.getElementsByTagName('input')[1];
        var regexp = /^\w+@\w+(\.\w+)+$/;
        fn_input(input, regexp, 1)
    };
    //验证手机号码
    this.checkMobile = function () {
        var input = document.getElementsByTagName('input')[2];
        var regexp = /^1[34578]\d{9}$/;
        fn_input(input, regexp, 2)
    };
    //验证生日
    this.isValidDate=function () {
        var input = document.getElementsByTagName('input')[3];
        var regexp = /^\d{4}\/\d{2}\/\d{2}$/;
        fn_input(input, regexp, 3);
        var parts = input.value.split("/");
        var day = parseInt(parts[2], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[0], 10);
        if (year < 1000 || year > 3000 || month == 0 || month > 12) {
            return false;
        }
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            monthLength[1] = 29;
            return day > 0 && day <= monthLength[month - 1];
        }
    };
    //验证身份证
    this.card = function () {
        var input = document.getElementsByTagName('input')[4];
        var regexp = /(\d{17}[\dx]|\d{15})/i;
        fn_input(input, regexp, 4)
    };
};

function fn_input(int, regexp, index) {
    int.onblur = function () {
        if (regexp.test(int.value)) {
            img[index].innerHTML = "<img src='images/dui.jpg'>";
            m++;
        } else {
            img[index].innerHTML = "<img src='images/cuo.jpg'>";
            m--;
        }
        fn_btn(m);
    };
}

//判断按钮
function fn_btn(on) {
    if (on > 4) {
        oBtn.style.backgroundColor = '#f99c2c';
        oBtn.style.cursor = 'pointer';
    } else {
        oBtn.style.backgroundColor = '#c0c0c0';
        oBtn.style.cursor = 'not-allowed';
    }
}

var fn = new Calculator();

for (var i = 0; i < p.length; i++) {
    fn_Label(p[i]);
}
function fn_Label(n) {
    var input = n.getElementsByTagName('input')[0];
    var lab = n.getElementsByTagName("label")[0];
    var span = n.getElementsByTagName('span')[0];
    input.oninput = function () {
        if (this.value === "") {
            lab.className = "show";
            span.style.color = '#c0c0c0';
            input.style.cssText = 'background : #f7f7f7;';
        } else {
            lab.className = "hide";
            span.style.color = '#f99c2c';
            input.style.cssText = 'background : #ffffff; border: 1px solid #f99c2c;';
            fn.Matchthename();
            fn.Matchingemail();
            fn.checkMobile();
            fn.card();
            fn.isValidDate()
        }
    };
}