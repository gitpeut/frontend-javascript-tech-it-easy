// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

function getStockTotal() {
    // define stockTotal in function scope;
    let stockTotal = 0;

    // use map to add to stockTotal; reduce would have been handier, I guess
    inventory.map(tvType => stockTotal += (tvType.originalStock - tvType.sold));
    // console.log( 'stockTotal' ,stockTotal );

    return (stockTotal);
}

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is,
//als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.

function getSalesGoal() {
    let salesGoal = 0;

    inventory.map(tv => salesGoal += ((tv.originalStock - tv.sold) * tv.price));

    return (salesGoal);
}

// Opdracht 6b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient
// hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

function getGrossEarnings() {
    let grossEarnings = 0;

    inventory.map(tv => grossEarnings += (tv.sold * tv.price));

    return (grossEarnings);

}

function setTotal(divid, header, data) {

    let parentdiv = document.createElement('div');
    parentdiv.id = divid;
    parentdiv.setAttribute('class', 'results');

    // create a text node with the total
    let headline = document.createTextNode(header);
    // create a div element to insert the headline in
    let headdiv = document.createElement('div');
    //add the textnode to the div
    headdiv.appendChild(headline);
    // make sure the header is black
    headdiv.style.color = 'black';

    // create a text node with the data
    let dataline = document.createTextNode(data);
    // create a div element to insert the headline in
    let datadiv = document.createElement('div');
    //add the textnode to the div
    datadiv.appendChild(dataline);


    // add the headline node to the parentdiv
    parentdiv.appendChild(headdiv);
    // add the data node to the body
    parentdiv.appendChild(datadiv);

    document.getElementById('totallist').appendChild(parentdiv);
}

async function showTotals() {
// fill omzet, doelomzet and voorraad with values and display
// the result using setTotal( divname, header, data )

    let omzet = getGrossEarnings();
    // Dank je wel Judith.
    omzet = omzet.toLocaleString("nl-NL", {
        style: 'currency',
        currency: 'EUR'
    });
    setTotal('omzet', 'Omzet', omzet);

    let goal = getSalesGoal();
    goal = goal.toLocaleString("nl-NL", {
        style: 'currency',
        currency: 'EUR'
    });
    setTotal('doelomzet', 'Verkoopdoel', goal);


    let voorraad = getStockTotal();
    setTotal('voorraad', 'Voorraad', voorraad);


}

// make a div for the brand, type and name of tv

function getBTNdiv(tv) {
    let btn = `${tv.brand} ${tv.type} - ${tv.name}`;
    let btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'tvdetails btndetails');
    btnDiv.innerHTML = btn;

    return btnDiv;
}

// make a div for the price of tv

function getPriceDiv(tv) {

    let priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'tvdetails pricedetails');

    let pDiv = document.createElement('div');
//    pDiv.setAttribute('class', 'tvdetails pricedetails');
    pDiv.innerHTML = "\u20ac" + tv.price + ",-";

    let sDiv = document.createElement('div');
    sDiv.setAttribute('class', ' stockdetails');
    sDiv.innerHTML = "voorraad: " + (tv.originalStock - tv.sold) + "/" + tv.originalStock;

    if ((tv.originalStock - tv.sold) <= 0) {
        sDiv.style.color = 'red';
    } else {
        sDiv.style.color = 'green';
    }

    priceDiv.appendChild(pDiv);
    priceDiv.appendChild(sDiv);

    return priceDiv;
}

// make a div for all size of tv in inch and the calculate the size in cm as well.

function getSizeDiv(tv) {

    let sizeDiv = document.createElement('div');
    sizeDiv.setAttribute('class', 'tvdetails');

    let sizeList = '';
    for (let i = 0; i < tv.availableSizes.length; i++) {

        sizeList += tv.availableSizes[i] + ' inch';
        // round inch size (=2.54cm) to cm size
        sizeList += ' (' + Math.floor(tv.availableSizes[i] * 2.54) + ' cm) ';
        // if size is not the last size, append ' | ' to the list
        if (i != (tv.availableSizes.length - 1)) sizeList += '| ';
    }

    sizeDiv.innerHTML = sizeList;

    return sizeDiv;
}


