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
    document.getElementById('output1').innerHTML = "這裡是你旅途的起點....<br><你出賣了你的靈魂><br>世界之聲: 你好，我是作者大人的其中一部分，你的靈魂我確實收下了。<br>現在就將用" + player_Id + "的靈魂換來的地下城挑戰許可附加在你身上…雖然我本來想這麼說，<br>但在此之前，你還不是冒險者對吧？這樣就想挑戰地下城簡直是不可能，<br>先去選個職業，有了初級的戰力後再來見我吧~。";
}