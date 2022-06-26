/*
 * @Author: 24min
 * @Date: 2022-06-18 14:26:34
 * @LastEditors: 24min
 * @LastEditTime: 2022-06-26 15:33:07
 * @FilePath: \lottery-web\index.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
const all = {
    Drink: ["一点点", "古茗", "叶子与茶", "喜茶", "蜜雪冰城", "茶百道", "乐乐茶", "矿泉水", "咽口水"],
    Eat: ["小龙虾", "美丽家", "甜点", "旋转小火锅", "蜜雪冰城", "海底捞", "烤肉", "汉堡", "饿肚子", "日料", "凑凑", "肯德基", "麦当劳", "馄饨", "麻辣香锅", "麻辣烫", "面", "桥头排骨", "自助餐", "外婆家", "甲米府", "生煎", "茶餐厅", "米线", "烤鱼", "自己做饭"],
    Play: ["看电影", "密室", "逛南湖", "逛月河", "去书吧", "飞行棋", "农家乐", "DIY手工坊", "逛子城", "逛湘家荡", "逛秀湖", "看海", "去西塘", "去乌镇"]
}

const canvas = document.getElementById("star-field");

const resize = () => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
};

window.addEventListener("resize", resize);

resize();

const context = canvas.getContext("2d");
const stars = [];
const speed = 15;
const numStars = 42;
const v = () => Math.random() * speed - speed / 2;
let requestId;

/**
 * Adapted from: https://slicker.me/javascript/starfield.htm
 */
function animate() {
    const { width: w, height: h } = canvas;

    let color;
    let r;

    if (stars.length < numStars && Math.random() < 0.5) {
        stars.push({ x: 0, y: 0, vx: v(), vy: v() });
    }

    context.clearRect(0, 0, w, h);

    for (let i = 0; i < stars.length; i++) {
        let { x, y, vx, vy } = stars[i];

        stars[i].x = x = x + vx;
        stars[i].y = y = y + vy;

        if (x > w / 2 || x < 0 - w / 2) {
            stars[i].x = x = 0;
            stars[i].y = y = 0;
        }

        color = Math.floor(30 + (Math.abs(x) + Math.abs(y)) / 2);
        r = Math.abs(y / 100 + i / 200);
        // context.fillText('小龙虾', w / 2 + x, h / 2 + y)
        context.fillStyle = `rgb(${color}, ${color}, ${color})`;
        context.beginPath();
        context.arc(w / 2 + x, h / 2 + y, r, 0, 2 * Math.PI);
        context.fill();
    }

    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
let nameArr = all.Eat;
let currentType = "Eat"
let nameArrLength = nameArr.length;

let $start = $('.g-btn-start');
let $randomName = $('.g-name');

let timeout = null;
let autoStopTimeout = null;
$(document).on('click', '.g-btn-start', e => {
    if (!$start.text().includes('Start')) {
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
    $start.text(`Start ${currentType}`);
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

// const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    console.log('item', item.id)
    item.addEventListener('click', () => {
        // hideAllContents()
        currentType = item.id;
        hideAllItems()
        $randomName.hide();
        clearInterval(timeout);
        clearTimeout(autoStopTimeout);
        $start.text(`Start ${item.id}`).removeClass('s-move')
        nameArr = all[item.id];
        nameArrLength = nameArr.length;
        item.classList.add('active')
            // contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}


// window.requestAnimationFrame(animate);