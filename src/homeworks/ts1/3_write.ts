/* TYPES */
type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

/* HELPERS */

const getRandomId = (): string => Math.random().toString(36).substring(7);

const getRandomPrice = (): number => Math.floor(Math.random() * 100);

const getRandomBoolean = (): boolean => Math.random() < 0.5;

export const createRandomCategory = (): Category => {
  const id = getRandomId(); // генерируем случайный id
  const name = `Category ${id}`; // задаем имя
  const photo = getRandomBoolean() ? 'photo_' + id + '.jpg' : undefined; // задаем фото (случайный выбор)

  return { id, name, photo }; // возвращаем объект Category
};

export function generateDescription(): string {
  const length: number = Math.floor(Math.random() * (200 - 100 + 1) + 100);
  let description = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

  for (let i = 0; i < length; i++) {
    description += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return description;
}

/* MAIN FUNCTIONS */
export const createRandomProduct = (createdAt: string): Product => {
  const id = getRandomId(); // генерируем случайный id
  const name = 'Product ' + id; // задаем имя
  const price = getRandomPrice(); // задаем цену
  const category: Category = createRandomCategory(); // задаем категорию
  const photo = getRandomBoolean() ? `photo_${id}.jpg` : undefined; // задаем фото (случайный выбор)
  const desc = generateDescription(); // задаем описание
  const oldPrice = getRandomPrice(); // задаем старую цену

  return { id, name, createdAt, price, category, photo, desc, oldPrice }; // возвращаем объект Product
};

export const createRandomOperation = (createdAt: string): Operation => {
  const id = getRandomId(); // генерируем случайный id
  const name = 'Operation ' + id; // задаем имя
  const amount = getRandomPrice(); // задаем сумму операции
  const category: Category = createRandomCategory(); // задаем категорию
  const isCost = getRandomBoolean(); // генерируем случайное значение для типа операции
  const type = isCost ? 'Cost' : 'Profit';
  const desc = generateDescription(); // задаем описание
  return { id, name, createdAt, amount, category, type, desc }; // возвращаем объект Operation
};
