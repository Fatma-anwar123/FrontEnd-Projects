var grades=[]
var totalhours=[]
function savedata(){
 grades.push(document.getElementById('ML').value) ;
 grades.push(document.getElementById("Bio").value);
  grades.push(document.getElementById('CS').value);
  grades.push(document.getElementById('SW').value);
  totalhours.push(document.getElementById("h1").value)
  totalhours.push(document.getElementById("h2").value)
  totalhours.push(document.getElementById("h3").value)
  totalhours.push(document.getElementById("h4").value)

 }
function Calc(){
    var n, totalGrade=0
    var grade=[];
    var sum=0;
    n=grades.length;
    
    for(var i=0;i<n;i++){
        if(grades[i]>=90){
            grade[i]=4;
        }
        if(grades[i]<90 & grades[i]>=85){
            grade[i]=3.7;
    
        }
        if(grades[i]<85 & grades[i]>=80){
            grade[i]=3.3;
    
        }
        if(grades[i]<80 & grades[i]>=75){
            grade[i]=3;
    
        }
        if(grades[i]<75 & grades[i]>=70){
            grade[i]=2.7;
    
        }
        if(grades[i]<70 & grades[i]>=65){
            grade[i]=2.4;
    
        }
        if(grades[i]<65 & grades[i]>=60){
            grade[i]=2.2;
    
        }
        if(grades[i]<60 & grades[i]>=50){
            grade[i]=2;
    
        }
        if(grades[i]<50){
            grade[i]=0;
    
        }
    }
    for(var i=0;i<grade.length;i++){
      totalGrade +=(grade[i]*totalhours[i]);
    }
    for (let i = 0; i < totalhours.length; i++) {
    sum += parseInt(totalhours[i]) ;
   }

    alert(sum)
    alert(totalGrade)
    var GPA=(totalGrade/sum);
    document.getElementById("b1").innerHTML=GPA
    }
