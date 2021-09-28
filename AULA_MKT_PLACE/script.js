const items = [
    {
        id: 0,
        nome: 'camisa',
        img: 'cam1.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'calça',
        img: 'cam1.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'tenis',
        img: 'cam1.jpg',
        quantidade: 0
    },

]
    inicializarLoja = () => {
        var containerProtudos = document.getElementById('produtos');
        items.map((val)=>{
            console.log(val.nome);
        })
    }