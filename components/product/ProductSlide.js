import { Slide } from 'react-slideshow-image';
import styles from './ProductSlide.module.css'


export const ProductSlide = ({ images }) => {
  return (
    <div className="slide-container">
      <Slide easing='ease' duration={5000} indicator="true">
        {
          images.map((image, index) => {
            const url = `/products/${image}`

            return (
              <div className={styles['each-slide']} key={index} >
                <div style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '650px'
                }}
                >
                </div>
              </div>
            )
          })
        }
      </Slide >
    </div >
  )
}
