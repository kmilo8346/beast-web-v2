export default (req, res) => {
   
    const storeData = {
        imageUrl: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/random-quote-machine.png',
        name: 'Pan Di Lucas',
        descripcion: 'Descripcion de la tienda bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
        timpoentrega: 'Entre 30 minutos y 1 hora',
        horario: 'Hoy de 09:00 am a 8:30 pm',
        horarios: [
            {dia: 'Lunes', horario: '09:00am - 08:30pm'},
            {dia: 'Martes', horario: '09:00am - 08:30pm'},
            {dia: 'Miercoles', horario: '09:00am - 08:30pm'},
            {dia: 'Jueves', horario: '09:00am - 08:30pm'},
            {dia: 'Viernes', horario: '09:00am - 08:30pm'},
            {dia: 'Sabado', horario: '09:00am - 08:30pm'},
            {dia: 'Domingo', horario: '09:00am - 08:30pm'},
        ]
    };

    res.statusCode = 200;
    res.json(storeData)
  }