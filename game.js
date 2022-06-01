var player_Id = '', player_atk = 0, player_def = 0, player_avoid = 0, player_mp = 0, player_hp = 0;

function Agree() {
    player_Id = prompt("取個名字：", "大中天");
    document.cookie = "player_Id=" + player_Id;
    window.location.href = "page2.html";
}

function GetCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}

function ready() {
    player_Id = GetCookie("player_Id");
    document.getElementById('output1').innerHTML = "這裡是你旅途的起點....<br>???：<br>你好，" + player_Id +
        "，恭候多時，我是作者大人的其中一部分，你的請求我已經收到了。\
        <br>現在就將刻有「" + player_Id + "」的地下城鑰匙交給你....<br>雖然我本來想這麼說，\
        但在此之前，你還沒有任何能力，這樣就想挑戰地下城簡直是白白送死，\
        <br>先去選個職業，然後踏上變強的道路吧!<br>等時機成熟，\
        我會再次顯現在你面前<br>祝你一切順利。<br> ";
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



var armor, weapend, def, atk, avoid, hpbottle, mpbottle, money, kill;

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
a[2] = new armorinfo("浴火", 20, 0);
a[3] = new armorinfo("戰鬼", 43, 0);
a[4] = new armorinfo("浴血之王", 65, 0);
a[5] = new armorinfo("狂戰士之魂", 88, 25);
a[6] = new armorinfo("刺客鏈甲", 1, 50);
a[7] = new armorinfo("黑羽", 11, 60);
a[8] = new armorinfo("死之盔", 32, 70);
a[9] = new armorinfo("惡魔之夜", 55, 80);
a[10] = new armorinfo("墮天黑影", 80, 90);
a[11] = new armorinfo("神聖法袍", 7, 20);
a[12] = new armorinfo("淨化者", 16, 25);
a[13] = new armorinfo("大魔導之護", 37, 30);
a[14] = new armorinfo("法王聖袍", 60, 35);
a[15] = new armorinfo("神天", 84, 40);

var w = new Array();//wapend
w[1] = new wapendinfo("騎士大劍", 10);
w[2] = new wapendinfo("斬鬼刀", 18);
w[3] = new wapendinfo("龍牙", 30);
w[4] = new wapendinfo("火龍王", 46);
w[5] = new wapendinfo("龍焰斷首", 68);
w[6] = new wapendinfo("蛇牙彎刀", 13);
w[7] = new wapendinfo("惡魔兇刀", 25);
w[8] = new wapendinfo("黑羽刺刀", 40);
w[9] = new wapendinfo("暗龍王", 64);
w[10] = new wapendinfo("屠神匕首", 85);
w[11] = new wapendinfo("法杖", 11);
w[12] = new wapendinfo("白鷹之杖", 21);
w[13] = new wapendinfo("水龍王", 35);
w[14] = new wapendinfo("法王之杖", 53);
w[15] = new wapendinfo("神之手", 72);

var e = new Array();//enemy
e[1] = new enemyinfo("老鼠", 3, 5);
e[2] = new enemyinfo("蝙蝠", 5, 3);
e[3] = new enemyinfo("蜘蛛", 4, 4);
e[4] = new enemyinfo("史萊姆", 10, 7);
e[5] = new enemyinfo("殭屍", 7, 10);
e[6] = new enemyinfo("巨狼蛛", 9, 9);
e[7] = new enemyinfo("骷髏", 10, 12);
e[8] = new enemyinfo("哥布林", 12, 10);
e[9] = new enemyinfo("魔像", 8, 14);
e[10] = new enemyinfo("哥布林薩滿", 15, 15);
e[11] = new enemyinfo("冤魂", 24, 6);
e[12] = new enemyinfo("盔甲小兵", 5, 25);
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

var armor0;

function init() {
    var pro = document.cookie.replace(/(?:(?:^|.*;\s*)player_Pro\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (pro == "0") {
        player_mp = 30;
        player_hp = 100;
        armor = 1;
        weapend = 1;
        hpbottle = 2;
        mpbottle = 0;
        money = 0;
        kill = 0;
        armor0 = 1;
    }
    if (pro == "1") {
        player_mp = 50;
        player_hp = 45;
        armor = 6;
        weapend = 6;
        hpbottle = 1;
        mpbottle = 0;
        money = 0;
        kill = 0;
        armor0 = 6;
    }
    if (pro == "2") {
        player_mp = 75;
        player_hp = 50;
        armor = 11;
        weapend = 11;
        hpbottle = 0;
        mpbottle = 1;
        money = 0;
        kill = 0;
        armor0 = 11;
    }
    player_atk += w[weapend].Get_Wapend_atk();
    player_def += a[armor].Get_Armor_def();
    player_avoid += a[armor].Get_Armor_avoid();
    document.cookie = "player_mp=" + player_mp;
    document.cookie = "player_hp=" + player_hp;
    document.cookie = "player_armor=" + armor;
    document.cookie = "player_weapend=" + weapend;
    document.cookie = "player_atk=" + player_atk;
    document.cookie = "player_def=" + player_def;
    document.cookie = "player_avoid=" + player_avoid;
    document.cookie = "hpbottle=" + hpbottle;
    document.cookie = "mpbottle=" + mpbottle;
    document.cookie = "money=" + money;
    document.cookie = "kill=" + kill;
    document.cookie = "armor0=" + armor0;
}



var stage = 1;

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
    document.getElementById("show_own_side_status").style.display = 'block';
    document.getElementById('show_own_side_status').innerHTML = player_Id + "，你是一個「" + zy + "」<br>你目前的腳色資訊如下:" + "<br>金錢數 : " + money + "<br>防具 : " + a[armor].Get_Armor_name() + "(防禦力+" + a[armor].Get_Armor_def() + "、迴避率+" + a[armor].Get_Armor_avoid() + "%)" + "<br>武器 : " + w[weapend].Get_Wapend_name() + "(攻擊力+" + w[weapend].Get_Wapend_atk() + ")" + "<br>MP : " + player_mp + "<br>HP : " + player_hp + "<br>攻擊力 : " + player_atk + "<br>防禦力 : " + player_def + "<br>迴避率 : " + player_avoid + "%";
    document.getElementById("show_begin_botton").style.display = 'block';
    document.cookie = "stage=" + stage;
}

function achieve() {
    window.location.href = "stages.html";
}

function show_current_status() {
    player_Id = GetCookie("player_Id");
    player_mp = Number(GetCookie("player_mp"));
    player_hp = Number(GetCookie("player_hp"));
    armor = Number(GetCookie("player_armor"));
    weapend = Number(GetCookie("player_weapend"));
    player_atk = Number(GetCookie("player_atk"));
    player_def = Number(GetCookie("player_def"));
    player_avoid = Number(GetCookie("player_avoid"));
    stage = Number(GetCookie("stage"));
    money = Number(GetCookie("money"));
    kill = Number(GetCookie("kill"));
    player_atk = w[weapend].Get_Wapend_atk();
    player_def = a[armor].Get_Armor_def();
    player_avoid = a[armor].Get_Armor_avoid();
    document.getElementById("show_status").innerHTML = player_Id + "，你目前的腳色資訊如下:" + "<br>金錢數 : " + money + "<br>防具 : " + a[armor].Get_Armor_name() + "(防禦力+" + a[armor].Get_Armor_def() + "、迴避率+" + a[armor].Get_Armor_avoid() + "%)" + "<br>武器 : " + w[weapend].Get_Wapend_name() + "(攻擊力+" + w[weapend].Get_Wapend_atk() + ")" + "<br>MP : " + player_mp + "<br>HP : " + player_hp + "<br>攻擊力 : " + player_atk + "<br>防禦力 : " + player_def + "<br>迴避率 : " + player_avoid + "%";
    document.getElementById("show_stage").innerHTML = "所在層數 : " + stage;
    document.getElementById("summon_monster").style.display = 'block';
}

//攻擊成功與否
function fight(eatk, edef, patk, pdef) {
    var r0 = Math.round(Math.random(0.4) + 0.6);
    var enemyv = (Math.sqrt(eatk * eatk + edef * edef)) * r0//戰力指數
    var r1 = Math.round(Math.random(1) + 0.5);
    var r2 = 1.5 - r1;
    var r3 = (r1 + r2) / 2;
    if (r2 >= r1) {
        r1 = r1 ^ r2;
        r2 = r1 ^ r2;
        r1 = r1 ^ r2;
    }
    if (pdef * 1.8 > patk) {
        if (pdef * r1 + patk * r2 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (pdef * 1.8 == patk) {
        if (pdef * r3 + patk * r3 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (pdef * 1.8 < patk) {
        if (pdef * r2 + patk * r1 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
}

//傷害
function damage(edef, patk) {
    if (patk > edef) {
        return edef - patk + edef;
    }
    else {
        return edef - 1;
    }
}

//防禦
function defense(eatk, pdef) {
    var e = evade(armor);
    if (e == 1) {
        window.alert("閃躲成功!")
    }
    if (e == 2) {
        if (eatk <= pdef) {
            player_hp = player_hp - 1;
        }
        if (eatk > pdef) {
            player_hp = Number(player_hp) + (pdef - eatk);
        }
    }
    document.cookie = "player_hp=" + player_hp;
}



//魔法攻擊
function magicdamage(edef) {
    player_mp = player_mp - 10;
    document.cookie = "player_mp=" + player_mp;
    return edef - 50;
}

//魔法回復
function magicrecover() {
    player_mp = player_mp - 25;
    player_hp = player_hp + 50;
    document.cookie = "player_mp=" + player_mp;
    document.cookie = "player_hp=" + player_hp;
}

//回復血量瓶
function recoverhp() {
    hpbottle = Number(GetCookie("hpbottle"));
    player_hp = Number(GetCookie("player_hp"));
    if (hpbottle > 0) {
        hpbottle = hpbottle - 1;
        player_hp = player_hp + 50;
    }
    else {
        window.alert("瓶子空了...")
    }
    document.cookie = "player_hp=" + player_hp;
    document.cookie = "hpbottle=" + hpbottle;
}

//回復魔力瓶
function recovermp() {
    mpbottle = Number(GetCookie("mpbottle"));
    player_mp = Number(GetCookie("player_mp"));
    if (mpbottle > 0) {
        mpbottle = mpbottle - 1;
        player_mp = player_mp + 50;
    }
    else {
        window.alert("瓶子空了...")
    }
    document.cookie = "player_mp=" + player_mp;
    document.cookie = "mpbottle=" + mpbottle;
}

//隨機召喚怪物
function enemyRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;//max,min為那一層怪物的最大最小編碼
}

//迴避成功與否
function evade(armor) {
    if (armor == 4) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 10) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 5) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 25) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 6) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 50) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 7) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 60) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 8) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 70) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 9) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 80) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 10) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 90) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 11) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 20) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 12) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 25) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 13) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 30) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 14) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 35) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (armor == 15) {
        var avoidv = Math.round(Math.random() * 100);
        if (avoidv <= 40) {
            return 1;
        }
        else {
            return 2;
        }
    }
}


