import React from 'react';

export const useIsMobile = () => {

    const [isMobile, setIsMobile] = React.useState(false);


    React.useEffect(() => { 
        setIsMobile(window.innerWidth <= 720)
    },[window.innerWidth])

    return isMobile
}