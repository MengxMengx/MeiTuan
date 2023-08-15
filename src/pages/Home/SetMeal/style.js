// import styled from 'styled-components'

// export const Wrapper = styled.div`
//         background-color:#eee;
//         height: 4.6rem;
//         .home_info_banners  {
//             position:relative; 
//             width: 100%;
//             text-align:center;
//             height: 4.6rem;
//         }

//         .swiper-slide {
//             position:absolute;
//             width: 94%;
//             height: 100%;
//             border-radius:0.45rem;
//             vertical-align:bottom;
//             // 透明度
//             // opacity: 1;
//             // transition:opacity 0.5s ease-in-out;

//         }
//         img {
//             width: 94%;
//             border-radius:0.68rem;
//         }
//     }
// `

import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color:#eee;
    height: 4.6rem;
    .home_info_banners  {
            // 加了position后，分页符就上来了
            position:relative; 
            width: 100%;
            text-align:center;
            .swiper-slide{
                width: 94%;
                height: 100%;
                border-radius:0.45rem;
                vertical-align:bottom;
            }
        img {
            width: 94%;
            border-radius:0.68rem;

        }
    }
`