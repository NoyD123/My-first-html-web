$(document).ready(function () {

    function resize() {
        var fh = $('#container').height() * 0.8,
            th = $("#frame #text").prop('scrollHeight') / 0.88;
        if (th < fh) {
            fh = th;
        }
        $('#frame').css('height', fh + "px");
        $("#frame #text").css('height', (fh * 0.88) + "px");
    }
    $(window).on('resize', resize);
    resize();
    $('#frame').mouseover(function () {
        $('#frame').css('opacity', 1);
    });
    $('#frame').mouseout(function () {
        $('#frame').css('opacity', 0);
    });

    function play() {
        var audio = document.getElementById("audio");
        audio.play();
    }

    function pause() {
        var audio = document.getElementById("audio");
        audio.pause();
    }
    var flag = 0;
    $('#btn').on('click', function () {
        if (flag === 0) {
            $('#sun').css('animation-play-state', 'running');
            $('.light').css('animation-play-state', 'running');
            $('#cloud').css('opacity', 1);
            flag = 1;
            play();
        } else {
            $('#sun').css('animation-play-state', 'paused');
            $('.light').css('animation-play-state', 'paused');
            $('#sun').css('opacity', '0');
            $('.light').css('opacity', '0');
            flag = 0;
            pause();
        }
    });
});
