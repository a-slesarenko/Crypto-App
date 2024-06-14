import React from "react";

// Объявляю функцию которая получает из локалстораджа по параметру key, потом вызываю метод json parse чтобы декодировать из json строки в исходный тип данных,
//  если getItem по параметру key возвращает null, то функция getLocalStorageValue возвращает параметр defaultValue

function getLocalStorageValue(key, defaultValue) {
    const storageValue = localStorage.getItem(key);
    const parsedValue = JSON.parse(storageValue);

    return parsedValue || defaultValue;
}

// Далее создаю хук с параметрами key, defaultValue, в котором UseState создает новое состояние на основе вызова getLocalStorageValue
// далее use Effect записывает в локальное хранилище ключ key со значением newState в формате json, а сам хук возвращает  const [newState, setNewstate]

export const useLocalStorage = (key, defaultValue) => {
    const [newState, setNewstate] = React.useState(getLocalStorageValue(key, defaultValue));

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(newState));
    }, [key, newState]);

    return [newState, setNewstate];
}

