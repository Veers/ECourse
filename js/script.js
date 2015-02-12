window.onload = function () {
    //var myPDF = new PDFObject({ url: "sample.pdf" }).embed();
    //var tree = documentTree();

    //function readFile(file) {
    //    var rawFile = new XMLHttpRequest();
    //    rawFile.open("GET", file, false);
    //    rawFile.onreadystatechange = function () {
    //        if (rawFile.readyState === 4) {
    //            if (rawFile.status === 200 || rawFile.status == 0) {
    //                var allText = rawFile.responseText;
    //                alert(allText);
    //            }
    //        }
    //    }
    //    rawFile.send(null);
    //    return rawFile;
    //}

    //var file = readFile("file:///C:/Users/Punk/WebstormProjects/ECourse/test.txt");

    var variablename = new PDFObject({url: "../docs/1.pdf"}).embed("pdf_view");

    //var pdf_view = $('#pdf_view');
    //var parentPdf = $('#pdf_view').parent();
    //pdf_view.width(parentPdf.width());
    //var height = $('#sidebar-wrapper').height();
    //pdf_view.height(height);

    //alert('test');

    $(".mini-menu > ul > li > a").click(function () {
        var ul = $(this).next(),
            clone = ul.clone().css({"height": "auto"}).appendTo(".mini-menu"),
            height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
        clone.remove();
        ul.animate({"height": height});
        //alert($(this).attr('href'));
        var str=$(this).attr('href');
        if(str.indexOf('.html')!=-1) {
           //alert(str.substr(1,str.length));
            $("#pdf_view").empty();
            $("#pdf_view").load(str.substr(1,str.length));
        }
        if(str.indexOf('.pdf')!=-1)
        {
            $("#pdf_view").empty();
            var variabl = new PDFObject({url: str.substr(1,str.length)}).embed("pdf_view");
        }
        return false;
    });

    $("a.menu_item").click(function () {
        var str=$(this).attr('href');
        if(str.indexOf('.html')!=-1) {
            $("#pdf_view").empty();
            $("#pdf_view").load(str.substr(1,str.length));
        }
        if(str.indexOf('.pdf')!=-1)
        {
            $("#pdf_view").empty();
            var variabl = new PDFObject({url: str.substr(1,str.length)}).embed("pdf_view");
        }
    });

    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });

};