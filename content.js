$(function() {
  $("#ggg-container").on('click', "div.pgcr .pgcr-team .players .player .player-row .name a", function(e) {
    var playerhtml = $(this).html();
    var name = playerhtml.replace(/<em.+<\/em>/,"").trim();
    var current = $(".emblem .name").text();
    var url = window.location.href.replace(current, name);
    var win = window.open(url, '_blank');
    win.focus();
  });
});