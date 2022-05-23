function disp_alert() {
    alert("因為作者之力強制你要去當冒險者，你也無法拒絕，\n快去選擇你的職業吧！。")
}

var player_Id = '';
function btclick() {
    player_Id = prompt("取個名字：", "大中天");
    document.cookie = "player_Id=\"" + player_Id + "\"";
    window.location.href = "page2.html";
}

function startgame() {
    player_Id = document.cookie.replace(/(?:(?:^|.*;\s*)player_Id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.getElementById('output1').innerHTML = "這裡是你旅途的起點....<br>???：<br>你好，" + player_Id + "，恭候多時，我是作者大人的其中一部分，你的請求我已經收到了。<br>現在就將刻有" + player_Id + "的地下城鑰匙交給你....<br>雖然我本來想這麼說，但在此之前，你還沒有任何能力，這樣就想挑戰地下城簡直是白白送死，<br>先去選個職業，然後踏上變強的道路吧!<br>等時機成熟，我會再次顯現在你面前<br>祝你一切順利。<br> ";
    var pic = document.getElementById("introduction");
    pic.style.display = 'block';
}

var mp = 0;
var hp = 0;
var token = 0;
var pro = "defult";
var speed = 0;

function select() {
    pro = document.getElementById("pro_selsct").value;
    if (pro == "knight") {
        pro = 0;
    }
    if (pro == "ranger") {
        pro = 1;
    }
    if (pro == "magician") {
        pro = 2;
    }
    document.cookie = "player_Pro=" + pro + "";
}

function confirm() {
    window.location.href = "page3.html";
}


var armor, weapend, def, atk, avoid;

var armors = new Array();
armors[1] = "鐵甲";
armors[2] = "浴火";
armors[3] = "戰鬼";
armors[4] = "浴血之王";
armors[5] = "狂戰士之魂";
armors[6] = "刺客鏈甲";
armors[7] = "黑羽";
armors[8] = "死之盔";
armors[9] = "惡魔之夜";
armors[10] = "墮天黑影";
armors[11] = "神聖法袍";
armors[12] = "淨化者";
armors[13] = "大魔導之護";
armors[14] = "法王聖袍";
armors[15] = "神天";

var weapends = new Array();
weapends[1] = "騎士大劍";
weapends[2] = "斬鬼刀";
weapends[3] = "火龍王";
weapends[4] = "龍牙";
weapends[5] = "斬龍刀";
weapends[6] = "蛇牙彎刀";
weapends[7] = "惡魔兇刀";
weapends[8] = "黑羽刺刀";
weapends[9] = "暗龍王";
weapends[10] = "屠神匕首";
weapends[11] = "法杖";
weapends[12] = "白鷹之杖";
weapends[13] = "水龍王";
weapends[14] = "法王之杖";
weapends[15] = "神之手";

var enemy = new Array();
enemy[1] = "老鼠";//e1
enemy[2] = "蝙蝠";//e2
enemy[3] = "蜘蛛";//e3
enemy[4] = "史萊姆";//e4
enemy[5] = "殭屍";//e5
enemy[6] = "巨狼蛛";//e6
enemy[7] = "骷髏";//e7
enemy[8] = "哥布林";//e8
enemy[9] = "魔像";//e9
enemy[10] = "哥布林薩滿";//e10
enemy[11] = "冤魂";//e11
enemy[12] = "盔甲小兵";//e12
enemy[13] = "小boss「盔甲騎兵」";//e13
enemy[14] = "盔甲劍士";//e14
enemy[15] = "盔甲弓箭手";//e15
enemy[16] = "墓地黑影";//e16
enemy[17] = "小惡魔";//e17
enemy[18] = "石像鬼";//e18
enemy[19] = "中階惡魔-蓋因";//e19
enemy[20] = "岩龍";//e20
enemy[21] = "中階惡魔-布耶爾";//e21
enemy[22] = "九頭龍";//e22
enemy[23] = "高階惡魔-阿斯摩太";//e23
enemy[24] = "魔王-別西卜";//e24
enemy[25] = "邪龍-尼德霍格";//e25

class armorinfo {

    constructor(def) {
        this.def = def;
    }

    Get_Armor_info() {
        return `${this.def}`;
    }

}

class avoidinfo {

    constructor(avoid) {
        this.def = avoid;
    }

    Get_Avoid_info() {
        return `${this.avoid}`;
    }

}

class wapendinfo {

    constructor(atk) {
        this.atk = atk;
    }

    Get_Wapend_info() {
        return `${this.atk}`;
    }

}

class enemyinfo {

    constructor(eatk, edef) {
        this.eatk = eatk;
        this.edef = edef;
    }

    Get_Enemy_info() {
        return `${this.eatk} ${this.edef}`;
    }
}

var a = new Array();//armor
a[1] = new armorinfo(5);
a[2] = new armorinfo(24);
a[3] = new armorinfo(65);
a[4] = new armorinfo(88);
a[5] = new armorinfo(110, 25);
a[6] = new armorinfo(1, 50);
a[7] = new armorinfo(17, 60);
a[8] = new armorinfo(40, 70);
a[9] = new armorinfo(67, 80);
a[10] = new armorinfo(80, 90);
a[11] = new armorinfo(7, 20);
a[12] = new armorinfo(23, 25);
a[13] = new armorinfo(57, 30);
a[14] = new armorinfo(80, 35);
a[15] = new armorinfo(100, 40);

var av = new Array();//avoid
av[1] = new armorinfo(0);
av[2] = new armorinfo(0);
av[3] = new armorinfo(0);
av[4] = new armorinfo(10);
av[5] = new armorinfo(25);
av[6] = new armorinfo(50);
av[7] = new armorinfo(60);
av[8] = new armorinfo(70);
av[9] = new armorinfo(80);
av[10] = new armorinfo(90);
av[11] = new armorinfo(20);
av[12] = new armorinfo(25);
av[13] = new armorinfo(30);
av[14] = new armorinfo(35);
av[15] = new armorinfo(40);

var w = new Array();//wapend
w[1] = new wapendinfo(10);
w[2] = new wapendinfo(27);
w[3] = new wapendinfo(40);
w[4] = new wapendinfo(66);
w[5] = new wapendinfo(85);
w[6] = new wapendinfo(13);
w[7] = new wapendinfo(35);
w[8] = new wapendinfo(60);
w[9] = new wapendinfo(84);
w[10] = new wapendinfo(100);
w[11] = new wapendinfo(11);
w[12] = new wapendinfo(33);
w[13] = new wapendinfo(50);
w[14] = new wapendinfo(72);
w[15] = new wapendinfo(90);

var e = new Array();
e[1] = new enemyinfo(3, 5);
e[2] = new enemyinfo(5, 3);
e[3] = new enemyinfo(4, 4);
e[4] = new enemyinfo(5, 9);
e[5] = new enemyinfo(6, 8);
e[6] = new enemyinfo(8, 6);
e[7] = new enemyinfo(10, 12);
e[8] = new enemyinfo(12, 10);
e[9] = new enemyinfo(8,  14);
e[10] = new enemyinfo(15, 15);
e[11] = new enemyinfo(24, 6);
e[12] = new enemyinfo(25, 25);
e[13] = new enemyinfo(30, 35);
e[14] = new enemyinfo(25, 30);
e[15] = new enemyinfo(35, 25);
e[16] = new enemyinfo(43, 37);
e[17] = new enemyinfo(40, 40);
e[18] = new enemyinfo(32, 48);
e[19] = new enemyinfo(50, 40);
e[20] = new enemyinfo(60, 60);
e[21] = new enemyinfo(58, 62);
e[22] = new enemyinfo(60, 100);
e[23] = new enemyinfo(80, 80);
e[24] = new enemyinfo(120, 80);
e[25] = new enemyinfo(80, 150);


function init() {
    var pro = document.cookie.replace(/(?:(?:^|.*;\s*)player_Pro\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (pro == "0") {
        mp = 30;
        hp = 100;
        armor = 1;
        weapend = 1;
    }
    if (pro == "1") {
        mp = 50;
        hp = 45;
        armor = 6;
        weapend = 6;
    }
    if (pro == "2") {
        mp = 75;
        hp = 50;
        armor = 11;
        weapend = 11;
    }
    document.cookie = "player_Mp=" + mp + "";
    document.cookie = "player_Hp=" + hp + "";
    document.cookie = "player_armor=" + armor + "";
    document.cookie = "player_weapend=" + weapend + "";
}

var stage = 1;
document.cookie = "stage=" + stage;

function begin() {
    var zy = document.cookie.replace(/(?:(?:^|.*;\s*)player_Pro\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (zy == "0") {
        zy = "騎士";
    }
    if (zy == "1") {
        zy = "遊俠";
    }
    if (zy == "2") {
        zy = "法師";
    }
    init();
    var player_Id = document.cookie.replace(/(?:(?:^|.*;\s*)player_Id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.getElementById('show_own_side_status').innerHTML = player_Id + "，你是一個" + zy + "<br>你目前的腳色資訊如下:<br>MP : " + mp + "<br>HP : " + hp + "<br>防具 : " + armors[armor] + "(防禦力+" + a[armor].Get_Armor_info() + ")" + "<br>武器 : " + weapends[weapend] + "(攻擊力+" + w[weapend].Get_Wapend_info() + ")";
}

function fight(eatk, edef, atk, def) {
    var enemyv = Math.sqrt(eatk * eatk + edef * edef)//戰力指數
    if (def * 1.8 > atk) {
        if (def * 1.3 + atk * 0.3 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (def * 1.8 == atk) {
        if (def * 1.1 + atk * 1.1 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (def * 1.8 < atk) {
        if (def * 0.3 + atk * 1.3 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
}

function damage(edef, atk){
    edef = edef - atk;
}

function defense(eatk, def, hp){
    if (eatk <= def){
        hp = hp - 1;
    }
    if (eatk > def){
        hp = hp + def - eatk;
    }
}

function magicattack(){
    mp = mp - 10;
    edef = edef - 50;
}

function magicrecover(){
    mp = mp - 25;
    hp = hp + 50
} 

function enemyRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;//max,min為那一層怪物的最大最小編碼
}

function evade(){
    if (armor == 4){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=10){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 5){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=25){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 6){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=50){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 7){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=60){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 8){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=70){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 9){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=80){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 10){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=90){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 11){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=20){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 12){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=25){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 13){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=30){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 14){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=35){
            return true;
        }
        else{
            return false;
        }
    }
    if (armor == 15){
        var avoidv = Math.round(Math.random()*100);
        if (avoidv <=40){
            return true;
        }
        else{
            return false;
        }
    }
}

function show_current_status() {
    var mp = document.cookie.replace(/(?:(?:^|.*;\s*)player_Mp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var hp = document.cookie.replace(/(?:(?:^|.*;\s*)player_Hp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var stage = Number(document.cookie.replace(/(?:(?:^|.*;\s*)stage\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    switch (stage) {
        case 1:
            var opponent = new Array();
            opponent[1] = e[1];
            opponent[2] = e[2];
            opponent[3] = e[3];
            break;
        case 2:
            var opponent = new Array();
            opponent[1] = e[4];
            opponent[2] = e[5];
            opponent[3] = e[6];
        case 3:
            var opponent = new Array();
            opponent[1] = e[7];
            opponent[2] = e[8];
        case 4:
            var opponent = new Array();
            opponent[1] = e[9];
            opponent[2] = e[10];
        case 5:
            var opponent = new Array();
            opponent[1] = e[11];
            opponent[2] = e[12];
        case 6://小boss
            var opponent = new Array();
            opponent[1] = e[13];
        case 7://其實是第六層
            var opponent = new Array();
            opponent[1] = e[14];
            opponent[2] = e[15];
        case 8:
            var opponent = new Array();
            opponent[1] = e[16];
            opponent[2] = e[17];
        case 9:
            var opponent = new Array();
            opponent[1] = e[18];
            opponent[2] = e[19];
        case 10:
            var opponent = new Array();
            opponent[1] = e[20];
            opponent[2] = e[21];
        case 11:
            var opponent = new Array();
            opponent[1] = e[22];
            opponent[2] = e[23];
        case 12:
            var opponent = new Array();
            opponent[1] = e[24];
            opponent[2] = e[25];
    }
    document.getElementById('status').innerHTML = "你目前的能力值如下: <br>MP : " + mp + "<br>HP : " + hp;
}

function attack() {
    document.getElementById('show_fighting_details').innerHTML = e[1].Get_Enemy_info();
}