(function($) {
    var HelloWorldDevs = function() {

    };

    HelloWorldDevs.prototype.mailForm = function (form, success_msg, uid) {
        var $form = $(form);
        $form.submit(function(e) {
            e.preventDefault();
            var formData = $form.serialize();
            var formAction = 'http://web-api.tysonsteele.com/v1/webprops/'+uid+'/schedule'
            $('.form-error').remove();
            $.ajax({
                type: 'POST',
                url: formAction,
                data: formData,
                dataType: 'json',
                encode: true
            }).done(function (response) {
                $form.replaceWith($(success_msg).html());
            }).error(function (response) {
                var $error_list = $('<ul>');
                if(response.responseJSON == undefined) {
                    $error_list.append($('<li>').text('There was a problem with your submission. Please ensure all fields are correctly entered.'));
                } else {
                    $.each(response.responseJSON, function(key, value) {
                        $error_list.append($('<li>').text(value));
                    });
                }
                $form.before('<div class="form-error"></div>');
                $('.form-error').html($error_list).fadeIn();
            });
        });
    };

    var HWD = new HelloWorldDevs();
    HWD.mailForm('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

    $('.mobile-primary-menu a').click(function () {
        if ($('#primary-menu').find('ul.mobile-primary-menu').length > 0) {
            $('ul.mobile-primary-menu').toggleClass("show");
        }
    });

    $('#video-1 .close').click(function() {
        $('#video-1 .video-wrap iframe').attr('src', $('#video-1 .video-wrap iframe').attr('src'));
    });
    $('#video-2 .close').click(function() {
        $('#video-2 .video-wrap iframe').attr('src', $('#video-2 .video-wrap iframe').attr('src'));
    });
    $('#video-3 .close').click(function() {
        $('#video-3 .video-wrap iframe').attr('src', $('#video-3 .video-wrap iframe').attr('src'));
    });
    $('#video-4 .close').click(function() {
        $('#video-4 .video-wrap iframe').attr('src', $('#video-4 .video-wrap iframe').attr('src'));
    });
    $('#video-5 .close').click(function() {
        $('#video-5 .video-wrap iframe').attr('src', $('#video-5 .video-wrap iframe').attr('src'));
    });
    $('#video-5 .close').click(function() {
        $('#video-5 .video-wrap iframe').attr('src', $('#video-5 .video-wrap iframe').attr('src'));
    });
    $('#video-6 .close').click(function() {
        $('#video-6 .video-wrap iframe').attr('src', $('#video-6 .video-wrap iframe').attr('src'));
    });
    $('#video-7 .close').click(function() {
        $('#video-7 .video-wrap iframe').attr('src', $('#video-7 .video-wrap iframe').attr('src'));
    });
    $('#video-8 .close').click(function() {
        $('#video-8 .video-wrap iframe').attr('src', $('#video-8 .video-wrap iframe').attr('src'));
    });
    $('#video-9 .close').click(function() {
        $('#video-9 .video-wrap iframe').attr('src', $('#video-9 .video-wrap iframe').attr('src'));
    });
    $('#video-10 .close').click(function() {
        $('#video-10 .video-wrap iframe').attr('src', $('#video-10 .video-wrap iframe').attr('src'));
    });
    $('#video-11 .close').click(function() {
        $('#video-11 .video-wrap iframe').attr('src', $('#video-11 .video-wrap iframe').attr('src'));
    });
    $('#video-12 .close').click(function() {
        $('#video-12 .video-wrap iframe').attr('src', $('#video-12 .video-wrap iframe').attr('src'));
    });
    $('#video-13 .close').click(function() {
        $('#video-13 .video-wrap iframe').attr('src', $('#video-13 .video-wrap iframe').attr('src'));
    });
    $('#video-14 .close').click(function() {
        $('#video-14 .video-wrap iframe').attr('src', $('#video-14 .video-wrap iframe').attr('src'));
    });
    $('#video-15 .close').click(function() {
        $('#video-15 .video-wrap iframe').attr('src', $('#video-15 .video-wrap iframe').attr('src'));
    });
    $('#video-16 .close').click(function() {
        $('#video-16 .video-wrap iframe').attr('src', $('#video-16 .video-wrap iframe').attr('src'));
    });
    $('#video-17 .close').click(function() {
        $('#video-17 .video-wrap iframe').attr('src', $('#video-17 .video-wrap iframe').attr('src'));
    });
    $('#video-18 .close').click(function() {
        $('#video-18 .video-wrap iframe').attr('src', $('#video-18 .video-wrap iframe').attr('src'));
    });
    $('#video-19 .close').click(function() {
        $('#video-19 .video-wrap iframe').attr('src', $('#video-19 .video-wrap iframe').attr('src'));
    });
    $('#video-20 .close').click(function() {
        $('#video-20 .video-wrap iframe').attr('src', $('#video-20 .video-wrap iframe').attr('src'));
    });
    $('#video-21 .close').click(function() {
        $('#video-21 .video-wrap iframe').attr('src', $('#video-21 .video-wrap iframe').attr('src'));
    });
    $('#video-22 .close').click(function() {
        $('#video-22 .video-wrap iframe').attr('src', $('#video-22 .video-wrap iframe').attr('src'));
    });
    $('#video-23 .close').click(function() {
        $('#video-23 .video-wrap iframe').attr('src', $('#video-23 .video-wrap iframe').attr('src'));
    });
    $('#video-24 .close').click(function() {
        $('#video-24 .video-wrap iframe').attr('src', $('#video-24 .video-wrap iframe').attr('src'));
    });
    $('#apnea-video .close').click(function() {
        $('#apnea-video .video-wrap iframe').attr('src', $('#apnea-video .video-wrap iframe').attr('src'));
    })
    $('#sedation-video .close').click(function() {
        $('#sedation-video .video-wrap iframe').attr('src', $('#sedation-video .video-wrap iframe').attr('src'));
    })





})(jQuery);
