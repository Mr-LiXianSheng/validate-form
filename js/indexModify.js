var p = document.getElementsByTagName('p');
var img = document.getElementsByTagName('i');
var oBtn = document.getElementById('btn');
var UserName = false;
var email = false;
var phone = false;
var Birthday = false;
var ID = false;
function Calculator() {
    var _this = this;
    //验证用户名

    //验证邮箱
    this.Matchingemail = function () {
        var input = document.getElementsByTagName('input')[1];
        var regexp = /^\w+@\w+(\.\w+)+$/;
        input.onblur = function () {
            if (regexp.test(input.value)) {
                img[1].innerHTML = "<img src='images/dui.jpg'>";
                email = true;
            } else {
                img[1].innerHTML = "<img src='images/cuo.jpg'>";
                email = false;
            }
            _this.fn_btn();
        };
    };
    //验证手机号码
    this.checkMobile = function () {
        var input = document.getElementsByTagName('input')[2];
        var regexp = /^1[34578]\d{9}$/;
        input.onblur = function () {
            if (regexp.test(input.value)) {
                img[2].innerHTML = "<img src='images/dui.jpg'>";
                phone = true;
            } else {
                img[2].innerHTML = "<img src='images/cuo.jpg'>";
                phone = false;
            }
            _this.fn_btn();
        };
    };
    //验证生日
    this.isValidDate = function () {
        var input = document.getElementsByTagName('input')[3];
        console.log(input.value)
        var date = new Date();
        //var regexp = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        var regexp = /((((19|20)([2468][048]|[13579][26]))|(190|[48]))-((([0][13578]|1[02])-([012][0-9]$|3[0|1]$))|((0[469]|11)-(0[1-9]$|[12][0-9]$|30))|(02-(0[1-9]$|[12][0-9]$))))|((((19|20)([2468][^048]|[13579][^26]))|((190|[^48])))-((([0][13578]|1[02])-([012][0-9]$|3[0|1]$))|((0[469]|11)-(0[1-9]$|[12][0-9]$|30))|(02-(0[1-9]$|[12][0-8]$))))/;
        input.onblur = function () {
            if (regexp.test(input.value)) {
                if (date > +new Date(input.value)) {
                    img[3].innerHTML = "<img src='images/dui.jpg'>";
                    Birthday = true;
                } else {
                    img[3].innerHTML = "<img src='images/cuo.jpg'>";
                    Birthday = false;
                }
            } else {
                img[3].innerHTML = "<img src='images/cuo.jpg'>";
                Birthday = false;
            }
            _this.fn_btn();
        };
    };
    //验证身份证
    this.card = function () {
        var input = document.getElementsByTagName('input')[4];
        var regexp = /(\d{17}[\dx]|\d{15})/i;
        input.onblur = function () {
            if (regexp.test(input.value)) {
                img[4].innerHTML = "<img src='images/dui.jpg'>";
                ID = true;
            } else {
                img[4].innerHTML = "<img src='images/cuo.jpg'>";
                ID = false;
            }
            _this.fn_btn();
        };
    };
}

//判断按钮
Calculator.prototype.fn_btn = function () {
    if (UserName && email && phone && Birthday && ID) {
        oBtn.style.backgroundColor = '#f99c2c';
        oBtn.style.cursor = 'pointer';
    } else {
        oBtn.style.backgroundColor = '#c0c0c0';
        oBtn.style.cursor = 'not-allowed';
    }
};

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
            fn.isValidDate();
        }
    };
}