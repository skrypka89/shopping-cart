export default class Component {
  constructor(componentId, store) {
    this._render_ = this.render.bind(this);
    store.events.subscribe(componentId, this._render_);
  }
}