import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../templates/portfolio-post'

const PortfolioPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <PortfolioPostTemplate
      content={widgetFor('body')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

PortfolioPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PortfolioPostPreview
