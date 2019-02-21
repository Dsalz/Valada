new Glide('.glide').mount();
// new Glide('.glide-rooms').mount();
new Glide('.glide-testimonials').mount();
// new Glide('.glide-news').mount();

let currShownPerkNo = 2;

const showPerkImg = (id) => {
    document.querySelector('.perks-show').classList.remove('perks-show');
    document.getElementById(id).classList.add('perks-show');
}

const toggleShownPerkImages = () => {
    showPerkImg(`perk-${currShownPerkNo}`);
    currShownPerkNo = currShownPerkNo === 3 ? 1 : currShownPerkNo + 1;
}

let perkInterval;

const startPerkShowcase = () => {
    document.querySelector('#perk-1').classList.add('perks-show');
    perkInterval = setInterval(toggleShownPerkImages, 4000);
}

const stopPerkShowcase = () => {
    clearInterval(perkInterval);
    document.querySelector('.perks-show').classList.remove('perks-show');
}

startPerkShowcase();

const allPerkImages = document.getElementsByClassName('perk-item');

for(let perkImage of allPerkImages){
    perkImage.addEventListener('mouseover', stopPerkShowcase);
    perkImage.addEventListener('mouseout', startPerkShowcase);
}

setTimeout( () => document.querySelector('.eapps-widget-toolbar').nextSibling.style.display = 'none' , 4000);

