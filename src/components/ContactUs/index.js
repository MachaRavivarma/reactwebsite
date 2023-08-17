import React from 'react';
import emailjs from 'emailjs-com';
import Header from '../Header';
import Footer from '../Footer';
import './index.css'

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Email sent successfully!');
      }, (error) => {
        alert('Error sending email. Please try again later.');
        console.error(error);
      });

    e.target.reset();
  };

  return (
    <>
        <Header />
        <div className="contactUs">
            <div className="contactUs-down-1">
                <div className="contactUs-down-1-row">
                <div>
                    <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', paddingBottom: '20px' }}>Address</h1>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', paddingBottom: '20px' }}>Focus Web Media</p>
                    <p style={{ fontSize: '20px', fontWeight: 500, color: '#484a49', lineHeight: '30px' }}>
                    H.No: 8-2-248/A/5/11, Road No 3, Opp:Times of India, behind<br /> TATA Capital Financial Services Limited, Banjara Hills,<br /> Hyderabad, Telangana 500034.
                    </p>
                </div>
                <div style={{ marginLeft: '80px' }}>
                    <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', paddingBottom: '20px' }}>Contact Us</h1>
                    <p style={{ fontSize: '20px', fontWeight: 500, color: '#484a49', paddingBottom: '20px' }}>
                    <span style={{ color: 'black', fontWeight: 'bold' }}>Email :</span> info@focuswebmedia.in
                    </p>
                    <p style={{ fontSize: '20px', fontWeight: 500, color: '#484a49' }}>
                    <span style={{ color: 'black', fontWeight: 'bold' }}>Phone :</span> +91 40 233 54 505, +91 9705 455 526
                    </p>
                </div>
                </div>
            </div>
            <div className="contactUs-down-2">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-352bb7a">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-1f95a4b elementor-widget elementor-widget-google_maps">
                            <div className="elementor-widget-container">
                                <style>
                                {`.elementor-widget-google_maps .elementor-widget-container { overflow: hidden; }`}
                                {`.elementor-widget-google_maps .elementor-custom-embed { line-height: 0; }`}
                                {`.elementor-widget-google_maps iframe { height: 500px; width: 500px; }`}
                                </style>
                                <div className="elementor-custom-embed">
                                <iframe
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=Green%20FMC%20Advertising%2C%20H.No%3A%208-2-248%2FA%2F5%2F11%2C%20Road%20No%203%2C%20Opp%3ATimes%20of%20India%2C%20behind%20TATA%20Capital%20Financial%20Services%20Limited%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                                    title="Google Map"
                                    aria-label="Google Map"
                                ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: '120px' }}>
                <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', paddingBottom: '20px' }}>Get in touch with us</h1>
                <form className="contactUs-down-2-contact-form-column" onSubmit={sendEmail}>
                    <div className="contactUs-down-2-contact-form-row" style={{ marginBottom: '10px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <input type="text" className="text" id="name" placeholder="Full Name*" required />
                    </div>
                    <div>
                        <input type="text" id="phone" className="text" placeholder="Phone No*" required />
                    </div>
                    </div>
                    <div className="contactUs-down-2-contact-form-row" style={{ marginBottom: '10px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <input type="email" id="email" className="text" placeholder="Email*" required />
                    </div>
                    <select className="services-section">
                        <option value="services">Services</option>
                        <option value="seo">SEO (Search Engine Optimization)</option>
                        <option value="smo">SMO (Social Media Optimization)</option>
                        <option value="smm">SMM (Social Media Marketing)</option>
                        <option value="ppc">PPC (Pay-Per-Click)</option>
                        <option value="whatsapp">Whatsapp Bulk Sms</option>
                    </select>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                    <textarea id="message" cols="58" rows="4" className="text" placeholder="How can I help you?" />
                    </div>
                    <div>
                    <button type="submit">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default ContactForm;
