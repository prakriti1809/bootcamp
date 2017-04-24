function populateData() {
    $.getJSON('data.json', function(json) {//parseJSON

        var html = '<ul class="myList">';//instantiate

        $.each(json, function(i, lev1) {// 'Shoes' level
            html += '<li>' + i;
            $.each(lev1, function(j, lev2) {
                html += '<ul>';
                $.each(lev2, function(k, lev3) {// 'Women' level
                    html += '<li>' + k;
                    $.each(lev3, function(l, lev4) {
                        html += '<ul>';
                        $.each(lev4, function(m, lev5) {// 'Sandals' level
                            html += '<li>' + m;
                            $.each(lev5, function(n, lev6) {
                                html += '<ul>';
                                $.each(lev6, function(o, lev7) {// 'Slide' level
                                    html += '<li>' + o;
                                    $.each(lev7, function(p, lev8) {
                                        html += '<ul>';
                                        $.each(lev8, function(q, lev9) {//Key : Value pairs
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

$(document).ready(function () {
    populateData();
});