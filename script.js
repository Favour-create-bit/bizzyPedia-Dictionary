
const bizzyPedia = [
    {
        slang: "burti",
        meaning: "Burti is a Nigerian Gen Z slang coined by Nigerian artist Mavo as part of his Busypedia (Bizzylingua) vocabulary. \n It means a great deal of swag and mopption and is used to describe someone with outstanding style, aura, and presence. \n 'she dey feel my Burti'"
    },
    {
        slang: "yami",
        meaning: "Yami is a Nigerian Gen Z slang derived from the Yoruba phrase 'omo iya mi,' which literally translates to 'my mother's child.' \n Figuratively, it's used as a term of camaraderie, similar to 'my guy,' 'my bro,' 'my homie,' 'or my day one.' The slang gained popularity through Nigerian artist Zaylevelten."
    },
    {
        slang: "ifatizzy",
        meaning: "Ifatizzy is a Nigerian slang coined by Nigerian artist Mavo that simply means 'if at all' and can be used in a variety of contexts to express uncertainty, possibility or emphasis. \n The term can also be shortened\n ifa - if at all\n Ati - at all"
    }, 
    {
        slang: "nor be lie",
        meaning: "Nor Be Lie is a popular Nigerian Pidgin exepression that is used to affirm a statement or react to something so good or impressive that it's hard to believe. It could also be used as a compliment or hype phrase. \n 'this your new car, nor be lie'"
    },
    {
        slang: "baunffa",
        meaning: "This is a term coined by Wave$tar a fast rising Nigerian artist that stands for 'Boys Are Up No Fit Fall Again.' \n This phrase expresses confidence and success. The phrase is commonly used to celebrate progress, wins. \n To say 'it's only up from here'"
    }
];

let slangEl = document.getElementById("enter");
const resultEl = document.querySelector(".result-paragraph");
const searchBtn = document.querySelector(".search-btn");
const trending = document.querySelectorAll(".chip")

function lookUp() {
    const content = slangEl.value;

    let found = false;
for (let i = 0; i < bizzyPedia.length; i++) {
    if (content === bizzyPedia[i].slang === true) {
        resultEl.textContent = bizzyPedia[i].meaning;
        found = true;
        break;
    }
}
    if (!found) resultEl.textContent = "Slang not found. Try another word!";
}

searchBtn.addEventListener("click", () => lookUp());
for(const trend of trending) {
    trend.addEventListener("click", () => {
        slangEl.value = trend.textContent;
    })
}

