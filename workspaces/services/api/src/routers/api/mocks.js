import { Router } from 'express'

const mocksRouter = new Router()

mocksRouter.get('/categories', async (req, res) => {
  res.send(categories)
})

mocksRouter.get('/products', async (req, res) => {
  res.send(products)
})

mocksRouter.get('/businesses', async (req, res) => {
  res.send(businesses)
})

export default mocksRouter

const categories = [
  {
    name: 'Hair',
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/My-project.png',
    id: 1,
  },
  {
    name: 'Brows & Lashes',
    image:
      'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/WhatsApp_Image_2023-05-24_at_7.34.37_PM-removebg-preview.png',
    id: 2,
  },
  {
    name: 'Nails',
    image:
      'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/beauty-salon-vecto-free-icon-set-24.png',
    id: 3,
  },
  {
    name: 'Skin',
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/My_project-1_2_256x256.png',
    id: 4,
  },
  {
    name: 'Health',
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/1350095.png',
    id: 5,
  },
]
const businesses = [
  {
    name: 'BJØRGVIN HÅRSTUDIO',
    address: 'Våkleiven 133, 5155 Bergen',
    priceRange: 'kr400.00 - kr800.00',
    isOpen: false,
    image:
      'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/bj-rgvin-h-rstudio-51a68300-1540-11ec-a7f4-7d2eceec68bb.jpg',
  },
  {
    name: 'FLOW State',
    address: 'Henrik Ibsens gate, Ruseløkka, Frogner, Oslo, 0255, Norge',
    priceRange: 'kr850.00 - kr3,500.00',
    isOpen: true,
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/flow-state-4-1.jpeg',
  },
  {
    name: 'Frisør 1 Bergen',
    address: '212, Strandgaten, Nordnes, Skuteviken, Bergenhus, Bergen, Vestland, 5004, Norge',
    priceRange: 'kr850.00 - kr3,500.00',
    isOpen: true,
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/frisor-1-bergen-1.jpeg',
  },
  {
    name: 'Barokk Frisørsalong',
    address: '10, Hetlandsgata, Bergeland, Storhaug, Stavanger, Rogaland, 4012, Norway',
    priceRange: 'kr850.00 - kr3,500.00',
    isOpen: true,
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/barokk-folk-4666-520x397.webp',
  },
  {
    name: 'Adam and Eva',
    address:
      '8, Torgallmenningen, Torgalmenningen, Sentrum, Skuteviken, Bergenhus, Bergen, Vestland, 5014, Norway',
    priceRange: 'kr850.00 - kr3,500.00',
    isOpen: true,
    image: 'https://gogetdigitalmenu.com/wp-content/uploads/2023/05/galleriet13-332x397.jpg',
  },
]
const products = [
  {
    id: 1,
    title: 'Shampoo',
    description: 'The best shampoo for oily hair',
    imageUrl:
      'https://www.dove.com/content/dam/unilever/dove/pakistan/pack_shot/hairfall-rescue-conditioner-front-798854-2170937-png.png',
    price: '65 $',
  },
  {
    id: 2,
    title: 'Conditioner',
    description: 'Deep conditioning treatment for all hair types',
    imageUrl:
      'https://www.dove.com/content/dam/unilever/dove/pakistan/pack_shot/hairfall-rescue-conditioner-front-798854-2170937-png.png',
    price: '20 $',
  },
  {
    id: 3,
    title: 'Conditioner',
    description: 'Deep conditioning treatment for all hair types',
    imageUrl:
      'https://www.dove.com/content/dam/unilever/dove/pakistan/pack_shot/hairfall-rescue-conditioner-front-798854-2170937-png.png',
    price: '20 $',
  },
]
