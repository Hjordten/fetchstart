console.log("jeg er i postKommune")

const pbPostKommune = document.getElementById("pbPostKommune")
const pbPutKommune = document.getElementById("pbPutKommune")

const inpKode = document.getElementById("inpKode")
const inpName = document.getElementById("inpNavn")
const inpHref = document.getElementById("inpHref")
const inpRegionKode = document.getElementById("inpRegionKode")

const KommuneUrl = "http://localhost:8080/kommune"

function getKommune() {
    const kommune = {}
    kommune.kode = inpKode.value
    kommune.navn = inpName.value
    kommune.href = inpHref.value
    kommune.region = {}
    kommune.region.kode = inpRegionKode.value
    console.log(kommune)
    return kommune
}

async function saveKommune() {
    const kommune = getKommune();
    const postUrl = KommuneUrl + "/indsaet";
    const res = await postObjectAsJson(postUrl, kommune, "POST");
    if (res.ok) {
        alert("Kommune saved");
    }
}


async function putKommune() {
    const Kommune = getKommune()
    const putUrl = KommuneUrl + "/opdater/kode/" + Kommune.kode
    console.log(putUrl)
    const res = await postObjectAsJson(putUrl, Kommune, "PUT")
    if (res.ok) {
        alert("Kommune updated")
    }
}

async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}

function actionPostKommune() {
    postKommune()
}

function actionPutKommune() {
    console.log("kalder putKommune")
    putKommune()
}

pbPostKommune.addEventListener('click', saveKommune)
pbPutKommune.addEventListener('click', actionPutKommune)
