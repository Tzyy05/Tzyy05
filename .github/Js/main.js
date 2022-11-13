$( document ).ready(function () {

    $('.spinner-wrap').click(function() {

        //Menentukan nilai sppiner-wrap, bpm, audio dan fungsi pulse.
        var $this = $(this),
            audio = $this.siblings('audio')[0];
            bpm = Number($this.siblings('audio').data('bpm'))
            pulse = (66/bpm)*1000;

        var $play = $('.play-sprite');

        var $round = $('.spinner-outer');

        //Menentukan nama variable pada div class ball
        var $ball = $('.ball');
        var $ball1 = $('.ball1');
        var $ball2 = $('.ball2');


        //fungsi yang menentukan ketika musik hidup dan mati.
        if (audio.paused === false) {
            audio.pause();
            audio.currentTime = 0;
            $play.removeClass('playing');
            $round.removeClass('round');
            $ball.removeClass('pulse').css('display', 'none');
            $ball1.removeClass('double-bounce1');
            $ball2.removeClass('double-bounce2');
        } else {
            audio.play();
            $play.addClass('playing');
            $round.addClass('round');
            $ball.addClass('pulse').css('display', 'block');
            pulsing();
            setInterval(function () {
                pulsing();
            }, pulse);
        }

        //customasi beat pada setiap hentakan musik.
        function pulsing() {
            $ball1.addClass('double-bounce1');
            //$ball2.addClass('double-bounce2');

            setTimeout(function () {
                $ball1.removeClass('double-bounce1');
                //$ball2.removeClass('double-bounce2');
            }, pulse-100);
        }

    });

});
