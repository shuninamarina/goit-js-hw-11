import { refs } from './refs';
import { onFormSubmit } from './helpers/handlers';
import { loadMoreBtn } from './loadMoreBtn';

refs.form.addEventListener('submit', onFormSubmit);
