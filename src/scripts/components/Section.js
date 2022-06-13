export default class Section {
    constructor({items, renderer}, cardTemplate) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._cardTemplate = document.querySelector(cardTemplate);
    }

    renderItems() {
        this._renderedItems.forEach((item) => {this._renderer(item);});
    }

    addItem(item) {
        this._cardTemplate.append(item);
    }

    addNewItem(newItem) {
        this._cardTemplate.prepend(newItem);
    }
}