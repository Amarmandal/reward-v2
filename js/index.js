function clickedRadio(x){
    if (x.value=="somedays" || x.value=="everyday" ){
        document.getElementById("smoke").style.display="block";
    }
    else if (x.value == "drinkalcohol"){
        document.getElementById("drink").style.display="block";
    }
    else if (x.value == "comorbid"){
        document.getElementById("specifyComorbid").style.display="block";
    }
    else if (x.value == "homeIso"){
        document.getElementById("hospitalized").style.display="none";
        document.getElementById("dateOfHospitalization").style.display="none";
        document.getElementById("symptoms").style.display="block";
    }
    else if (x.value == "hospitalized"){
        document.getElementById("dateOfHospitalization").style.display="block";
    }
    else if (x.value == "yesSymptoms"){
        document.getElementById("mildSymptoms").style.display="block";
        document.getElementById("severeSymptoms").style.display="block";
    }
    else if (x.value == "yesMedication"){
        document.getElementById("whichMedication").style.display="block";
    }


    else if (x.value == "nosmoke"){
        document.getElementById("smoke").style.display="none"
    }
    else if (x.value == "nodrinkalcohol"){
        document.getElementById("drink").style.display="none";
    }
    else if (x.value == "nocomorbid"){
        document.getElementById("specifyComorbid").style.display="none";
    }
    else if (x.value == "noHomeIso"){
        document.getElementById("hospitalized").style.display="block";
        document.getElementById("symptoms").style.display="none";
        document.getElementById("mildSymptoms").style.display="none";
        document.getElementById("severeSymptoms").style.display="none";
    }
    else if (x.value == "noHospitalized"){
        document.getElementById("dateOfHospitalization").style.display="none";
    }
    else if (x.value == "noSymptoms"){
        document.getElementById("mildSymptoms").style.display="none";
        document.getElementById("severeSymptoms").style.display="none";
    }
    else if (x.value == "noMedication"){
        document.getElementById("whichMedication").style.display="none";
        document.getElementById("allopathicDrug").style.display="none";
        document.getElementById("herbalMed").style.display="none";
        document.getElementById("otherMed").style.display="none";
    }
    else if (x.value == "Allopatic"){
        document.getElementById("allopathicDrug").style.display="block";
        document.getElementById("herbalMed").style.display="none";
        document.getElementById("otherMed").style.display="none";
    }
    else if (x.value == "Herbal"){
        document.getElementById("herbalMed").style.display="block";
        document.getElementById("allopathicDrug").style.display="none";
        document.getElementById("otherMed").style.display="none";
    }
    else if (x.value == "OtherMed"){
        document.getElementById("otherMed").style.display="block";
        document.getElementById("allopathicDrug").style.display="none";
        document.getElementById("herbalMed").style.display="none";
    }
    
}