// import React from 'react';
// import styled from 'styled-components';

// const HeroContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #faf9f6;
//   text-align: left;
//   padding: 50px;

//   h1 {
//     font-size: 3rem;
//   }

//   p {
//     font-size: 1.25rem;
//   }

//   @media (max-width: 768px) {
//     text-align: center;

//     h1 {
//       font-size: 2.5rem;
//     }

//     p {
//       font-size: 1rem;
//     }
//   }
// `;

// const HeroSection = () => {
//   return (
//     <HeroContainer>
//       <div className="container align-self-center align-items-center">
//         <div className="row">
//           <div className="col-md-6">
//             <h1 data-animate="ts-fadeInUp">Bodoland<br /> Lotteries..</h1>
//             <div data-animate="ts-fadeInUp" data-delay=".1s">
//               <p className="w-75 mb-5 ts-opacity__50">We assure for your money and the most valuable trust…</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeroContainer>
//   );
// };

// export default HeroSection;


// import React from 'react';
// import styled from 'styled-components';
// import bgRed from '../assets/bgred.png'
// import bgYellow from '../assets/bgyellow.png'
// const MainContainer = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: calc(100vh - 100px); 
//   text-align: center;
//    background:white;
 
//   .title {
//     font-size: 2.5rem;
//     color: #34495e;
//   } 
//   .subtitle {
//     font-size: 1.25rem;
//     color: #7f8c8d;
//   } 
//   @media (max-width: 768px) {
//     .title {
//       font-size: 2rem;
//     } 
//     .subtitle {
//       font-size: 1rem;
//     }
//   }
// `;

// const MainContent = () => {
//   return (
//     <MainContainer>
//       <img src={bgRed} alt='red color' style={{margin:"auto",width:'80rem',height:"60rem"}}/>
//       <div className="title">Bodoland Lotteries..</div>
//       <div className="subtitle">we assure for your money and the most valuable trust ...</div>
//       <img src={bgYellow} alt='red color'style={{margin:"auto",width:'80rem',height:"50rem"}}/>
//     </MainContainer>
//   );
// };

// export default MainContent;
// import React from 'react';
// import styled from 'styled-components';
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';

// const MainContainer = styled.main`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: calc(100vh - 100px);
//   background: white;
//   text-align: center;
// `;

// const BackgroundContainer = styled.div`
//   position: relative;
//   height: 100%; /* Adjust height as needed */
//   width: 100%;
//   background-color: rgb(250, 249, 246); /* Background color */
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: ${(props) => props.top || 'auto'};
//   left: ${(props) => props.left || 'auto'};
//   bottom: ${(props) => props.bottom || 'auto'};
//   right: ${(props) => props.right || 'auto'};
//   width: ${(props) => props.width || 'auto'};
//   height: ${(props) => props.height || 'auto'};
//   background-image: ${(props) => `url(${props.image})`};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

// const Title = styled.div`
//   font-size: 2.5rem;
//   color: #34495e;
//   margin-top: 20px;
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;
//   margin-bottom: 20px;
// `;

// const MainContent = () => {
//   return (
//     <MainContainer>
//       <BackgroundContainer className="ts-background">
//         <BackgroundImage
//           className="top-left"
//           image={bgRed}
//           top="0"
//           left="0"
//           width="600px" 
//           height="auto"
//         />
//         <Title>Bodoland Lotteries..</Title>
//         <Subtitle>We assure for your money and the most valuable trust...</Subtitle>
//         <BackgroundImage
//           className="bottom-right"
//           image={bgYellow}
//           bottom="0"
//           right="0"
//           width="600px"  
//           height="auto" 
//         />
//       </BackgroundContainer>
//     </MainContainer>
//   );
// };

// export default MainContent;
// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
   
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';
// import Header from './Header';
// import Footer from './Footer';

// // Global styles  
// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// // Styled components
// const MainContainer = styled.main`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: calc(100vh - 100px);
//   background: none;
//   overflow: hidden;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 70%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;
// `;
// const BackgroundImage2 = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;
// `;


// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
  
//   text-align: center;
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e; 
//   margin-right:670px; 
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;
//  margin-right:690px; 
// `;

