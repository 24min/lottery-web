 let nameArr = ["一点点", "古茗", "叶子与茶", "喜茶", "小龙虾", "美丽家", "甜点", "旋转小火锅", "蜜雪冰城", "海底捞", "饿肚子"];
 let nameArrLength = nameArr.length;

 let $start = $('.g-btn-start');
 let $randomName = $('.g-name');

 let timeout = null;

 $(document).on('click', '.g-btn-start', e => {
     if ($start.text() !== 'Start') {
         // $start.text('Start').removeClass('s-move');
         randomNameHide();

     } else {
         randomNameShow();
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

     for (let i = 1; i <= 19; i++) {
         (function(j) {
             setTimeout(() => {
                 let random = parseInt(Math.random() * nameArrLength);
                 let randomName = nameArr[random];
                 $randomName.text(randomName);
             }, j * j * 15);
         })(i);
     }
 }