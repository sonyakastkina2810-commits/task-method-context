import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,

    // Сохраняем одну и ту же функцию, чтобы on и off получали одинаковую ссылку
    handler() {
        this.count += 1;
    },

    subscribe() {
        EventEmitter.on('click', this.handler);
    },

    unsubscribe() {
        EventEmitter.off('click', this.handler);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },

    second() {
        // тело не важно, тесты проверяют только аргументы
    },
};