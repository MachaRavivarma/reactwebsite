import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'
import './index.css'; // Import your CSS file

class Portfolio extends Component {
    state = {
        isDragStart: false,
        isDragging: false,
        prevScrollLeft: 0,
        positionDiff: 0,
        arrowIcons: [
          { id: 'left', display: 'none' },
          { id: 'right', display: 'block' },
        ],
        images: [
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/69113921_1137424316466902_3787669531640463360_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/135200663_108225411193443_2142962339742377762_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/68397046_1123166281226039_490990379127013376_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/310956659_480629737332843_5194193371160026132_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/238592383_3050139885267332_7674457387777034393_n-1.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/139864571_111588524190465_3205543492557213955_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/72553786_1186761688199831_6909995770968014848_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/283601917_390677326328085_591140926208517285_n.jpg',
          'http://www.focuswebmedia.in/wp-content/uploads/2023/06/286992060_393227892739695_4944450547162431619_n.jpg',
          // Add more image URLs here
        ],
        currentImageIndex: 0,
        firstImageLoaded: false, // Add this state property
    };

  carousalRef = React.createRef();
  firstImgRef = React.createRef();
  autoSlideInterval = null;

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    this.autoSlideInterval = setInterval(this.slideToNextImage, 3000); // Change slide duration as needed
  };

  stopAutoSlide = () => {
    clearInterval(this.autoSlideInterval);
  };

  slideToNextImage = () => {
    const { currentImageIndex, images } = this.state;
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    this.scrollToImageIndex(nextImageIndex);
  };

  scrollToImageIndex = (index) => {
    if (!this.carousalRef.current) {
      return; // Exit if the carousalRef is not available
    }
  
    const scrollAmount = index * this.carousalRef.current.offsetWidth;
  
    this.carousalRef.current.scrollLeft = scrollAmount;
  
    this.setState({
      currentImageIndex: index,
    });
  };
  
  

  handleDragStart = (e) => {
    this.stopAutoSlide();

    this.setState({
      isDragStart: true,
      isDragging: true,
      prevScrollLeft: this.carousalRef.current.scrollLeft,
    });
  };

  handleDrag = (e) => {
    if (!this.state.isDragging) return;

    const newScrollLeft = this.state.prevScrollLeft - (e.clientX - this.firstImgRef.current.getBoundingClientRect().left);
    this.carousalRef.current.scrollLeft = newScrollLeft;

    this.setState({
      positionDiff: newScrollLeft - this.state.prevScrollLeft,
      prevScrollLeft: newScrollLeft,
    });
  };

  handleDragEnd = () => {
    this.setState({
      isDragging: false,
      isDragStart: false,
    });

    this.startAutoSlide();
  };

  handleArrowClick = (direction) => {
    const { currentImageIndex, images } = this.state;
    let nextImageIndex;
  
    if (direction === 'left') {
      nextImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else {
      nextImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    this.scrollToImageIndex(nextImageIndex);
  };

  showHideIcons = () => {
    const { currentImageIndex, images } = this.state;
    const showLeft = currentImageIndex > 0;
    const showRight = currentImageIndex < images.length - 1;
  
    return {
      left: showLeft ? 'block' : 'none',
      right: showRight ? 'block' : 'none',
    };
  };

  
  handleFirstImageLoad = () => {
    this.setState({
      firstImageLoaded: true,
    });
  };

  render() {
    const { firstImageLoaded } = this.state; // Destructure from state
    
    return (
      <>
        <Header/>
        <div className="portfolio-down-1" style={{ lineHeight: '30px' }}>
            <h1 style={{ color: '#141414', fontSize: '30px', fontWeight: 'bold', paddingBottom: '20px' }}>Portfolio</h1>
            <p style={{ color: '#363434', fontSize: '20px', fontWeight: 500, paddingBottom: '20px' }}>Focus Web Media is your trusted partner in digital marketing across various industries. With a wide clientele that spans<br /> sectors such as Real Estate, Education, Healthcare, and Agri Innovation, we possess extensive experience and expertise<br /> in delivering successful digital marketing campaigns.</p>
            <p style={{ color: '#363434', fontSize: '20px', fontWeight: 500, paddingBottom: '20px' }}>At Focus Web Media, we understand that each industry has its unique challenges and target audience. That’s why our<br /> team of professionals is well-versed in tailoring digital marketing strategies specifically for your industry. Whether you<br /> are a real estate developer aiming to increase property sales or an educational institution seeking to attract prospective<br /> students, we have the knowledge and skills to create effective campaigns that drive tangible results.</p>
        </div>
        <div className="carousel-down-2-slide">
        <h1
          style={{
            paddingBottom: '20px',
            textAlign: 'center'
          }}
        >
          Showcases
        </h1>
        <p
          style={{
            paddingBottom: '20px',
            textAlign: 'center'
          }}
        >
          A tapestry of triumphs woven through illustrious creativity, showcasing mastery in
          <br />
          spectacular advertising campaigns across a myriad of sectors.
        </p>
          <div className="wrapper">
            <FaChevronLeft
              className="arrow-icon"
              style={{ left: '-23px', marginLeft: '30px', display: this.showHideIcons().left }}
              onClick={() => this.handleArrowClick('left')}
            />
            <div
              className="carousel-container"
              ref={this.carousalRef}
              onMouseDown={this.handleDragStart}
              onMouseMove={this.handleDrag}
              onMouseUp={this.handleDragEnd}
              onMouseLeave={this.handleDragEnd}>
              <div
                className="carousel-content"
                style={{ transform: `translateX(${this.state.positionDiff}px)` }}
              >
                {this.state.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    ref={this.firstImgRef}
                    onLoad={index === 0 ? this.handleFirstImageLoad : undefined} // Call handleFirstImageLoad for the first image
                  />
                ))}
              </div>
            </div>
            <FaChevronRight
              className="arrow-icon"
              style={{ right: '-23px', marginRight: '30px', display: this.showHideIcons().right }}
              onClick={() => this.handleArrowClick('right')}
            />
          </div>
        </div>
        <div className="button-container">
          <button type="button">
            <Link to = "/clients">View More</Link>
          </button>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Portfolio;
