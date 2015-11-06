import LinkIntercepter from './utils/LinkIntercepter.js';
import PageHolder from './utils/PageHolder.js';
import loadPage from './middleware/loadPage.js';
import isSameRoute from './utils/isSameRoute.js';

function bootstrap(router, pageLoader, getContentNode, navigateCb) {
  if (navigateCb) {
    // make every navigation call navigateCb
    const navigate = router.navigate.bind(router);
    router.navigate = function(routeName, routeParams, opts) {
      navigate(routeName, routeParams, opts, navigateCb);
    }
  }

  const curPage = new PageHolder(router, getContentNode);
  const linkIntercepter = new LinkIntercepter(router, curPage);
  const loadPageMiddleware = loadPage(pageLoader, curPage, linkIntercepter);

  return {
    linkIntercepter,
    loadPageMiddleware
  }
}

function changeTitle(state, routes) {
  routes.forEach((route) => {
    const title = route.title;
    if (route.name === state.name) {
      document.title = title;
    }
  });
}

export {
  isSameRoute,
  bootstrap,
  changeTitle
};
