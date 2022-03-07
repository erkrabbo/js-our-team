const ourTeam = [
    member1 = {
        name : 'Wayne Bennet',
        role : 'Founder & CEO',
        imageUrl : 'img/wayne-barnett-founder-ceo.jpg' 
    },
    member2 = {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        imageUrl : 'img/angela-caroll-chief-editor.jpg' 
    },
    member3 = {
        name : 'Walter Gordon',
        role : 'Office Manager',
        imageUrl : 'img/walter-gordon-office-manager.jpg' 
    },
    member4 = {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        imageUrl : 'img/angela-lopez-social-media-manager.jpg' 
    },
    member5 = {
        name : 'Scott Estrada',
        role : 'Developer',
        imageUrl : 'img/scott-estrada-developer.jpg' 
    },
    member6 = {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        imageUrl : 'img/barbara-ramos-graphic-designer.jpg' 
    },
]

const teamContainer = document.querySelector('.team-container');

appendTeamCards();

function appendTeamCards(){
    for (let i = 0; i < ourTeam.length; i++){
        const teamCard = document.createElement('div');
        const cardImageContainer = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardText = document.createElement('div');

        teamCard.classList.add('team-card');
        cardImageContainer.classList.add('card-image');
        cardText.classList.add('card-text');

        cardImage.src = ourTeam[i].imageUrl;
        cardImage.alt = ourTeam[i].name;

        cardText.innerHTML = `<h3>${ourTeam[i].name}</h3><p>${ourTeam[i].role}</p>`

        cardImageContainer.append(cardImage);

        teamCard.append(cardImageContainer, cardText);

        teamContainer.append(teamCard);

        console.log(ourTeam[i].name, ourTeam[i].role, ourTeam[i].imageUrl);

        
    }
}