$(function () {
    function custom_country_prepare() {
        $('.js-one-custom-country').off('change').on('change', function () {
            var id = $(this).val();
            if($(this).prop("checked")){
                $('.js-pre-customs-countries').append('<label class="btn btn-danger js-custom-country-del" data-code="' + id + '" for="custom-' + id + '" ' +
                  'style="margin-right: 10px;display: none;">' +
                  $(this).data('name') + '<span class="glyphicon glyphicon-remove"></span></label>');
                $('.js-custom-country-del[data-code="' + id + '"]').show(300);
            } else{
                $('.js-custom-country-del[data-code="' + id + '"]').hide(300, function () {
                    $(this).remove();
                });
            }
        });
    }

    function checkAllCheckBoxex() {
        var all_checkboxes = $('.js-hubs');
        if (all_checkboxes.length === all_checkboxes.filter(":checked").length) {
            $('#js-hubs-all').prop('checked', true);
        } else {
            $('#js-hubs-all').prop('checked', false);
        }
    }

    checkAllCheckBoxex();

    $('.js-hubs').on('click',function(){
        checkAllCheckBoxex();
    });
    $('#js-hubs-all').on('click',function() {
        var all_checkboxes = $('.js-hubs');
        all_checkboxes.prop('checked', true);
        checkAllCheckBoxex();
    });

    $('.js-one-country').on('change', function () {
        var id = $(this).val();
        if($(this).prop("checked")){
            var name = $(this).data('name');
            $('.js-pre-countries').append('<label class="btn btn-danger js-country-del" for="' + id + '" ' +
                'style="margin-right: 10px;display: none;">'
                + name + '<span class="glyphicon glyphicon-remove"></span></label>');
            $('.js-country-del[for="' + id + '"]').show(300);
            // Add this country in custom select
            var html =  '<label data-name="' + name.toLowerCase() + '" style="display: block;" data-code="' + id + '"  class="js-label-custom-country"> ' +
                '<input class="js-one-custom-country" type="checkbox" name="client[customs_countries][]" data-name="' + name + '" value="' + id + '"> ' +
                name +
            '</label>';
            var beforeLabel = null;
            $('.js-label-custom-country').each(function() {
                if ($(this).data('name') > name.toLowerCase()) {
                    beforeLabel = this;
                    return false;
                }
            });
            if (beforeLabel === null) {
                $('.js-all-customs-countries').append(html);
            } else {
                $(beforeLabel).before(html);
            }
            custom_country_prepare();
        } else {
            $('.js-country-del[for="' + id + '"]').hide(300, function () {
                $(this).remove();
            });
            $('.js-label-custom-country[data-code="' + id + '"]').hide(300, function () {
                $(this).remove();
            });
            $('.js-custom-country-del[data-code="' + id + '"]').hide(300, function () {
                $(this).remove();
            });
        }
    });
    var allCountries = $('.js-all-countries');
    $('.js-search').on('keyup', function () {
        allCountries.scrollTop(0);
        var pre = $(this).val().toLowerCase();
        var h = allCountries.find('label[data-name^="' + pre + '"]').position().top;

        allCountries.animate({scrollTop: h}, 500);
    });

    custom_country_prepare();

    var allCustomCountries = $('.js-all-customs-countries');
    $('.js-custom-search').on('keyup', function () {
        allCustomCountries.scrollTop(0);
        var pre = $(this).val().toLowerCase();
        var h = allCustomCountries.find('label[data-name^="' + pre + '"]').position().top;

        allCustomCountries.animate({scrollTop: h}, 500);
    });

    $('.js-one-currency').off('change').on('change', function () {
        var id = $(this).val();
        if($(this).prop("checked")){
            $('.js-pre-currencies').append('<label class="btn btn-danger js-currency-del" data-code="' + id + '" for="currency-' + id + '" ' +
                'style="margin-right: 10px;display: none;">' +
                $(this).data('name') + '<span class="glyphicon glyphicon-remove"></span></label>');
            $('.js-currency-del[data-code="' + id + '"]').show(300);
        } else{
            $('.js-currency-del[data-code="' + id + '"]').hide(300, function () {
                $(this).remove();
            });
        }
    });

    var allCurrencies = $('.js-all-currencies');
    $('.js-currency-search').on('keyup', function () {
        allCurrencies.scrollTop(0);
        var pre = $(this).val().toLowerCase();
        var h = allCurrencies.find('label[data-name^="' + pre + '"]').position().top;

        allCurrencies.animate({scrollTop: h}, 500);
    });

    $('.open_btn').click(function(){
        var abr =  $(this).attr('data-abr');
        $('#'+abr).animate({right: '0px'}).removeClass('hide');
        $('.'+abr).addClass('hide');
    });

    $('.close_btn').click(function(){
        var abr =  $(this).attr('data-abr');
        $('#'+abr).animate({right: '1000px'}, 400, 'swing', function() {
            $('#'+abr).addClass('hide');
            $('.'+abr).removeClass('hide');
        });
    });

    $('.nav-pills').on('click', 'li a', function () {
        var tabsLiink = $(this).text().trim();
        $('.panel-heading span').text(tabsLiink);
    });

    if ($(window).width() <= '991'){
        $('.sidebar-menu').insertBefore('.append');
    } else {
        $('.sidebar-menu').insertAfter('.append');
    }
});

