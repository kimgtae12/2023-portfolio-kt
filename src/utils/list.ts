
import RreactQueryImg from '../assets/img/react-query.svg';

import tobyFromLogo from '../assets/img/logo/tobyfrom_logo.svg';
import tmembershipLogo from '../assets/img/logo/tmembership.svg';


export const techList = [
    {
        posX: 150,
        posY: -80,
        img: require('../assets/img/react.png'),
        technic: 70,
        name: 'React.JS',
    },
    {
        posX: 150,
        posY: 80,
        img : require('../assets/img/react-native-ioc.png'),
        technic: 60,
        name : 'React Native',
    },
    {
        posX: -150,
        posY: 80,
        img : require('../assets/img/typescript.png'),
        technic: 80,
        name : 'TypeScript',
    },
    {
        posX: -150,
        posY: -80,
        img : require('../assets/img/vue.png'),
        technic: 50,
        name : 'Vue3.JS',
    },
    {
        posX: 0,
        posY: -150,
        img : RreactQueryImg,
        technic: 60,
        name : 'React Query',
        
    },
    {
        posX: 0,
        posY: 150,
        img : require('../assets/img/zustand.png'),
        technic: 80,
        name : 'Zustand',
    },
]

export const TaskList = [
    {title : 'React.JS' , img : require('../assets/img/react.png')},
    {title : 'React Native' , img : require('../assets/img/react-native-ioc.png')},
    // {title : 'Vue' , img : require('../assets/img/vue.png')}
]

export const ReactList = [
    {
        title : '여행버스 - travelBus',
        img : require('../assets/img/logo/travelbus_logo.jpg'),
        link : 'https://travelbustv.com', 
        androidLink : '',
        iosLink : '',
        isLink : true,
        env: [
            {
                name : 'Next.js',
                color : '000000',
                icon : 'nextdotjs',
            },
            {
                name : 'ReduxToolkit',
                color : '764ABC',
                icon : 'redux',
            }
        ], 
        contents: `API동기화 및 UI개발, 로직개발을 담당하였습니다. \n 주요기능으로는 라이브방송 및 채팅이 있으며, 숏츠촬영 및 조회가 있습니다.`
    },
    {
        title : 'T-membership-돈버는 설문(WebView)', 
        img : require('../assets/img/logo/sktmembership.png') , 
        link : 'T멤버십 앱 - 미션탭 - 돈버는설문배너',
        androidLink : '',
        iosLink : '',
        isLink : false,
        env: [
            {
                name : 'React.js',
                color : '61DAFB',
                icon : 'react',
            },
            {
                name : 'TypeScript',
                color : '3178C6',
                icon : 'typescript',
            },
            {
                name : 'ReactQuery',
                color : 'FF4154',
                icon : 'reactquery',
            },
            {
                name : 'ZUSTAND',
                color : '',
                icon : '',
            }
        ], 
        contents : 'SKT 백엔드 개발자와의 커뮤니케이션을 통한 API동기화 및 UI개발, 로직개발을 담당하였습니다.\n 또한 Jira를 통한 이슈등록 및 트러블슈팅관리에 대해 학습할 수 있었습니다. \n\n 주요기능으로는 다양한 폼의 설문조사 및 그래프를통한 통계화면 조회가 있습니다.'
    },
    {
        title : '투바이프롬 - ToByFrom', 
        img:tobyFromLogo ,
        link : 'https://tobyfrom.com',
        androidLink : '',
        iosLink : '',
        isLink : true,
        env: [
            {
                name : 'React.js',
                color : '61DAFB',
                icon : 'react',
            },
            {
                name : 'TypeScript',
                color : '3178C6',
                icon : 'typescript',
            },
            {
                name : 'ReactQuery',
                color : 'FF4154',
                icon : 'reactquery',
            },
            {
                name : 'ZUSTAND',
                color : '',
                icon : '',
            }
        ], 
        contents : 'API동기화 및 UI개발, 로직개발과 함께 프론트엔드 개발 총괄을 담당하였습니다.\n 해당 프로젝트에서 평소 공부하던 React Query를 적용하여 캐싱관리 및 예외관리를 할 수 있게되었습니다. \n\n 주요기능으로는 여행사 및 고객간의 여행견적 신청 및 견적추천이 가능한 여행사 매칭시스템이 있습니다.'
    }
];

export const ReactNativeList = [
    {
        title : '라운지 - 직장인 커뮤니티', 
        img : require('../assets/img/logo/lounge_logo.png'),
        link : '',
        androidLink : 'https://play.google.com/store/apps/details?id=com.employer_research&hl=ko-KR',
        iosLink : 'https://apps.apple.com/kr/app/%EB%9D%BC%EC%9A%B4%EC%A7%80-%EC%A7%81%EC%9E%A5%EC%9D%B8-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id1640595539',
        isLink : true,
        env: [
            {
                name : 'ReactNative',
                color : '61DAFB',
                icon : 'react',
            },
            {
                name : 'ReduxToolkit',
                color : '764ABC',
                icon : 'redux',
            }
        ], 
        contents: `API동기화 및 UI컴포넌트 개발, 서브 로직개발을 담당하였습니다. \n\n React-Native 공부 후 처음으로 투입된 프로젝트였습니다.\n React-Native의 Route Stack구조, Navigation등에 대해 좀 더 자세히 알 수 있는 프로젝트였습니다. \n\n 주요기능으로는 회원들간의 게시글커뮤니팅 및 소개팅 채팅등이 있습니다.`
    },
    {
        title : '페어링크(MVP)',
        img : require('../assets/img/logo/fairlink_logo.png'),
        link : '',
        androidLink : 'https://play.google.com/store/apps/details?id=com.fairlink&hl=ko-KR',
        iosLink : '',
        isLink : true,
        env : [
            {
                name : 'ReactNative',
                color : '61DAFB',
                icon : 'react',
            },
            {
                name : 'ReduxToolkit',
                color : '764ABC',
                icon : 'redux',
            },
            {
                name : 'ReactQuery',
                color : 'FF4154',
                icon : 'reactquery',
            },
        ],
        contents : `API동기화 및 UI컴포넌트 개발, 로직개발을 담당하였습니다. \n\n React-Native에서 React-Query를 적용하는법을 학습하고, 모듈화 방법에 대해 자세히 공부할 수 있던 프로젝트였습니다.\n\n 주요기능으로는 건설회사,장비회사,조종사회원간의 현장매칭 제공 및 작업관리,작업일지 작성등이 있습니다.`
    },
    {
        title : '오스테이지',
        img : require('../assets/img/logo/ostage_logo.png'),
        link : '',
        androidLink : 'https://play.google.com/store/apps/details?id=com.dmonster.ostage&hl=ko-KR',
        iosLink : 'https://apps.apple.com/kr/app/o-stage/id1624626659',
        isLink : true,
        env : [
            {
                name : 'ReactNative',
                color : '61DAFB',
                icon : 'react',
            },
            {
                name : 'ReduxToolkit',
                color : '764ABC',
                icon : 'redux',
            },

        ],
        contents : `API동기화 및 UI컴포넌트 개발, 로직개발을 담당하였습니다. \n\n ReactNative의 TrackPlayer의 활용법을 학습하고 응용할 수 있었던 프로젝트입니다. 또한 인앱 구독 및 결제 시스템을 배울 수 있었습니다. \n\n 주요기능으로는 노래 감상이 있으며, 노래 구독 및 구매가 가능합니다. 추가로 아임포트를 통한 굿즈구입이 가능합니다.`
    }

];