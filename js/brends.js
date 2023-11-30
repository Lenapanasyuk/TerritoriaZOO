const array = [
    {
        id: 0,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 1,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 2,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 3,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 4,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 5,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 6,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 7,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 8,
        src: './img/belcando.png',
        href: '#',
    },
    {
        id: 9,
        src: './img/belcando.png',
        href: '#',
    }
]
const list = document.querySelector('.brand__list')
for (let i of array) {
    const li = document.createElement('li')
    li.classList.add('brend__list__item')
    li.innerHTML = `<a href="${i.href}"><img src="${i.src}" alt="${i.crs}"></a>`
    list.append(li)
}