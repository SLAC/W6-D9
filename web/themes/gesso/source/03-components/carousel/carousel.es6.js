import { tns } from 'tiny-slider';
import Drupal from 'drupal';
import { SITE_MARGINS } from '../../00-config/_GESSO.es6';

Drupal.behaviors.carousel = {
  attach(context) {
    const carousels = context.querySelectorAll('.c-carousel__slides');
    carousels.forEach(carousel => {
      tns({
        arrowKeys: true,
        autoWidth: true,
        center: false,
        container: carousel,
        controls: true,
        controlsPosition: 'bottom',
        items: 1.2,
        gutter: parseInt(SITE_MARGINS.mobile, 10),
        loop: true,
        navAsThumbnails: true,
        navContainer: carousel.parentNode.querySelector('.c-carousel__pager'),
        navPosition: 'bottom',
        nextButton: carousel.parentNode.querySelector('.c-carousel__next'),
        prevButton: carousel.parentNode.querySelector('.c-carousel__prev'),
        responsive: {
          1200: {
            autoWidth: false,
            gutter: parseInt(SITE_MARGINS.desktop, 10),
            // center: false,
            fixedWidth: 920,
            // items: 2,
          },
        },
        slideBy: 1,
      });
    });
  },
};
