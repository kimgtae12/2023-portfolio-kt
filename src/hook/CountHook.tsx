import React from 'react';

const easeOutExpo = (time: number) => { //끝이 느려지는 효과  easeOut
    return time === 1 ? 1 : 1 - Math.pow(2,-10 * time)
}

export const useCountUp = (num: number, duration: number) => { 
    const [count, setCount] = React.useState(0);
    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);

    React.useEffect(() => { 
        let currentNumber = 0
        const counter = setInterval(() => {
          const progressRate = easeOutExpo(++currentNumber / totalFrame)
          setCount(Math.round(num * progressRate))

          // 진행 완료시 interval 해제
          if (progressRate === 1) {
            clearInterval(counter)
          }
        }, frameRate)
    }, [num])
    
    return count;
}
