function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i = 0, l = cookieAry.length; i < l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
}

function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}

function disp_alert() {
    alert("因為作者之力強制你要去當冒險者，你也無法拒絕，\n快去選擇你的職業吧！。")
}

function btclick() {
    var player_Id = prompt("取個名字：", "大中天");
    setCookie("player_Id", player_Id, 30);
    window.location.href = "page2.html";
}

function startgame() {
    var player_Id = getCookieByName('player_Id');
    document.getElementById('output1').innerHTML = "這裡是你旅途的起點....<br><你出賣了你的靈魂><br>世界之聲: 你好，我是作者大人的其中一部分，你的靈魂我確實收下了。<br>現在就將用\<" + player_Id + "\>的靈魂換來的地下城挑戰許可附加在你身上…雖然我本來想這麼說，<br>但在此之前，你還不是冒險者對吧？這樣就想挑戰地下城簡直是不可能，<br>先去選個職業，有了初級的戰力後再來見我吧~。";
}