/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getProductsByCategory = ({ products }, category) =>
  products.filter(product => product.category.toLowerCase() === category);
export const getProductsBySearchTerm = ({ products }, searchTerm) => {
  const regex = new RegExp(searchTerm, 'g');
  return products.filter(product => {
    return Boolean(product.name.toLowerCase().match(regex));
  });
};

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