function show_fighting_details() {
    document.getElementById('show_fighting_details').innerHTML = "角色血量 : " + player_hp + "<br>角色魔力 : " + player_mp + "<br>總共已擊敗" + kill + "隻怪物<br>";
}

function show_enemy_current_status(enemyhp) {
    document.getElementById('show_enemy_current_status').innerHTML = "敵方血量 : " + enemyhp;
}

var monster;
var current_edef;
var current_eatk;
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
    show_enemy_current_status(monster.Get_Enemy_def());
    show_fighting_details();
    current_edef = monster.Get_Enemy_def();
    current_eatk = monster.Get_Enemy_atk();
}

var check = false;
var cnt = 0;


function attack() {
    if (current_edef >= 0) {
        check = false;
        if (fight(current_eatk, current_edef, player_atk, player_def)) {
            window.alert("攻擊成功!!");
            current_edef = damage(current_edef, player_atk);
            if (current_edef <= 0) {
                window.alert("成功擊敗" + monster.Get_Enemy_name() + "了!!");
                window.alert("怪物已經死亡，請點擊「召喚怪物」召喚一隻新的來挑戰");
                cnt++;
                money++;
                kill++;
                document.cookie = "money=" + money;
                document.cookie = "kill=" + kill;
            }
        }
        else {
            window.alert("攻擊失敗!!");
            defense(current_eatk, player_def);
        }

        show_enemy_current_status(current_edef);
        show_fighting_details();

        if (player_hp <= 0) {
            window.location.href = "You_Died.html";
        }

        if ((stage == 12 && cnt >= 1) || (stage == 6 && cnt >= 1) || cnt >= 5) {
            check = true;
        }
    }
    else {
        window.alert("怪物已經死亡，請點擊「召喚怪物」召喚一隻新的來挑戰!!!");
    }

}

