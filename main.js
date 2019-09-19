var speedNum = 1, duration = 80;
function changeSpeed (speedNum) {
    $('.write_speed').on('click', function () {
        speedNum ++;
        if(speedNum > 3){
            speedNum = 1;
        }
        switch(speedNum){
            case 1: 
                duration = 70;
                $('.speed_description').html('点我调速呀~');
                $('.speed_status').html('🚲');
                break;
            case 2:
                duration = 30;
                $('.speed_description').html('太废话了，我要最快！');
                $('.speed_status').html('🚗');
                break;
            case 3:
                duration = 0;
                $('.speed_description').html('我眼花了，慢一点~');
                $('.speed_status').html('🚀');
                break;
            default: return;
        }
    })
}
changeSpeed(speedNum);


var codeInputTimer, resumeInputTimer;
var demo = document.getElementsByClassName('code_con')[0];

writeCode(ready_code, '').then(() => {
    createResume().then(() => {
        adjustResume().then(() => {
            addAndAdjustAvatar().then(() => {
                showDownloadButton()
            })
        })
    })
})

function writeCode(code, origin) {
    var n = 1;
    return new Promise(res => {
        codeInputTimer = setTimeout(write, duration);
        function write () {
            $('.code_con').html(Prism.highlight(origin + code.substr(0, n), Prism.languages.css));
            $('#code_style').html(origin + code.substr(0, n))
            $(".code_con").scrollTop(3000);
            n += 1;
            if(n == code.length){
                clearInterval(codeInputTimer);
                res();
            }else{
                clearInterval(codeInputTimer);
                codeInputTimer = setTimeout(write, duration);
            }
        }
    })
}

function createResume () {
    return new Promise( res => {
        writeResume().then(() => {
            res();
        })
    })
}

function writeResume () {
    var n = 1;
    return new Promise( res => {
        resumeInputTimer = setInterval(write, duration)
        function write() {
            $('#resume').html(resume.substr(0, n));
            $("#resume").scrollTop(3000);
            n += 1;
            setTimeout(() => {
                $('.skip_resume').show();
                $('.skip_resume').on('click', function () {
                    skipResume().then(res);
                })
            }, 500)
            if(n == resume.length){
                clearInterval(resumeInputTimer);
                res();
            }else{
                clearInterval(resumeInputTimer);
                resumeInputTimer = setInterval(write, duration)
            }
        }
    })
}

function skipResume () {
    return new Promise( (res) => {
        clearInterval(resumeInputTimer);
        $('#resume').html(resume);
        $('.skip_resume').remove();
        res()
    })
}

function adjustResume () {
    return new Promise((res, rej) => {
        $('.skip_resume').remove();
        writeCode(code_marked, ready_code).then(() => {
            structureResume();
            $('#resume').scrollTop(0);
            writeCode(code_beautify_resume, ready_code + code_marked).then(res);
            setTimeout(function () {
                $('.skip_all').show();
                $('.skip_all').on('click', function () {
                    skipAll().then( ()=> {
                        console.log('all');
                        showDownloadButton()
                    });
                })
            }, 500)
        })
    })
}

function skipAll () {
    return new Promise(res => {
        clearInterval(codeInputTimer);
        $('#information').append($('.avatar'));
        var allCode = code_marked + ready_code + code_beautify_resume + code_photo
        $('.code_con').html(Prism.highlight(allCode, Prism.languages.css));
        $('#code_style').html(code_marked + ready_code + code_beautify_resume + code_photo);
        $('.skip_all').remove();
        res();
    })
}

function structureResume () {
    $('#resume').html(marked(resume));
    $('#resume').prepend('<div id="information"></div>', '<div id="skill"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>');
    $('#information').append($('h1'), $('p').eq(0));
    $('#skill').append($('h2').eq(0), $('ul').eq(0))
    // $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
    $('#jobs').append($('h2:contains("工作")'));
    $('h3:contains("公司")').each(function (index, ele) {
        $('<div class="experience"></div>').append($(ele), $('#resume > p').eq(0), $('#resume > ul').eq(0)).appendTo($('#jobs'));
    })
    for(var i = 0; i < 2; i ++){
        $('#works').append($('#resume > h2'), $('#resume > h3').eq(0), $('#resume > ul').eq(0))
    }
   
}

function addAndAdjustAvatar() {
    return new Promise(res => {
        $('#information').append($('.avatar'));
        writeCode(code_photo, ready_code + code_marked + code_beautify_resume).then(res)
    })
}

function showDownloadButton () {
    $('.skip_all').remove();
    $('#resume_code').css({'width': '23%'});
    $('.download_resume').addClass('download_show');
}