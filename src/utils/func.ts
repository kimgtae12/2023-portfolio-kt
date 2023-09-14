//현재 날짜 구하기 yyyy-mm-dd
export const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

export const idCheck = (id:string) => { //아이디 유효성 검사
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(id === ''){
        return {
            result:false,
            msg : '아이디를 입력해주세요.',
        }
    }
    else if(!emailReg.test(id)){
        return{
            result:false,
            msg:'올바르지 않은 이메일입니다.',
        }
    }
    else{
        return{
            result:true,
            msg:'',
        }
    }
}

export const pwCheck = (pw:string) => { //비밀번호 유효성 검사 (6~20자리 특수문자 포함)
    const passwordReg = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{6,20}$/
    if(pw === ''){
        return {
            result:false,
            msg : '비밀번호를 입력해주세요.',
        }
    }
    else if(!passwordReg.test(pw)){
        return{
            result:false,
            msg:'영문, 숫자, 특수문자를 조합하여 입력해주세요. (6~20자)',
        }
    }
    else{
        return{
            result:true,
            msg:'사용가능한 비밀번호 입니다.',
        }
    }
}

export const pwCheckRe = (pw:string,pw_re:string) => { //비밀번호 재입력 유효성 검사
    if(pw_re === ''){
        return{
            result:false,
            msg:'비밀번호를 한번 더 입력해주세요.',
        }
    }
    else if(pw != pw_re){
        return{
            result:false,
            msg:'비밀번호가 일치하지 않아요!',
        }
    }
    else{
        return{
            result:true,
            msg:'비밀번호가 일치합니다.',
        }
    }
}

export const phoneCheck = (phone:string) => { //휴대폰 유효성 검사(-제외)
    const phoneRule = /^(01[0]{1})[0-9]{3,4}[0-9]{4}$/

    if(phone === ''){
        return {
            result:false,
            msg : '휴대폰번호를 입력해주세요.',
        }
    }
    else if(!phoneRule.test(phone)){
        return{
            result:false,
            msg:'올바르지 않은 휴대폰 번호입니다.',
        }
    }
    else{
        return{
            result:true,
            msg:'사용가능한 휴대폰번호 입니다.',
        }
    }
}

export const phoneFrontCheck = (phone: string) => { 
    const phoneNumberRegex = /^(010|011|017|016|018|019)/

    if (phone.match(phoneNumberRegex)) {
        return {
            success: true,
            msg: '유효한 휴대폰 번호입니다.',
        }
    }
    else { 
        return {
            success: false,
            msg : '유효하지 않은 휴대폰 번호입니다.',
        }
    }
}

export const phoneAddHipone = (phone:string) => {

   const hiponePhone = phone.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

   return hiponePhone;
}

export const nameCheckRe = (name:string) => { //이름 체크
    const nameReg = /^[가-힣a-zA-Z]{2,15}$/;
    if(!nameReg.test(name)){
        return {
            result:false,
            msg:'이름은 2~15자, 한글과 영문으로 입력해주세요.',
        }
    }
    else{
        return {
            result:true,
            msg:'',
        }
    }
}

export const textBrConverter = (text:string) => { //
    let convertText = text;
    if(text === ''){
        return '';
    }
    else{
        convertText = convertText.replace(/\r\n/ig, '<br>');
        convertText = convertText.replace(/\\n/ig, '<br>');
        convertText = convertText.replace(/\n/ig, '<br>');

        return convertText;
    }
}

export const getDate = () => {

    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth()+1;
    const nowDay = nowDate.getDate();

    const weekList = ['일','월','화','수','목','금','토'];

    const nowWeek = weekList[nowDate.getDay()];

    const prevWeekDate = new Date(nowYear, nowMonth-1, nowDay - 7);

    const prevWeekYear = prevWeekDate.getFullYear(); //7일전
    const prevWeekMonth = prevWeekDate.getMonth()+1; //7일전
    const prevWeekDay = prevWeekDate.getDate(); //7일전
    return{
        year : nowYear, //현재 년도
        month : nowMonth, //현재 월
        day : nowDay, //현재 일
        nowWeek,//현재 요일
        prevWeekYear, //7일전 년도
        prevWeekMonth, //7일전 월
        prevWeekDay, //7일전 일
        prevWeekDate, //7일전 전체
        koText : `${nowYear}년 ${nowMonth}월 ${nowDay}일`,
        prevKoText : `${prevWeekYear}년 ${prevWeekMonth}월 ${prevWeekDay}일 ~ ${nowYear}년 ${nowMonth}월 ${nowDay}일`,
        onlyYearMonth : `${nowYear}년 ${nowMonth < 10 ? '0'+nowMonth : nowMonth}월`,
        onlyYearMonthHipon : `${nowYear}-${nowMonth < 10 ? '0'+nowMonth : nowMonth}`,
        comText : `${nowYear}.${nowMonth < 10 ? '0'+nowMonth : nowMonth}.${nowDay < 10 ? '0'+nowDay : nowDay}`,
        hiponText : `${nowYear}-${nowMonth < 10 ? '0'+nowMonth : nowMonth}-${nowDay < 10 ? '0'+nowDay : nowDay}`
    }
}

export const getTime = () => {
    const nowDate = new Date();

    const nowHour = nowDate.getHours();
    const nowMin = nowDate.getMinutes();

    return {
        nowHour,
        nowMin,
    }
}

