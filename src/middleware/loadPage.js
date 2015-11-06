const pageCache = {};

function removeCss(filename){
  const links = document.getElementsByTagName('link');
  for (let i = links.length ; i >= 0 ; i--) {
    const link = links[i];
    if (link && link.getAttribute('href')
      && link.getAttribute('href').indexOf(filename) != -1) {

      link.parentNode.removeChild(link);
    }
  }
}

function hookCanDeactivate(page) {
  const { canDeactivate } = page;
  page.canDeactivate = (toRoute, fromRoute, done) => {
    // if target page is not loaded, return true to load the page.
    if (!pageCache[toRoute.name]) {
      return true;
    }

    // trigger original canDeactivate when navigate again.
    return canDeactivate(toRoute, fromRoute, done);
  }
}

export default function loadPage(pageLoader, curPage, linkIntercepter) {
  return function(toRouteState, fromRouteState) {
    const page = pageCache[toRouteState.name];
    if (page) {
      curPage.page = page;
      curPage.render(toRouteState, fromRouteState, linkIntercepter);

      if (page.canDeactivate) {
        hookCanDeactivate(page);
        this.router.registerComponent(toRouteState.name, page);
      }

      return true;
    }

    const initPage = (page) => {
      // remove pre-rendered style.
      if (!fromRouteState) {
        removeCss(`/assets/${toRouteState.name}.css`);
      }

      pageCache[toRouteState.name] = page;
      curPage.page = page;

      if (page.canActivate) {
        this.router.canActivate(toRouteState.name, page.canActivate);
      }

      // cancel and navigate again, this will trigger page.canActivate() on new page.
      // and also trigger page.canDeactivate() on old page.
      this.cancel();
      const replace = fromRouteState? false: true;
      this.router.navigate(toRouteState.name, {}, {replace}, linkIntercepter.cb);
    }

    const pageLoaded = pageLoader[toRouteState.name];
    if (typeof pageLoaded === 'function') {
      // lazy load module
      pageLoaded(initPage);
    } else {
      initPage(pageLoaded);
    }

  };
}
