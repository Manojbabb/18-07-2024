// import React from 'react';
// import styled from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';

// import  { createGlobalStyle,keyframes } from 'styled-components';
// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: white; 
//   .results-title {
//     font-size: 2rem;
//     color: black;
//     font-weight:bold;
//     margin-bottom: 1.5rem;
//   }

//   .results-form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 300px;

//     input {
//       padding: 0.75rem;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//     }

//     button {
//       padding: 0.75rem;
//       background-color: #34495e;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       transition: background-color 0.3s;

//       &:hover {
//         background-color: #2c3e50;
//       }
//     }
//   } 
//   @media (max-width: 768px) {
//     .results-title {
//       font-size: 1.5rem;
//     }

//     .results-form {
//       width: 80%;
//     }
//   }
// `;
 
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
// const FormContainer = styled.div`
// max-width:700px;
// margin: 20px auto;
// padding: 20px;
 
// border-radius: 8px; 
// `;
// const GlobalStyle = createGlobalStyle`
// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }
// body {
//   font-family: Arial, sans-serif;
//   background-color: #f0f0f0;
// }
// `;
// const FormGroup = styled.div`
// display: flex;
// align-items: center;
// margin-bottom: 20px;
// animation: ${fadeIn} 0.5s ease forwards;
// `;

// const Label = styled.label`
// width: 100px;
// text-align: right;
// margin-right: 40px;
// color: #333333;
// `;
// const Select = styled.select`
// flex: 1;
// padding: 8px;
// border: 1px solid #cccccc;
// box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// border-color:#ffffff;
// height:50px;
// width:270px;
// outline: none;
// background-color: #ffffff;
// transition: border-color 0.3s ease;

 
// `
// const Input = styled.input`
// flex: 1;
// padding: 8px;
// border: 1px solid #cccccc;
// box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// border-color:#ffffff;
// height:50px;
// width:270px;
// outline: none;
// background-color: #ffffff;
// transition: border-color 0.3s ease;

// &:focus {
//   border-color: #007bff;
// }
// `;
// const ResultsPage = () => {
//   function alerting(){
//     alert("No results");
//   }
 
//   return (
     
  
//     <ResultsContainer> 
     
//       <Header/>
//       {/* <img src={bgRed} alt='null' style={{width:'100%',height:'100%'}}/> */}
//       <FormContainer> 
//         <FormGroup>
//           <Label>Date</Label>
//           <Input type="text" placeholder="Date" defaultValue="16-7-2024" />
//         </FormGroup>
//         <FormGroup>
//           <Label>Time</Label>
//           <Select type="text" placeholder="Time">
//             <option value='12pm'>12 PM</option>
//             <option value='3pm'>3 PM</option>
//             <option value='7pm'>7 PM</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>File type</Label>
//         <Select>
//           <option value='PDF'>PDF</option>
//           <option value='ZIP'>ZIP</option>
//         </Select>
//         </FormGroup>
//         <button onClick={alerting} style={{marginLeft:"130px",backgroundColor:"black",color:"white",fontWeight:"30px",borderRadius:"30px",width:"130px",height:"40px"}}>Download</button>
//       </FormContainer>
//       <div className="results-title">Results</div>
//       <GlobalStyle />
     
//         <Footer/>
//     </ResultsContainer> 
//   )
// }; 
// export default ResultsPage;

//front-end code

// import React, { useState, useEffect } from 'react';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';
// import bgRed from '../assets/backt.jpg'; // Import the background image

// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url(${bgRed}) center/cover no-repeat; /* Apply background image */
  
//   .results-title {
//     font-size: 2rem;
//     margin-left:210px;
//     color: black;
//     font-weight: bold;
//     margin-bottom: 1.5rem;
//   }

//   .results-form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 300px;

//     input {
//       padding: 0.75rem;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//     }

//     .namdshd {
//       padding: 0.75rem;
//       background-color: #34495e;
//       color: white;
//       border: none; 
//       border-radius: 4px;
//       cursor: pointer;
//       transition: background-color 0.3s;

