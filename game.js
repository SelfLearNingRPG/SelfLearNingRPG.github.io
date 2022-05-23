var player_Id = '', player_atk = 0, player_def = 0, player_avoid = 0, player_mp = 0, player_hp = 0;

function Agree() {
    player_Id = prompt("取個名字：", "大中天");
    document.cookie = "player_Id=" + player_Id;
    window.location.href = "page2.html";
}

function ready() {
    player_Id = document.cookie.replace(/(?:(?:^|.*;\s*)player_Id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.getElementById('output1').innerHTML = "這裡是你旅途的起點....<br>???：<br>你好，" + player_Id + "，恭候多時，我是作者大人的其中一部分，你的請求我已經收到了。<br>現在就將刻有「" + player_Id + "」的地下城鑰匙交給你....<br>雖然我本來想這麼說，但在此之前，你還沒有任何能力，這樣就想挑戰地下城簡直是白白送死，<br>先去選個職業，然後踏上變強的道路吧!<br>等時機成熟，我會再次顯現在你面前<br>祝你一切順利。<br> ";
    var pic = document.getElementById("introduction");
    pic.style.display = 'block';
}

var pro = "defult";

function Pro_Select() {
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

function Confirm() {
    window.location.href = "page3.html";
}



var armor, weapend, def, atk, avoid;

class armorinfo {

    constructor(name, def, avoid) {
        this.name = name;
        this.def = def;
        this.avoid = avoid;
    }

    Get_Armor_name() {
        return this.name;
    }

    Get_Armor_def() {
        return this.def;
    }

    Get_Armor_avoid() {
        return this.avoid;
    }

}

class wapendinfo {

    constructor(name, atk) {
        this.name = name;
        this.atk = atk;
    }

    Get_Wapend_name() {
        return this.name;
    }

    Get_Wapend_atk() {
        return this.atk;
    }

}

class enemyinfo {

    constructor(name, eatk, edef) {
        this.name = name;
        this.eatk = eatk;
        this.edef = edef;
    }

    Get_Enemy_name() {
        return this.name;
    }

    Get_Enemy_atk() {
        return this.eatk;
    }
    Get_Enemy_def() {
        return this.edef;
    }
}

var a = new Array();//armor
a[1] = new armorinfo("鐵甲", 5, 0);
a[2] = new armorinfo("浴火", 24, 0);
a[3] = new armorinfo("戰鬼", 65, 0);
a[4] = new armorinfo("浴血之王", 88, 0);
a[5] = new armorinfo("狂戰士之魂", 110, 25);
a[6] = new armorinfo("刺客鏈甲", 1, 50);
a[7] = new armorinfo("黑羽", 17, 60);
a[8] = new armorinfo("死之盔", 40, 70);
a[9] = new armorinfo("惡魔之夜", 67, 80);
a[10] = new armorinfo("墮天黑影", 80, 90);
a[11] = new armorinfo("神聖法袍", 7, 20);
a[12] = new armorinfo("淨化者", 23, 25);
a[13] = new armorinfo("大魔導之護", 57, 30);
a[14] = new armorinfo("法王聖袍", 80, 35);
a[15] = new armorinfo("神天", 100, 40);

var w = new Array();//wapend
w[1] = new wapendinfo("騎士大劍", 10);
w[2] = new wapendinfo("斬鬼刀", 27);
w[3] = new wapendinfo("火龍王", 40);
w[4] = new wapendinfo("龍牙", 66);
w[5] = new wapendinfo("斬龍刀", 85);
w[6] = new wapendinfo("蛇牙彎刀", 13);
w[7] = new wapendinfo("惡魔兇刀", 35);
w[8] = new wapendinfo("黑羽刺刀", 60);
w[9] = new wapendinfo("暗龍王", 84);
w[10] = new wapendinfo("屠神匕首", 100);
w[11] = new wapendinfo("法杖", 11);
w[12] = new wapendinfo("白鷹之杖", 33);
w[13] = new wapendinfo("水龍王", 50);
w[14] = new wapendinfo("法王之杖", 72);
w[15] = new wapendinfo("神之手", 90);

var e = new Array();//enemy
e[1] = new enemyinfo("老鼠", 3, 5);
e[2] = new enemyinfo("蝙蝠", 5, 3);
e[3] = new enemyinfo("蜘蛛", 4, 4);
e[4] = new enemyinfo("史萊姆", 5, 9);
e[5] = new enemyinfo("殭屍", 6, 8);
e[6] = new enemyinfo("巨狼蛛", 8, 6);
e[7] = new enemyinfo("骷髏", 10, 12);
e[8] = new enemyinfo("哥布林", 12, 10);
e[9] = new enemyinfo("魔像", 8, 14);
e[10] = new enemyinfo("哥布林薩滿", 15, 15);
e[11] = new enemyinfo("冤魂", 24, 6);
e[12] = new enemyinfo("盔甲小兵", 25, 25);
e[13] = new enemyinfo("小boss「盔甲騎兵」", 30, 35);
e[14] = new enemyinfo("盔甲劍士", 25, 30);
e[15] = new enemyinfo("盔甲弓箭手", 35, 25);
e[16] = new enemyinfo("墓地黑影", 43, 37);
e[17] = new enemyinfo("小惡魔", 40, 40);
e[18] = new enemyinfo("石像鬼", 32, 48);
e[19] = new enemyinfo("中階惡魔-蓋因", 50, 40);
e[20] = new enemyinfo("岩龍", 60, 60);
e[21] = new enemyinfo("中階惡魔-布耶爾", 58, 62);
e[22] = new enemyinfo("九頭龍", 60, 100);
e[23] = new enemyinfo("高階惡魔-阿斯摩太", 80, 80);
e[24] = new enemyinfo("魔王-別西卜", 120, 80);
e[25] = new enemyinfo("邪龍-尼德霍格", 80, 150);


function init() {
    var pro = document.cookie.replace(/(?:(?:^|.*;\s*)player_Pro\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (pro == "0") {
        player_mp = 30;
        player_hp = 100;
        armor = 1;
        weapend = 1;
    }
    if (pro == "1") {
        player_mp = 50;
        player_hp = 45;
        armor = 6;
        weapend = 6;
    }
    if (pro == "2") {
        player_mp = 75;
        player_hp = 50;
        armor = 11;
        weapend = 11;
    }
    player_atk += w[weapend].Get_Wapend_atk();
    player_def += a[armor].Get_Armor_def();
    player_avoid += a[armor].Get_Armor_avoid();
    document.cookie = "player_Mp=" + player_mp + "";
    document.cookie = "player_Hp=" + player_hp + "";
    document.cookie = "player_armor=" + armor + "";
    document.cookie = "player_weapend=" + weapend + "";
    document.cookie = "player_atk=" + player_atk + "";
    document.cookie = "player_def=" + player_def + "";
    document.cookie = "player_avoid=" + player_avoid + "";
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
    document.getElementById('show_own_side_status').innerHTML = player_Id + "，你是一個「" + zy + "」<br>你目前的腳色資訊如下:" + "<br>防具 : " + a[armor].Get_Armor_name() + "(防禦力+" + a[armor].Get_Armor_def() + "、迴避率+" + a[armor].Get_Armor_avoid() + "%)" + "<br>武器 : " + w[weapend].Get_Wapend_name() + "(攻擊力+" + w[weapend].Get_Wapend_atk() + ")" + "<br>MP : " + player_mp + "<br>HP : " + player_hp + "<br>攻擊力 : " + player_atk + "<br>防禦力 : " + player_def + "<br>迴避率 : " + player_avoid + "%";
    document.getElementById("summon_monster").style.display = 'block';
}

//攻擊成功與否
function fight(eatk, edef, patk, pdef) {
    var enemyv = Math.sqrt(eatk * eatk + edef * edef)//戰力指數
    if (pdef * 1.8 > patk) {
        if (pdef * 1.3 + patk * 0.3 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (pdef * 1.8 == patk) {
        if (pdef * 1.1 + patk * 1.1 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (pdef * 1.8 < patk) {
        if (pdef * 0.3 + patk * 1.3 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
}

//傷害
function damage(obj, patk) {
    obj.edef = obj.edef - patk;
}

//防禦
function defense(obj, pdef) {
    if (obj.eatk <= pdef) {
        player_hp = player_hp - 1;
    }
    if (obj.eatk > pdef) {
        player_hp = player_hp + pdef - obj.eatk;
    }
}

//魔法攻擊
function magicattack(mp, edef) {
    mp = mp - 10;
    edef = edef - 50;
}

//魔法回復
function magicrecover() {
    mp = mp - 25;
    hp = hp + 50
}

//隨機召喚怪物
function enemyRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;//max,min為那一層怪物的最大最小編碼
}

//迴避成功與否
function evade() {
    if (armor == 4) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 10) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 5) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 25) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 6) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 50) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 7) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 60) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 8) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 70) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 9) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 80) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 10) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 90) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 11) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 20) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 12) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 25) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 13) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 30) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 14) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 35) {
            return true;
        }
        else {
            return false;
        }
    }
    if (armor == 15) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 40) {
            return true;
        }
        else {
            return false;
        }
    }
}

