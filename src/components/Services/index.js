import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';
import { AiOutlineSearch, AiOutlineDollarCircle } from 'react-icons/ai';
import { RiLineChartLine } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiBadgeCheck } from 'react-icons/bi';
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const Services = () => {
    return (
        <>
            <Header />
            <div className="services-down-1">
                <div>
                    <h1 style={{ color: 'black', fontSize: '22px', fontWeight: 'bold', textAlign: 'center', paddingBottom: '50px' }}>At Focus Web Media LLP, we are dedicated to helping your business succeed<br /> in the digital landscape. Contact us today to discuss your digital marketing<br /> needs and let us help you achieve your goals</h1>
                </div>
                <div className="services-down-column">
                    <div>
                        <p style={{ color: 'black', fontSize: '15px', fontWeight: '500', paddingBottom: '10px' }}>OUR AWESOME SERVICES</p>
                        <h1 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold', paddingBottom: '10px' }}>Digital Marketing & Media</h1>
                    </div>
                    <div className="services-down-row-1" style={{ marginTop: '30px' }}>
                        <div className="services-down-row-2">
                            <div>
                                <FaFacebook size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Social Media Campaigns on FB, Insta, Twitter, Linkedin, YT</h1>
                                <p>At Focus Web Media LLP, we specialize in creating<br /> effective social media campaigns on platforms like<br /> Facebook, Instagram, Twitter, LinkedIn, and YouTube.<br /> Our experienced team knows how to engage your<br /> target audience, drive brand awareness, and boost conversions<br /> through strategic social media marketing.</p>
                            </div>
                        </div>
                        <div className="services-down-row-2" style={{ marginLeft: '60px' }}>
                            <div>
                                <IoCodeSlash size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Website development / maintenance / upgradation</h1>
                                <p>In addition to social media campaigns, we also excel in<br /> website development, maintenance, and upgradation. We<br /> understand that your website is the face of your business<br /> online, and we ensure it is optimized for a seamless user<br /> experience and maximum visibility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-down-row-1" style={{ marginTop: '30px' }}>
                        <div className="services-down-row-2">
                            <div>
                                <AiOutlineSearch size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>SEO & SMO (Search Engine Optimization)</h1>
                                <p>Our expertise extends to Search Engine Optimization (SEO)<br /> and Social Media Optimization (SMO), where we employ<br /> proven strategies to improve your website’s organic<br /> rankings and increase its visibility across various search<br /> engines and social media platforms.</p>
                            </div>
                        </div>
                        <div className="services-down-row-2" style={{ marginLeft: '150px' }}>
                            <div>
                                <AiOutlineDollarCircle size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>SEM (Search Engine Marketing)</h1>
                                <p>With our Search Engine Marketing (SEM) services, we help <br />you leverage the power of paid advertising to drive<br /> targeted traffic to your website. We carefully craft<br /> compelling ads and optimize your campaigns to maximize<br /> ROI and reach your desired audience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-down-row-1" style={{ marginTop: '30px' }}>
                        <div className="services-down-row-2">
                            <div>
                                <RiLineChartLine size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Analytics</h1>
                                <p>At Focus Web Media we believe in data-driven decision<br /> making. That’s why we offer comprehensive analytics<br /> services to track the performance of your digital marketing<br /> efforts. Our team provides detailed reports and actionable<br /> insights, allowing you to make informed decisions and<br /> refine your strategies.</p>
                            </div>
                        </div>
                        <div className="services-down-row-2" style={{ marginLeft: '150px' }}>
                            <div>
                                <BiSearchAlt2 style={{ height: '25' }} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Keyword Analysis</h1>
                                <p>Keyword analysis is crucial for online success, and we<br /> excel in this area. We conduct in-depth keyword research<br /> to identify the most relevant and profitable keywords for<br /> your business, ensuring that you rank higher in search<br /> engine results.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-down-row-1" style={{ marginTop: '30px' }}>
                        <div className="services-down-row-2">
                            <div>
                                <IoMegaphoneOutline size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Content Marketing using Blogs</h1>
                                <p>Content marketing is another strength of ours. We help you<br /> create engaging and informative blog content that not only<br /> attracts your target audience but also boosts your<br /> website’s SEO value.</p>
                            </div>
                        </div>
                        <div className="services-down-row-2" style={{ marginLeft: '150px' }}>
                            <div>
                                <AiOutlineGoogle size={20} />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Google Ads (display & search ads)</h1>
                                <p>For businesses looking to run effective paid advertising<br /> campaigns, we offer Google Ads services. Our team of<br /> experts will create compelling display and search ads that<br /> capture attention and drive valuable clicks and<br /> conversions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-down-row-1" style={{ marginTop: '30px' }}>
                        <div className="services-down-row-2">
                            <div>
                                <AiOutlineMail size={20}/>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Email and Mobile Marketing</h1>
                                <p>We understand the importance of reaching your audience<br /> through various channels. That’s why we offer email and<br /> mobile marketing services, helping you engage your<br /> customers directly and build lasting relationships.</p>
                            </div>
                        </div>
                        <div className="services-down-row-2" style={{ marginLeft: '150px' }}>
                            <div>
                                <BiBadgeCheck size={20}/>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h1 style={{ color: 'black', fontSize: '20px', fontWeight: '600', paddingBottom: '15px' }}>Event coverage</h1>
                                <p>Whether you have a corporate event, product launch, or any<br /> other special occasion, our team is ready to provide event<br /> coverage services. We capture memorable moments and<br /> create engaging content to amplify the reach of your event.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Services;
