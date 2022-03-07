const ourTeam = [
    {
        name : 'Wayne Bennet',
        role : 'Founder & CEO',
        imageUrl : 'img/wayne-barnett-founder-ceo.jpg' 
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        imageUrl : 'img/angela-caroll-chief-editor.jpg' 
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        imageUrl : 'img/walter-gordon-office-manager.jpg' 
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        imageUrl : 'img/angela-lopez-social-media-manager.jpg' 
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        imageUrl : 'img/scott-estrada-developer.jpg' 
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        imageUrl : 'img/barbara-ramos-graphic-designer.jpg' 
    }
]

const teamContainer = document.querySelector('.team-container');

const newMemberNameInput = document.querySelector('#name');
const newMemberRoleInput = document.querySelector('#role');
const newMemberImageInput = document.querySelector('#image');
const addMemberButton = document.querySelector('#addMemberButton');

appendTeamCards();
newMemberNameInput.addEventListener('input', dataCheck);
newMemberRoleInput.addEventListener('input', dataCheck);
newMemberImageInput.addEventListener('input', dataCheck);
addMemberButton.addEventListener('click', addMember);

function appendTeamCards(){
    teamContainer.innerHTML = '';
    for (let i = 0; i < ourTeam.length; i++){
        //creo tutti gli elementi che dovrò appendere al container gia esistente
        const teamCard = document.createElement('div');
        const cardImageContainer = document.createElement('div');                       
        const cardImage = document.createElement('img');
        const cardText = document.createElement('div');

        //setto le classi necessarie gia presenti nel css
        teamCard.classList.add('team-card');
        cardImageContainer.classList.add('card-image');                                 
        cardText.classList.add('card-text');

        //estrapolo dall'array esistente i dati necessari e li assegno ai relativi elementi della card
        cardImage.src = ourTeam[i].imageUrl;                                
        cardImage.alt = ourTeam[i].name;

        cardText.innerHTML = `<h3>${ourTeam[i].name}</h3><p>${ourTeam[i].role}</p>`

        //appendo tutti gli elementi
        cardImageContainer.append(cardImage);

        teamCard.append(cardImageContainer, cardText);

        teamContainer.append(teamCard);
    }
}

function addMember(){
    if (newMemberNameInput.value.trim() !== '' && newMemberRoleInput.value.trim() !== '' && newMemberImageInput.value.trim() !== ''){
        //creo un nuovo oggetto che conterrà le informazioni del nuovo membro
        const newMember = {};
    
        //assegno i valori degli input alle proprietà del nuovo oggetto
        newMember.name = newMemberNameInput.value;
        newMember.role = newMemberRoleInput.value;
        newMember.imageUrl = newMemberImageInput.value;
    
        //inserisco il nuovo oggetto in coda all'array gia esistente
        ourTeam.push(newMember);
    
        
        appendTeamCard();
    }
}

function appendTeamCard(){
    //creo tutti gli elementi che dovrò appendere al container gia esistente
    const teamCard = document.createElement('div');
    const cardImageContainer = document.createElement('div');                       
    const cardImage = document.createElement('img');
    const cardText = document.createElement('div');

    //setto le classi necessarie gia presenti nel css
    teamCard.classList.add('team-card');
    cardImageContainer.classList.add('card-image');                                 
    cardText.classList.add('card-text');

    //estrapolo dall'array esistente i dati necessari e li assegno ai relativi elementi della card
    cardImage.src = ourTeam[ourTeam.length-1].imageUrl;                                
    cardImage.alt = ourTeam[ourTeam.length-1].name;

    cardText.innerHTML = `<h3>${ourTeam[ourTeam.length-1].name}</h3><p>${ourTeam[ourTeam.length-1].role}</p>`

    //appendo tutti gli elementi
    cardImageContainer.append(cardImage);

    teamCard.append(cardImageContainer, cardText);

    teamContainer.append(teamCard);
}

function dataCheck(){

    let query;
    let existent = false;

    switch (this){
        case newMemberNameInput:
            query ='name';
            break;
        case newMemberRoleInput:
            query = 'role';
            break;
        case newMemberImageInput:
            query = 'imgUrl';
            break;
    }

    for (let i = 0; i < ourTeam.length; i++){
        if (ourTeam[i][query].toLowerCase() == this.value.toLowerCase()){
            existent = true;
        }
    }

    if (existent && this.value.length){
        this.classList.remove('goodData');
        this.classList.add('error');
    } else if (!existent && this.value.length){
        this.classList.remove('error');
        this.classList.add('goodData');
    } else {
        this.classList.remove('error', 'goodData');
    }
}