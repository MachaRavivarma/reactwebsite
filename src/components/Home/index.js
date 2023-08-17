import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { FaPlus, FaTimes, FaRegLightbulb, FaPencilRuler, FaCode, FaRocket, FaChartBar } from 'react-icons/fa';
import './index.css';

class Home extends Component {
    state = {
        currentSlide: 0,
        activeContentId: null,
    };

    slides = [];
    arrowLeft = null;
    arrowRight = null;

    showSlide = (index) => {
        if (this.slides.length > 0) {
            this.slides.forEach((slide, i) => {
                slide.style.display = index === i ? 'block' : 'none';
            });
        }

        if (this.arrowLeft && this.arrowRight) {
            this.arrowLeft.style.visibility = index === 0 ? 'hidden' : 'visible';
            this.arrowRight.style.visibility = index === this.slides.length - 1 ? 'hidden' : 'visible';
        }
    };

    moveSlider = (direction) => {
        const newSlide = (this.state.currentSlide + direction + this.slides.length) % this.slides.length;
        this.setState({ currentSlide: newSlide }, () => {
            this.showSlide(this.state.currentSlide);
            this.updateArrowBackgroundImages(); // Call the function after changing the slide
        });
    };

    autoSlide = () => {
        this.moveSlider(1);
    };

