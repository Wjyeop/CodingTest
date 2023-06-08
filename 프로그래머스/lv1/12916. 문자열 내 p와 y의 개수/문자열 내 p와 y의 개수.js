function solution(s){
    let p = 0;
    let j =s.length;
    for(let i=0;i<j;i++){
        if(s.charAt(i)=='p'||s.charAt(i)=='P'){
            p++;            
        }
        if(s.charAt(i)=='y'||s.charAt(i)=='Y'){
            p--;
        }
    }

    return p == 0 ? true : false;
}