import { gameCardBuilder } from './utils/gameCardsBuilder';

const cards = [
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
  {
    img: {
      src: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      alt: 'Some alt',
    },
    anchor: '#',
    title: 'Title Test',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita consectetur, maxime ullam,
    exercitationem
    neque aliquam, cum eveniet perferendis accusantium doloribus eligendi excepturi! Facere minus magni officiis
    quibusdam iure officia!`,
  },
];

export function createGameCards() {
  const gameList = document.querySelector('.game-list');
  cards.forEach(card => gameList.appendChild(gameCardBuilder(card)));
}
