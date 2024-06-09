
    const questions=[
        {
            "question":"What is the name of the weak zone of the earth’s crust?",
            "options":["Seismic", "Cosmic","Formic","Anaemic"],
            "ans":"Seismic"
        },
        {
            "question":"Where was India’s first national Museum opened",
            "options":["Delhi","Hyderabad","Rajasthan","Mumbai"],
            "ans":"Mumbai"
        },
        {
            "question":"The world’s nation 5G mobile network was launched by which country?",
            "options":["Japan","Asia","South Korea","Malaysia"],
            "ans":"South Korea"
        }
    ];


    function func1(){
        let firstques=questions[0];
        document.getElementById("ques").innerHTML=firstques.question;
        let firstoption=firstques.options
        document.getElementById("op1").innerHTML=firstoption[0];
        document.getElementById("op2").innerHTML=firstoption[1];
        document.getElementById("op3").innerHTML=firstoption[2];
        document.getElementById("op4").innerHTML=firstoption[3];
        
    }
    let i=1;
    function next(){
        
        let firstques=questions[i];
        document.getElementById("ques").innerHTML=firstques.question;
        let firstoption=firstques.options
        document.getElementById("op1").innerHTML=firstoption[0];
        document.getElementById("op2").innerHTML=firstoption[1];
        document.getElementById("op3").innerHTML=firstoption[2];
        document.getElementById("op4").innerHTML=firstoption[3];
        i++;
    }
var y=1;
var score=0;
    function submit(){
        
        for(j=1;j<=y;j++)
        {
        if(document. getElementById('opi1'). checked) {
            if(y==1){
                score++;
            }
            else{
                
            }
            // document.getElementById("ex").innerHTML=score;
        } 
        else if(document. getElementById('opi2'). checked) 
        { 
            
        } 
        else if(document. getElementById('opi3'). checked) 
        {
            if(y==3){
                score++;
            }
            else{
                
            }
            // document.getElementById("ex").innerHTML=score;
        }
        else if(document. getElementById('opi4').checked)
        {
            if(y==2){
                score++;
            }
            else{
                
            }
            // document.getElementById("ex").innerHTML=score;
        }
        else
        {
            document.getElementById("ex").innerHTML="no value selected";
        } 
        }
        y++;
        //document.getElementById("ex").innerHTML=y;

    }

    function result(){
        // document.getElementById("rxx").innerHTML=score;
        let ansarr=["Seismic","Mumbai","South Korea"];
        if(score<1)
        {
            document.getElementById("rxx").innerHTML="you lost all";
        }
        else if(score>=1&&score<4)
        {
            document.getElementById("rxx").innerHTML="you made one correct";
        }
        else if(score>=4&&score<6)
        {
            document.getElementById("rxx").innerHTML="you made two correct";
        }
        else if(score>=6)
        {
            document.getElementById("rxx").innerHTML="you made all correct";
        }


        document.getElementById("ans").innerHTML="Answer key:"+ansarr;
    }


    count=10;
    function timer(){
        function time(){
            
        }
    }