
import image1 from '../assets/images/homeCarousel2/w2.jpeg'
import image2 from '../assets/images/homeCarousel2/w1.jpg'
import image3 from '../assets/images/homeCarousel2/w2.jpeg'
import image4 from '../assets/images/homeCarousel2/w1.jpg'
import image5 from '../assets/images/homeCarousel2/w2.jpeg'

export const images = [image1,image2,image3,image4,image5]

const imageByIndex2 = (index) => images[index % images.length]

export default imageByIndex2
