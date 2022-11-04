import { onButtonClickPlus } from './pagination';
import { createMarkup } from '../header-search';
import { containerGallery } from '../utils/refs';
import { currentPage } from './pagination';
import ApiService from '../ApiService';

const api = new ApiService();