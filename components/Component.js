export default class Component {
  constructor(componentsId, store) {
    this._render_ = this.render.bind(this);
    store.events.subscribe(componentsId, this._render_);
  }
}