
    
    while(true){
        let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?');
        if(year == 2015){
            alert('정답입니다!');
            break;
        }else if(year > 2015){
            alert('숫자를 내려보세요');
        }else if(year < 2015){
            alert('숫자를 올려보세요');
        }
    }