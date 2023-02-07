import { onLoadMoreBtnClick } from './helpers/handlers';

class LoadMoreBtn {
  constructor(className, onClick) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<button type="button" class="${className}">Load more</button>`
    );
    this.loadMoreRef = document.querySelector(`.${className}`);
    this.loadMoreRef.addEventListener('click', onClick);
    this.hide();
  }

  hide() {
    this.loadMoreRef.style.display = 'none';
  }

  show() {
    this.loadMoreRef.style.display = 'block';
  }

  loading() {
    this.loadMoreRef.textContent = 'loading...';
  }

  endLoading() {
    this.loadMoreRef.textContent = 'Load more';
  }
}

export const loadMoreBtn = new LoadMoreBtn('load-more', onLoadMoreBtnClick);
