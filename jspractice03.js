let age = prompt('나이를 입력해 주세요');

let message = (age < 3) ? '아가야 안녕' :
(age < 100) ? '환영합니다!':
(age <18) ? '안녕!':
'나이가 많으시거나 잘못 입력하셨네요';

alert(message);