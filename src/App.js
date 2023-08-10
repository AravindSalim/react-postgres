import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class UploadData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      OPTC1:'',
      OPTC2:'',
      OPT1: '',
      OPT2: '',
      OPT3: '',
      OPT4: '',
      OPT5: '',
      OPT6: '',
      OPT7: '',
      OPT8:'',
      OPT9:'',
      OPT10:'',
      OPT11:'',
      OPT12:'',
      OPT13:'',
      OPT14:'',
      OPT15:'',
      OPT16:'',
      OPT17:'',
      OPT18:'',
      OPT19:'',
      OPT20:'',
      OPT21:'',
      OPT22:'',
      OPT23:'',
      OPT24:'',
      OPT25:'',
      OPT26:'',
      OPT27:'',
      OPT28:''
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { OPTC1, OPTC2, OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7, OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29} = steps;

    this.setState({ OPTC1, OPTC2, OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7, OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29 });
  }

  render() {
    const { OPTC1, OPTC2, OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7,  OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29} = this.state;
    
    if(OPTC1.value !='No' && OPTC2.value != 'No')
    uploadFeedback('Yes', OPT1.value, OPT2.value, OPT3.value, OPT4.value, OPT5.value, OPT6.value, OPT7.value,  OPT8.value, OPT9.value, OPT10.value, OPT11.value, OPT12.value, OPT13.value, OPT14.value, OPT15.value, OPT16.value, OPT17.value, OPT18.value, OPT19.value, OPT20.value, OPT21.value, OPT22.value, OPT23.value, OPT24.value, OPT25.value, OPT26.value, OPT27.value, OPT28.value, OPT29.value);
    else if (OPTC1.value == 'Yes' && OPTC2.value == 'No')
    uploadFeedbackNoConsent(OPTC2.value)
    return (
      <div style={{ width: '100%' }}>
        <h3>Feeback submited. Thank you.</h3>
      </div>
    );
  }
}

UploadData.propTypes = {
  steps: PropTypes.object,
};

UploadData.defaultProps = {
  steps: undefined,
};

