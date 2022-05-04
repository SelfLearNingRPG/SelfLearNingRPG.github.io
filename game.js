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
    document.getElementById('output1').innerHTML = "這裡是你旅途的起點....<br>???：<br>你好，" + player_Id + "，恭候多時，我是作者大人的其中一部分，你的請求我已經收到了。<br>現在就將刻有" + player_Id + "的地下城鑰匙交給你....<br>雖然我本來想這麼說，但在此之前，你還沒有任何能力，這樣就想挑戰地下城簡直是白白送死，<br>先去選個職業，然後踏上變強的道路吧!<br>等時機成熟，我會再次顯現在你面前<br>祝你一切順利。";
}
var mp = 0;
var hp = 0;
var token = 0;
var pro = 0;
var speed = 0;

function select() {
    pro = document.getElementById("pro_selsct").value;
    document.cookie = "player_Pro=\"" + pro + "\"";
}

function confirm() {
    window.location.href = "page3.html";
}
document.cookie = "player_Mp=\"" + mp + "\"";
document.cookie = "player_Hp=\"" + hp + "\"";
document.cookie = "player_Token=" + token;

var armor,weapend;

function init () {
    if (pro =  "knight"){
        mp = 30;
        hp = 100;
        armor = 1;
        weapend = 1;
    }
    else if (pro = "ranger"){
        mp = 50;
        hp = 45;
        armor = 6;
        weapend = 6;
    }
    else if (pro = "magician"){
        mp = 75;
        hp = 50;
        armor = 11;
        weapend = 11;
    }
}

function levels() {
    
}