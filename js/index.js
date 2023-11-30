const animalsArr = [
    {
        name: 'Собака',
        image: './img/dog.png',
        link: '#'
    },
    {
        name: 'Кот',
        image: './img/cat.png',
        link: '#'
    },
    {
        name: 'Мышь',
        image: './img/mice.png',
        link: '#'
    },
    {
        name: 'Попугай',
        image: './img/birds.png',
        link: '#'
    },
    {
        name: 'Рыбка',
        image: './img/fish.png',
        link: '#'
    },
]

const animal_list = document.querySelector('.main__animals__list')
for(let i of animalsArr) {
    const a = document.createElement('a')
    a.classList.add('main__animal')
    a.href = i.link
    a.innerHTML = `<div class='main__animal__img'><img src="${i.image}" alt="${i.image}"></div><p>${i.name}</p>`
    animal_list.append(a)
}

