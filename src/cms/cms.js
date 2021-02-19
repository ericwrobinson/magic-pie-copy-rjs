import CMS from 'netlify-cms-app';

import withStyled from "./with-styled";

import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview';
import ServicesPagePreview from './preview-templates/ServicesPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', withStyled(IndexPagePreview));
CMS.registerPreviewTemplate('about', withStyled(AboutPagePreview));
CMS.registerPreviewTemplate('services', withStyled(ServicesPagePreview));
CMS.registerPreviewTemplate('portfolio', withStyled(PortfolioPostPreview));