const form = [
  {
    id: 'POLICY',
    component: (
      <div className='Terms'> <p className='termsHeader'>About</p>You are invited to take part in a questionnaire about online system trust. The purpose of this study is to identify types of factors that play an essential role in gaining trust in an online system. Trust is essential in any successful relationship, including the one between users and online services. Trust is critical in determining whether consumers would engage with and transact with online systems such as e-commerce sites, banks, hospitals, and other websites. Users may be hesitant to provide personal information, make purchases, or engage in any other activity that entails interacting with the website if they lack confidence. </div>
    ),
    trigger: 'C1',
  },
  {
    id: 'C1',
    message: 'Are you over 18 and do you consent to the above, thereby continuing with the Online Study Questionnaire?',
    trigger: 'OPTC1',
  },
  {
    id: 'OPTC1',
    options: [
      { value: 'Yes', label: 'Yes', trigger: 'C2' },
      { value: 'No', label: 'No', trigger: 'NO_CONSENT' },
    ]
  },
  {
    id: 'C2',
    message: 'Do you wish to take part in survey regarding Online System Trust?',
    trigger: 'OPTC2',
  },
  {
    id: 'OPTC2',
    options: [
      { value: 'Yes', label: 'Yes', trigger: 'Q1' },
      { value: 'No', label: 'No', trigger: 'NO_CONSENT' },
    ],
  },
  {
    id: 'NO_CONSENT',
    message: 'Thanks',
    trigger: 'UPLOAD'
  },
  {
    id: 'Q1',
    message: 'What is your gender?',
    trigger: 'OPT1'
  },
  {
    id: 'OPT1',
    options: [
      { value: 'Male', label: 'Male', trigger: 'Q2' },
      { value: 'Female', label: 'Female', trigger: 'Q2' },
      { value: 'Other', label: 'Other', trigger: 'Q2' },
    ],
  },
  {
    id: 'Q2',
    message: 'What is your age group?',
    trigger: 'OPT2'
  },
  {
    id: 'OPT2',
    options: [
      { value: '18-24', label: '18-24', trigger: 'Q3' },
      { value: '25-34', label: '25-34', trigger: 'Q3' },
      { value: '35-44', label: '35-44', trigger: 'Q3' },
      { value: '45-54', label: '45-54', trigger: 'Q3' },
      { value: '55-64', label: '55-64', trigger: 'Q3' },
    ],
  },
  {
    id: 'Q3',
    message: 'How often do you provide personal information to online systems?',
    trigger: 'OPT3'
  },
  {
    id: 'OPT3',
    options: [
      { value: 'Rarely', label: 'Rarely', trigger: 'Q4' },
      { value: 'Occasionally', label: 'Occasionally', trigger: 'Q4' },
      { value: 'Frequently', label: 'Frequently', trigger: 'Q4' },
      { value: 'Almost always', label: 'Almost always', trigger: 'Q4' },
    ],
  },
  {
    id: 'Q4',
    message: 'Which of the following factors are important to you when deciding whether to provide personal information to an online system?',
    trigger:'OPT4'
  },
  {
    id: 'OPT4',
    options: [
      { value: 'Clear privacy policy', label: 'Clear privacy policy', trigger: 'Q5' },
      { value: 'Reputation of the company', label: 'Reputation of the company', trigger: 'Q5' },
      { value: 'Positive reviews from other users', label: 'Positive reviews from other users', trigger: 'Q5' },
      { value: 'Secure payment options', label: 'Secure payment options', trigger: 'Q5' },
      { value: 'All of the above', label: 'All of the above', trigger: 'Q5' },
      { value: 'None of the above', label: 'None of the above', trigger: 'Q5' },
    ],
  },
  {
    id: 'Q5',
    message: 'How much do you trust online systems to protect your personal information?',
    trigger:'OPT5'
  },
  {
    id: 'OPT5',
    options: [
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q6' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q6' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q6' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q6' },
    ],
  },
  {
    id: 'Q6',
    message: 'How much do you trust social media platforms with your personal information?',
    trigger:'OPT6'
  },
  {
    id: 'OPT6',
    options: [
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q7' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q7' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q7' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q7' },
    ],
  },
  {
    id: 'Q7',
    message: 'How much do you trust e-commerce websites with your personal information?',
    trigger:'OPT7'
  },
  {
    id: 'OPT7',
    options: [
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q8' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q8' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q8' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q8' },
    ],
  },
  {
    id: 'Q8',
    message: 'How much do you trust government websites with your personal information?',
    trigger:'OPT8'
  },
  {
    id: 'OPT8',
    options: [
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q9' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q9' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q9' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q9' },
    ],
  },
  {
    id: 'Q9',
    message : 'How much do you trust healthcare websites with your personal information?',
    trigger:'OPT9'
  },
  {
    id:'OPT9',
    options:[
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q10' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q10' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q10' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q10' },
    ],
  },
  {
    id: 'Q10',
    message : 'What factors contribute to your trust in online systems to protect your personal information?',
    trigger:'OPT10'
  },
  {
    id:'OPT10',
    options:[
      { value: 'Use of encryption', label: 'Use of encryption', trigger: 'Q11' },
      { value: 'Two-factor authentication', label: 'Two-factor authentication', trigger: 'Q11' },
      { value: 'Compliance with industry standards', label: 'Compliance with industry standards', trigger: 'Q11' },
      { value: 'None of the above', label: 'None of the above', trigger: 'Q11' },
    ],
  },
  {
    id: 'Q11',
    message : 'Have you ever had your personal information compromised as a result of using an online system?',
    trigger:'OPT11'
  },
  {
    id:'OPT11',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q12' },
      { value: 'No', label: 'No', trigger: 'Q12' },
    ],
  },
  {
    id: 'Q12',
    message : 'How likely are you to read a privacy policy before providing personal information to an online system?',
    trigger:'OPT12'
  },
  {
    id:'OPT12',
    options:[
      { value: 'Very likely', label: 'Very likely', trigger: 'Q13' },
      { value: 'Somewhat likely', label: 'Somewhat likely', trigger: 'Q13' },
      { value: 'Not very likely', label: 'Not very likely', trigger: 'Q13' },
      { value: 'Not at all likely', label: 'Not at all likely', trigger: 'Q13' },
    ],
  },
  {
    id: 'Q13',
    message : 'How important is it to you that online systems provide you with the option to delete your personal information?',
    trigger:'OPT13'
  },
  {
    id:'OPT13',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q14' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q14' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q14' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q14' },
    ],
  },
  {
    id: 'Q14',
    message : 'What types of security measures would make you feel more comfortable sharing your personal information with an online system?',
    trigger:'OPT14'
  },
  {
    id:'OPT14',
    options:[
      { value: 'Password requirement', label: 'Password requirement', trigger: 'Q15' },
      { value: 'Two-factor authentication', label: 'Two-factor authentication', trigger: 'Q15' },
      { value: 'Security Questions', label: 'Security Questions', trigger: 'Q15' },
      { value: 'All of the above', label: 'Not at all important', trigger: 'Q15' },
      { value: 'None of the above', label: 'None of the above', trigger: 'Q15' },
    ],
  },
  {
    id:'Q15',
    message : 'How important is it to you that online systems provide you with the option to control how your personal information is shared with third-party services?',
    trigger:'OPT15'
  },
  {
    id:'OPT15',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q16' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q16' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q16' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q16' },
    ],
  },
  {
    id:'Q16',
    message : 'How important is it to you that online systems provide clear information about the data they collect from you?',
    trigger:'OPT16'
  },
  {
    id:'OPT16',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q17' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q17' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q17' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q17' },
    ],
  },
  {
    id:'Q17',
    message : 'How important is it to you that online systems provide you with the option to delete your account and all associated data?',
    trigger:'OPT17'
  },
  {
    id:'OPT17',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q18' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q18' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q18' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q18' },
    ],
  },
  {
    id:'Q18',
    message : 'How much do you trust online systems that are owned by large companies? (large companies include well established large insurance company or service providers that has been around for a long time)',
    trigger:'OPT18'
  },
  {
    id: 'OPT18',
    options: [
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q19' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q19' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q19' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q19' },
    ],
  },
  {
    id:'Q19',
    message : 'How much do you trust online systems that are owned by small companies? (small companies include new startups)',
    trigger:'OPT19'
  },
  {
    id: 'OPT19',
    options: [
      { value: 'Completely trust', label: 'Completely trust', trigger: 'Q20' },
      { value: 'Somewhat trust', label: 'Somewhat trust', trigger: 'Q20' },
      { value: 'Do not trust', label: 'Do not trust', trigger: 'Q20' },
      { value: 'Not applicable', label: 'Not applicable', trigger: 'Q20' },
    ],
  },
  {
    id:'Q20',
    message : 'How important is a website\'s data breach history in determining your trust in sharing personal information?',
    trigger:'OPT20'
  },
  {
    id:'OPT20',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q21' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q21' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q21' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q21' },
    ],
  },
  {
    id:'Q21',
    message : 'Are you more likely to trust a website with your personal information if it has a strong presence in mainstream media or news coverage?',
    trigger:'OPT21'
  },
  {
    id:'OPT21',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q22' },
      { value: 'No', label: 'No', trigger: 'Q22' },
      { value: 'Maybe', label: 'Maybe', trigger: 'Q22' },
    ],
  },
  {
    id:'Q22',
    message : 'Does the presence of a website\'s mobile app increase your trust in sharing personal information?',
    trigger:'OPT22'
  },
  {
    id:'OPT22',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q23' },
      { value: 'No', label: 'No', trigger: 'Q23' },
      { value: 'Maybe', label: 'Maybe', trigger: 'Q23' },
    ],
  },
  {
    id:'Q23',
    message : 'Does the presence of a chatbot in website increase your trust in sharing personal information?',
    trigger:'OPT23'
  },
  {
    id:'OPT23',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q24'},
      { value: 'No', label: 'No', trigger: 'Q24' },
      { value: 'Maybe', label: 'Maybe', trigger: 'Q24'},
    ],
  },
  {
    id:'Q24',
    message : 'How important is the presence of an "About Us" or "Company Information" page on a website when determining your trust in sharing personal information?',
    trigger:'OPT24'
  },
  {
    id:'OPT24',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q25' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q25' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q25' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q25' },
    ],
  },
  {
    id:'Q25',
    message : 'How important is a website\'s accessibility (e.g., easy navigation, clear layout) in influencing your trust in sharing personal information?',
    trigger:'OPT25'
  },
  {
    id:'OPT25',
    options:[
      { value: 'Very Important', label: 'Very Important', trigger: 'Q26' },
      { value: 'Somewhat important', label: 'Somewhat important', trigger: 'Q26' },
      { value: 'Not very important', label: 'Not very important', trigger: 'Q26' },
      { value: 'Not at all important', label: 'Not at all important', trigger: 'Q26' },
    ],
  },
  {
    id:'Q26',
    message : 'Are you more likely to trust a website with your personal information if it has a large number of followers on social media platforms?',
    trigger:'OPT26'
  },
  {
    id:'OPT26',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q27' },
      { value: 'No', label: 'No', trigger: 'Q27' },
      { value: 'Maybe', label: 'Maybe', trigger: 'Q27' },
    ],
  },
  {
    id:'Q27',
    message : 'Are you more likely to trust a website with your personal information if it has been recommended by a friend or family member?',
    trigger:'OPT27'
  },
  {
    id:'OPT27',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q28' },
      { value: 'No', label: 'No', trigger: 'Q28' },
      { value: 'Maybe', label: 'Maybe', trigger: 'Q28' },
    ],
  },
  {
    id:'Q28',
    message : 'Are you more likely to trust a website if it has a physical address and contact information displayed?',
    trigger:'OPT28'
  },
  {
    id:'OPT28',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'Q29' },
      { value: 'No', label: 'No', trigger: 'Q29' },
      { value: 'Maybe', label: 'Maybe', trigger: 'Q29' },
    ],
  },
  {
    id:'Q29',
    message : 'Do you trust websites that use social media logins (e.g., Facebook, Google) for authentication more than those that don\'t?',
    trigger:'OPT29'
  },
  {
    id:'OPT29',
    options:[
      { value: 'Yes', label: 'Yes', trigger: 'END' },
      { value: 'No', label: 'No', trigger: 'END' },
      { value: 'Maybe', label: 'Maybe', trigger: 'END' },
    ],
  },
  {
    id: 'END',
    message: 'Thank You for taking part in the study',
    trigger: 'UPLOAD',
  },
  {
    id: 'UPLOAD',
    component: <UploadData />,
    asMessage: true,
    end: true,
  },
  {
    id: 'UPLOADNOCONSENT',
    component: <UploadData />,
    asMessage: true,
    end: true,
  }
];

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <p>
          Chatbot
        </p> */}
        <div>
          <ChatBot steps={form} />
        </div>
      </div>
    </div>
  );
  }
}

function uploadFeedback(CONSENT,OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7, OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29) {
  fetch('/api/createfeedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({CONSENT,OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7,  OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29}),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    });
}

function uploadFeedbackNoConsent(CONSENT) {
  fetch('/api/createfeedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({CONSENT}),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    });
}

export default App;