//       &:hover {
//         background-color: red;  
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .results-title {
//       font-size: 1.5rem;
//     }

//     .results-form {
//       width: 80%;
//     }
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const FormContainer = styled.div`
//   max-width: 700px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background:transparent;
//   // background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for form */
// `;

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
//   animation: ${fadeIn} 0.5s ease forwards;
// `;

// const Label = styled.label`
//   width: 100px;  
//   margin-right: 40px;
//   color: #333333;
//   font-weight:bold;
// `;

// const Select = styled.select`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 40px;
//   width: 270px;
//   border-radius:5px;
//   outline: none;
//   background-color: #ffffff;
//   transition: border-color 0.3s ease;
//   appearance: none; /* Ensure dropdown icon is visible */
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 50px;
//   width: 270px;
//   outline: none;
//   background-color: transparent;
//   transition: border-color 0.3s ease;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const ResultsPage = () => {
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     const getLastSevenDays = () => {
//       const days = [];
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         days.push(date.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
//       }
//       return days;
//     };

//     setDates(getLastSevenDays());
//   }, []);

//   const alerting = () => {
//     alert('No results');
//   };

//   return (
//     <ResultsContainer>
//       <Header />
//       <FormContainer>
//         <div className="results-title">Results</div>
//         <FormGroup>
//           <Label>Date</Label>
//           <Select>
//             {dates.map((date, index) => (
//               <option key={index} value={date}>{date}</option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>Time</Label>
//           <Select>
//             <option value="12pm">12 PM</option>
//             <option value="3pm">3 PM</option>
//             <option value="7pm">7 PM</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>File type</Label>
//           <Select>
//             <option value="PDF">PDF</option>
//             <option value="ZIP">ZIP</option>
//           </Select>
//         </FormGroup>
//         <button className='namdshd'
//           onClick={alerting}
//           style={{
//             marginLeft: '210px',
//             backgroundColor:'black',
//             cursor:"pointer",
//             color: 'white',
//             fontWeight: '30px',
//           marginTop:'30px',
//             borderRadius: '30px',
//             width: '130px',
//             height: '40px',
//           }}
//           style={{
//             marginLeft: '210px',
//             backgroundColor: 'black',
//             cursor: 'pointer',
//             color: 'white',
//             fontWeight: 'bold', // Adjusted to 'bold' for font weight
//             marginTop: '30px',
//             borderRadius: '30px',
//             width: '130px',
//             height: '40px',
//             transition: 'background-color 0.3s ease', // Added transition for smooth effect
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = '#B8EA82',e.target.style.color='black',e.target.style.border='#B8EA82')}
//           onMouseOut={(e) => (e.target.style.backgroundColor = 'black',e.target.style.color='white')}
//         >
//           Download
//         </button>
//       </FormContainer>

//       <GlobalStyle />
//       <Footer />
//     </ResultsContainer>
//   );
// };

// export default ResultsPage;


// backend code




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';
// import bgRed from '../assets/backt.jpg';

// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh; 

//   .results-title {
//     font-size: 2rem;
//     color: black;
//     font-weight: bold;
//     margin-bottom: 1.5rem;
//   }

//   .results-form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 300px;

//     input {
//       padding: 0.75rem;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//     }

//     button {
//       padding: 0.75rem;
//       background-color: #34495e;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       transition: background-color 0.3s;

//       &:hover {
//         background-color: #2c3e50;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .results-title {
//       font-size: 1.5rem;
//     }

//     .results-form {
//       width: 80%;
//     }
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const FormContainer = styled.div`
//   max-width: 700px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background-color: rgba(255, 255, 255, 0.8);
// `;

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
//   animation: ${fadeIn} 0.5s ease forwards;
// `;

// const Label = styled.label`
//   width: 100px;
//   text-align: right;
//   margin-right: 40px;
//   color: #333333;
// `;

// const Select = styled.select`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 50px;
//   width: 270px;
//   outline: none;
//   background-color: #ffffff;
//   transition: border-color 0.3s ease;
//   appearance: none;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 50px;
//   width: 270px;
//   outline: none;
//   background-color: #ffffff;
//   transition: border-color 0.3s ease;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const ResultsPage = () => {
//   const [dates, setDates] = useState([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     fileType: '',
//   });

//   useEffect(() => {
//     const getLastSevenDays = () => {
//       const days = [];
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date();
//         date.setDate(date.getDate() - i);
//         days.push(date.toISOString().split('T')[0]);
//       }
//       return days;
//     };

//     setDates(getLastSevenDays());
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/data', formData);
//       alert('Data submitted successfully: ' + response.data.message);
//     } catch (error) {
//       console.error('Error submitting data', error);
//       alert('Error submitting data');
//     }
//   };

//   return (
//     <ResultsContainer>
//       <Header />
//       <FormContainer>
//         <div className="results-title">Results</div>
//         <form className="results-form" onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label>Date</Label>
//             <Select name="date" value={formData.date} onChange={handleChange}>
//               {dates.map((date, index) => (
//                 <option key={index} value={date}>{date}</option>
//               ))}
//             </Select>
//           </FormGroup>
//           <FormGroup>
//             <Label>Time</Label>
//             <Select name="time" value={formData.time} onChange={handleChange}>
//               <option value="12pm">12 PM</option>
//               <option value="3pm">3 PM</option>
//               <option value="7pm">7 PM</option>
//             </Select>
//           </FormGroup>
//           <FormGroup>
//             <Label>File type</Label>
//             <Select name="fileType" value={formData.fileType} onChange={handleChange}>
//               <option value="PDF">PDF</option>
//               <option value="ZIP">ZIP</option>
//             </Select>
//           </FormGroup>
//           <button
//             type="submit"
            // style={{
            //   marginLeft: '210px',
            //   backgroundColor: 'black',
            //   cursor: 'pointer',
            //   color: 'white',
            //   fontWeight: 'bold',
            //   marginTop: '30px',
            //   borderRadius: '30px',
            //   width: '130px',
            //   height: '40px',
            //   transition: 'background-color 0.3s ease',
            // }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = '#B8EA82';
//               e.target.style.color = 'black';
//               e.target.style.border = '#B8EA82';
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = 'black';
//               e.target.style.color = 'white';
//             }}
//           >
//             Download
//           </button>
//         </form>
//       </FormContainer>
//       <GlobalStyle />
//       <Footer />
//     </ResultsContainer>
//   );
// };

// export default ResultsPage;


// import React, { useState, useEffect } from 'react';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';
// import bgRed from '../assets/backt.jpg'; // Import the background image
// import axios from 'axios';

// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url(${bgRed}) center/cover no-repeat; /* Apply background image */
  
//   .results-title {
//     font-size: 2rem;
//     margin-left: 210px;
//     color: black;
//     font-weight: bold;
//     margin-bottom: 1.5rem;
//   }

//   .results-form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 300px;

//     input {
//       padding: 0.75rem;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//     }

//     .namdshd {
//       padding: 0.75rem;
//       background-color: #34495e;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       transition: background-color 0.3s;

//       &:hover {
//         background-color: red;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .results-title {
//       font-size: 1.5rem;
//     }

//     .results-form {
//       width: 80%;
//     }
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const FormContainer = styled.div`
//   max-width: 700px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background:transparent;
// `;

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
//   animation: ${fadeIn} 0.5s ease forwards;
// `;

// const Label = styled.label`
//   width: 100px;
//   margin-right: 40px;
//   color: #333333;
//   font-weight: bold;
// `;

// const Select = styled.select`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 40px;
//   width: 270px;
//   border-radius: 5px;
//   outline: none;
//   background-color: #ffffff;
//   transition: border-color 0.3s ease;
//   appearance: none;
// `;

// const ResultsPage = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [fileType, setFileType] = useState('');
//   const [dates, setDates] = useState([]);
//   useEffect(() => {
//     const getLastSevenDays = () => {
//       const days = [];
//       const today = new Date(); // Get today's date
  
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date(today); // Create a new date object for each iteration
//         date.setDate(today.getDate() - i); // Calculate the date for each day
//         days.push(date.toISOString().split('T')[0]); // Push formatted date (YYYY-MM-DD) to array
//       }
      
//       return days.reverse(); // Reverse the array to display in descending order
//     };
  
//     setDates(getLastSevenDays()); // Set the state with descending order dates
//   }, []);

//   const alerting = () => {
//     alert('No results');
//   };

 

//   const handleDownload = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/apiup`, {
//         params: { date, time, fileType },
//         responseType: 'blob'  
//       }); 
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'downloadedFile');  
//       document.body.appendChild(link);
//       link.click(); 
//       link.parentNode.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       alert('Error downloading file');
//     }
//   };


