export default (req, res) => {
   
    const products = [
        {id: 1, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg', nombre: 'Focaccia', precio: '2.500'},
        {id: 2, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/random-quote-machine.png', nombre: 'Ciabattas', precio: '1.000'},
        {id: 3, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/calc.png', nombre: 'Pan Brioche de miel /Jala', precio: '1.600'},
        {id: 4, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/map.jpg', nombre: 'Bagels', precio: '3.000'},
        {id: 5, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/wiki.png', nombre: 'Pan Babka de chocolate', precio: '3.500'},
        {id: 6, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tic-tac-toe.png', nombre: 'Pan de masa madre Enriquesido con azucar', precio: '3.500'},
        {id: 7, imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tic-tac-toe.png', nombre: 'Pan de a peso de bodega', precio: '1.000'}
    ];

    res.statusCode = 200
    res.json(products)
  }