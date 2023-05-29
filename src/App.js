import React, { useRef, useState, useEffect } from 'react';
import logo from './MainModel.png';
import Select from "react-select";
import Touiland from './Flag-Touiland.svg'
import ReactCountryFlag from "react-country-flag";
import './App.css';

function App() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [botName, setBotName] = useState("Eva")
  const [gender, setGender] = useState('female');
  const [isRegistered, setIsRegistered] = useState(localStorage.getItem('username') !== null);
  const textToSpeak = 'I am your A.I. girlfriend nice to meet you!, My name is Eva, To know more please register to your account.';
  const [countryVal, setCountryVal] = useState('');

  const options = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AX', label: 'Åland Islands' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AI', label: 'Anguilla' },
    { value: 'AQ', label: 'Antarctica' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AW', label: 'Aruba' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BM', label: 'Bermuda' },
    { value: 'BT', label: 'Bhutan' },
    { value: 'BO', label: 'Bolivia' },
    { value: 'BQ', label: 'Bonaire, Sint Eustatius and Saba' },
    { value: 'BA', label: 'Bosnia and Herzegovina' },
    { value: 'BW', label: 'Botswana' },
    { value: 'BV', label: 'Bouvet Island' },
    { value: 'BR', label: 'Brazil' },
    { value: 'IO', label: 'British Indian Ocean Territory' },
    { value: 'BN', label: 'Brunei Darussalam' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'BI', label: 'Burundi' },
    { value: 'KH', label: 'Cambodia' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cabo Verde' },
    { value: 'KY', label: 'Cayman Islands' },
    { value: 'CF', label: 'Central African Republic' },
    { value: 'TD', label: 'Chad' },
    { value: 'CL', label: 'Chile' },
    { value: 'CN', label: 'China' },
    { value: 'CX', label: 'Christmas Island' },
    { value: 'CC', label: 'Cocos (Keeling) Islands' },
    { value: 'CO', label: 'Colombia' },
    { value: 'KM', label: 'Comoros' },
    { value: 'CG', label: 'Congo' },
    { value: 'CD', label: 'Congo (Democratic Republic of the)' },
    { value: 'CK', label: 'Cook Islands' },
    { value: 'CR', label: 'Costa Rica' },
    { value: 'CI', label: 'Côte d\'Ivoire' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CU', label: 'Cuba' },
    { value: 'CW', label: 'Curaçao' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'DM', label: 'Dominica' },
    { value: 'DO', label: 'Dominican Republic' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'EG', label: 'Egypt' },
    { value: 'SV', label: 'El Salvador' },
    { value: 'GQ', label: 'Equatorial Guinea' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'SZ', label: 'Eswatini' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'FK', label: 'Falkland Islands (Malvinas)' },
    { value: 'FO', label: 'Faroe Islands' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finland' },
    { value: 'FR', label: 'France' },
    { value: 'GF', label: 'French Guiana' },
    { value: 'PF', label: 'French Polynesia' },
    { value: 'TF', label: 'French Southern Territories' },
    { value: 'GA', label: 'Gabon' },
    { value: 'GM', label: 'Gambia' },
    { value: 'GE', label: 'Georgia' },
    { value: 'DE', label: 'Germany' },
    { value: 'GH', label: 'Ghana' },
    { value: 'GI', label: 'Gibraltar' },
    { value: 'GR', label: 'Greece' },
    { value: 'GL', label: 'Greenland' },
    { value: 'GD', label: 'Grenada' },
    { value: 'GP', label: 'Guadeloupe' },
    { value: 'GU', label: 'Guam' },
    { value: 'GT', label: 'Guatemala' },
    { value: 'GG', label: 'Guernsey' },
    { value: 'GN', label: 'Guinea' },
    { value: 'GW', label: 'Guinea-Bissau' },
    { value: 'GY', label: 'Guyana' },
    { value: 'HT', label: 'Haiti' },
    { value: 'HM', label: 'Heard Island and McDonald Islands' },
    { value: 'VA', label: 'Holy See' },
    { value: 'HN', label: 'Honduras' },
    { value: 'HK', label: 'Hong Kong' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IS', label: 'Iceland' },
    { value: 'IN', label: 'India' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'IR', label: 'Iran' },
    { value: 'IQ', label: 'Iraq' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IM', label: 'Isle of Man' },
    { value: 'IL', label: 'Israel' },
    { value: 'IT', label: 'Italy' },
    { value: 'JM', label: 'Jamaica' },
    { value: 'JP', label: 'Japan' },
    { value: 'JE', label: 'Jersey' },
    { value: 'JO', label: 'Jordan' },
    { value: 'KZ', label: 'Kazakhstan' },
    { value: 'KE', label: 'Kenya' },
    { value: 'KI', label: 'Kiribati' },
    { value: 'KP', label: 'North Korea' },
    { value: 'KR', label: 'South Korea' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'KG', label: 'Kyrgyzstan' },
    { value: 'LA', label: 'Laos' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LB', label: 'Lebanon' },
    { value: 'LS', label: 'Lesotho' },
    { value: 'LR', label: 'Liberia' },
    { value: 'LY', label: 'Libya' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'MO', label: 'Macao' },
    { value: 'MG', label: 'Madagascar' },
    { value: 'MW', label: 'Malawi' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'MV', label: 'Maldives' },
    { value: 'ML', label: 'Mali' },
    { value: 'MT', label: 'Malta' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MQ', label: 'Martinique' },
    { value: 'MR', label: 'Mauritania' },
    { value: 'MU', label: 'Mauritius' },
    { value: 'YT', label: 'Mayotte' },
    { value: 'MX', label: 'Mexico' },
    { value: 'FM', label: 'Micronesia' },
    { value: 'MD', label: 'Moldova' },
    { value: 'MC', label: 'Monaco' },
    { value: 'MN', label: 'Mongolia' },
    { value: 'ME', label: 'Montenegro' },
    { value: 'MS', label: 'Montserrat' },
    { value: 'MA', label: 'Morocco' },
    { value: 'MZ', label: 'Mozambique' },
    { value: 'MM', label: 'Myanmar' },
    { value: 'NA', label: 'Namibia' },
    { value: 'NR', label: 'Nauru' },
    { value: 'NP', label: 'Nepal' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'NC', label: 'New Caledonia' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'NI', label: 'Nicaragua' },
    { value: 'NE', label: 'Niger' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'NU', label: 'Niue' },
    { value: 'NF', label: 'Norfolk Island' },
    { value: 'MK', label: 'North Macedonia' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'NO', label: 'Norway' },
    { value: 'OM', label: 'Oman' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'PW', label: 'Palau' },
    { value: 'PS', label: 'Palestine' },
    { value: 'PA', label: 'Panama' },
    { value: 'PG', label: 'Papua New Guinea' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'PE', label: 'Peru' },
    { value: 'PH', label: 'Philippines' },
    { value: 'PN', label: 'Pitcairn' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'QA', label: 'Qatar' },
    { value: 'RE', label: 'Réunion' },
    { value: 'RO', label: 'Romania' },
    { value: 'RU', label: 'Russia' },
    { value: 'RW', label: 'Rwanda' },
    { value: 'BL', label: 'Saint Barthélemy' },
    { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
    { value: 'KN', label: 'Saint Kitts and Nevis' },
    { value: 'LC', label: 'Saint Lucia' },
    { value: 'MF', label: 'Saint Martin (French part)' },
    { value: 'PM', label: 'Saint Pierre and Miquelon' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    { value: 'WS', label: 'Samoa' },
    { value: 'SM', label: 'San Marino' },
    { value: 'ST', label: 'Sao Tome and Principe' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'SN', label: 'Senegal' },
    { value: 'RS', label: 'Serbia' },
    { value: 'SC', label: 'Seychelles' },
    { value: 'SL', label: 'Sierra Leone' },
    { value: 'SG', label: 'Singapore' },
    { value: 'SX', label: 'Sint Maarten (Dutch part)' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'SB', label: 'Solomon Islands' },
    { value: 'SO', label: 'Somalia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
    { value: 'SS', label: 'South Sudan' },
    { value: 'ES', label: 'Spain' },
    { value: 'LK', label: 'Sri Lanka' },
    { value: 'SD', label: 'Sudan' },
    { value: 'SR', label: 'Suriname' },
    { value: 'SJ', label: 'Svalbard and Jan Mayen' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'SY', label: 'Syria' },
    { value: 'TW', label: 'Taiwan' },
    { value: 'TJ', label: 'Tajikistan' },
    { value: 'TZ', label: 'Tanzania' },
    { value: 'TH', label: 'Thailand' },
    { value: 'TL', label: 'Timor-Leste' },
    { value: 'TG', label: 'Togo' },
    { value: 'TK', label: 'Tokelau' },
    { value: 'TIL', label: 'Touiland' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TT', label: 'Trinidad and Tobago' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'TR', label: 'Turkey' },
    { value: 'TM', label: 'Turkmenistan' },
    { value: 'TC', label: 'Turks and Caicos Islands' },
    { value: 'TV', label: 'Tuvalu' },
    { value: 'UG', label: 'Uganda' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'UM', label: 'United States Minor Outlying Islands' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'UZ', label: 'Uzbekistan' },
    { value: 'VU', label: 'Vanuatu' },
    { value: 'VE', label: 'Venezuela' },
    { value: 'VN', label: 'Vietnam' },
    { value: 'VG', label: 'Virgin Islands (British)' },
    { value: 'VI', label: 'Virgin Islands (U.S.)' },
    { value: 'WF', label: 'Wallis and Futuna' },
    { value: 'EH', label: 'Western Sahara' },
    { value: 'YE', label: 'Yemen' },
    { value: 'ZM', label: 'Zambia' },
    { value: 'ZW', label: 'Zimbabwe' }
  ];  

  const changeHandler = (selectedOption) => {
    setCountryVal(selectedOption.value);
  };
  
  useEffect(() => {
    setIsRegistered(localStorage.getItem('username') !== null);
  }, []);

  const handleClick = () => {
    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(speechUtterance);
  };

  const registerHandle = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const speechSynthesis = window.speechSynthesis;

    if (!username && !email && !password) {
      const speechUtterance = new SpeechSynthesisUtterance("Please fill in all the input fields.");
      speechSynthesis.speak(speechUtterance);
      alert("Please fill in all the input fields.");
      return;
    }
  
    const curseWords = ["bitch", "nigga", "sex", "nigga"];
    const hasCurseWords = curseWords.some(word => username.toLowerCase().includes(word));
    if (hasCurseWords) {
      const speechUtterance = new SpeechSynthesisUtterance("Username contains curse words. Please choose a different username.");
      speechSynthesis.speak(speechUtterance);
      alert("Username contains curse words. Please choose a different username.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const speechUtterance = new SpeechSynthesisUtterance("Invalid E-mail format. Please enter a valid E-mail address.");
      speechSynthesis.speak(speechUtterance);
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }
  
    if (password.length < 8) {
      const speechUtterance = new SpeechSynthesisUtterance("Password should be at least 8 characters long.");
      speechSynthesis.speak(speechUtterance);
      alert("Password should be at least 8 characters long.");
      return;
    }

    localStorage.setItem('username', username);
    const speechUtterance = new SpeechSynthesisUtterance("Welcome " + localStorage.getItem('username') + ", I'm so glad you here, Now you can create your own personality to Eva.");
    speechSynthesis.speak(speechUtterance);
    console.log("%cSuccess!, Welcome " + localStorage.getItem('username') + "!", "font-size: 35px; color: #ff647c; background: #d2707f;");
    setIsRegistered(true);
  };

  const personalityHandle = () => {
    setIsRegistered(false);
  };

  return (
    <div>
      {isRegistered ? (
        <div className="personality-container">
          <h1 className="personality-title">{botName ? `${botName}'s personality` : "Eva's personality"}</h1>
          <div className="register-id">
            <input type="text" placeholder="AI name(Eva)" onChange={(event) => setBotName(event.target.value)} />
            <select value={gender} onChange={(event) => setGender(event.target.value)}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="transgender-girl">Transgender(Girl)</option>
              <option value="transgender-boy">Transgender(Boy)</option>
              <option value="non-binary">Non-binary</option>
            </select>
            <div className="personality-country">
              <p className="personality-country-title">Country:</p>
              <div
  id="countryFlag"
  className="personality-marginBottom"
  style={{ display: 'flex', alignItems: 'center', width: '70%' }}
>
  {countryVal === 'TIL' ? (
    <img
      src={Touiland}
      alt="Flag"
      style={{ width: '26px', height: '24px', marginRight: '10px' }}
    />
  ) : (
    <ReactCountryFlag
      countryCode={countryVal}
      svg
      cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
      cdnSuffix="svg"
      title={countryVal}
    />
  )}
  <div style={{ marginLeft: '10px', color: 'black', width: '100%' }}>
    <Select
      isSearchable={true}
      options={options}
      value={options.find((option) => option.value === countryVal)}
      onChange={changeHandler}
    />
  </div>
</div>

            </div>
          </div>
          <div className='personality-hobbies'>
            <h1 className="personality-country-title">Traits and hobbies:</h1>

            <input type="checkbox" id="option1" name="group" value="option1" />
            <label htmlFor="option1">Developing</label>

            <input type="checkbox" id="option2" name="group" value="option2" />
            <label htmlFor="option2">Business</label>

            <input type="checkbox" id="option3" name="group" value="option3" />
            <label htmlFor="option3">Sport</label>

            <input type="checkbox" id="option4" name="group" value="option4" />
            <label htmlFor="option4">Gamer</label>

            <input type="checkbox" id="option5" name="group" value="option5" />
            <label htmlFor="option5">Read</label>

            <input type="checkbox" id="option6" name="group" value="option6" />
            <label htmlFor="option6">Geographic</label>
            
            <input type="checkbox" id="option7" name="group" value="option7" />
            <label htmlFor="option7">Communication</label>

            <input type="checkbox" id="option8" name="group" value="option8" />
            <label htmlFor="option8">History</label>

            <input type="checkbox" id="option9" name="group" value="option9" />
            <label htmlFor="option9">Acting</label>

            <input type="checkbox" id="option10" name="group" value="option10" />
            <label htmlFor="option10">Beatboxing</label>

            <input type="checkbox" id="option11" name="group" value="option11" />
            <label htmlFor="option11">Art</label>

            <input type="checkbox" id="option12" name="group" value="option12" />
            <label htmlFor="option12">Chess</label>

            <input type="checkbox" id="option13" name="group" value="option13" />
            <label htmlFor="option13">Creativity</label>

            <input type="checkbox" id="option14" name="group" value="option14" />
            <label htmlFor="option14">Honesty</label>

            <input type="checkbox" id="option15" name="group" value="option15" />
            <label htmlFor="option15">Intelligence</label>

            <input type="checkbox" id="option16" name="group" value="option16" />
            <label htmlFor="option16">Enthusiasm</label>

            <input type="checkbox" id="option17" name="group" value="option17" />
            <label htmlFor="option17">Compassion</label>

            <input type="checkbox" id="option18" name="group" value="option18" />
            <label htmlFor="option18">Charisma</label>

            <input type="checkbox" id="option19" name="group" value="option19" />
            <label htmlFor="option19">depression</label>

          </div>
          <button className="personality-button" onClick={personalityHandle}>
              Submit
            </button>
        </div>
      ) : (
        <div className="register-container">
          <h1 className="register-heading">Register</h1>
          <div className="register-form">
            <input type="text" placeholder="Username" ref={usernameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="register-button" onClick={registerHandle}>
              Register
            </button>
          </div>
          <img
            src={logo}
            alt="Image"
            onClick={handleClick}
            className="register-image" 
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
