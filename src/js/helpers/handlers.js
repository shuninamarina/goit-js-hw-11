import { galleryAPI } from '../galleryAPI';
import { Notify } from 'notiflix';
import { renderGalleryMarkup, clearGalleryMarkup } from '../renderfunction';
import { loadMoreBtn } from '../loadMoreBtn';

export async function onFormSubmit(event) {
  event.preventDefault();
  clearGalleryMarkup();
  galleryAPI.resetPage();
  const searchQuery = event.target.searchQuery.value.trim();
  if (!searchQuery) {
    Notify.warning('Enter something');
    return;
  }

  loadMoreBtn.hide();

  galleryAPI.searchQuery = searchQuery;
  try {
    const { hits, totalHits } = await galleryAPI.fetchGallery();
    if (hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    renderGalleryMarkup(hits);
    loadMoreBtn.show();
  } catch (error) {
    console.log(error);
  }
}
