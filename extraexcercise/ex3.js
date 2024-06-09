let hour24=true;
function D(){
function Da()
{
    let date=new Date();
    var datehour=date.getHours();
    var datemin=date.getMinutes();
    var datesec=date.getSeconds();
    let mer;
    
    if(datehour>=12){
        mer="PM";
    } else
    {  mer="AM";
    }
if(hour24)
{
    document.getElementById("date").innerHTML=datehour+" : "+datemin+" : "+datesec+"  "+mer;
}
else{
    if(datehour<12){
        datehour=datehour;
        mer="AM";
    }
    else{
        datehour=datehour%12;
        mer="PM";
    }
    document.getElementById("date").innerHTML=datehour+" : "+datemin+" : "+datesec+" "+mer;
}
}
setInterval(Da,1000);

}

function chan(){
      hour24=!hour24;
    D();
}


function colr(){

    document.getElementById("date").style.color="blue"
    //document.getElementById("pid4").innerHTML="hello";

}

function alarm(){
    function alarm1()
    {

    let settime=document.getElementById("alarm").value;

    let splittime=settime.split(":");
    let date=new Date();
    var datehour=date.getHours();
    var datemin=date.getMinutes();
    var datesec=date.getSeconds();

    let a=splittime[0];
    a=Number.parseInt(a);
    let b=splittime[1];
    b=Number.parseInt(b);
    c=0;
    //document.getElementById("pid3").innerHTML=b;

    if(datehour==a&&datemin==b&&datesec==c)
    {
        window.alert("alarm...You scheduled something..")
        // document.getElementById("pid3").innerHTML="hello"
    }

}
    setInterval(alarm1,1000);

}


function changezone(){
    const timeZone = prompt("Enter a time zone (e.g., 'America/New_York'):");
    //document.getElementById("pid2").innerHTML=timeZone;
    
}