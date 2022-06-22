class Api {
    constructor(options) {

    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-44/cards', {
            headers: {
                authorization: '8eed5c67-fa9a-4d29-83a2-8bfe636f87ce'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }


}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44/cards',
    headers: {
        authorization: '8eed5c67-fa9a-4d29-83a2-8bfe636f87ce',
        'Content-Type': 'application/json'
    }
});