//   return (
//     <ResultsContainer>
//       <Header />
//       <FormContainer>
//         <div className="results-title">Results</div>
//         <FormGroup>
//           <Label>Date</Label>
//           <Select name="date"  value={date} onChange={(e) => setDate(e.target.value)}>
//             {dates.map((date, index) => (
//               <option key={index} value={date}>{date}</option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>Time</Label>
//           <Select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
//             <option value="12pm">12 PM</option>
//             <option value="3pm">3 PM</option>
//             <option value="7pm">7 PM</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>File type</Label>
//           <Select name="fileType" value={fileType} onChange={(e) => setFileType(e.target.value)}>
//             <option value="PDF">PDF</option> 
//           </Select>
//         </FormGroup>
//         <button className='namdshd'
//           onClick={handleDownload}
//           style={{
//             marginLeft: '210px',
//             backgroundColor: 'black',
//             cursor: 'pointer',
//             color: 'white',
//             fontWeight: 'bold',
//             marginTop: '30px',
//             borderRadius: '30px',
//             width: '130px',
//             height: '40px',
//             transition: 'background-color 0.3s ease'
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = '#B8EA82', e.target.style.color = 'black', e.target.style.border = '#B8EA82')}
//           onMouseOut={(e) => (e.target.style.backgroundColor = 'black', e.target.style.color = 'white')}
//         >
//         Download
//         </button>
//       </FormContainer>
//       <GlobalStyle />
//       <Footer />
//     </ResultsContainer>
//   );
// }; 
// export default ResultsPage;



