function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function disp_alert() {
    alert("因為作者之力強制你要去當冒險者，你也無法拒絕，\n快去選擇你的職業吧！。")
}

var player_Id = "大中天";

function btclick() {
    player_Id = prompt("取個名字：", "大中天");
}

function stratgame() {
    //window.location.href = "page2.html";
    document.write("<div class=\"ok\">" + "這裡是你旅途的起點....<br><你出賣了你的靈魂><br>世界之聲: 你好，我是作者大人的其中一部分，你的靈魂我確實收下了。<br>現在就將用" + player_Id + "的靈魂換來的地下城挑戰許可附加在你身上…雖然我本來想這麼說，<br>但在此之前，你還不是冒險者對吧？這樣就想挑戰地下城簡直是不可能，<br>先去選個職業，有了初級的戰力後再來見我吧~。" + "</div>");
}