function magicattack() {
    player_mp = Number(GetCookie("player_mp"));
    if (player_mp < 10) {
        window.alert("魔不夠ㄌQAQ");
    }
    else {
        stage = Number(GetCookie("stage"));
        if (current_edef >= 0) {
            check = false;

            current_edef = magicdamage(current_edef);
            if (current_edef <= 0) {
                window.alert("成功擊敗" + monster.Get_Enemy_name() + "了!!");
                window.alert("怪物已經死亡，請點擊「召喚怪物」召喚一隻新的來挑戰");
                cnt++;
                money++;
                kill++;
                document.cookie = "money=" + money;
                document.cookie = "kill=" + kill;
            }
            show_enemy_current_status(current_edef);
            show_fighting_details();

            if ((stage == 12 && cnt >= 1) || (stage == 6 && cnt >= 1) || cnt >= 5) {
                check = true;
            }
        }
        else {
            window.alert("怪物已經死亡，請點擊「召喚怪物」召喚一隻新的來挑戰!!!");
        }
    }
}

function recover() {
    player_mp = Number(GetCookie("player_mp"));
    hpbottle = Number(GetCookie("hpbottle"));
    if (player_mp >= 10) {
        magicrecover();
    }
    if (hpbottle >= 1 && player_mp < 10) {
        recoverhp();
    }
    show_fighting_details();
}