// show a TV in the tvlist div

function displayTV(tv) {
    // find the content node
    const listNode = document.getElementById('tvlist');

    let tvdiv = document.createElement('div');
    tvdiv.setAttribute('class', 'tvdiv');

    // create divs for brand-type-name, the price, and the available sizes
    let btnDiv = getBTNdiv(tv);
    let priceDiv = getPriceDiv(tv);
    let sizeDiv = getSizeDiv(tv);

    // add the divs to the tvdiv created
    tvdiv.appendChild(btnDiv);
    tvdiv.appendChild(priceDiv);
    tvdiv.appendChild(priceDiv);
    tvdiv.appendChild(sizeDiv);

    // add the tvdiv node to the tvlist
    listNode.appendChild(tvdiv);
}

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
function getTvTypes() {
    let tvTypes = [];
    inventory.map(tv => tvTypes.push(tv.type));

    return (tvTypes);
}

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

function getSoldoutTvs() {

    let soldoutTvs = inventory.filter(tv => (!(tv.originalStock - tv.sold)));
    return soldoutTvs

}

//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.

function getAmbilightTvs() {

    let ambilightTvs = inventory.filter(tv => tv.options.ambiLight);
    return ambilightTvs

}

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

function sortLowToHigh() {
    let lowToHigh = [...inventory];

    //console.log(lowToHigh);

    lowToHigh = lowToHigh.sort((one, two) => {
        if (one.price < two.price) return (-1);
        if (one.price > two.price) return (1);
        if (one.price == two.price) return (0);
    });

    return (lowToHigh);
}


// debug function for sort
function displayTypePrice(tvArray, title) {

    console.log(`---------- ${title} ---------------`);
    tvArray.map(tv => console.log(tv.name, tv.price));

}


// remove root Node and childNodes recursively

function delETree(root) {
    while (root.firstChild) delETree(root.firstChild);
    root.remove();
}

function deleteOldTVList() {
    // Get all tvdivs currently in the document
    let alltvs = document.querySelectorAll(".tvdiv");
    // This works as querySelectorAll returns a static NodeList
    for (let i = 0; i < alltvs.length; i++) {
        // kil this tvdiv and all it's children and their offspring
        delETree(alltvs[i]);
    }
}

// event handlers for the buttons

async function showAllTVs() {
    deleteOldTVList();
    inventory.map(tv => displayTV(tv));
}

async function showSortOnPrice() {
    deleteOldTVList();
    sortLowToHigh().map(tv => displayTV(tv));
}

async function showAmbilight() {
    deleteOldTVList();
    getAmbilightTvs().map(tv => displayTV(tv));
}

async function showUitverkocht() {
    deleteOldTVList();
    getSoldoutTvs().map(tv => displayTV(tv));
}

function makeButton(id, eventListener, text) {

    const button = document.createElement('button');
    button.id = id;
    button.setAttribute('class', 'optbutton');
    button.addEventListener('click', eventListener);

    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);


    document.querySelector('header').appendChild(button);
}

async function showButtons() {
    makeButton('alltvs', showAllTVs, "Alle TV's");
    makeButton('sortprijs', showSortOnPrice, "Sorteer op prijs");
    makeButton('ambilight', showAmbilight, "Alleen Ambilight");
    makeButton('uitverkocht', showUitverkocht, "Uitverkocht");

}


// add the title as h1 element, the header, the article and the tvlist

function showMainElements() {

    const title = document.createElement('h1');

    const titleText = document.createTextNode('Tech it easy - Financial dashboard');
    title.appendChild(titleText);

    const header = document.createElement('header');
    const article = document.createElement('article');

    const tvlist = document.createElement('div');
    tvlist.id = 'tvlist';
    article.appendChild(tvlist);

    const totallist = document.createElement('div');
    totallist.id = 'totallist';

    body = document.querySelector('body');
    body.appendChild(title);
    body.appendChild(totallist);
    body.appendChild(header);
    body.appendChild(article);


}

// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
// Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

function main() {
    showMainElements();
    // addButtonEvents();
    showButtons();
    inventory.map(tv => displayTV(tv));
    showTotals();

}

window.onload = main;

