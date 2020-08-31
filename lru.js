const sum = require('./func');
const readUserInput = require('./func');
const MAX = 2; // キャッシュの最大サイズ
const N = 128; // 入力の最大回数
var disc; // putとgetとq(終了)の判別
var i = 0;
var data = [N]; // データ

class User {
    constructor( name, main) {
        this.name = name;
        this.main = main;
    }

    name() {
        return this.name;
    }

    put() {
        // 最も古いデータを消す
        if(i >= MAX){
            console.log(data[i-MAX].name + " => null");
        }
    }
}


(async function main() {
    // メインループ
    while(1){
        // 要素の確認
        console.log(data[i-2]);
        console.log(data[i-1]);
        console.log(data[i]);

        disc = await readUserInput('put or get or q: ');

        // q入力時
        if(disc == "q"){
            break;
        }
        // put入力時の処理
        else if(disc == "put"){
            data[i] = new User(await readUserInput('data name: '), await readUserInput('data main: '));
            data[i].put();
        }
        i++;
    }
})();
