const sum = require('./func');
const readUserInput = require('./func');
const N = 128; // 入力の最大回数
var disc; // putとgetとq(終了)の判別
var i = 0;
var data = [N]; // データ


(async function main() {
    // メインループ
    while(1){
        disc = await readUserInput('put or get or q: ');

        // q入力時
        if(disc == "q"){
            break;
        }
    }
})();
