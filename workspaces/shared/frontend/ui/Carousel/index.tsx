import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const index = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>
}

export default index

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#f76566',
        color: '#fff',
        fontSize: '2em',
        padding: '10px',
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        lineHeight: '20px',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        right: '-50px',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#f76566',
        color: '#fff',
        fontSize: '2em',
        padding: '10px',
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        lineHeight: '20px',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '-50px',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    />
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}
