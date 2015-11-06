import isSameRoute from './isSameRoute.js';

function isSameOrgin(href) {
  const origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
  return href && href.indexOf(origin) === 0;
}

function genListener(name, linkIntercepter) {
  const { router, curPage } = linkIntercepter;
  return (e) => {
    // make sure user click left button without holding ctrl or cmd key
    if (!(e.ctrlKey || event.metaKey) && e.button === 0) {
      e.preventDefault();

      // if navigate to same route, just render again.
      const curRouteState = router.getState();
      if (name === curRouteState.name) {
        curPage.render(curRouteState, curRouteState, linkIntercepter);
      } else {
        router.navigate(name, {}, {});
      }
    }
  };
}

export default class LinkIntercepter {
  constructor(router, curPage) {
    this.router = router;
    this.listeners = {};
    this.curPage = curPage;
  }
  intercept(link) {
    if (!isSameOrgin(link.href)) {
      return;
    }

    const toRouteState = this.router.matchUrl(link.href);
    if (!toRouteState) {
      const location = window.location.toString();
      const lastPart = location.substring(location.lastIndexOf('/') + 1);
      // filter out links like 'download.doc' or 'cat.jpg'
      if (lastPart.indexOf('.') === -1) {
        console.warn('Warning: Link not match any route', link);
      }
    } else {
      const { name } = toRouteState;
      if (!this.listeners[name]) {
        this.listeners[name] = genListener(name, this);
      }

      link.removeEventListener('click', this.listeners[name]);
      link.addEventListener('click', this.listeners[name]);
    }
  }
  interceptAll(domNode) {
    const links = domNode.querySelectorAll('a');
    for (var i = 0 ; i < links.length ; i += 1) {
      this.intercept(links[i]);
    }
  }
}
