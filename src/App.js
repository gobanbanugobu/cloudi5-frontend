
import './App.css';
import logo from "./Images/logo.png"
import mark from "./Images/mark.png";
import access from "./Images/access.png"
import brand from "./Images/brand.png"
import easy from "./Images/easy.png"
import gain from "./Images/gain.png"
import dedicated from "./Images/dedicated.png"
import training from "./Images/training.png"
import feature from "./Images/feature.png"
import working from "./Images/working.png"
import women from "./Images/women.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Swal from 'sweetalert2'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const countries = ['India'];
  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.mobile) {
      formErrors.mobile = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile Number must be 10 digits';
    }
    
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.country) formErrors.country = 'Country is required';
    if (!formData.state) formErrors.state = 'State is required';
    if (!formData.city) formErrors.city = 'City is required';
    
    if (!formData.pincode) {
      formErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      formErrors.pincode = 'Pincode must be 6 digits';
    }

    if (!formData.address) formErrors.address = 'Address is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Format the data to match your Postman output
        const userData = {
            name: formData.name,
            email: formData.email,
            mobileNo: formData.mobile, // Note the change to 'mobileNo'
            country: formData.country,
            state: formData.state,
            city: formData.city,
            address: formData.address,
        };

        console.log('Form Submitted', userData);
        
        // Send formatted userData to the API
        try {
            const response = await axios.post('http://localhost:3001/user/post/api', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('User created:', response.data);
            Swal.fire({
              title: "Good job!",
              text: "You details submitted successfully!",
              icon: "success"
            });
        } catch (error) {
            console.error('Error creating user:', error.response ? error.response.data : error.message);
            Swal.fire({
            
              text: "You details not submitted!",
              icon: "error"
            });
        }
    }

    setFormData({
      name: '',
      mobile: '',
      email: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      address: ''
    });
};

  return (
    <div>
    <div className='backgroundImage'>
     <section className='backgroundImageSection'>
      <img src={logo} alt="logo" className='logo'/>
      <h1>Crafting Digital Experiences, <br/>
      One Pixel at a Time.</h1>
     
<div className='markContainer'>

<section className='sectionContainer' >
<img src={mark} alt='mark' className='marks'/>
      <p className='markTexts'>Innovation</p>
      </section>
      <section className='sectionContainer'>
      <img src={mark} alt='mark' className='marks' />
      <p className='markTexts'>Online Presence</p>
      </section>
      <section className='sectionContainer'>
      <img src={mark} alt='mark' className='marks'/>
      <p className='markTexts'>Creative</p>
      </section>
      </div>
     </section>
     <div className='register'>
     <button className='registerButton'>Register Now</button>
     </div>
     </div>

     <div className='approach'>
<h2 >Our Approach:<span> <q>Collaborative, Creative, Custom</q> ?</span></h2>
<p>We take a collaborative approach to every project, working closely with you to understand your goals, your audience, and your unique selling points. From there, our team of designers and developers leverage their expertise to craft a custom solution that not only looks beautiful but also delivers tangible results for your business. Our team is comprised of talented designers and developers who are passionate about pushing the boundaries of creativity and innovation. We don't just build websites – we create digital experiences that leave a lasting impression.</p>
</div>
<div className='services'>
  <h2>Our Services</h2>
  <h2 style={{color:"green"}}><q>User-Centric Design, Responsive Solutions, Tailored Solutions</q></h2>
</div>

<div className='serviceCardContainer'>
<div className='serviceCard'>
<img src={access} alt='access' />
<p>Access to Existing <br/>Customers</p>
</div>
<div className='serviceCard'>
<img src={brand} alt='access' />
<p>Brand and <br/>Visibility</p>
</div>
<div className='serviceCard'>
<img src={easy} alt='access' />
<p>Easy to use <br/>Admin Panel</p>
</div>
<div className='serviceCard'>
<img src={gain} alt='access' />
<p>Gain from our digital <br/>marketing initiative </p>
</div>
</div>

<div style={{marginTop:"30px"}} className='serviceCardContainer'>
<div className='serviceCard'>
<img src={dedicated} alt='access' />
<p>Dedicated Success <br/>Executive </p>
</div>
<div className='serviceCard'>
<img src={training} alt='access' />
<p>Training and <br/>guidance</p>
</div>
<div className='serviceCard'>
<img src={feature} alt='access' />
<p>Feature at your <br/>service</p>
</div>
<div className='serviceCard'>
<img src={working} alt='access' />
<p>Working capital<br/> support  </p>
</div>
</div>
<div>

<div className='webDesign'>
  <div>
  <h2>Why Choose Cloudi5 <span>for Your Web Design Needs :</span> </h2>
  <ul>
    <li>With years of experience in the industry, our team brings a wealth 
    of expertise to every project.</li>
    <li>We have successfully designed and developed websites for a diverse 
    range of clients across various industries.</li>
    <li>From seamless navigation to compelling calls-to-action, we ensure 
    that every aspect of your website is designed with the user in mind.</li>
    <li>We understand that every business is unique.</li>
  </ul>
  </div>
  <img src={women} className='women' alt='women'/>
 

</div>

<div className='greenContainer'>
<h2>Ready to elevate your online presence?<br/>
Let's turn your vision into reality!</h2>
<p>Contact us today to schedule a consultation and discover our exceptional web design services.</p>
<div className='register'>
     <button id="registerButton" className='registerButton'>Register Now</button>
     </div>
</div>
</div>
<div className='registerSteps'>
<h2>Register your interest and wait for callback </h2>
<p>You can own a branded licensed website in 5 simple steps</p>
</div>


<div className='registerStepsOverAllContainer'>
<div className='registerStepsContainer'>
  <h5>01</h5>
  <p>Register your interest</p>
</div>
<div className='registerStepsLine'></div>
<div className='registerStepsContainer'>
  <h5>02</h5>
  <p>Team connects with you</p>
</div>
<div className='registerStepsLine'></div>
<div className='registerStepsContainer'>
  <h5>03</h5>
  <p>Submit your proposal</p>
</div>
<div className='registerStepsLine'></div>
<div className='registerStepsContainer'>
  <h5>04</h5>
  <p>Connect our Agency</p>
</div>
 <div className='registerStepsLine'></div>
<div className='registerStepsContainer'>
  <h5>05</h5>
  <p>Start business operation</p>
</div>
</div>

<div className='formDetails'>
  <Row>
    <Col xs={12} md={2} xl={2}></Col>
    <Col xs={12} md={8} xl={8}>
      <h3 className='formDetailsHeading'>Fill the details below :</h3>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="formGroup">
          <label className="formLabel">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="formInput"
          />
          {errors.name && <p className="errorText">{errors.name}</p>}
        </div>

        <Row>
          <Col xs={12} md={6} xl={6}>
            <div className="formGroup">
              <label className="formLabel">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="formInput"
              />
              {errors.mobile && <p className="errorText">{errors.mobile}</p>}
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="formGroup">
              <label className="formLabel">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="formInput"
              />
              {errors.email && <p className="errorText">{errors.email}</p>}
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} xl={6}>
            <div className="formGroup">
              <label className="formLabel">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="formSelect"
              >
                <option value="">Select your Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && <p className="errorText">{errors.country}</p>}
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="formGroup">
              <label className="formLabel">State *</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="formSelect"
              >
                <option value="">Select your State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && <p className="errorText">{errors.state}</p>}
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} xl={6}>
            <div className="formGroup">
              <label className="formLabel">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="formInput"
              />
              {errors.city && <p className="errorText">{errors.city}</p>}
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="formGroup">
              <label className="formLabel">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter your pincode"
                className="formInput"
              />
              {errors.pincode && <p className="errorText">{errors.pincode}</p>}
            </div>
          </Col>
        </Row>

        <div className="formGroup">
          <label className="formLabel">Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="formTextarea"
          />
          {errors.address && <p className="errorText">{errors.address}</p>}
        </div>
        <p style={{textAlign:"center"}}>By clicking submit, I agree to<b> <u>Terms and Conditions & Privacy Policy</u></b></p>

        <button type="submit" className="formButton">
          Submit
        </button>
      </form>
    </Col>
    <Col xs={12} md={2} xl={2}></Col>
  </Row>