// import React, { useState, useEffect } from 'react';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';
// import bgRed from '../assets/backt.jpg'; // Import the background image
// import axios from 'axios';

// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url(${bgRed}) center/cover no-repeat; /* Apply background image */
  
//   .results-title {
//     font-size: 2rem;
//     margin-left: 210px;
//     color: black;
//     font-weight: bold;
//     margin-bottom: 1.5rem;
//   }

//   .results-form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 300px;

//     input {
//       padding: 0.75rem;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//     }

//     .namdshd {
//       padding: 0.75rem;
//       background-color: #34495e;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       transition: background-color 0.3s;

//       &:hover {
//         background-color: red;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .results-title {
//       font-size: 1.5rem;
//     }

//     .results-form {
//       width: 80%;
//     }
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const FormContainer = styled.div`
//   max-width: 700px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background: transparent;
// `;

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
//   animation: ${fadeIn} 0.5s ease forwards;
// `;

// const Label = styled.label`
//   width: 100px;
//   margin-right: 40px;
//   color: #333333;
//   font-weight: bold;
// `;

// const Select = styled.select`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 40px;
//   width: 270px;
//   border-radius: 5px;
//   outline: none;
//   background-color: #ffffff;
//   transition: border-color 0.3s ease;
//   appearance: none;
// `;

