let map = "";
let sortedBy = "";
let hiLoValue = true;
let hiLoText = "";
let sort1Value = "";
let sort2Value = "";

function mapPick(str) {
    // controls the html side
    document.getElementById("DUST2").style.backgroundColor = '';
    document.getElementById("DUST").style.backgroundColor = '';
    document.getElementById("INFERNO").style.backgroundColor = '';
    document.getElementById("CACHE").style.backgroundColor = '';
    document.getElementById("MIRAGE").style.backgroundColor = '';
    document.getElementById("OVERPASS").style.backgroundColor = '';
    document.getElementById("TRAIN").style.backgroundColor = '';
    document.getElementById("COBBLESTONE").style.backgroundColor = '';
    document.getElementById("NUKE").style.backgroundColor = '';
    document.getElementById("AUSTRIA").style.backgroundColor = '';
    document.getElementById(str).style.backgroundColor = "#dcaa37";

    if(str == "DUST2") { map = "de_dust2";}
    if(str == "DUST") { map = "de_dust";}
    if(str == "INFERNO") { map = "de_inferno";}
    if(str == "CACHE") { map = "de_cache";}
    if(str == "MIRAGE") { map = "de_mirage";}
    if(str == "OVERPASS") { map = "de_overpass";}
    if(str == "TRAIN") { map = "de_train";}
    if(str == "COBBLESTONE") { map = "de_cbble";}
    if(str == "NUKE") { map = "de_nuke";}
    if(str == "AUSTRIA") { map = "de_austria";}
}

function sortPick(str) {
    document.getElementById("sortByText").innerHTML = str;
    document.getElementById("sortByText").style.backgroundColor = "#dcaa37";
    document.getElementById("sortByText").style.color = "white";

    if(str == "WEAPON NAME") { sortedBy = "weaponName";}
    if(str == "ARMOR DAMAGE") { sortedBy = "armorDamage";}
    if(str == "HP DAMAGE") { sortedBy = "hpDamage";}
    if(str == "HITBOX HIT") { sortedBy = "hitbox";}
    if(str == "TOTAL DAMAGE") { sortedBy = "totalDamage";}
}

function sortHiLo(str) {
    document.getElementById("HiLoText").innerHTML = str;
    document.getElementById("HiLoText").style.backgroundColor = "#dcaa37";
    document.getElementById("HiLoText").style.color = "white";

    if(str == "HIGHEST") { 
        hiLoValue = true;
        hiLoText = "HIGHEST";
    }
    if(str == "LOWEST") { 
        hiLoValue = false;
        hiLoText = "LOWEST"
    }
}

function pickSort1(str) {
    document.getElementById("sort1").innerHTML = str;
    document.getElementById("sort1").style.backgroundColor = "#dcaa37";
    document.getElementById("sort1").style.color = "white";

    if(str == "BUBBLE SORT") { sort1Value = "bubbleSort";}
    if(str == "MERGE SORT") { sort1Value = "mergeSort";}
    if(str == "INSERTION SORT") { sort1Value = "insertionSort";}
    if(str == "SELECTION SORT") { sort1Value = "selectionSort";}
    if(str == "QUICK SORT") { sort1Value = "quickSort";}
    if(str == "HEAP SORT") { sort1Value = "heapSort";}
    if(str == "SHELL SORT") { sort1Value = "shellSort";}
}

function pickSort2(str) {
    document.getElementById("sort2").innerHTML = str;
    document.getElementById("sort2").style.backgroundColor = "#dcaa37";
    document.getElementById("sort2").style.color = "white";

    if(str == "BUBBLE SORT") { sort2Value = "bubbleSort";}
    if(str == "MERGE SORT") { sort2Value = "mergeSort";}
    if(str == "INSERTION SORT") { sort2Value = "insertionSort";}
    if(str == "SELECTION SORT") { sort2Value = "selectionSort";}
    if(str == "QUICK SORT") { sort2Value = "quickSort";}
    if(str == "HEAP SORT") { sort2Value = "heapSort";}
    if(str == "SHELL SORT") { sort2Value = "shellSort";}
}

function counterstrikeGO() {
    //changes the image to the str
    //document.getElementById("gunimg").src = str;
    const damageOccurrences = parseData(map);
    const damageOccurrenceEntries = new DamageOccurrenceEntries(damageOccurrences);
    const sortedData = damageOccurrenceEntries.outputSortData(sortedBy, sort1Value, sort2Value);
    const sortedList = sortedData.sortedList;

    let selectedDamageOccurance;

    if (hiLoValue) {
        selectedDamageOccurance = sortedList[0];
    } else {
        selectedDamageOccurance = sortedList[sortedList.length()-1];
    }

    // displays what if it is sorted by highest or lowest?
    document.getElementById("highorLow").innerHTML = hiLoValue;

    document.getElementById("mapData").innerHTML = map;
    // displays what it is sorted by
    document.getElementById("dataText").innerHTML = sortedBy;

    // displays the gun name that goes with the data shown
    document.getElementById("gunName").innerHTML = selectedDamageOccurance.weaponName;

    // displays what sorts were picked
    document.getElementById("sort1Text").innerHTML = sort1Value;
    document.getElementById("sort2Text").innerHTML = sort2Value;

    // displays how long each sort took
    document.getElementById("timeText1").innerHTML = sortedData.sort1Data.duration;
    document.getElementById("timeText2").innerHTML = sortedData.sort2Data.duration;

    document.getElementById("gun").style.visibility = "visible";
}