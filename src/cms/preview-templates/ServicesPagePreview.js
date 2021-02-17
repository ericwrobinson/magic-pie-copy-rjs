import React from 'react';
import PropTypes from 'prop-types';
import { ServicesPageTemplate } from '../../templates/services-page';

const ServicesPagePreview = ({ entry, getAsset }) => {
  const entryServices = entry.getIn(['data', 'intro', 'services'])
  const services = entryServices ? entryServices.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ServicesPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      intro={{ services }}
      cta={{
        title1: entry.getIn(['data', 'cta', 'title1']),
        subtitle1: entry.getIn(['data', 'cta', 'subtitle1']),
        title2: entry.getIn(['data', 'cta', 'title2']),
        buttonTitle1: entry.getIn(['data', 'cta', 'buttonTitle1']),
        subtitle2: entry.getIn(['data', 'cta', 'subtitle2']),
        buttonTitle2: entry.getIn(['data', 'cta', 'buttonTitle2'])
      }}
    />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicesPagePreview;
