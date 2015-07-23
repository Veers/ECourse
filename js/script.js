window.onload = function () {

    new PDFObject({url: "../docs/primer.pdf"}).embed("pdf_view");

    var pdf_view = $('#pdf_view');

    $(".mini-menu > ul > li > a").click(function () {
        var ul = $(this).next(),
            clone = ul.clone().css({"height": "auto"}).appendTo(".mini-menu"),
            height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
        clone.remove();
        ul.animate({"height": height});
        //alert($(this).attr('href'));
        var str = $(this).attr('href');
        if (str.indexOf('.html') != -1) {
            //alert(str.substr(1,str.length));
            pdf_view.empty();
            pdf_view.load(str.substr(1, str.length));
        }
        if (str.indexOf('.pdf') != -1) {
            pdf_view.empty();
            new PDFObject({url: str.substr(1, str.length)}).embed("pdf_view");
        }
        return false;
    });

    $("a.menu_item").click(function () {
        var str = $(this).attr('href');
        if (str.indexOf('.html') != -1) {
            pdf_view.empty();
            pdf_view.load(str.substr(1, str.length));
        }
        if (str.indexOf('.pdf') != -1) {
            $("#pdf_view").empty();
            new PDFObject({url: str.substr(1, str.length)}).embed("pdf_view");
        }
    });

    $("[data-toggle]").click(function () {
        var toggle_el = $(this).data("toggle");
        var str = $(this).attr('href').split('#');
        var sidebar = $('.sidebar');
        sidebar.empty();
        sidebar.load(str[1]);
        pdf_view.empty();
        pdf_view.load(str[2]);
        var left= $('.container_of_content').css('left');
        if (left != "0px" ) {
        } else $(toggle_el).toggleClass("open-sidebar");
    });

    $('.content').click(function(){
        var toggle_el = $("[data-toggle]").data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });

};