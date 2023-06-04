const $addFamilyMemberButton = document.querySelector('#show-members');
$addFamilyMemberButton.onclick = function () {
    const $familyMembersAmount = Number(document.querySelector('#member-amount').value) || '';
    if ($familyMembersAmount === '') {
        const $placeHolder = document.querySelector('#member-amount')
        $placeHolder.placeholder = 'Ingresa integrantes'
        return false;
    } else if ($familyMembersAmount == $familyMembersAmount) {
        deleteCreatedElements()
        addFamilyMembers($familyMembersAmount);
        newButton();
        return false;
    }
}

const $createFamilyCard = document.querySelector('#submitFamilyInfo')

function deleteCreatedElements() {
    deleteCreatedNumberInputs()
    deleteCreatedLabels()
    deleteCreatedButtons()
    deleteCreatedLabelsTwo()
}

function deleteCreatedNumberInputs() {
    const familyMembersAges = document.querySelectorAll('#member-age');
    for (let i = 0; i < familyMembersAges.length; i++) {
        familyMembersAges[i].remove();
    }
}

function deleteCreatedLabels() {
    const newLabel = document.querySelectorAll('#age-labels')
    for (let i = 0; i < newLabel.length; i++) {
        newLabel[i].remove();

    }
}

function deleteCreatedButtons() {
    const $newButton = document.querySelectorAll('#result-newbutton')
    for (let i = 0; i < $newButton.length; i++) {
        $newButton[i].remove();

    }
}

function deleteCreatedLabelsTwo() {
    const newLabelTwo = document.querySelectorAll('#member-age-two')
    for (let i = 0; i < newLabelTwo.length; i++) {
        newLabelTwo[i].remove();

    }
}

function addFamilyMembers(amount) {
    for (let i = 0; i < amount; i++) {
        const newLabel = document.createElement('label');
        const newInput = document.createElement('input');
        const newLabelTwo = document.createElement('label');
        const newInputTwo = document.createElement('input');
        const $members = document.querySelector('#members');
        newInputTwo.type = 'checkbox'
        newInputTwo.id = 'member-age-two'
        newLabelTwo.textContent = 'Trabaja?'
        newLabelTwo.id = 'age-labels'
        newLabel.textContent = 'Edad del integrante ';
        newLabel.id = 'age-labels'
        newInput.type = 'number';
        newInput.id = 'member-age';
        $members.appendChild(newLabel);
        $members.appendChild(newInput);
        $members.appendChild(newLabelTwo)
        $members.appendChild(newInputTwo);
    }
}

function showFinalResults() {
    let agesFinal = getAges();
    let $averageAge = document.querySelector('#average');
    $averageAge.innerText = calculateAverage(agesFinal).toFixed(2);
    let $minorAge = document.querySelector('#youngest');
    $minorAge.innerText = findMinor(agesFinal);
    let $oldestAge = document.querySelector('#oldest');
    $oldestAge.innerText = findBiggest(agesFinal);
}

function newButton() {
    const $newButton = document.querySelector('#new-button');
    const newButton = document.createElement('button');
    newButton.textContent = 'Calcular';
    newButton.type = 'submit';
    newButton.id = 'result-newbutton';
    $newButton.appendChild(newButton);
    $newButton.onclick = function () {
        showFinalResults()
    }
}

function getAges() {
    let membersAges = document.querySelectorAll('#member-age')
    let ages = [];
    for (let i = 0; i < membersAges.length; i++) {
        ages.push(Number(membersAges[i].value));
    }
    return ages;
}

//Funciones calculations

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function findMinor(numbers) {
    let minorNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minorNumber) {
            minorNumber = numbers[i];
        }
    }
    return minorNumber;
}

function findBiggest(numbers) {
    let biggestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber;
}


// CREAR TARJETA INFORMACION FAMILIAR 

// #submitFamilyInfo button
// #familyInfo form
// #familyMemberName

class FamilyMemberInformation {
    constructor(name, lastname, birthyear, city) {
        this.name = name,
            this.lastname = lastname,
            this.birthyear = birthyear,
            this.city = city
    };
}

FamilyMemberInformation.prototype.createHtmlCard = function () {
    let card = document.createElement('div');
    card.classList.add('card');

    let nameElement = document.createElement('h2');
    nameElement.textContent = this.name + ' ' + this.lastname;

    let birthYearElement = document.createElement('p');
    birthYearElement.textContent = 'Año de nacimiento: ' + this.birthyear;

    let cityElement = document.createElement('p');
    cityElement.textContent = 'Ciudad: ' + this.city;

    card.appendChild(nameElement);
    card.appendChild(birthYearElement);
    card.appendChild(cityElement);

    let cardsContainer = document.getElementById('familyMembersInformationCard');
    cardsContainer.appendChild(card);
};

const familyMemberInfoForm = document.querySelector('#familyInfo');
const familyMembersInformationCardDiv = document.querySelector('#familyMembersInformationCard');
familyMemberInfoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let familyMemberName = document.querySelector('#familyMemberName').value;
    let familyMemberLastName = document.querySelector('#familyMemberLastName').value;
    let familyMemberBirthYear = parseInt(document.querySelector('#familyMemberBirthYear').value);
    let familyMemberCity = document.querySelector('#familyMemberCity').value;
    let familyMemberFinalInfo = new FamilyMemberInformation(familyMemberName, familyMemberLastName, familyMemberBirthYear, familyMemberCity);
    familyMemberFinalInfo.createHtmlCard();
});

console.log(familyMemberFinalInfo)


