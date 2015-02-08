var documentTree = function(param) {

    var node = readFile("file:///C:/Users/Punk/WebstormProjects/ECourse/test.txt");
    function readFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
        return rawFile;
    }
    return this;
};
