import { getStikers } from './api-stikers.mjs'
import { createItems } from './components/items.mjs'

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
  const imgNode = intersectionEntry.target;
  imgNode.src = imgNode.dataset.src;
  observer.unobserve(imgNode);
};

export const registerImage = (image) => {
  observer.observe(image);

};




let $footer = document.querySelector('footer')
export const observerFooter = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadItems)
})

let itemsTotal = 0
let limit = 12
let offset = 12
let category = ''
const loadItems = () => {
  getStikers(limit, offset, category).then((res) => {
    if (Object.keys(res).length > 0) {
      const $container = document.querySelector('.items')
      createItems(res, $container, category)
      offset = (offset + 12)
    }else {
      offset = 12
      observerFooter.unobserve($footer)
    }
  })
}
export const lazyItems = (node, categoryId, disable) => {
  itemsTotal = Object.keys(node).length
  if(itemsTotal>0 && !disable) {
    observerFooter.observe($footer)
    if(categoryId) {
      category = categoryId
    }else {
      category = ''
    }
  }
}