let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
  const imgNode = intersectionEntry.target;
  imgNode.src = imgNode.dataset.src;
  imgNode.onload = () => {
    loadedImages += 1;
    // logState();
  };
  observer.unobserve(imgNode);
};

export const registerImage = (image) => {
  observer.observe(image);
  totalImages += 1;
  // logState();
};

// function logState() {
//   console.log(`⚪️ Total Imágenes: ${totalImages}`);
//   console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
//   console.log("--------------------------------------");
// }

import { getStikers } from './api-stikers.mjs'
import { createItems } from './components/items.mjs'

let $footer = document.querySelector('footer')
const observerFooter = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadItems)
})

let itemsTotal = 0
let limit= 12
let offset= 12
let category = ''
const loadItems = () => {
  getStikers(limit, offset, category).then((res) => {
    if (Object.keys(res).length > 0) {
      const $container = document.querySelector('.items')
      createItems(res, $container, category)
      offset = (offset + 12)
    }else {
      observerFooter.unobserve($footer)
    }
  })
}
export const lazyItems = (node, categodyId) => {
  itemsTotal = Object.keys(node).length
  if(itemsTotal>0) {
    observerFooter.observe($footer)
    if(categodyId) {
      category = categodyId
    }else {
      category = ''
    }
  }
}