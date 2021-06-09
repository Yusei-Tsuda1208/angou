document.getElementById("kaidokuen").addEventListener("click",function (){
    
    let a1 = document.getElementById("a1").value;
    let a2=[],a3=[];
    const n = a1.length;
    let i=0,j=0;
    while(i<n){
        a2.push(a1.charCodeAt(i));
        i++;
    }
    for(i=1;i<=26;i++){
        for(j=0;j<n;j++){
            if(a2[j] !== 90){
                a2[j]+=1;
                a3 [j] = String.fromCharCode(a2[j]);
            }else{
                a2[j] = 65;
                a3 [j] = String.fromCharCode(a2[j]);
            }
            
        }
        document.getElementById("ans").value +=("i"+"="+i+"  "+a3.join(""))+"\n";
    }
});
