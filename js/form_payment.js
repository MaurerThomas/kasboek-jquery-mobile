/**
 * Created by Thomas on 23-11-2016.
 */

$(function() {
    // User input
    $('#form_new_payment').bind('submit', function(e) {

        var newPayment = {
            year: $('#form_year').val(),
            paymentValue: $('#form_payment_amount').val(),
            description: $('#form_payment_comment').val()
        };
        $("#table_2016").find('tbody:last').append('<tr><td>' + newPayment.year + '</td><td>' + newPayment.paymentValue + '</td><td>' + newPayment.description + '</td></tr>');

    });
});
