//Component class is used for the rendering of changed DOM elements
export default class Component {
  constructor(componentsId, store) {
    // @ts-ignore
    this._render_ = this.render.bind(this);
    store.events.subscribe(componentsId, this._render_);
  }
}