export const dateConverter = (date:Date) => {
    const converDate = date;

    const year = converDate.getFullYear();
    const month = Number(converDate.getMonth()+1) < 10  ? '0'+String(converDate.getMonth()+1) : converDate.getMonth()+1;
    const day = converDate.getDate() < 10 ? '0'+converDate.getDate() : converDate.getDate();

    return {
        year,
        month,
        day,
    }
}

export const getDonutStyle = (fw:number,fh:number,bw:number,bh:number,per:number) => {
    return{
        '--donut-width' : fw+'rem',
        '--donut-height' : fh+'rem',
        '--donut-back-width' : bw+'rem',
        '--donut-back-height' : bh+'rem',
        '--donut-per' : per+'%'
    }
}

export const getColGraphStyle = (per:number,color:string,label:string) => {
    return{
        '--graph-per' : per+'%',
        '--graph-color' : color,
        '--graph-label' : label,
    }
}

export const getMinMax = (list:number[]) => {
    const min = Math.min(...list);
    const max = Math.max(...list);

    return {
        min,
        max,
    }
}

// export const NumberReplace = (event) => {


//     if(event.key ==== '.' 
//         || event.key ==== '-'
//         || event.key >= 0 && event.key <= 9) {
//         return true;
//     }
    
//     return false;
// }

export const NumberComma = (number:number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
}

export const timeWithDateConverter = (date : string) => {
    const [fullDate, fullTime] = date.split('T');

    const [year,month,day] = fullDate.split('-');

    const [hour,min,sec] = fullTime.split(':');

    return {
        year : year,
        month : month,
        day : day,
        stringDate : `${year}년 ${month}월 ${day}일`,
        hour : hour,
        min : min,
        sec : sec,
        stringTime : `${hour}시 ${min}분 ${sec}초`
    }
}

export const cityList = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종특별자치시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도'
]

export const cityDeepList: { [key: string]: string[] } = {
  '서울특별시': [
    '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
  ],
  '부산광역시': [
    '강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'
  ],
  '대구광역시': [
    '군위군', '남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'
  ],
  '인천광역시': [
    '강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '옹진군', '중구'
  ],
  '광주광역시': [
    '광산구', '남구', '동구', '북구', '서구'
  ],
  '대전광역시': [
    '대덕구', '동구', '서구', '유성구', '중구'
  ],
  '울산광역시': [
    '남구', '동구', '북구', '울주군', '중구'
  ],
  '세종특별자치시': [
    '세종시'
  ],
  '경기도': [
    '가평군', '고양시 덕양구', '고양시 일산동구', '고양시 일산서구', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구', '수원시 영통구', '수원시 팔달구', '시흥시', '안산시 단원구', '안산시 상록구', '안성시', '안양시 동안구', '안양시 만안구', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시 기흥구', '용인시 수지구', '용인시 처인구', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시'
  ],
  '강원도': [
    '강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍청군', '횡성군'
  ],
  '충청북도': [
    '괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청주시 상당구', '청주시 서원구', '청주시 청원구', '청주시 흥덕구', '충주시'
  ],
  '충청남도': [
    '공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '예산군', '천안시 동남구', '천안시 서북구', '청양군', '태안군', '홍성군'
  ],
  '전라북도': [
    '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시 덕진구', '전주시 완산구', '정읍시', '진안군'
  ],
  '전라남도': [
    '강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군'
  ],
  '경상북도': [
    '경산시', '경주시', '고령군', '구미시', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시 남구', '포항시 북구'
  ],
  '경상남도': [
    '거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시 마산함포구', '창원시 마산회원구', '창원시 성산구', '창원시 의창구', '창원시 진해구', '통영시'
  ],
  '제주특별자치도': [
    '남제주군', '북제주군', '서귀포시', '제주시'
  ]
}

// export const idBlock = (id:string,sIndex:number,eIndex:number,bText:string) => { //문자열 *처리
//     //id : targetId
//     //sIndex : start index
//     //eIndex : end index
//     //bText : replace Text
    
//     let converId = id;

//     String.prototype.replaceAt = function(index, replacement) {
//         if (index >= this.length) {
//             return this.valueOf();
//         }
    
//         var chars = this.split('');
//         chars[index] = replacement;
//         return chars.join('');
//     }
    
//     for(let i=sIndex; i<=eIndex; i++){
//         converId = converId.replaceAt(i,bText)
//     }

//     return converId; 
// }

// export const createBase64Image = (file:File,baseValue) => {
//     const reader = new FileReader();
//     let fileResult;
//     let base64 = '';
//     reader.readAsDataURL(file)

//     // const setFile = (result) => {
//     //     console.log(result);
//     //     base64 = result;
//     // }

//     reader.onload = (event) => {
//         fileResult = event.target.result;
//         baseValue = fileResult;
//         // setFile(fileResult);
//     }

    
//     // return reader.result;
// }

// export const secTimeConverter = (sec:string) => {

//     console.log(sec);
//     const hour = parseInt(Number(sec)/3600);
//     const min = parseInt((Number(sec)%3600)/60);
//     const second = (Number(sec)%60).toFixed(0);

//     return {
//         hour,
//         min,
//         second,
//     }
// }
