import * as actions from '../actions/actionCreators';
import store from '../store';
const shopifyStoreDomain = "custom-storefront.myshopify.com";

export const shopifyStoreUrl = "https://" + shopifyStoreDomain;

export function getData(slug, template, page ) {
  const xhr = new XMLHttpRequest();
  let url = shopifyStoreUrl + slug;
  if ( page ){
    url = url + '?page=' + page;
  }
  if ( template === 'search' || template === 'blog' || template === 'article') {
    url = slug;
  }
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let object = xhr.responseText;
      object = object.substr(0, object.indexOf('end-'+ template +'-object'));
      object = object.split('start-'+ template +'-object')[1];
      object = JSON.parse(object);
      object = object[0];
      store.dispatch(actions.getData(template, object));
      if ( template === 'all-products'){
        if ( object["pages"] > page){
          getData('/collections/all', 'all-products', page + 1);
        }
      }
    }
    if (xhr.status === 404)
      window.location="/notfound";
  };
  xhr.open("GET", url, true);
  xhr.send();
}
//start loading all products
getData('/collections/all','all-products', 1);

export function showLoadingIndicator(){
  const indicator = document.getElementById('ipl-progress-indicator');
  indicator.classList.remove('available');
}

export function hideLoadingIndicator(){
  const indicator = document.getElementById('ipl-progress-indicator');
  if ( !indicator.classList.contains('available') )
    window.scrollTo(0, 0);
  setTimeout(() => {
    indicator.classList.add('available');
  }, 250);
}

export function changeSeo(object,shop_name,shop_description,title) {
  if ( object === null ){
    document.title = shop_name;
    let meta = document.getElementsByTagName("meta");
    meta.description.content = shop_description;
    return;
  }
  if ( title ){
    document.title = title + ' | ' + shop_name;
    let meta = document.getElementsByTagName("meta");
    meta.description.content = shop_description;
    return;
  }
  let objectTitle = object.title;
  let seoTitle = object.seo_title;
  let shopName = shop_name;
  let seoDescription = object.seo_description;
  let pageExcerpt = object.excerpt;
  if ( seoTitle !== '' && shopName !== '' ) {
    document.title = seoTitle + ' | ' + shopName;
  } else if ( shopName !== '' ) {
    document.title = objectTitle + ' | ' + shopName;
  }
  let meta = document.getElementsByTagName("meta");
  if ( seoDescription !== '' ) {
    meta.description.content = seoDescription;
  } else {
    meta.description.content = pageExcerpt;
  }
}