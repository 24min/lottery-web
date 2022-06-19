/*
 * @Author: 24min
 * @Date: 2022-06-18 14:26:34
 * @LastEditors: 24min
 * @LastEditTime: 2022-06-19 08:42:59
 * @FilePath: \lottery-web\index.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
let nameArr = ["一点点", "古茗", "叶子与茶", "喜茶", "小龙虾", "美丽家", "甜点", "旋转小火锅", "蜜雪冰城", "海底捞", "烤肉", "汉堡", "饿肚子", "日料", "凑凑", "肯德基", "麦当劳", "馄饨", "麻辣香锅", "麻辣烫", "面", "桥头排骨", "自助餐", "外婆家", "甲米府", "生煎", "茶餐厅", "米线", "茶百道", "乐乐茶", "烤鱼", "自己做饭"];

let drinkArr = ["一点点", "古茗", "叶子与茶", "喜茶", "蜜雪冰城", "茶百道", "乐乐茶"]

let nameArrLength = nameArr.length;

let $start = $('.g-btn-start');
let $randomName = $('.g-name');

let timeout = null;
let autoStopTimeout = null;
$(document).on('click', '.g-btn-start', e => {
    if ($start.text() !== 'Start') {
        // $start.text('Start').removeClass('s-move');
        randomNameHide();
    } else {
        randomNameShow();
        autoStopTimeout = setTimeout(() => {
                randomNameHide();
            }, 3000)
            // $start.text('Stop').addClass('s-move');
    }
});

function randomNameShow() {
    $start.text('Stop').addClass('s-move');
    $randomName.show();
    timeout = setInterval(() => {
        let random = parseInt(Math.random() * nameArrLength);
        let randomName = nameArr[random];
        $randomName.text(randomName);
    }, 10);
}

function randomNameHide() {
    $start.text('Start');
    // $randomName.hide();
    clearInterval(timeout);
    clearTimeout(autoStopTimeout);
    for (let i = 1; i <= 19; i++) {
        (function(j) {
            setTimeout(() => {
                let random = parseInt(Math.random() * nameArrLength);
                let randomName = nameArr[random];
                $randomName.text(randomName);
            }, j * j * 8);
        })(i);
    }
}