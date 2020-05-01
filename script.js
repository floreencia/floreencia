var its_bday;
$(document).ready(function () {
    var today = moment().startOf('day');
    var bday = moment({ year: today.year(), month: 4, day: 1 });
    var past = bday.diff(today) < 0; //was the birthday this year already?
    if (past) {
        console.log("Bday was already this year!");
        bday.add('years', 1);
    }
    var diff_days = bday.diff(today, 'days');
    var $answer = $('#answer');
    var $subtext = $('#subtext');
    if (diff_days == 0) {
        its_bday = true;
        $answer.text("YES!");
        $subtext.text("Happy Birthday, Florencia!");
        $subtext.css('font-size', '500%');
        $('body').css('background-image', "url('party_whale.jpg')");
    } else {
        var answers = ["NO", "NOPE", "NOT YET", "NOT TODAY", "Noooo"];
        var answer = answers[Math.floor(Math.random() * answers.length)];
        $answer.text(answer);
        var s = (diff_days > 1) ? "s" : "";
        $subtext.text("It's in " + diff_days + " day" + s + "!");
    }
});

$.getScript("https://www.youtube.com/iframe_api", function (data, textStatus, jqxhr) {
    console.log("Youtube API load: " + textStatus);
});

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', { events: { 'onReady': onPlayerReady } });
}

function onPlayerReady(event) {
    if (its_bday) {
        event.target.playVideo();
    }
}