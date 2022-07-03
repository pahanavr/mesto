export default class Section {
    constructor({renderer}, cardTemplate) {
        this._renderer = renderer;
        this._cardTemplate = document.querySelector(cardTemplate);
    }

    renderItems(items) {
        items.forEach((item) => {this._renderer(item);});
    }

    addItem(item) {
        this._cardTemplate.append(item);
    }

    addNewItem(newItem) {
        this._cardTemplate.prepend(newItem);
    }
}