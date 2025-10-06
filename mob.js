let body = document.querySelector("body");
let Hpart2 = document.querySelector("#Hpart2").cloneNode(true);
let Hpart3 = document.querySelector("#Hpart3").cloneNode(true);

let mobSection = document.createElement("div");
mobSection.className = "mobSection";

let mobHeader = document.createElement("div");
mobHeader.className = "mobHeader";

let imgLogo = document.createElement("img");
imgLogo.src = "pic/LogoMob.png";
imgLogo.id = "LogoMob";

let Hname = document.createElement("div");


let secContacts = document.querySelector("#secContacts").cloneNode(true);
secContacts.className = "sect";

let hContacts = secContacts.querySelector("h2");
hContacts.className = "sectHeader";

hContacts.addEventListener("click", ()=>{
    secContacts.classList.toggle("on")
});


let secSkills = document.querySelector("#secSkills").cloneNode(true);
secSkills.className = "sect";

let hSkills = secSkills.querySelector("h2");
hSkills.className = "sectHeader";

hSkills.addEventListener("click", ()=>{
    secSkills.classList.toggle("on")
});


let secSummary = document.querySelector("#secSummary").cloneNode(true);
secSummary.className = "sect";

let hSummary = secSummary.querySelector("h2 div");
hSummary.className = "sectHeader";

hSummary.addEventListener("click", ()=>{
    secSummary.classList.toggle("on")
});


let secExperience = document.querySelector("#secExperience").cloneNode(true);
secExperience.className = "sect";

let hExperience = secExperience.querySelector("h2 div");
hExperience.className = "sectHeader";

hExperience.addEventListener("click", ()=>{
    secExperience.classList.toggle("on")
});


let secEducation = document.querySelector("#secEducation").cloneNode(true);
secEducation.className = "sect";

let hEducation = secEducation.querySelector("h2 div");
hEducation.className = "sectHeader";

hEducation.addEventListener("click", ()=>{
    secEducation.classList.toggle("on")
});


let footer = document.createElement("footer");
footer.className = "footer";


Hname.append(Hpart2);
mobHeader.append(Hname);
mobSection.append(
    mobHeader, Hpart3,
    hContacts, secContacts,
    hSkills, secSkills,
    hSummary, secSummary,
    hExperience, secExperience,
    hEducation, secEducation,
    footer
);

body.append(mobSection);

