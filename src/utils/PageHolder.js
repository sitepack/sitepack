export default class PageHolder {
  constructor(router, getContentNode) {
    this.router = router;
    this.getContentNode = getContentNode;
  }
  render(toRouteState, fromRouteState, linkIntercepter) {
    const htmlOrElement = this.page.render(
      toRouteState,
      fromRouteState,
      linkIntercepter,
      this.router
    );

    if (htmlOrElement) {
      const contentNode = this.getContentNode();
      const el = contentNode.cloneNode(true);

      if (typeof htmlOrElement === 'string') {
        el.innerHTML = htmlOrElement;
      } else {
        el.innerHTML = '';
        el.appendChild(htmlOrElement);
      }

      contentNode.parentNode.replaceChild(el, contentNode);
    }
  }
};
