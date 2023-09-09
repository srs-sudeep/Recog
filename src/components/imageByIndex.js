
import image1 from '../assets/images/homeCarousel1/w1.jpg'
import image2 from '../assets/images/homeCarousel1/w2.jpeg'
import image3 from '../assets/images/homeCarousel1/w1.jpg'
import image4 from '../assets/images/homeCarousel1/w2.jpeg'
import image5 from '../assets/images/homeCarousel1/w1.jpg'

export const images = [image1,image2,image3,image4,image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
