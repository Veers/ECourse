window.onload = function ()
{
    //var myPDF = new PDFObject({ url: "sample.pdf" }).embed();
    var variablename = new PDFObject({ url: "../docs/1.pdf" }).embed("pdf_view");

    var pdf_view = $('#pdf_view');
    var parentPdf = $('#pdf_view').parent();
    pdf_view.width(parentPdf.width());
    var height = $('#sidebar-wrapper').height();
    pdf_view.height(height);

    alert('test');
};