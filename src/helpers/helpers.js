import * as actions from '../actions/actionCreators';
import store from '../store';
import Client, {Config} from 'shopify-buy';

const shopifyStoreDomain = "custom-storefront.myshopify.com";

const config = new Config({
  storefrontAccessToken: '220658e0dee403d784ffef24d20241cd',
  domain: shopifyStoreDomain
});

export const client = new Client(config);

export const shopifyStoreUrl = "https://" + shopifyStoreDomain;

export function getData(slug, template, page , getAllPages ) {
  const xhr = new XMLHttpRequest();
  let url = shopifyStoreUrl + slug;
  if ( page ){
    url = url + '?page=' + page;
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let object = xhr.responseText;
      object = object.substr(0, object.indexOf('end-'+ template +'-object'));
      object = object.split('start-'+ template +'-object')[1];
      object = JSON.parse(object);
      object = object[0];
      store.dispatch(actions.getData(template, object, page, getAllPages));
      if ( template === 'all-products'){
        if ( object["pages"] > page){
          getData('/collections/all', 'all-products', page + 1);
        }
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send(null);
}
//start loading all products for search
getData('/collections/all','all-products', 1);

export function showLoadingIndicator(){
  const indicator = document.getElementById('ipl-progress-indicator');
  indicator.classList.remove('available');
}

export function hideLoadingIndicator(){
  const indicator = document.getElementById('ipl-progress-indicator');
  window.scrollTo(0, 0);
  if(indicator){
    setTimeout(() => {
      indicator.classList.add('available');
    }, 250)
  }
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
  let pageTitle = object.title;
  let seoTitle = object.seo_title;
  let shopName = shop_name;
  let seoDescription = object.seo_description;
  let pageExcerpt = object.excerpt;
  if ( seoTitle !== '' && shopName !== '' ) {
    document.title = seoTitle + ' | ' + shopName;
  } else if ( shopName !== '' ) {
    document.title = pageTitle + ' | ' + shopName;
  }
  let meta = document.getElementsByTagName("meta");
  if ( seoDescription !== '' ) {
    meta.description.content = seoDescription;
  } else {
    meta.description.content = pageExcerpt;
  }
}