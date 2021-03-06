const readUserInput = require('./func');
const MAX = 2; // キャッシュの最大サイズ
const N = 128; // 入力の最大回数
var disc; // putとgetとq(終了)の判別
var i = 0;
var data = [N]; // データ
var sort; // データのソート用

class User {
    constructor( name, main) {
        this.name = name;
        this.main = main;
    }
    name() {
        return this.name;
    }
    main() {
        return this.main;
    }
    put() {
        // 最も古いデータを消す
        if(i >= MAX){
            if(data[i].name != data[i-1].name && data[i].name != data[i-2].name){
                if(data[i-1].name != data[i-2].name){
                    console.log(data[i-MAX].name + " => null");
                }       
            }
        }
    }
    get() {
        // 入力データ名がメモリにあるか判断
        for(var j = i-1; j > i-MAX-1; j--){
            if(data[j] != undefined){
                if(data[i].name == data[j].name){
                    console.log(data[j].name + ": " + data[j].main);
                    data[i] = new User(data[j].name, data[j].main);

                    // 配列の中をソートする
                    if(data[i].name == data[i - 1].name && i > 1){       
                        sort = data[i - 1];
                        data[i - 1] = data[i - 2]; 
                        data[i - 2] = sort;
                    }
                    break;;
                }
            }
            else{
                console.log("nothing data");
                i--;
                break;
            }
        }
    }
}

(async function main() {
    // メインループ
    while(1){
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
        // get入力時の処理
        else if(disc == "get"){
            data[i] = new User(await readUserInput('data name: '), null);
            data[i].get();
        }
        else{
            console.log("command not found");
            continue;
        }
    i++;
    }
})();
