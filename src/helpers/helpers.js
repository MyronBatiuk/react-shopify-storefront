import * as actions from '../actions/actionCreators';
import store from '../store';

const shopifyStoreDomain = '50-states-apparel-staging.myshopify.com';

export const shopifyStoreUrl = 'https://' + shopifyStoreDomain;

export const states = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY',
};

export function getData(slug, template, page, getAllPages) {
  const xhr = new XMLHttpRequest();
  let url = shopifyStoreUrl + slug;
  if (page) {
    url = url + '?page=' + page;
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let object = xhr.responseText;
      let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
      object = object.substr(0, object.indexOf('end-' + template + '-object'));
      object = object.split('start-' + template + '-object')[1];
      object = object.replace(regex, '');
      object = JSON.parse(object);
      object = object[0];
      store.dispatch(actions.getData(template, object, page, getAllPages));
      if (template === 'all-products') {
        if (object['pages'] > page) {
          getData('/collections/all', 'all-products', page + 1);
        }
      }
    }
    if (xhr.status === 404)
      window.location = '/notfound';
  };
  xhr.open('GET', url, true);
  xhr.send(null);
}

//start loading all products for search
getData('/collections/all', 'all-products', 1);

export function showLoadingIndicator() {
  const indicator = document.getElementById('ipl-progress-indicator');
  indicator.classList.remove('available');
}

export function hideLoadingIndicator() {
  const indicator = document.getElementById('ipl-progress-indicator');
  if (!indicator.classList.contains('available')) {
    window.scrollTo(0, 0);
    setTimeout(() => {
      indicator.classList.add('available');
    }, 250);
  }
}

export function changeSeo(object, shop_name, shop_description, title) {
  if (object === null) {
    document.title = shop_name;
    let meta = document.getElementsByTagName('meta');
    meta.description.content = shop_description;
    return;
  }
  if (title) {
    document.title = title + ' | ' + shop_name;
    let meta = document.getElementsByTagName('meta');
    meta.description.content = shop_description;
    return;
  }
  let pageTitle = object.title;
  let seoTitle = object.seo_title;
  let shopName = shop_name;
  let seoDescription = object.seo_description;
  let pageExcerpt = object.excerpt;
  if (seoTitle !== '' && shopName !== '') {
    document.title = seoTitle + ' | ' + shopName;
  } else if (shopName !== '') {
    document.title = pageTitle + ' | ' + shopName;
  }
  let meta = document.getElementsByTagName('meta');
  if (seoDescription !== '') {
    meta.description.content = seoDescription;
  } else {
    meta.description.content = pageExcerpt;
  }
}