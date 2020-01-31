$(document).ready(function(){

/* =============================================================
    함수명 : week_time(); / week_title(); / week_text();
    기능설명 : 암송 날짜 / 암송 공과 / 암송 말씀
============================================================= */

function week_time(week,msg){$(week).find('b').html(msg);}
function week_title(week,msg){$(week).find('i').html(msg);}
function week_text(week,msg,chapter){$(week).find('p').html(msg+'<span>'+chapter+'</span>');}

/* =============================================================
    기능설명 : 초등부 암송 (1~4주) + 월암송
============================================================= */

//초등부 1주차 암송
week_time('#week1','1월 1주차(1/5)');
week_title('#week1', '제 1과, 학년을 시작하며');
week_text('#week1','오직 심령으로 새롭게 되어 하나님을 따라 의와 진리의 거룩하으로 지으심을 받은 새 사람을 입으라','(엡 4:23~24)');
//초등부 2주차 암송
week_time('#week2','1월 2주차 (1/12)');
week_title('#week2', '제 2과, 엘리야를 돌보신 하나님');
week_text('#week2','내가 과연 너희를 버리지 아니하고 과연 너희를 떠나지 아니하리라 하셨느니라','(히 13:5)');
//초등부 3주차 암송
week_time('#week3','1월 3주차 (1/19)');
week_title('#week3', '제 3과, 갈멜산의 대결');
week_text('#week3','오직 여호와는 너희를 버리지 아니하고 과연 너희를 떠나지 아니하리라','(렘 10:10)');
//초등부 4주차 암송
week_time('#week4','1월 4주차 (1/26)');
week_title('#week4', '제 4과, 엘리야를 따른 엘리사');
week_text('#week4','여호와와 그 능력을 구할찌어다 그 얼굴을 항상 구할찌어다','(시 105:4)');
//초등부 월암송
week_time('#month','1월 월암송');
week_text('#month','또 네가 어려서부터 성경을 알았나니 성경은 능히 너로 하여금 그리스도 예수 안에 있는 믿음으로 말미암아 구원에 이르는 지혜가 있게 하느니라 모든 성경은 하나님의 감동으로 된 것으로 교훈과 책망과 바르게 함과 의로 교육하기에 유익하니 이는 하나님의 사람으로 온전케 하며 모든 선한 일을 행하기에 온전케 하려 함이니라','(딤후 3:15~17)');

/* =============================================================
    기능설명 : 유치부 암송 (1~4주) + 월암송
============================================================= */

//유치부 1주차 암송
week_time('#week5','1월 1주차(1/5)');
week_title('#week5', '제 1과, 친구야 안녕');
week_text('#week5','친구는 사랑이 끊이지 아니하고','(잠 17:17)');
//유치부 2주차 암송
week_time('#week6','1월 2주차(1/12)');
week_title('#week6', '제 2과, 나는 교회학교가 좋아요');
week_text('#week6','나는 주의 말씀을 지키리라','(시 119:57)');
//유치부 3주차 암송
week_time('#week7','1월 3주차(1/19)');
week_title('#week7', '제 3과, 보이지 않는 하나님');
week_text('#week7','아무 사람도 보지 못하였고 또 볼 수 없는 자시니','(딤전 6:16)');
//유치부 4주차 암송
week_time('#week8','1월 4주차(1/26)');
week_title('#week8', '제 4과, 나를 사랑하시는 하나님');
week_text('#week8','우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라','(요일 4:19)');

/* =============================================================
    기능설명 : 찬송율동 (1,2주차) + (3,4주차)
============================================================= */

function weeksong_title(a,b){$(a).find('h3').text(b);}
function weeksong_text(a,b){
  var text = $(a).find('p');
  $('<span>'+b+'</span>').appendTo(text);
}
function weeksong_address(a,b){$(a).find('iframe').attr('src',b);}

//찬송율동 (1,2주차)
weeksong_title('.bibleList-01','(1,2주차) 33. 다다다다 모여라');
weeksong_text('.bibleList-01','다다다다 모여라- 나의 친구들아');
weeksong_text('.bibleList-01','키 작은 아이 키 큰 아이 못생긴 아이');
weeksong_text('.bibleList-01','다다다다 모여라- 하나님 찬양하자');
weeksong_text('.bibleList-01','자 손을 잡고 입을 모아 하나님 찬양하자');
weeksong_text('.bibleList-01','내가 비록 키가 작고 힘이-없어도');
weeksong_text('.bibleList-01','하나님은 우리를- 사랑하셔요');

weeksong_address('.bibleList-01','https://player.vimeo.com/video/294902886');

//찬송율동 (3,4주차)
weeksong_title('.bibleList-02','(3,4주차) 89. 날 도우시네');
weeksong_text('.bibleList-02','날 도우시네 오 주님 나의 하나님');
weeksong_text('.bibleList-02','날 도와 이 길 갈힘주시네');
weeksong_text('.bibleList-02','날 도우시네 오 주님 나의 하나님');
weeksong_text('.bibleList-02','날 도와 이 길 갈힘주시네');
weeksong_text('.bibleList-02','상한 영 고치시며 갇힌 자 도우시고');
weeksong_text('.bibleList-02','저는 자 걷게하고 눈뜨게 하시네');
weeksong_text('.bibleList-02','날 도우시네 오 주님 나의 하나님');
weeksong_text('.bibleList-02','날 도와 이 길 갈힘주시네');

weeksong_address('.bibleList-02','https://player.vimeo.com/video/364225876');

// 한줄주석 https://player.vimeo.com/video/294880470
/*
  여러줄 주석
  https://player.vimeo.com/video/294880470
  https://player.vimeo.com/video/294880470
  https://player.vimeo.com/video/294880470
*/


/* =============================================================
    함수명 : month_img();
    기능설명 : 월간계획표 이미지 & 분반명단 이미지
============================================================= */
function month_img(a,b){$(a).find('img').attr('src',b);}

/* =============================================================
    기능설명 : 월간계획표 및 분반명단 이미지 (폴더에서 수정)
============================================================= */
//월간계획표 => 폴더에서 이미지명 month-plan.jpg 으로 수정
month_img('#monthPlan','month-img/month-plan.jpg');
//분반명단 => 폴더에서 이미지명 class-list.jpg 으로 수정
month_img('#classList','month-img/class-list.jpg');

});