function show_current_status() {
    document.getElementById('status').innerHTML = "你目前的能力值如下: <br>MP : " + player_mp + "<br>HP : " + player_hp;
}

var monster;

function summon() {
    var stage = Number(document.cookie.replace(/(?:(?:^|.*;\s*)stage\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    switch (stage) {
        case 1:
            monster = e[enemyRandom(1, 3)];
            break;
        case 2:
            monster = e[enemyRandom(4, 6)];
            break;
        case 3:
            monster = e[enemyRandom(7, 8)];
            break;
        case 4:
            monster = e[enemyRandom(9, 10)];
            break;
        case 5:
            monster = e[enemyRandom(11, 12)];
            break;
        case 6://小boss
            monster = e[13];
            break;
        case 7://其實是第六層
            monster = e[enemyRandom(14, 15)];
            break;
        case 8:
            monster = e[enemyRandom(16, 17)];
            break;
        case 9:
            monster = e[enemyRandom(18, 19)];
            break;
        case 10:
            monster = e[enemyRandom(20, 21)];
            break;
        case 11:
            monster = e[enemyRandom(22, 23)];
            break;
        case 12:
            monster = e[enemyRandom(24, 25)];
            break;
    }
    document.getElementById('show_enemy_details').innerHTML = "敵方資訊 : <br>" + monster.Get_Enemy_name() + "<br>攻擊力 : " + monster.Get_Enemy_atk() + "<br>防禦力 : " + monster.Get_Enemy_def();
    document.getElementById("arena").style.display = 'block';
}

function attack() {
    var enemy = {
        edef: monster.Get_Enemy_def(),
        eatk: monster.Get_Enemy_atk()
    }

    if (fight(enemy.eatk, enemy.edef, player_atk, player_def)) {
        window.alert("攻擊成功!!")
        damage(enemy, player_atk);
        document.getElementById('show_fighting_details').innerHTML = "角色血量 : " + player_hp + "<br>敵方血量 : " + enemy.edef;
        if (enemy.edef <= 0) {
            window.alert("成功擊敗" + monster.Get_Enemy_name() + "了!!")
        }
    }
    else {
        window.alert("攻擊失敗!!");
        defense(enemy, player_def);
        document.getElementById('show_fighting_details').innerHTML = "角色血量 : " + player_hp + "<br>敵方血量 : " + enemy.edef;
    }

}