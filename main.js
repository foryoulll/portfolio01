'use strict';

//header-navを画面上と下に表示されるようにする
jQuery(document).ready(function ($) {

    //1127px以下の場合
    if (window.matchMedia('(max-width: 1127px)').matches) {
        let headerRight = $("#header_right");
        let headerLeft = $("#header_list");
        let headerLogo = $("#header_logo");
        headerRight.fadeOut();
        headerLeft.fadeOut();
        headerLogo.fadeIn();
        $(function () {
            let headerRight = $("#header_right");
            let headerLeft = $("#header_list");
            let headerLogo = $("#header_logo");
            //スクロールが100に達したら表示
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    headerRight.fadeIn();
                    headerLeft.fadeIn();
                    headerLogo.fadeOut();
                } else {
                    headerRight.fadeOut();
                    headerLeft.fadeOut();
                    headerLogo.fadeIn();
                };
            });
        });
        //600px以下の場合
    } else {
        $(function () {
            let headerRight = $("#header_right");
            let headerLeft = $("#header_list");
            let headerLogo = $("#header_logo");
            headerRight.fadeIn();
            headerLeft.fadeIn();
            headerLogo.fadeIn();
        });
    };
});


let select_share = document.getElementById("select_share");

/*選んだ部屋をコンソールに表示させる */
select_share.onchange = function () {
    console.log(this.value);
};

let guest = "ゲスト";
let count = "人";

let select_guest_number = document.getElementById("select_guest_number");

for (let i = 0; i < 16; i++) {
    let option = document.createElement("option");
    select_guest_number.appendChild(option);
    let textNode = document.createTextNode(guest + (i + 1) + count);
    option.appendChild(textNode);

    /*optionにvalueを付与 */
    option.setAttribute("value", guest + (i + 1) + count);

};

/*選んだ人数をコンソールに表示させる */
select_guest_number.onchange = function () {
    console.log(this.value);
};
