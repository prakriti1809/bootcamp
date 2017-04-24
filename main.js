function populateData() {
    $.getJSON('data.json', function (json) {//parseJSON

        var html = '<ul class="myList">';//instantiate

        $.each(json, function (i, lev1) {// 'Shoes' level
            html += '<li>' + i;
            $.each(lev1, function (j, lev2) {
                html += '<ul>';
                $.each(lev2, function (k, lev3) {// 'Women' level
                    html += '<li>' + k;
                    $.each(lev3, function (l, lev4) {
                        html += '<ul>';
                        $.each(lev4, function (m, lev5) {// 'Sandals' level
                            html += '<li>' + m;
                            $.each(lev5, function (n, lev6) {
                                html += '<ul>';
                                $.each(lev6, function (o, lev7) {// 'Slide' level
                                    html += '<li>' + o;
                                    $.each(lev7, function (p, lev8) {
                                        html += '<ul>';
                                        $.each(lev8, function (q, lev9) {//Key : Value pairs
                                            html += '<li>' + q + ': ' + lev9 + '</li>';
                                        });
                                        html += '</ul>';
                                    });
                                    html += '</li>';
                                });
                                html += '</ul>';
                            });
                            html += '</li>';
                        });
                        html += '</ul>';
                    });
                    html += '</li>';
                });
                html += '</ul>';
            });
            html += '</li>';
        });
        html += '</ul>';

        //append to body
        $('body').append(html);
    });
}

var counter = 0;

function sendRequest() {

    var promise = new Promise(function (resolve, reject) {

        setTimeout(function () {
            counter += 1;


            if (counter < 3) {
                resolve('Count is: ' + counter);
            } else {
                reject('Too many clicks');
            }

        }, 1000);


    });

    promise
        .then(successCallback)
        .then(function (value) {
            console.log('Value is: ', value)
        })
        .catch(failureCallback);

    function successCallback(msg) {
        console.log(msg);
        return new Promise( function (resolve, reject) {
            $.ajax({
                url: 'data.json',
                dataType: 'json',
                success: function () {
                    resolve('Successfully fetched data');
                },
                error: function (error) {
                    reject('error occurred: ', error);
                }
            });

        });
    }

    function failureCallback(msg) {
        console.log('Promise failed: ', msg);
    }


    // promise.then(successCallback, failureCallback);
}


$(document).ready(function () {
    populateData();
});