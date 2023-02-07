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
    const { hits } = await galleryAPI.fetchGallery();
    if (hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    }

    renderGalleryMarkup(hits);
    loadMoreBtn.show();
    checkHitsMax(hits);
  } catch (error) {
    console.log(error);
  }
}

export async function onLoadMoreBtnClick() {
  try {
    loadMoreBtn.loading();
    const { hits } = await galleryAPI.fetchGallery();
    renderGalleryMarkup(hits);
    loadMoreBtn.endLoading();
    checkHitsMax(hits);
  } catch (error) {
    console.log(error);
  }
}

function checkHitsMax(hits) {
  if (hits.length < 40) {
    Notify.info(`We're sorry, but you've reached the end of search results.`);
    loadMoreBtn.hide();
  }
}