function enchancearmor() {
    if (money < 10) {
        window.alert("錢錢不夠qAq")
    }
    else {
        armor = Number(GetCookie("player_armor"));
        money = Number(GetCookie("money"));
        armor0 = Number(GetCookie("armor0"));
        if (armor0 == 1) {
            if (armor >= 1 && armor < 5) {
                money = money - 10;
                armor = armor + 1;
                document.cookie = "money=" + money;
                document.cookie = "player_armor=" + armor;
                window.alert("成功升級防具!!!")
                show_current_status();
            }
            else if (armor == 5) {
                window.alert("已升級至最佳防具!!!")
            }
        }
        if (armor0 == 6) {
            if (armor >= 6 && armor < 10) {
                money = money - 10;
                armor = armor + 1;
                document.cookie = "money=" + money;
                document.cookie = "player_armor=" + armor;
                window.alert("成功升級防具!!!")
                show_current_status();
            }
            else if (armor == 10) {
                window.alert("已升級至最佳防具!!!")
            }
        }
        if (armor0 == 11) {
            if (armor >= 11 && armor < 15) {
                money = money - 10;
                armor = armor + 1;
                document.cookie = "money=" + money;
                document.cookie = "player_armor=" + armor;
                window.alert("成功升級防具!!!")
                show_current_status();
            }
            else if (armor == 15) {
                window.alert("已升級至最佳防具!!!")
            }
        }
    }

}

function enchanceweapend() {
    if (money < 10) {
        window.alert("錢錢不夠qAq")
    }
    else {
        armor = Number(GetCookie("player_weapend"));
        money = Number(GetCookie("money"));
        armor0 = Number(GetCookie("armor0"));
        if (armor0 == 1) {
            if (armor >= 1 && armor < 5) {
                money = money - 10;
                weapend = weapend + 1;
                document.cookie = "money=" + money;
                document.cookie = "player_weapend=" + weapend;
                window.alert("成功升級武器!!!")
                show_current_status();
            }
            else if (weapend == 5) {
                window.alert("已升級至最佳武器!!!")
            }
        }
        if (armor0 == 6) {
            if (armor >= 6 && armor < 10) {
                money = money - 10;
                weapend = weapend + 1;
                document.cookie = "money=" + money;
                document.cookie = "player_weapend=" + weapend;
                window.alert("成功升級武器!!!")
                show_current_status();
            }
            else if (weapend == 10) {
                window.alert("已升級至最佳武器!!!")
            }
        }
        if (armor0 == 11) {
            if (armor >= 11 && armor < 15) {
                money = money - 10;
                weapend = weapend + 1;
                document.cookie = "money=" + money;
                document.cookie = "player_weapend=" + weapend;
                window.alert("成功升級武器!!!")
                show_current_status();
            }
            else if (weapend == 15) {
                window.alert("已升級至最佳武器!!!")
            }
        }
    }

}

function finished1() {
    stage = Number(GetCookie("stage"));
    if (check) {
        window.alert("正在確認通關資格...通過!!!前往下一層吧!!!");
        stage = stage + 1;
        document.cookie = "stage=" + stage;
        if (stage == 13) {
            window.location.href = "ending.html";
        }
        else if (stage == 6 || stage == 12) {
            window.location.href = "boss1.html";
        }
        else if (stage == 7) {
            window.location.href = "stages.html";
        }
        else {
            location.reload();
        }
    }
    else {
        window.alert("擊敗五隻怪物才能繼續前進唷")
    }
}

function reStart() {
    window.location.href = "index.html";
}
