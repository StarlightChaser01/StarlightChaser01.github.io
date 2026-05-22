// ============================================
// Menu de hamburger, olha que nome engraçado
// alias vc sabia que o getelementbyid é bem 
// parecido com kotlin? legal ne
// ============================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // fechar
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// Lista de itens de lixo
// ============================================
// Array com uns itens de exemplo ai, e dá pra colocar imagem e ID e descrição e nome
const eWasteItems = [
    {
        id: 1,
        name: "Telefone Celular",
        description: "Remova o chip (SIM card) e o cartão de memória. Apague os dados. Eles podem ser entregues em urnas de coleta de operadoras de telefonia ou lojas de eletrônicos. Celulares também contém uma alta quantidade de metais valiosos, como ouro e prata reciclaveis, então não jogue fora no lixo! Leve para reciclagem certificada.",
        image: "fotos/cellphone.jpg"
    },
    {
        id: 2,
        name: "Notebook",
        description: "Remova a bateria, o HD e a memória RAM. Formate o aparelho, e descarte o aparelho em pontos de coleta. Alguns componentes podem ser reutilizados, como a memória RAM, então se você tiver um computador com especificações semelhantes, não se esqueça que a reutilização é sempre a melhor opção.",
        image: "fotos/notebook.jpg"
    },
    {
        id: 3,
        name: "Monitor",
        description: "Os monitores antigos de tubo (CRT) contêm grande quantidade de chumbo e fósforo e exigem muito cuidado. Leve a Ecopontos municipais ou empresas de reciclagem técnica. Não quebre a tela!",
        image: "fotos/monitor.webp"
    },
    {
        id: 4,
        name: "Smart Watch",
        description: "Desconecte da sua conta pessoal, limpe os dados e descarte em coletores de pequenos portáteis. As pulseiras de borracha ou metal devem ser descartadas junto com o aparelho se não puderem ser reaproveitadas.",
        image: "fotos/watcg.webp"
    },
    {
        id: 5,
        name: "Impressora",
        description: "Mais importante de tudo: REMOVA OS CARTUCHOS DE TINTA! Eles podem vazar e causar danos a saúde! Após isso, leve em pontos de coleta de ecoponto eletrônico de grande porte.",
        image: "fotos/impressora.jpeg"
    },
    {
        id: 6,
        name: "Carregador",
        description: "Carregadores podem serem descartados em pontos de coleta, da mesma forma que pilhas ou baterias.",
        image: "fotos/carrega.webp"
    }
    ,
    {
        id: 7,
        name: "Pilhas/Baterias",
        description: "Pilhas e baterias são extremamente perigosas e tóxicas, podendo causar riscos não só a saúde mas também riscos de incêndio. O descarte apropriado de pilhas e baterias é extremamente importante.",
        image: "fotos/dura.webp"
    }
    ,
    {
        id: 8,
        name: "Baterias Portáteis/Power Banks",
        description: "Baterias são extremamente tóxicas e inflamáveis mesmo sem carga, e caso forem esmagadas em um compactador de lixo, podem acabar causando in incêndio. Tome cuidado, e descarte corretamente em pontos de coleta.",
        image: "fotos/powerbanco.jpeg"
    }
    ,
    {
        id: 9,
        name: "Fios/Cabos",
        description: "Fios e cabos possuem uma quantidade alta de plástico mas mais importante, cobre que pode acabar sendo revendido ou reutilizado. Entregue para cooperadores, ou leve a reciclagem.",
        image: "fotos/cabo.jpg"
    }
    ,
    {
        id: 10,
        name: "Caixas de Som Portáteis",
        description: "Nunca tente abrir para retirar a bateria se for fixo, entregue em pontos de coleta.",
        image: "fotos/som.jpg"
    }
    ,
    {
        id: 11,
        name: "Console de videogame/Playstation/Xbox/Nintendo",
        description: "Se ainda funcionarem, considere a doação. Se estiverem estragados, fabricantes como a Sony e a Microsoft possuem canais de recebimento, ou você pode deixá-los em postos de coleta de TI.",
        image: "fotos/xbox.png"
    }
    ,
    {
        id: 12,
        name: "Controles/Controles de videogame",
        description: "Retire a bateria, e entregue no ponto de coleta adequado. Se ainda funcionarem, considere a doação também!",
        image: "fotos/Controle.jpg"
    }
    ,
    {
        id: 13,
        name: "Fones de Ouvido/ Fones de ouvido bluetooth",
        description: "Fones de ouvido com fio podem serem descartados da mesma forma que fios e cabos, entregando para cooperadores ou pontos de coleta. Fones bluetooth possuem baterias minúsculas em ambos os lados, essas podem causar os mesmos riscos de sáude que baterias, então o correto é entregar nos mesmos pontos de coleta de baterias e pilhas. Fones grandes podem serem reciclados e possuem metais preciosos.",
        image: "fotos/Fone.webp"
    }
    ,
    {
        id: 14,
        name: "Câmeras Fotográficas Digitais",
        description: "Câmeras fotográficas digitais possuem uma quantidade alta de metais preciosos, se a venda em um centro de reciclagem não for possivel, retire a bateria e descarte de acordo, e entregue o corpo da câmera para o e-waste de portáteis.",
        image: "fotos/tripleT.jpg"
    }
    ,
    {
        id: 15,
        name: "Modems/Roteadores",
        description: "Se o aparelho for pessoal, remova as antenas rosqueveis (se tiver), e leve a um ponto de reciclagem se possível, pois possuem metais e componentes complexos. Se não for pessoal, ele deve ser entregue de volta para a empresa de TI responsável. Se não, ",
        image: "fotos/Modem.webp"
    }
    ,
    {
        id: 16,
        name: "Microondas",
        description: "Microondas possuem uma quantidade alta de metais e componentes complexos como o magnetron e o transformador, então entregar a um ponto de reciclagem é a melhor opção. Caso contrário, descartar nos pontos de coleta eletrônicos de grande porte.",
        image: "fotos/Micro.webp"
    }
    ,
    {
        id: 17,
        name: "Detector de fumaça",
        description: "Alguns detectores de fumaça possuem baterias que precisam ser descartadas corretamente (Aquelas baterisa pequenas de lítio em formato de moeda) e além disso, alguns possuem componentes radioativos que devem ser descartados adequadamente para evitar impactos ambientais e riscos a saúde.",
        image: "fotos/Detec.webp"
    }
    ,
    {
        id: 18,
        name: "Secadores de Cabelo / Chapinhas",
        description: "São fáceis de reciclar e contém resistências e plásticos que muitas vezes são reutilizáveis.",
        image: "fotos/Sec.webp"
    }
    ,
    {
        id: 19,
        name: "Lâmpadas fluorescentes",
        description: "Quebre o vidro da lâmpada e descarte os pedaços em um local seguro, pois podem machucar alguém! Após isso, descarte normalmente.",
        image: "fotos/LampadaLed.webp"
    }
    ,
    {
        id: 20,
        name: "Cartões de crédito/débito antigos",
        description: "Sim! Esses são eletrônicos também, pois possuem chips e componentes eletrônicos. Garanta que os dados foram apagados, que o cartão não esteja mais ativo, corte em vários pedaços pequenos para que ele não possa ser reutilizado, e descarte em pontos de coleta de pequenos portáteis ou baterias, pois possuem uma quantidade alta de plástico e metais preciosos.",
        image: "fotos/CartaoCred.jpg"
    }
];

// realmente fazer as listas aparecerem na tela, e colocar a descrição e a imagem e o nome e tudo mais
function renderItems(items) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <div class="item-header" onclick="toggleDropdown(${item.id})">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <h3 class="item-title">${item.name}</h3>
                <span class="toggle-icon">▼</span>
            </div>
            <div class="item-dropdown" id="dropdown-${item.id}">
                <p class="item-description">${item.description}</p>
            </div>
        `;
        container.appendChild(itemElement);
    });
}

function toggleDropdown(itemId) {
    const dropdown = document.getElementById(`dropdown-${itemId}`);
    dropdown.classList.toggle('active');
}

// Pesquisar itens, dirty typing incluso tbm
function filterItems(searchText) {
    const filtered = eWasteItems.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase())
    );
    renderItems(filtered);
}

// Event listeners
document.getElementById('search-bar').addEventListener('input', (e) => {
    filterItems(e.target.value);
});

// Initial render
renderItems(eWasteItems);