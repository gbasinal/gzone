(function(app) { 
	'use strict'; 
	
    var Functions = function() {};
    
	Functions.prototype.init = function() {
        var _self = this;
        _self.landingAnimationInit();
        _self.formResetAfterSending();
	};


    Functions.prototype.landingAnimationInit = function(){
        

        setTimeout(function() {
            Functions.prototype.firstIntervalText()
        }, 5800)
        setTimeout(function() {
            Functions.prototype.secondIntervalText()
        }, 5650)
    }

    Functions.prototype.firstIntervalText = function(){

        var count = 0;
        var animText = $('.animated-text')
        var interval = setInterval(function() {
            count++
            animText.find('.first').html(words.first[Math.floor(Math.random() * words.first.length)]);
            if (count >= words.first.length - 1) {

                clearInterval(interval)
                var index = Math.floor(Math.random() * words.first.length)

                animText.find('.first').html(words.first[index]);

                words.first.push(app.firstInterText)
                app.firstInterText = words.first[index]
                words.first.splice(index, 1)
                    // console.log(words.first)

                setTimeout(function() {
                    Functions.prototype.firstIntervalText()
                }, 3100)

            }

        }, 50);
    }

    Functions.prototype.secondIntervalText = function(){
    
        var count = 0;
        var animText = $('.animated-text')
        var intervalsec = setInterval(function() {
            count++
            animText.find('.second').html(words.second[Math.floor(Math.random() * words.second.length)]);
            if (count >= words.first.length + 1) {

                clearInterval(intervalsec)

                var index = Math.floor(Math.random() * words.second.length)
                animText.find('.second').html(words.second[index]);

                words.second.push(app.secondInterText)
                app.secondInterText = words.second[index]
                words.second.splice(index, 1)
                    // console.log(words.second)

                setTimeout(function() {
                    Functions.prototype.secondIntervalText()
                }, 3000)

            }

        }, 50);
    }

    Functions.prototype.formResetAfterSending = function(){
        $('#contactForm').submit(function (e) {
            setTimeout(function(){
                $('#contactForm')[0].reset();
            },500)
            
        });
    }


    app.Functions = Functions;

    app.ready(function () {
        Functions.prototype.init()
    })

})(window.app);