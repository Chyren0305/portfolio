//模版
$(document).ready(function() {
    $.getJSON("contact.json", function(data) {


        var infoHtml = '';
        $.each(data, function(template, detail) {

            infoHtml += '<div class="col-sm-4 blur"> ';
            // h4
            infoHtml += '<h4><a href="' + detail.href + '"';
            infoHtml += 'data-i18n="projects.' + template + '.href" target="_blank"></a></h4>';
            //img
            infoHtml += '<img src="' + detail.mainImg + '" class="img-responsive href" data-toggle="modal" data-target="#project' + template + '">';
            // h3
            infoHtml += '<h3 data-i18n="projects.' + template + '.title"></h3></div>';

            //modal    
            infoHtml += '<div class="modal fade" id="project' + template + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';

            //dialog
            infoHtml += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
            // h4
            infoHtml += '<h4 class="modal-title" id="myModalLabel" data-i18n="projects.' + template + '.about"></h4></div>';

            //body
            infoHtml += '<div class="modal-body"><a href="' + detail.href + '" target="_blank">';
            infoHtml += '<img class="img-responsive" src="' + detail.img + '"></a><p data-i18n="projects.' + template + '.content"></p></div>';

            //footer            
            infoHtml += '<div class="modal-footer">' +
                '<button type="button" class="btn btn-default" data-dismiss="modal" data-i18n="option.close">Close</button>' + '</div></div></div></div>';

        });

        // modal


        $('#allProject').html(infoHtml);
    });

});
