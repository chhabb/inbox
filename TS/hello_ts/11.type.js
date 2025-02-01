"use strict";
(function () {
    let price;
    price = 100;
    function printStatus(status) {
        console.log(status);
    }
    function logGender(str) {
        console.log(str);
    }
    printStatus(404);
    printStatus('200');
    printStatus('501');
    logGender('男');
    logGender('⼥');
    const house = {
        height: 180,
        width: 75,
        num: 6,
        cell: 3,
        room: '702'
    };
    // 4.特殊情况
    const src = [1, 2, 3];
    const dst = [0];
    src.forEach((el) => dst.push(el));
})();
