$(document).ready(function () {
    let wrapper = $('.wrapper'),
        btnSubmit = $('.btn-submit'),
        inputTel,
        error = $('.error'),
        accept = $('.accept-phone'),
        same = $('.same-phone'),
        // notify = $('.block-notify'),

        url = document.location.href,
        urlSplit = url.split('?')[1];

    //Libraries
    $('select').selectize();


    //Preload
    setTimeout(function () {
        $('#test').focus();
    }, 500);

    setTimeout(function () {
        wrapper.addClass('show');

        if(urlSplit === 'error') {
            error.addClass('show');
        } else if (urlSplit === 'success') {
            $('.input-telephone').val('11-111-11-11');
            btnSubmit.prop('disabled', true).addClass('off');
            error.removeClass('show');
            accept.addClass('show-accept');
            same.removeClass('show-error');
        } else if (urlSplit === 'same') {
            $('.input-telephone').val(111);
            error.removeClass('show');
            same.addClass('show-error');
            accept.removeClass('show-accept');
        }
    }, 200);

    //Validate
    btnSubmit.on('click', function () {
        inputTel = $('.input-telephone').val();
        if(inputTel === '') {
            error.addClass('show');
            same.removeClass('show-error');
            accept.removeClass('show-accept');
        } else if(inputTel === '111') {
            error.removeClass('show');
            same.addClass('show-error');
            accept.removeClass('show-accept');
        } else {
            btnSubmit.prop('disabled', true).addClass('off');
            error.removeClass('show');
            accept.addClass('show-accept');
            same.removeClass('show-error');
        }
   });
});
//# sourceMappingURL=script.js.map
