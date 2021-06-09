document.getElementById("angou").addEventListener("click",function (){
    let a1 = document.getElementById("a1").value;
    let a2=[],a3=[],a4;
    const n = a1.length;
    let i=0,j=0;
    var randum = (Math.floor(Math.random()*100))%26

    while(i<n){
        a2.push(a1.charCodeAt(i));
        i++;
    }
    
    for(j=0;j<n;j++){
        a2[j]+=randum;
        if(a2[j]>90){
            a2[j]=a2[j]%90+64;
        }
        a3[j] = String.fromCharCode(a2[j]);
    }
    document.getElementById("ans").value +=(a3.join(""))+"\n";
});