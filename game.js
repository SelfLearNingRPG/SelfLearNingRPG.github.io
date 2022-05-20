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


var armor, weapend, def, atk;

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

function resetvalue() {

}



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
    document.getElementById('begin').innerHTML = "你是一個" + zy + "<br>你目前的能力值如下:<br>MP : " + mp + "<br>HP : " + hp + "<br>防具 : " + armors[armor] + "<br>武器 : " + weapends[weapend];
}

var enemyv, eatk, edef;


function fight() {
    enemyv = Math.sqrt(eatk * eatk + edef * edef)
    if (def * 1.8 > atk) {
        if (def * 2 + atk >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (def * 1.8 == atk) {
        if (def * 1.5 + atk * 1.5 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
    if (def * 1.8 < atk) {
        if (def + atk * 2 >= enemyv) {
            return true;
        }
        else {
            return false;
        }
    }
}

function show_current_status() {
    var mp = document.cookie.replace(/(?:(?:^|.*;\s*)player_Mp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var hp = document.cookie.replace(/(?:(?:^|.*;\s*)player_Hp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.getElementById('status').innerHTML = "你目前的能力值如下: <br>MP : " + mp + "<br>HP : " + hp;
}