</div>
<h2 className='faqh2'>Frequently Asked Questions</h2>
<p className='faqp'>(FAQ’s)</p>

<Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='accordianItem'>
        <Accordion.Header><b>How long will it take to complete my website?</b></Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>

    <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="1" className='accordianItem'>
        <Accordion.Header><b>What is the process for getting a website designed by your company?</b></Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>

    <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="1" className='accordianItem'>
        <Accordion.Header><b>Can I see examples of websites your company has designed?</b></Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>

    <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="1" className='accordianItem'>
        <Accordion.Header><b>Do you provide website maintenance and support services after the website is launched?</b></Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>

    <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="1" className='accordianItem'>
        <Accordion.Header><b>What platform or technologies do you use for website development?</b></Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>


    <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="1" className='accordianItem'>
        <Accordion.Header><b>What is the cost of getting a website designed by your company?</b></Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>


    <Accordion className='accordion' defaultActiveKey="0">
      <Accordion.Item eventKey="1" className='accordianItem'>
        <Accordion.Header><b>If my proposal is approved, how long does it take?</b>
        </Accordion.Header>
        <Accordion.Body>
        The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
        </Accordion.Body>
      </Accordion.Item >
    </Accordion>
    <div className='footer'>
<div className='footerServices'>
<h5>SERVICES</h5>
<ul>
  <li>Web Design</li>
  <li>Web Development</li>
  <li>Digital Marketing</li>
  <li>Mobile Application</li>
  <li>Logo Design</li>
</ul>
</div>

<div className='footerServices'>
<h5>OUR PRODUCTS</h5>
<ul>
  <li>E-Commerce</li>
  <li>School Software</li>
  <li>ERP</li>
  <li>CRM</li>
  <li>Lead Management</li>
</ul>
</div>


<div className='footerServices'>
<h5>LEGAL PAGES</h5>
<ul>
  <li>Terms and Conditions</li>
  <li>Privacy Policy</li>
  <li>Cancellation Policy</li>
  <li>Customer Policy</li>
  <li>Return Policy</li>
</ul>
</div>

<div className='footerServices'>
<h5>COMPANY</h5>
<ul>
  <li>About Us</li>
  <li>Privacy Policy</li>
  <li>Blog</li>
  <li>Careers</li>
  <li>Contact Us</li>
</ul>
</div>

<div className='footerServices'>
<h5>NEED SUPPORT</h5>
<ul>
  <li>FAQs</li>
 
</ul>
</div>
</div>

<hr style={{color:"white"}}></hr>

<div className='footerMiddle'>
  <section>
   <img src={logo} alt="logo" id="logo" className='logo'/>
   <p>We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for nothing less than perfection.</p>
   </section>
   <section>
    <h5>Social Media</h5>
    <p>Follow us on social media to find out the latest updates on our progress</p>
   </section>
</div>


<div className='footerBottom'>
<p>Cloudi5 Techologies 2024. All Rights Reserved.</p>

</div>


    </div>
  
  );
}

export default App;
