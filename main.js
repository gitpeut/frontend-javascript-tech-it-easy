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

// for questions 1 - 3

function displayResults(total, caption, className) {
    // find the body node
    const body = document.querySelector('body');

    // create a text node with the total
    let stockText = document.createTextNode(caption + total);

    // create a h1 element to insert the text node in,
    // make sure it gets class className, in CSS this gets colors, etc.
    let stockCounter = document.createElement('div');
    stockCounter.setAttribute('class', className);

    // add the text node to the h1 node
    stockCounter.appendChild(stockText);

    // add the h1 node to the body
    body.appendChild(stockCounter);
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

    let pDiv = document.createElement( 'div' );
//    pDiv.setAttribute('class', 'tvdetails pricedetails');
    pDiv.innerHTML = "\u20ac" + tv.price + ",-";

    let sDiv = document.createElement( 'div');
    sDiv.setAttribute('class', ' stockdetails');
    sDiv.innerHTML = "voorraad: " + ( tv.originalStock - tv.sold ) + "/" + tv.originalStock  ;

    if ( ( tv.originalStock - tv.sold ) <= 0 ){
        sDiv.style.color = 'red';
    }else{
        sDiv.style.color = 'green';
    }

    priceDiv.appendChild( pDiv );
    priceDiv.appendChild( sDiv );

    return priceDiv;
}

// make a div for all size of tv in inch and the calculate the size in cm as well.

function getSizeDiv(tv) {

    let sizeDiv = document.createElement('div');
    sizeDiv.setAttribute('class', 'tvdetails');

    let sizeList = '';
    for (let i = 0; i < tv.availableSizes.length; i++) {

        sizeList += tv.availableSizes[i] + ' inch';
        // round inch size to cm size
        sizeList += ' (' + Math.floor(tv.availableSizes[i] * 2.54) + ' cm) ';
        // if size is not the last size, append ' | ' to the list
        if (i != (tv.availableSizes.length - 1)) sizeList += '| ';
    }

    sizeDiv.innerHTML = sizeList;

    return sizeDiv;
}


// show a TV in the article div

function displayTV(tv) {
    // find the content node
    const listNode = document.querySelector('article');

    let tvdiv = document.createElement('div');
    tvdiv.setAttribute('class', 'tvdiv');

    // create divs for brand-type-name, the price, and the available sizes
    let btnDiv = getBTNdiv(tv);
    let priceDiv = getPriceDiv(tv);
    let sizeDiv = getSizeDiv(tv);

    // add the divs to the tvdiv created
    tvdiv.appendChild(btnDiv);
    tvdiv.appendChild(priceDiv);
    tvdiv.appendChild(sizeDiv);

    // add the tvdiv node to the body
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

    console.log(lowToHigh);

    lowToHigh = lowToHigh.sort((one, two) => {
        if (one.price < two.price) return (-1);
        if (one.price > two.price) return (1);
        if (one.price == two.price) return (0);
    });

//    displayTypePrice( lowToHigh ,'sorted');
//    displayTypePrice( inventory ,'original');

    return (lowToHigh);
}


// debug function for sort
function displayTypePrice(tvArray, title) {

    console.log(`---------- ${title} ---------------`);
    tvArray.map(tv => console.log(tv.name, tv.price));

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

function showSortOnPrice() {
    deleteOldTVList();
    sortLowToHigh().map(tv => displayTV(tv));
}

function showAmbilight() {
    deleteOldTVList();
    getAmbilightTvs().map(tv => displayTV(tv));
}

function showUitverkocht() {
    deleteOldTVList();
    getSoldoutTvs().map(tv => displayTV(tv));
}

function addButtonEvents() {
    document.getElementById("sortprijs").addEventListener('click', showSortOnPrice);
    document.getElementById("ambilight").addEventListener('click', showAmbilight);
    document.getElementById("uitverkocht").addEventListener('click', showUitverkocht);
}


// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
// Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

function main() {
    // displayResults( getStockTotal(), "TV's in stock ", "stocktext"  );
    // displayResults( getGrossEarnings(), "Sales until now \u20ac ", "salestext"  );
    // displayResults( getSalesGoal(), "Sales to be done \u20ac ", "salestext"  );
    //
    // displayResults(  `type ${ inventory[0].type } `, `name  ${ inventory[0].name} `, "tvtext" );
    // displayResults(  `type ${ inventory[1].type } `, `name  ${ inventory[1].name} `, "tvtext" );
    addButtonEvents();
    inventory.map(tv => displayTV(tv));

}

window.onload = main;