// const ResultsPage = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [fileType, setFileType] = useState('');
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     const getLastSevenDays = () => {
//       const days = [];
//       const today = new Date(); // Get today's date
  
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date(today); // Create a new date object for each iteration
//         date.setDate(today.getDate() - i); // Calculate the date for each day
//         days.push(date.toISOString().split('T')[0]); // Push formatted date (YYYY-MM-DD) to array
//       }
      
//       return days.reverse(); // Reverse the array to display in descending order
//     };
  
//     setDates(getLastSevenDays());  
//   }, []);
//   var fileDownload = require('js-file-download');
   
//   const handleDownload = async () => {
//     try {
//       const response = await axios.get('/apiup', {
//         params: { date, time, fileType },
//         responseType: 'blob',
//       });
  
//       // Check if the response content type is correct
//       const contentType = response.headers['content-type'];
//       if (contentType && contentType.toLowerCase().startsWith('application/pdf')) {
//         // Create blob from response data
//         const blob = new Blob([response.data]);
  
//         // Create URL for the blob
//         const url = window.URL.createObjectURL(blob);
  
//         // Create a link element to trigger download
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', 'downloadedFile');
//         document.body.appendChild(link); 
//         link.click(); 
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       } else {
//         console.error('Invalid content type received:', contentType);
//         alert('File download failed. Invalid content type received.');
//       }
   
//     } catch (error) {
//       console.error('Error downloading file:', error); 
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//         alert('Error downloading file: ' + error.response.data);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//         alert('No response from server');
//       } else {
//         console.error('Error setting up request:', error.message);
//         alert('Error setting up download request');
//       }
//     }
//   }; 
  
//   return (
//     <ResultsContainer>
//       <Header />
//       <FormContainer>
//         <div className="results-title">Results</div>
//         <FormGroup>
//           <Label>Date</Label>
//           <Select name="date" onChange={(e) => setDate(e.target.value)}>
//             {dates.map((date, index) => (
//               <option key={index} value={date}>{date}</option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>Time</Label>
//           <Select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
//             <option value="12pm">12 PM</option>
//             <option value="3pm">3 PM</option>
//             <option value="7pm">7 PM</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>File type</Label>
//           <Select name="fileType" value={fileType} onChange={(e) => setFileType(e.target.value)}>
//             <option value="PDF">PDF</option>
//             <option value="ZIP">ZIP</option>
//           </Select>
//         </FormGroup>
//         <button
//           className="namdshd"
//           onClick={handleDownload}
//           style={{
//             marginLeft: '210px',
//             backgroundColor: 'black',
//             cursor: 'pointer',
//             color: 'white',
//             fontWeight: 'bold',
//             marginTop: '30px',
//             borderRadius: '30px',
//             width: '130px',
//             height: '40px',
//             transition: 'background-color 0.3s ease',
//           }}>
//           Download
//         </button>
//       </FormContainer>
//       <GlobalStyle />
//       <Footer />
//     </ResultsContainer>
//   );
// };

// export default ResultsPage;




 

// import React, { useState, useEffect } from 'react';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';
// import bgRed from '../assets/backt.jpg'; // Import the background image
// import axios from 'axios';
// import fileDownload from 'js-file-download'; // Import js-file-download

// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url(${bgRed}) center/cover no-repeat; /* Apply background image */
  
//   .results-title {
//     font-size: 2rem;
//     margin-left: 210px;
//     color: black;
//     font-weight: bold;
//     margin-bottom: 1.5rem;
//   }

//   .results-form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 300px;

//     input {
//       padding: 0.75rem;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//     }

//     .namdshd {
//       padding: 0.75rem;
//       background-color: #34495e;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       transition: background-color 0.3s;

//       &:hover {
//         background-color: red;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .results-title {
//       font-size: 1.5rem;
//     }

//     .results-form {
//       width: 80%;
//     }
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const FormContainer = styled.div`
//   max-width: 700px;
//   margin: 20px auto;
//   padding: 20px;
//   border-radius: 8px;
//   background: transparent;
// `;

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
//   animation: ${fadeIn} 0.5s ease forwards;
// `;

// const Label = styled.label`
//   width: 100px;
//   margin-right: 40px;
//   color: #333333;
//   font-weight: bold;
// `;

// const Select = styled.select`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cccccc;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   border-color: #ffffff;
//   height: 40px;
//   width: 270px;
//   border-radius: 5px;
//   outline: none;
//   background-color: #ffffff;
//   transition: border-color 0.3s ease;
//   appearance: none;
// `;

// const ResultsPage = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [fileType, setFileType] = useState('');
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     const getLastSevenDays = () => {
//       const days = [];
//       const today = new Date(); // Get today's date
  
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date(today); // Create a new date object for each iteration
//         date.setDate(today.getDate() - i); // Calculate the date for each day
//         days.push(date.toISOString().split('T')[0]); // Push formatted date (YYYY-MM-DD) to array
//       }
      
//       return days.reverse(); // Reverse the array to display in descending order
//     };
  
//     setDates(getLastSevenDays()); // Set the state with descending order dates
//   }, []);

  
//   const handleDownload = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/datato', {
//         params: { date, time, fileType },
//         responseType: 'blob',
//       }); 
//       const contentType = response.headers['content-type'];
//       if (contentType && contentType.toLowerCase().startsWith('application/pdf')) { 
//         fileDownload(response.data, 'downloadedFile.pdf');
//       } else if (contentType && contentType.toLowerCase().startsWith('application/zip')) { 
//         fileDownload(response.data, 'downloadedFile.zip');
//       } else {
//         console.error('Invalid content type received:', contentType);
//         alert('File download failed. Invalid content type received.');
//       } 
//     } catch (error) {
//       console.error('Error downloading file:', error); 
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//         alert('Error downloading file: ' + error.response.data);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//         alert('No response from server');
//       } else {
//         console.error('Error setting up request:', error.message);
//         alert('Error setting up download request');
//       }
//     }
//   };
  
//   return (
//     <ResultsContainer>
//       <Header />
//       <FormContainer>
//         <div className="results-title">Results</div>
//         <FormGroup>
//           <Label>Date</Label>
//           <Select name="date" value={date} onChange={(e) => setDate(e.target.value)}>
//             {dates.map((date, index) => (
//               <option key={index} value={date}>{date}</option>
//             ))}
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>Time</Label>
//           <Select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
//             <option value="12pm">12 PM</option>
//             <option value="3pm">3 PM</option>
//             <option value="7pm">7 PM</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label>File type</Label>
//           <Select name="fileType" value={fileType} onChange={(e) => setFileType(e.target.value)}>
//             <option value="PDF">PDF</option>
//             <option value="PDF">ZIP</option>  
//           </Select>
//         </FormGroup>
//         <button
//           className="namdshd"
//           onClick={handleDownload}
//           style={{
//             marginLeft: '210px',
//             backgroundColor: 'black',
//             cursor: 'pointer',
//             color: 'white',
//             fontWeight: 'bold',
//             marginTop: '30px',
//             borderRadius: '30px',
//             width: '130px',
//             height: '40px',
//             transition: 'background-color 0.3s ease',
//           }}
//         >
//           Download
//         </button>
//       </FormContainer>
//       <GlobalStyle />
//       <Footer />
//     </ResultsContainer>
//   );
// };

// export default ResultsPage;




import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import bgRed from '../assets/backt.jpg';
import axios from 'axios';


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${bgRed}) center/cover no-repeat; /* Apply background image */
  
  .results-title {
    font-size: 2rem;
    margin-left: 210px;
    color: black;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .results-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;

    input {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .namdshd {
      padding: 0.75rem;
      background-color: #34495e;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: red;
      }
    }
  }

  @media (max-width: 768px) {
    .results-title {
      font-size: 1.5rem;
    }

    .results-form {
      width: 80%;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: transparent;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 40px;
  color: #333333;
  font-weight: bold;
`;

const Select = styled.select`
  flex: 1;
  padding: 8px;
  border: 1px solid #cccccc;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-color: #ffffff;
  height: 40px;
  width: 270px;
  border-radius: 5px;
  outline: none;
  background-color: #ffffff;
  transition: border-color 0.3s ease;
  appearance: none;
`;
const ResultsPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fileType, setFileType] = useState('');
  const [dates, setDates] = useState([]);
const [fileName,setFile] = useState();
  useEffect(() => {
    const getLastSevenDays = () => {
      const days = [];
      const today = new Date();
  
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        days.push(date.toISOString().split('T')[0]);
      }
      
      return days.reverse();
    };
  
    setDates(getLastSevenDays());
  }, []);

  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datato', {
        params: { date, time, fileType },
        responseType: 'blob',
      });
  
      const contentDisposition = response.headers['content-disposition'];
      let fileName = 'downloadedFile';
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (fileNameMatch && fileNameMatch.length === 2) {
          fileName = fileNameMatch[1];
        }
      } 
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);  
      document.body.appendChild(link);
      link.click(); 
      alert(`File "${fileName}" is downloading.`); 
    } catch (error) {
      console.error('Error downloading file:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        alert('Error downloading file: ' + error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from server');
      } else {
        console.error('Error setting up request:', error.message);
        alert('Error setting up download request');
      }
    }
  };
  

  return (
    <ResultsContainer>
      <Header />
      <FormContainer>
        <div className="results-title">Results</div>
        <FormGroup>
          <Label>Date</Label>
          <Select name="date" value={date} onChange={(e) => setDate(e.target.value)}>
            {dates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Time</Label>
          <Select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="12pm">12 PM</option>
            <option value="3pm">3 PM</option>
            <option value="7pm">7 PM</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>File type</Label>
          <Select name="fileType" value={fileType} onChange={(e) => setFileType(e.target.value)}>
            <option value="PDF">PDF</option>
            <option value="ZIP">ZIP</option>
          </Select>
        </FormGroup>
        <button
          className="namdshd"
          onClick={handleDownload}
          style={{
            marginLeft: '210px',
            backgroundColor: 'black',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold',
            marginTop: '30px',
            borderRadius: '30px',
            width: '130px',
            height: '40px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Download
        </button>
      </FormContainer>
      <GlobalStyle />
      <Footer />
    </ResultsContainer>
  );
};

export default ResultsPage;
