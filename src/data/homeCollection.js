import Client, {Config} from 'shopify-buy';
import store from '../store';
import * as actions from '../actions/actionCreators';

const config = new Config({
  storefrontAccessToken: '220658e0dee403d784ffef24d20241cd',
  domain: 'custom-storefront.myshopify.com'
});

const client = new Client(config);

//function httpGetAsync(theUrl)
//{
//  var xmlHttp = new XMLHttpRequest();
//  xmlHttp.onreadystatechange = function() {
//    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//      console.log(xmlHttp.responseText);
//  }
//  xmlHttp.open("GET", theUrl, true); // true for asynchronous
//  xmlHttp.send(null);
//}
//httpGetAsync('https://mephistoshoesnorthwest.com/pages/technology');

client.fetchCollectionWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNjUyNzA0Nw==").then((res) => {
  store.dispatch(actions.getHomeCollection(res));
});