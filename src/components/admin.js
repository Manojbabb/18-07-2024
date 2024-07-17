// import React, { useState, useEffect } from 'react';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import axios from 'axios';
// import Header from './Header';
// import Footer from './Footer';
// import bgRed from '../assets/backt.jpg'; // Ensure the path to the image is correct

// const ResultsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url(${bgRed}) center/cover no-repeat;
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
//   const [dates, setDates] = useState([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     fileType: ''
//   });
//   const [file, setFile] = useState(null);

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
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('date', formData.date);
//     data.append('time', formData.time);
//     data.append('fileType', formData.fileType);
//     if (file) {
//       data.append('file', file);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/data', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
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
//         <form onSubmit={handleSubmit} className="results-form">
//           <FormGroup>
//             <Label>Date</Label>
//             <Select name="date" onChange={handleChange}>
//               {dates.map((date, index) => (
//                 <option key={index} value={date}>{date}</option>
//               ))}
//             </Select>
//           </FormGroup>
//           <FormGroup>
//             <Label>Time</Label>
//             <Select name="time" onChange={handleChange}>
//               <option value="12pm">12 PM</option>
//               <option value="3pm">3 PM</option>
//               <option value="7pm">7 PM</option>
//             </Select>
//           </FormGroup>
//           <FormGroup>
//             <Label>File type</Label>
//             <Select name="fileType" onChange={handleChange}>
//               <option value="PDF">PDF</option>
//               <option value="ZIP">ZIP</option>
//             </Select>
//           </FormGroup>
         
//             <FormGroup>
//               <Label>Upload {formData.fileType}</Label>
//               <input
//                 type="file"
//                 name="file"
//                 value='file'
//             placeholder='upload file'
//                 onChange={handleFileChange}
//               />
//             </FormGroup>
        
//           <button
//             type="submit"
//             className='namdshd'
//             style={{
//               marginLeft: '210px',
//               backgroundColor: 'black',
//               cursor: 'pointer',
//               color: 'white',
//               fontWeight: 'bold',
//               marginTop: '30px',
//               borderRadius: '30px',
//               width: '130px',
//               height: '40px',
//               transition: 'background-color 0.3s ease'
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = '#B8EA82', e.target.style.color = 'black', e.target.style.border = '#B8EA82')}
//             onMouseOut={(e) => (e.target.style.backgroundColor = 'black', e.target.style.color = 'white')}
//           >
//             Submit data
//           </button>
//         </form>
//       </FormContainer>
//       <GlobalStyle />
//       <Footer />
//     </ResultsContainer>
//   );
// };

// export default ResultsPage;




import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import bgRed from '../assets/backt.jpg'; // Ensure the path to the image is correct

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${bgRed}) center/cover no-repeat;
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
const Input = styled.input`
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
  const [dates, setDates] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    fileType: ''
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getLastSevenDays = () => {
      const days = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        days.push(date.toISOString().split('T')[0]);
      }
      return days;
    };
    setDates(getLastSevenDays());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('date', formData.date);
    data.append('time', formData.time);
    data.append('fileType', formData.fileType);
    if (file) {
      data.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/data', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Data submitted successfully: ' + response.data.message);
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Error submitting data');
    }
  };

  return (
    <ResultsContainer>
      <Header />
      <FormContainer>
        <div className="results-title">Results</div>
        <form onSubmit={handleSubmit} className="results-form">
          <FormGroup>
            <Label>Date</Label>
            <Select name="date" onChange={handleChange}>
              {dates.map((date, index) => (
                <option key={index} value={date}>{date}</option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Time</Label>
            <Select name="time" onChange={handleChange}>
              <option value="12pm">12 PM</option>
              <option value="3pm">3 PM</option>
              <option value="7pm">7 PM</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>File type</Label>
            <Select name="fileType" onChange={handleChange}> 
              <option value="PDF">PDF</option> 
              <option value="PDF">ZIP</option> 
            </Select>
          </FormGroup>
     
            <FormGroup>
              <Label>Upload {formData.fileType}</Label>
              <Input
                type="file"
                name="file"
                accept={formData.fileType === 'PDF' ? 'application/pdf' : '.zip'}
                onChange={handleFileChange}
              />
            </FormGroup>
        
          <button
            type="submit"
            className='namdshd'
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
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#B8EA82', e.target.style.color = 'black', e.target.style.border = '#B8EA82')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'black', e.target.style.color = 'white')}
          >
            Submit data
          </button>
        </form>
      </FormContainer>
      <GlobalStyle />
      <Footer />
    </ResultsContainer>
  );
};

export default ResultsPage;
