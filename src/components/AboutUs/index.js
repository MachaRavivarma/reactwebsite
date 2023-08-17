import React from 'react';
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="about-down-1">
                <div className="about-down-1-text">
                    <h1 style={{ color: '#0f0f0f', fontSize: '35px', fontWeight: 'bold', paddingBottom: '20px' }}>Welcome to Focus Web Media</h1>
                    <p style={{ lineHeight: '30px', paddingBottom: '20px' }}>Your premier destination for digital marketing solutions in the ever-<br />expanding digital space. Our team consists of young and dynamic<br /> tech experts who specialize in various fields, ensuring that we have<br /> the expertise to meet all your digital marketing needs.<br /></p>
                    <p style={{ lineHeight: '30px', paddingBottom: '20px' }}>In today’s business landscape, having a strong online presence is<br /> essential. As consumers increasingly turn to the internet to research<br /> and make purchasing decisions, digital marketing services have<br /> become crucial for businesses of all sizes. At Focus Web Media, we<br /> understand the importance of reaching and engaging with your<br /> target audience online.<br /></p>
                    <p style={{ lineHeight: '30px' }}>Our comprehensive range of services is designed to help your<br /> business thrive in the digital realm. We offer proven strategies and<br /> techniques, including search engine optimization (SEO), pay-per-click<br /> (PPC) advertising, social media marketing, and targeted email<br /> campaigns. By implementing these strategies, we can effectively <br />build your brand, attract and retain customers, and ultimately drive<br /> revenue growth. What sets us apart is our dedication to delivering<br /> results. We stay updated with the latest industry trends and utilize<br /> cutting-edge tools and technologies to ensure that your online<br /> presence stands out from the competition.</p>
                </div>
                <div>
                    <img decoding="async" width="545" height="521" src="http://www.focuswebmedia.in/wp-content/uploads/2023/06/about-bg.png" className="attachment-full size-full wp-image-10452" alt="" loading="lazy" srcSet="http://www.focuswebmedia.in/wp-content/uploads/2023/06/about-bg.png 545w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/about-bg-300x287.png 300w" sizes="(max-width: 545px) 100vw, 545px" />
                </div>
            </div>
            <div className="about-down-2">
                <div>
                    <img decoding="async" width="550" height="680" src="http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo.jpg" className="attachment-full size-full wp-image-10469" alt="" loading="lazy" srcSet="http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo.jpg 2048w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-300x300.jpg 300w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-1024x1024.jpg 1024w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-150x150.jpg 150w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-768x768.jpg 768w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-1536x1536.jpg 1536w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-575x575.jpg 575w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-1000x1000.jpg 1000w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-650x650.jpg 650w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-1300x1300.jpg 1300w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-1320x1320.jpg 1320w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-600x600.jpg 600w, http://www.focuswebmedia.in/wp-content/uploads/2023/06/green-logo-100x100.jpg 100w" sizes="(max-width: 2048px) 100vw, 2048px" />
                </div>
                <div className="about-down-2-text">
                    <h1 style={{ color: '#0f0f0f', fontSize: '35px', fontWeight: 'bold', paddingBottom: '20px' }}>Green FMC Advantage</h1>
                    <p style={{ lineHeight: '30px', paddingBottom: '20px' }}>Focus Web Media, is the digital division of Green FMC, and sets itself apart<br /> from other agencies by offering comprehensive, one-stop-shop solutions. Our<br /> affiliation with Green FMC, a renowned advertising agency with over 15 years<br /> of experience in providing complete advertising and branding solutions, gives<br /> us a unique advantage in the industry.</p>
                    <p style={{ lineHeight: '30px', paddingBottom: '20px' }}>Unlike many other digital marketing agencies, we have the capability to<br /> seamlessly integrate digital marketing strategies with advertising, branding,<br /> and promotional campaigns. This holistic approach ensures that your brand<br /> message remains consistent across all channels, maximizing the impact of<br /> your marketing efforts.</p>
                    <p style={{ lineHeight: '30px', paddingBottom: '20px' }}>By harnessing the combined expertise of Focus Web Media and Green FMC,<br /> we bring a wealth of knowledge and a deep understanding of the digital<br /> marketing landscape to every project we undertake. Our team of specialists<br /> collaborates closely, leveraging their respective skills and insights.</p>
                    <p style={{ lineHeight: '30px' }}>Partner with Focus Web Media today and unlock the true potential of your<br /> business in the digital world. Contact us now to discuss how we can help you<br /> achieve your digital marketing goals.</p>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default AboutUs;