// // MainContent component
// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle />  
//       <MainContainer> 
//         <BackgroundImage image={bgRed} alt='main-red'/> 
//         <BackgroundImage2 image={bgYellow} /> 
//         <ContentContainer>
//           <Title>Bodoland Lotteries..</Title>
//           <Subtitle>We assure for your money and
//             <br></br> the most valuable trust...</Subtitle>
//         </ContentContainer> 
//       </MainContainer>
// <Footer/>
//     </>
//   );
// }; 
// export default MainContent;








// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';
// import Header from './Header';
// import Footer from './Footer';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// // Styled components
// const MainContainer = styled.main`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: calc(100vh - 100px);
//   background: none;
//   overflow: hidden;
//   padding-top: 60px; // Ensure there's space for the header

//   @media (max-width: 768px) {
//     padding-top: 50px;
//     height: auto; // Adjust height for smaller screens
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// // MainContent component
// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle /> 
//       <MainContainer>
//         <BackgroundImage image={bgRed} alt="Red background" />
//         <BackgroundImage image={bgYellow} alt="Yellow background" />
//         <ContentContainer>
//           <Title>Bodoland Lotteries..</Title>
//           <Subtitle>
//             We assure for your money and<br />
//             the most valuable trust...
//           </Subtitle>
//         </ContentContainer>
//       </MainContainer>
//       <Footer /> {/* Add the Footer component here */}
//     </>
//   );
// };

// export default MainContent;





// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';
// import Header from './Header';
// import Footer from './Footer';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// // Styled components
// const MainContainer = styled.div`
//   position: relative;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background: none;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     height: auto;
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   padding: 20px;
//   flex: 1; /* Ensure content takes the remaining space */
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// // MainContent component
// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <MainContainer>
//         <BackgroundImage image={bgRed} alt="Red background" />
//         <BackgroundImage image={bgYellow} alt="Yellow background" />
//         <Header />
//         <ContentContainer>
//           <Title>Bodoland Lotteries..</Title>
//           <Subtitle>
//             We assure for your money and<br />
//             the most valuable trust...
//           </Subtitle>
//         </ContentContainer>
//         <Footer />
//       </MainContainer>
//     </>
//   );
// };

// export default MainContent;





//working code
// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';
// import Header from './Header';
// import Footer from './Footer';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// // Styled components
// const MainContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh; // Ensure full viewport height
//   background: none;
//   overflow: hidden;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// // MainContent component
// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Header /> {/* Move Header here to ensure it is above the MainContainer */}
//       <MainContainer>
//         <BackgroundImage image={bgRed} alt="Red background" />
//         <BackgroundImage image={bgYellow} alt="Yellow background" />
//         <ContentContainer>
//           <Title>Bodoland Lotteries..</Title>
//           <Subtitle>
//             We assure for your money and<br />
//             the most valuable trust...
//           </Subtitle>
//         </ContentContainer>
//       </MainContainer>
//       <Footer />
//     </>
//   );
// };

// export default MainContent;






// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';
// import Header from './Header';
// import Footer from './Footer';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// // Styled components
// const MainContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;  
//   background: none;
//   overflow: hidden;
//   padding-top: 60px; // Space for the fixed header

//   @media (max-width: 768px) {
//     padding-top: 50px;
//     height: auto; // Adjust height for smaller screens
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// // MainContent component
// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Header /> {/* Include the fixed Header here */}
//       <MainContainer>
//         <BackgroundImage image={bgRed} alt="Red background" />
//         <BackgroundImage image={bgYellow} alt="Yellow background" />
//         <ContentContainer>
//           <Title>Bodoland Lotteries..</Title>
//           <Subtitle>
//             We assure for your money and<br />
//             the most valuable trust...
//           </Subtitle>
//         </ContentContainer>
//       </MainContainer>
//       <Footer /> {/* Add the Footer component here */}
//     </>
//   );
// };

// export default MainContent;
// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import bgRed from '../assets/bgred.png';
// import bgYellow from '../assets/bgyellow.png';
// import Header from './Header';
// import Footer from './Footer';

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// // Styled components
// const MainContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;  
//   background: none;
//   overflow: hidden;
//   padding-top: 60px; // Space for the fixed header

