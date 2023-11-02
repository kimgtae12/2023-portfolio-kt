import React from 'react';

export const useIsFocus = (target : any) => {

    const [isFocus, setIsFocus] = React.useState<boolean>(false);


    React.useEffect(() => { //포커스 이벤트
        let observer: IntersectionObserver;

        if (target) {
            observer = new IntersectionObserver(([e]) => {
                // const target = e.target as HTMLElement;
                setIsFocus(e.isIntersecting);
            })
            observer.observe(target.current as Element);
        }

        return () => { //컴포넌트 unmount시 옵저버 정리
            if (observer && target.current) {
                observer.unobserve(target.current)
            }
        }
    }, [target]);

    return isFocus;

}