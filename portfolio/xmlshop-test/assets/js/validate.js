(function() {

    var app = {

        initialize : function () {
            this.setUpListeners();
        },

        setUpListeners : function () {
            $('form').on('submit', app.submitForm).end()
                     .on('keyup', 'input', app.callBackFunc);
        },

        submitForm : function (e) {
            e.preventDefault();

            var form = $(this);

            if(app.validateForm(form) === false) return false;

            form.html('<span class="success-mess">Thank you, message was sent!</span>');

        },

        validateForm : function (form) {

            var requiredInputs = form.find('input.required'),
                inputEmail = $("[name='email']"),
                inputEmailVal = inputEmail.val(),
                inputPhone = $("[name='phone']"),
                inputPhoneVal = inputPhone.val(),
                valid = true;

            //empty and short val
            $.each(requiredInputs, function (index, val) {
                var input = $(val),
                    valInput = input.val(),
                    formGroup = input.parents('.form-group'),
                    label = formGroup.find('label').text().toLowerCase(),
                    textError = 'Enter ' + label;

                formGroup.find('span').remove();

                if (valInput.length === 0 || valInput.length < 3) {
                    formGroup.removeClass('has-success').addClass('has-error');
                    input.after('<span class="error-mess">' + textError + '<span>');
                    valid = false;
                } else {
                    formGroup.removeClass('has-error').addClass('has-success');
                }

            });

            //email val
            if (inputEmailVal.length !== 0) {
                if(!validEmail(inputEmailVal)) {
                    inputEmail.parents('.form-group').removeClass('has-success').addClass('has-error');
                    inputEmail.after('<span class="error-mess"> Enter valid email <span>');
                    valid = false;
                } else {
                    inputEmail.parents('.form-group').removeClass('has-error').addClass('has-success').end()
                              .parents('.form-group').find('span').remove();
                }
            }
            function validEmail(email) {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                return pattern.test(email);
            }

            //phone val
            if (inputPhoneVal.length !== 0) {
                if(!validPhone(inputPhoneVal)) {
                    inputPhone.parents('.form-group').removeClass('has-success').addClass('has-error');
                    inputPhone.after('<span class="error-mess"> Enter valid telephone (+380635290289) <span>');
                    valid = false;
                } else {
                    inputPhone.parents('.form-group').removeClass('has-error').addClass('has-success').end()
                              .parents('.form-group').find('span').remove();
                }
            }
            function validPhone(number) {
                var pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
                return pattern.test(number);
            }

            return valid;
        },

        callBackFunc : function () {
            var inputName = $("[name='name']"),
                inputNameVal = inputName.val(),
                inputEmail = $("[name='email']"),
                inputEmailVal = inputEmail.val(),
                inputPhone = $("[name='phone']"),
                inputPhoneVal = inputPhone.val();

            inputName.parents('.form-group').find('span').remove();
            inputEmail.parents('.form-group').find('span').remove();
            inputPhone.parents('.form-group').find('span').remove();

            //empty and short val input name
            function inputVal(text) {
                if (text.length === 0) {
                    inputName.parents('.form-group').removeClass('has-success').addClass('has-error');
                    inputName.after('<span class="error-mess">Enter name<span>');
                } else if(text.length < 3) {
                    inputName.parents('.form-group').removeClass('has-success').addClass('has-error');
                    inputName.after('<span class="error-mess">The name must be at least 3 letters<span>');
                } else {
                    inputName.parents('.form-group').removeClass('has-error').addClass('has-success');
                }
            }
            inputVal(inputNameVal);

            //mail val
            function emailVal(email, callback) {

                if (inputEmailVal.length !== 0) {
                    if (!validEmail(email)) {
                        inputEmail.parents('.form-group').removeClass('has-success').addClass('has-error');
                        inputEmail.after('<span class="error-mess"> Enter valid email <span>');
                    } else {
                        inputEmail.parents('.form-group').removeClass('has-error').addClass('has-success');
                    }
                } else {
                    inputEmail.parents('.form-group').removeClass('has-success').addClass('has-error');
                    inputEmail.after('<span class="error-mess"> Enter email <span>');
                }
                callback(email);

            }
            function validEmail(email) {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                return pattern.test(email);
            }
            emailVal(inputEmailVal, validEmail);

            //phone val
            function phoneVal(number, callback) {

                if (inputPhoneVal.length !== 0) {
                    if(!validPhone(number)) {
                        inputPhone.parents('.form-group').removeClass('has-success').addClass('has-error');
                        inputPhone.after('<span class="error-mess"> Enter valid telephone ( +380635290289 ) <span>');
                    } else {
                        inputPhone.parents('.form-group').removeClass('has-error').addClass('has-success');
                    }
                } else {
                    inputPhone.parents('.form-group').removeClass('has-success').addClass('has-error');
                    inputPhone.after('<span class="error-mess"> Enter telephone <span>');
                }
                callback(number);

            }
            function validPhone(number) {
                var pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
                return pattern.test(number);
            }
            phoneVal(inputPhoneVal, validPhone);

        }

    };

    app.initialize();

}());