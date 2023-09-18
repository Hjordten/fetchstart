//Vi skal have en variabel, som indeholder URL'en vi skal hente data fra
const kommuneUrl = 'https://api.dataforsyningen.dk/kommuner';

//Vi skal have en variabel, som peger på vores dropdown
const ddKommuner = document.querySelector('#ddkommuner')

//Vi skal have en variabel, som peger på vores button
const btnFetchKommuner = document.querySelector('#btnFetchkommuner')

//Vi skal kunne interagere med vores variable, som peger på button og reagere ved bestemt input
btnFetchKommuner.addEventListener('click', loadData)

//Vi skal kunne interegere med vores variable, som peger på dropdown ved bestemt input
ddKommuner.addEventListener('change',openWebsite)

//Vi laver en map som variabel, hvor vi mider href og navn fra kommune ind i
//HINT: Vi behøver ikke at sige det skal være et map endnu
let kommuneNavneAndHrefList;

//Vi skal have en function der smider href og navn ind i vores map
function mapNameAndHref(kommuner) {
    //Vi skal lave vores variabel om til et map, som skal indeholde href og navn på kommuner
    kommuneNavneAndHrefList = kommuner.map(kom => {
        //vi returnerer href og navn i hver deres variabel
        return {
            navn: kom.navn,
            href: kom.href
        }
    })
}

//Vi skal lave en function, som tilføjer kommunerne til en liste
function addKommunerToList() {
    //Vi skal have fat i vores map og gå igennem listen
    kommuneNavneAndHrefList.forEach(kom => {
        //Vi laver en nyt 'option' HTML element
        const element = document.createElement('option')
        //Vi henter kommunes href og sætter value i vores 'option' element til at være det.
        element.value = kom.href;
        //Vi henter kommunens navn og sætter text content til at være lig det i vores 'option' element
        element.textContent = kom.navn
        // Tilføj det oprettede element til dropdown-listen
        ddKommuner.append(element);
    })
}

//Vi laver en funktion som henter data fra vores api. Den skal være async fordi den fetcher data
//HINT: funktionen kaldes når man trykker på "load data"
async function loadData() {
    //Vi laver en variabel som indeholder alt data hentet fra API
    const res = await fetch(kommuneUrl)
    //Vi laver en variabel hvor vi sætter det hentet data til at være i json format
    const data = await res.json()
    //Nu skal vi kalde en funktion, som kan fjerne unødvendig information fra hver kommune med data hentet fra vores API
    mapNameAndHref(data)
    //Vi skal kalde en funktion, som tilføjer kommunerne til vores liste
    addKommunerToList();
}


function openWebsite() {
    const selectedValue = this.value;
    window.open(selectedValue, '_blank');
}


