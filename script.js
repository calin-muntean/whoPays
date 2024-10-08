const participantInput = document.getElementById('participantName');
const addParticipantBtn = document.getElementById('addParticipant');
const participantList = document.getElementById('participantList');
const chooseRandomBtn = document.getElementById('chooseRandom');
const resultDiv = document.getElementById('result');

let participants = [];

addParticipantBtn.addEventListener('click', () => {
    const name = participantInput.value.trim();
    
    if (name && !participants.includes(name)) {
        participants.push(name);
        updateParticipantList();
        participantInput.value = '';
    }
    
    toggleChooseButton();
});

function updateParticipantList() {
    participantList.innerHTML = '';
    participants.forEach((participant) => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantList.appendChild(li);
    });
}

function toggleChooseButton() {
    chooseRandomBtn.disabled = participants.length < 2; 
}

chooseRandomBtn.addEventListener('click', () => {
    if (participants.length >= 2) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const chosenParticipant = participants[randomIndex];
        resultDiv.textContent = `Fericitul câștigător este: ${chosenParticipant}!`;
    }
});

toggleChooseButton();