    componentDidMount() {
        this.slides = document.querySelectorAll('.slider');
        this.arrowLeft = document.querySelector('.arrow-left');
        this.arrowRight = document.querySelector('.arrow-right');
        this.showSlide(this.state.currentSlide);
        this.slideInterval = setInterval(this.autoSlide, 10000);

        // Create an Intersection Observer
        this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.5 });

        // Observe the target element
        this.target = document.querySelector('.main-down-2');
        this.observer.observe(this.target);

        // Call the updated function to set initial arrow background images
        this.updateArrowBackgroundImages();
    }

    componentWillUnmount() {
        clearInterval(this.slideInterval);
        // Disconnect the Intersection Observer
        this.observer.disconnect();
    }

    handleIntersection = (entries) => {
        const heading = document.getElementById('main-down-2-content-h1');
        if (entries[0].isIntersecting) {
            heading.style.opacity = '1';
        } else {
            heading.style.opacity = '0';
        }
    };

    updateArrowBackgroundImages = () => {
        const { currentSlide } = this.state;
        const previousSlide = (currentSlide - 1 + this.slides.length) % this.slides.length;
        const nextSlide = (currentSlide + 1) % this.slides.length;

        if (this.arrowLeft && this.arrowRight) {
            this.arrowLeft.querySelector('.arrow-background-left').style.backgroundImage = `url('${this.slides[previousSlide].querySelector('img').src}')`;
            this.arrowRight.querySelector('.arrow-background-right').style.backgroundImage = `url('${this.slides[nextSlide].querySelector('img').src}')`;
        }
    };

    toggleContent = (elementId) => {
        this.setState((prevState) => ({
            activeContentId: prevState.activeContentId === elementId ? null : elementId,
        }));
    };

  render() {
    const services = [
      {
        id: 'info1',
        title: 'Social Media Campaigns on FB, Insta, Twitter, Linkedin, YT',
        content:
        (
            <>
              At Focus Web Media LLP, we specialize in creating effective social<br />
              media campaigns on platforms like Facebook, Instagram, Twitter,
              <br />
              LinkedIn, and YouTube. Our experienced team knows how to engage
              <br />
              your target audience, drive brand awareness, and boost conversions
              <br />
              through strategic social media marketing.
            </>
          ),
      },
      {
        id: 'info2',
        title: 'Website development / maintenance / upgradation',
        content:
          (
            <>
                In addition to social media campaigns, we also excel in website<br /> development, maintenance, and upgradation. We understand <br />that your website is the face of your business online, and we <br />ensure it is optimized for a seamless user experience and<br /> maximum visibility.
            </>
          ),
      },
      // Add other service objects here
      {
        id: 'info3',
        title: 'SEO & SMO (Search Engine Optimization)',
        content:
          (
            <>
                Our expertise extends to Search Engine Optimization (SEO) and<br /> Social Media Optimization (SMO), where we employ proven strategies<br /> to improve your website’s organic rankings and increase its visibility<br /> across various search engines and social media platforms.
            </>
          ),
      },
      {
        id: 'info4',
        title: 'SEM (Search Engine Marketing)',
        content:
            (
                <>
                    With our Search Engine Marketing (SEM) services, we help you leverage<br /> the power of paid advertising to drive targeted traffic to your website.<br /> We carefully craft compelling ads and optimize your campaigns to<br /> maximize ROI and reach your desired audience.
                </>
            ),
      },
      {
        id: 'info5',
        title: 'Analytics',
        content:
          (
            <>
                At Focus Web Media we believe in data-driven decision making.<br /> That’s why we offer comprehensive analytics services to track the <br />performance of your digital marketing efforts. Our team provides<br /> detailed reports and actionable insights, allowing you to make <br />informed decisions and refine your strategies.
            </>
          ),
      },
      {
        id: 'info6',
        title: 'Keyword Analysis',
        content:
            (
                <>
                    Keyword analysis is crucial for online success, and we excel in<br /> this area. We conduct in-depth keyword research to identify the<br /> most relevant and profitable keywords for your business, ensuring<br /> that you rank higher in search engine results.
                </>
            )
      },
      {
        id: 'info7',
        title: 'Content Marketing using Blogs',
        content:
          (
            <>
                Content marketing is another strength of ours. We help you<br /> create engaging and informative blog content that not only attracts<br /> your target audience but also boosts your website’s SEO value.
            </>
          )
      },
      {
        id: 'info8',
        title: 'Google Ads (display & search ads)',
        content:
            (
                <>
                    For businesses looking to run effective paid advertising campaigns,<br /> we offer Google Ads services. Our team of experts will create compelling<br /> display and search ads that capture attention and drive valuable<br /> clicks and conversions.
                </>
            ),
      },
      {
        id: 'info9',
        title: 'Email and Mobile Marketing',
        content:
            (
                <>
                    We understand the importance of reaching your audience through<br /> various channels. That’s why we offer email and mobile marketing<br /> services, helping you engage your customers directly and build<br /> lasting relationships.
                </>
            ),
      },
      {
        id: 'info10',
        title: 'Event coverage',
        content:
            (
                <>
                    Whether you have a corporate event, product launch, or any other<br /> special occasion, our team is ready to provide event coverage services.<br /> We capture memorable moments and create engaging content<br /> to amplify the reach of your event.
                </>
            ),
      },
    ];

    return (
        <>
            <Header />
            <div className="slider-container">
                <div className="slider">
                    <img src="https://i.ibb.co/ggBN8NP/Untitled-1-01.jpg" alt="Image 1" className="animated-image" />
                    <div className="slider-text text-1 animated-text">
                        <div>
                        <p className="animated-paragraph">LET YOUR BRAND</p>
                            <p className="animated-paragraph">ILLUMINATE YOUR INDUSTRY</p>
                            <p className="animated-paragraph">WITH THE POWER OF</p>
                        </div>
                        <h1 className="heading1 animated-heading">FOCUS</h1>
                    </div>
                </div>
                <div className="slider">
                    <img src="https://i.ibb.co/PGg3WhG/Untitled-1-02.jpg" alt="Image 2" className="animated-image" />
                    <div className="slider-text text-2 animated-text">
                        <h1 className="heading2 animated-heading">FOCUS</h1>
                        <div>
                            <p className="animated-paragraph">ON YOUR BRAND'S SUCCESS</p>
                            <p className="animated-paragraph">STAND OUT AS A</p>
                            <p className="animated-paragraph">TOP-NOTCH LEADER</p>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <img src="https://i.ibb.co/mhNPsZW/Untitled-1-03.jpg" alt="Image 3" className="animated-image" />
                    <div className="slider-text text-3 animated-text">
                        <h1 className="heading3 animated-heading">DIGITAL MARKETING</h1>
                        <h1 className="heading4 animated-heading">& MEDIA SERVICES</h1>
                        <div>
                            <p className="animated-paragraph">Search Engine Optimization</p>
                            <p className="animated-paragraph">Social Media Optimization</p>
                            <p className="animated-paragraph">Social Media Marketing</p>
                            <p className="animated-paragraph">Pay-Per-Click (PPC) Advertising</p>
                            <p className="animated-paragraph">Content marketing</p>
                            <p className="animated-paragraph">Affiliate Marketing</p>
                            <p className="animated-paragraph">Emails/SMS/Whatsapp Bulk SMS Marketing</p>
                            <p className="animated-paragraph">Website development/Maintenance/Upgradation</p>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow-left" onClick={() => this.moveSlider(-1)}>
                        <div className="arrow-background arrow-background-left"></div>
                    </div>
                    <div className="arrow-right" onClick={() => this.moveSlider(1)}>
                        <div className="arrow-background arrow-background-right"></div>
                    </div>
                </div>
            </div>

            <div className="main-down-1">
                <div>
                    <h1 className="main-down-1-heading" style={{ fontWeight: 'bold' }}>
                        Focus Web Media, a rising star in the realm of Digital Marketing, sets itself apart by
                        <br /> offering all-encompassing, high-end, one-stop creative solutions.
                    </h1>
                    <h1 className="main-down-1-heading" style={{ marginTop: '50px' }}>
                        Our affiliation with Green FMC, a prestigious advertising agency with over 15 years of
                        <br /> expertise in comprehensive advertising and branding, gives us an unmatched advantage.
                        <br /> This seamless integration allows us to offer exceptional services and 360° branding
                        <br /> solutions that cater to the diverse needs of our valued clients.
                    </h1>
                </div>
            </div>

            <div className="main-down-2">
                <div className="main-down-2-content">
                    <div>
                        <p className="main-down-2-content-p1">OUR AWESOME SERVICES</p>
                        <h1 className="main-down-2-content-h1" id="main-down-2-content-h1">
                            Digital Marketing <br />
                            & Media
                        </h1>
                    </div>
                    <div>
                        <p className="main-down-2-content-p2">
                            Our expertise covers the full living cycle of a digital product.<br />
                            From brand strategy, through design and development<br />
                            execution to its marketing promotion online.
                        </p>
                    </div>
                </div>
                <div className="main-down-2-content">
                    {services.map((service) => (
                    <div className="main-down-2-content-row" key={service.id}>
                        <div style={{ marginRight: '150px' }}>
                            <h1 className="main-down-2-content-h2" onClick={() => this.toggleContent(service.id)}>
                                {service.title}
                            </h1>
                            {this.state.activeContentId === service.id && (
                                <p className="xcd" style={{ display: 'block' }}>
                                    {service.content}
                                </p>
                            )}
                        </div>
                        <div>
                            <button value="toggle" type="button" style={{
                                background: 'transparent',
                                border: 'none',
                            }} onClick={() => this.toggleContent(service.id)}>
                                {this.state.activeContentId === service.id ? <FaTimes className="fa-solid" /> : <FaPlus className="fa-regular" />}
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="main-down-3">
                <div className="main-down-3-text">
                    <p>THIS IS HOW WE DO IT</p>
                    <h1 style={{ fontSize: "60px", fontWeight: "bold", marginTop: "-20px" }}>Our Process</h1>
                </div>
                <div className="main-down-3-row">
                    <div className="main-down-3-col">
                        <div className="i1">
                            <FaRegLightbulb size={40} color="white" />
                        </div>
                        <div className="li-content">
                            <p style={{ color: "#82739c", fontWeight: "bold" }}>PLANNING</p>
                            <p>Researching and brainstorming</p>
                        </div>
                    </div>
                    <div className="main-down-3-col">
                        <div className="i2">
                            <FaPencilRuler size={40} color="white" />
                        </div>
                        <div className="li-content">
                            <p style={{ color: "#EC5443", fontWeight: "bold" }}>DESIGN</p>
                            <p>Design systems and collaboration.</p>
                        </div>
                    </div>
                    <div className="main-down-3-col">
                        <div className="i3">
                            <FaCode size={40} color="white" />
                        </div>
                        <div className="li-content">
                            <p style={{ color: "#F76B1C", fontWeight: "bold" }}>DEVELOPMENT</p>
                            <p>Focused on performance</p>
                        </div>
                    </div>
                    <div className="main-down-3-col">
                        <div className="i4">
                            <FaRocket size={40} color="white" />
                        </div>
                        <div className="li-content">
                            <p style={{ color: "#057a05", fontWeight: "bold" }}>LAUNCH</p>
                            <p>Deploying the product on live environment</p>
                        </div>
                    </div>
                    <div className="main-down-3-col">
                        <div className="i5">
                            <FaChartBar size={40} color="white" />
                        </div>
                        <div className="li-content">
                            <p style={{ color: "#00DCFF", fontWeight: "bold" }}>EVALUATE</p>
                            <p>Analysis on the collected data</p>
                        </div>
                    </div>
                </div>
                <div className="main-down-3-text2">
                    <p style={{ marginBottom: "20px" }}>Our process is organized in a way that focuses on<br /> delivering valuable results in a timely manner.</p>
                    <p>It is intended to be executedin a couple of iterations,<br /> in order to evaluate and improve the results.</p>
                </div>
            </div>

            <div className="main-down-4">
                <h1>Our Clients</h1>
                <div className="logos">
                    <div className="logos-slide">
                        <a href="#"><img src="https://i.ibb.co/9y5N4zk/logo1.png" alt="logo1" /></a>
                        <a href="#"><img src="https://i.ibb.co/p4012zP/logo2.png" alt="logo2" /></a>
                        <a href="#"><img src="https://i.ibb.co/gPN7bQQ/logo3.png" alt="logo3" /></a>
                        <a href="#"><img src="https://i.ibb.co/y5t4hpZ/logo4.png" alt="logo4" /></a>
                        <a href="#"><img src="https://i.ibb.co/pKMTK9N/logo5.png" alt="logo5" /></a>
                        <a href="#"><img src="https://i.ibb.co/dQb7xWf/logo6.png" alt="logo6" /></a>
                        <a href="#"><img src="https://i.ibb.co/9h26SkJ/logo7.png" alt="logo7" /></a>
                        <a href="#"><img src="https://i.ibb.co/cFw238n/logo8.png" alt="logo8" /></a>
                        <a href="#"><img src="https://i.ibb.co/W6RkCV3/logo9.png" alt="logo9" /></a>
                        <a href="#"><img src="https://i.ibb.co/L1FQ7d9/logo10.png" alt="logo10" /></a>
                    </div>
                    <div className="logos-slide">
                        <a href="#"><img src="https://i.ibb.co/9y5N4zk/logo1.png" alt="logo1" /></a>
                        <a href="#"><img src="https://i.ibb.co/p4012zP/logo2.png" alt="logo2" /></a>
                        <a href="#"><img src="https://i.ibb.co/gPN7bQQ/logo3.png" alt="logo3" /></a>
                        <a href="#"><img src="https://i.ibb.co/y5t4hpZ/logo4.png" alt="logo4" /></a>
                        <a href="#"><img src="https://i.ibb.co/pKMTK9N/logo5.png" alt="logo5" /></a>
                        <a href="#"><img src="https://i.ibb.co/dQb7xWf/logo6.png" alt="logo6" /></a>
                        <a href="#"><img src="https://i.ibb.co/9h26SkJ/logo7.png" alt="logo7" /></a>
                        <a href="#"><img src="https://i.ibb.co/cFw238n/logo8.png" alt="logo8" /></a>
                        <a href="#"><img src="https://i.ibb.co/W6RkCV3/logo9.png" alt="logo9" /></a>
                        <a href="#"><img src="https://i.ibb.co/L1FQ7d9/logo10.png" alt="logo10" /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
  }
}

export default Home;
