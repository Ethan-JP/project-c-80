var paragraph=[]
var displayarray=[]
function submit() {
    for(var x=1;x<=5;x++){
        var line=document.getElementById("input"+x).value;
        paragraph.push(line)
    }
    var displayarray=paragraph.join(". ")
    document.getElementById("output").innerHTML=displayarray;
}