//   @media (max-width: 768px) {
//     padding-top: 50px;
//     height: auto; // Adjust height for smaller screens
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) => `url(${props.image})`};
//   background-size: cover;
//   background-position: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto; // Ensure the background image covers the entire viewport
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// // MainContent component
// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Header /> {/* Include the fixed Header here */}
//       <MainContainer>
//         {/* Red background image */}
//         <BackgroundImage image={bgRed} alt="Red background" />

//         {/* Yellow background image */}
//         <BackgroundImage image={bgYellow} alt="Yellow background" />

//         <ContentContainer>
//           <Title>Bodoland Lotteries..</Title>
//           <Subtitle>
//             We assure for your money and<br />
//             the most valuable trust...
//           </Subtitle>
//         </ContentContainer>
//       </MainContainer>
//       {/* Footer component removed from here */}
//     </>
//   );
// };

// export default MainContent;


//give this

  import React from 'react';
  import styled, { createGlobalStyle } from 'styled-components';
  import bgRed from '../assets/backt.jpg';
  
  import Header from './Header';
  import Footer from './Footer';
  // Import the Contacts component

  // Global styles
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, sans-serif;
    }
  `;

  // Styled components
  const MainContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;  
    background: none;
    overflow: hidden;
    padding-top: 60px; // Space for the fixed header

    @media (max-width: 768px) {
      padding-top: 50px;
      height: auto; // Adjust height for smaller screens
    }
  `;

  const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    z-index: -1;

    @media (max-width: 768px) {
      width: 100%;
      height: auto; // Ensure the background image covers the entire viewport
    }
  `;

  const ContentContainer = styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 20px;
  `;

  const Title = styled.div`
    font-size: 3.5rem;
    color: #34495e;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  `;

  const Subtitle = styled.div`
    font-size: 1.25rem;
    color: #7f8c8d;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;

  // MainContent component
  const MainContent = () => {
    return (
      <>
        <GlobalStyle />
        <Header /> 
        <MainContainer> 
          <BackgroundImage image={bgRed} alt="Red background" /> 
          {/* <BackgroundImage image={bgYellow} alt="Yellow background" />  */}
          <ContentContainer>
            <Title>Sikim Lotteries..</Title>
            <Subtitle>
            We assure the security of your money and <br />
            the value of your trust...
            </Subtitle>
          </ContentContainer>
<Footer/>
    
        </MainContainer> 
      </>
    );
  };

  export default MainContent;






// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import bgBack from '../assets/backt.jpg'; 
// import bgRed from '../assets/logo2.png'; 
// import Header from './Header';
// import Footer from './Footer';

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//   }
// `;

// const MainContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: none;
//   overflow: hidden;
//   padding-top: 60px; /* Space for the fixed header */

//   @media (max-width: 768px) {
//     padding-top: 50px;
//     height: auto; /* Adjust height for smaller screens */
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.div`
//   font-size: 3.5rem;
//   color: #34495e;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Subtitle = styled.div`
//   font-size: 1.25rem;
//   color: #7f8c8d;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const Logo = styled.img`
//   position: absolute;
//   top: 10px; /* Adjust as needed */
//   left: 30rem; /* Adjust to place 30rem from the left */
//   width: 100px; /* Adjust size as needed */
// `;

// const MenuBar = styled.div`
//   position: absolute;
//   top: 20px; /* Adjust as needed */
//   left: calc(30rem + 120px); /* Adjust to position after the logo */
//   /* Additional styles for the menu bar */
// `;

// const MainContent = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Header /> 
//       <MainContainer> 
//         <BackgroundImage image={bgBack} alt="Red background" /> 
//         {/* <BackgroundImage image={bgRed} alt="not found"/> */}
//         <ContentContainer>
          
//           <MenuBar>
//             {/* Menu items go here */}
//             <a href="/">Home</a>
//             <a href="/results">About</a>
//             <a href="/home">Services</a>
//             <a href="/home">Contact</a>
//           </MenuBar>
//           <Title>Sikim Lotteries..</Title>
//           <Subtitle>
//             We assure the security of your money and <br />
//             the value of your trust...
//           </Subtitle>
//         </ContentContainer>
//         <Footer/>
//       </MainContainer> 
//     </>
//   );
// };

// export default MainContent;
