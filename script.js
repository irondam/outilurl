let checkBoxesEspaces = document.getElementById("checkboxesEspaces");
let checkBoxesPartners = document.getElementById("checkboxesPartners");
let checkBoxesRS = document.getElementById("checkboxesRS");
let checkBoxesSitesRC = document.getElementById("checkboxesSitesRC");
let checkBoxesNls = document.getElementById("checkboxesNls");

let mediumNls = [
    ["Newsletter RC national","newsletter_rc"],
    ["Newsletter nouveaux enseignants","newsletter_ne"],
    ["Newsletter CanoTech","newsletter_canotech"],
    ["Newsletter national particuliers","newsletter_part"],
    ["Newsletter national établissement","newsletter_etab"],
    ["Newsletter Les Fondamentaux","newsletter_fondamentaux"],
]

let mediumEspaces = [
    ["Espace PPME","espace_ppme_rc"],
    ["Espace Élémentaire","espace_elementaire_rc"],
    ["Bandeau Home","bandeau_home"],
    ["Espace Collège","espace_college_rc"],
    ["Espace Lycée","espace_lycee_rc"],
    ["Espace Maternelle","espace_maternelle_rc"],
    ["Espace Voie Pro","espace_voie_pro_rc"],
    ["Espace Personnel éducatif","espace_personnel_educatif_rc"],
    ["Espace Prof doc","espace_prof_doc_rc"],
    ["Espace Numérique en éducation","espace_num_edu_rc"],
    ["Espace Pratiques pédagogiques","espace_pratiques_peda_rc"],
    ["Espace Coéducation","espace_coeduc_rc"],
    ["Espace Sport","espace_sport_rc"],
    ["Espace ETES","espace_etes_rc"],
    ["Espace École inclusive","espace_ecole_inclusive_rc"],
    ["Espace Bien-être","espace_bien_etre_rc"],
    ["Espace VDLR","espace_vdlr_rc"],
    ["Espace EMI","espace_emi_rc"],
    ["Espace International","espace_int_rc"],
    ["Landing page", "landingpage"],
    ["Actualités", "actualites"],
    ["Popin", "popin"],
    ["Agenda", "agenda"]
]

let mediumPartners = [
    ["Café pédagogique", "cafe_pedagogique"],
    ["MAIF","maif"],
    ["GMF","gmf"],
    ["Mgen","mgen"],
    ["EAFC","eafc"],
    ["INSPE","inspe"],
    ["Dgesco","dgesco"],
    ["ANAÉ","anae"],
    ["Worldskills","worldskills"]
]

let mediumRS = [
    ["Facebook", "facebook"],
    ["Twitter national","twitter_national"],
    ["Instagram","instagram"],
    ["LinkedIn","linkedin"],
    ["Meta sponso","meta_sponso"],
    ["Twitter atelier","twitter_atelier"],
]

let mediumSitesRC = [
    ["Quizinière", "quiziniere"],
    ["CanoTech","canotech"],
    ["Les fondamentaux","les_fondamentaux"],
    ["Einspe","esinspe"],
]

for(x=0 ; x < mediumRS.length ; x++) {
    checkBoxesRS.innerHTML += '<div class="form-check">'+
        '<input class="form-check-input" type="checkbox" value="'+mediumRS[x][1]+'" id="checkbox'+mediumRS[x][1]+'">'+
        '<label class="form-check-label" for="checkbox'+mediumRS[x][1]+'">'+
        mediumRS[x][0]+
        '</label>'+
        '</div>';
}

for(y=0 ; y < mediumPartners.length ; y++) {
    checkBoxesPartners.innerHTML += '<div class="form-check">'+
        '<input class="form-check-input" type="checkbox" value="'+mediumPartners[y][1]+'" id="checkbox'+mediumPartners[y][1]+'">'+
        '<label class="form-check-label" for="checkbox'+mediumPartners[y][1]+'">'+
        mediumPartners[y][0]+
        '</label>'+
        '</div>';
}

for(z=0 ; z < mediumEspaces.length ; z++) {
    checkBoxesEspaces.innerHTML += '<div class="form-check">'+
        '<input class="form-check-input" type="checkbox" value="'+mediumEspaces[z][1]+'" id="checkbox'+mediumEspaces[z][1]+'">'+
        '<label class="form-check-label" for="checkbox'+mediumEspaces[z][1]+'">'+
        mediumEspaces[z][0]+
        '</label>'+
        '</div>';
}

for(a=0 ; a < mediumSitesRC.length ; a++) {
    checkBoxesSitesRC.innerHTML += '<div class="form-check">'+
        '<input class="form-check-input" type="checkbox" value="'+mediumSitesRC[a][1]+'" id="checkbox'+mediumSitesRC[a][1]+'">'+
        '<label class="form-check-label" for="checkbox'+mediumSitesRC[a][1]+'">'+
        mediumSitesRC[a][0]+
        '</label>'+
        '</div>';
}

for(a=0 ; a < mediumNls.length ; a++) {
    checkBoxesNls.innerHTML += '<div class="form-check">'+
        '<input class="form-check-input" type="checkbox" value="'+mediumNls[a][1]+'" id="checkbox'+mediumNls[a][1]+'">'+
        '<label class="form-check-label" for="checkbox'+mediumNls[a][1]+'">'+
        mediumNls[a][0]+
        '</label>'+
        '</div>';
}

let btnSubmit = document.getElementById("btnSubmit");
let results = document.getElementById("results");
let inputURL = document.getElementById("inputURL");
let inputNomDeCampagne = document.getElementById("inputNomDeCampagne");
let allCheckboxes = document.getElementById("allCheckboxes");

allCheckboxes.addEventListener('click',()=> {
    let checkboxes = document.getElementsByClassName("form-check-input");
    for(let i = 0 ; i < checkboxes.length ; i++){
        if(checkboxes[i].value !== "all"){
            if(checkboxes[i].checked === true) {
                checkboxes[i].checked = false;
            } else {
                checkboxes[i].checked = true;
            }
        }
    }
});

btnSubmit.addEventListener('click',()=> {
    let checkboxes = document.getElementsByClassName("form-check-input");
    results.innerHTML = "";
    let nomDeCampagne = slugify(inputNomDeCampagne.value);

    let urlClean = inputURL.value.split("?")[0].replace(/\s+/g, '');;

    let medias = [];

    for(let i = 0 ; i < checkboxes.length ; i++){
        if(checkboxes[i].checked === true){
            medias.push(checkboxes[i].value);
        }
    }

    for(let j = 0 ; j < medias.length ; j++){
        results.innerHTML += urlClean+"?mtm_campaign="+nomDeCampagne+"&mtm_source="+nomDeCampagne+"_"+medias[j]+"&mtm_medium="+medias[j]+"<br><br>";
    }
}
)

function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    str = str.replace(/\s+/g, '_');
    return str;
}




