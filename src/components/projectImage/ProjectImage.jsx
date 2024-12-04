import React, { useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'


import constants from '../../constants'
import hooks from '@/hooks'
import styles from './ProjectImage.module.css'

const { AnimationOnScrollView } = hooks
const {
  project_content: {
    title,
    description,
    publication_item
  }
} = constants

const renderPublicationItem = () => (
  publication_item.map(item => (
    <SwiperSlide key={item.id}>
      <div className={styles.publication__card}>
      <Image
          src={item.image}
          alt="portfolio_image"
          className={styles.publication__image}
        />
       
        <div className={styles.publication__sub__item}>
          <h3 className={styles.portfolio__title}>{item.title}</h3>
          {/* <span className={styles.portfolio__level}>{item.decs}</span> */}
          <h3 className={styles.portfolio__title}>{item.subtitle}</h3>
        </div>
      </div>
    </SwiperSlide>
  ))
)

const ProjectImage = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`project section ${isVisible ? 'appear' : ''}`}
      id="project"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{description}</span>
      <div className={`${styles.container__slider} container`}>
        <div className={styles.sub__container__slider}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {renderPublicationItem()}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProjectImage