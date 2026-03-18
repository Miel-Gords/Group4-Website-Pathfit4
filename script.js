// --- KEBAB MENU LOGIC ---
const kebabBtn = document.getElementById('kebabBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

kebabBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
    if (!kebabBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// --- THEME TOGGLE LOGIC ---
const btnTheme = document.getElementById('btnTheme');
btnTheme.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
    dropdownMenu.classList.remove('show'); // close menu after clicking
});

// --- MODAL LOGIC ---
const btnMembers = document.getElementById('btnMembers');
const btnInfo = document.getElementById('btnInfo');
const modalMembers = document.getElementById('modalMembers');
const modalInfo = document.getElementById('modalInfo');
const closeMembersBtn = document.getElementById('closeMembersBtn');
const closeInfoBtn = document.getElementById('closeInfoBtn');

// Open Modals
btnMembers.addEventListener('click', () => {
    modalMembers.classList.add('show');
    dropdownMenu.classList.remove('show');
});

btnInfo.addEventListener('click', () => {
    modalInfo.classList.add('show');
    dropdownMenu.classList.remove('show');
});

// Close Modals via X button
closeMembersBtn.addEventListener('click', () => {
    modalMembers.classList.remove('show');
});

closeInfoBtn.addEventListener('click', () => {
    modalInfo.classList.remove('show');
});

// Close modals when clicking the dark overlay outside the content box
window.addEventListener('click', (e) => {
    if (e.target === modalMembers) {
        modalMembers.classList.remove('show');
    }
    if (e.target === modalInfo) {
        modalInfo.classList.remove('show');
    }
});

// --- 12 STRIKES INTERACTIVE LOGIC ---
const strikeData = {
    "1": "<strong>Left Temple Strike:</strong> A forehand strike aiming for the opponent's left temple or the left side of their head/neck.",
    "2": "<strong>Right Temple Strike:</strong> A backhand strike aiming for the opponent's right temple or the right side of their head/neck.",
    "3": "<strong>Left Torso/Shoulder:</strong> A forehand strike targeting the left side of the opponent's torso, ribs, or shoulder.",
    "4": "<strong>Right Torso/Shoulder:</strong> A backhand strike targeting the right side of the opponent's torso, ribs, or shoulder.",
    "5": "<strong>Stomach Thrust:</strong> A forward, straight thrust aiming directly at the opponent's solar plexus or stomach.",
    "6": "<strong>Left Chest Thrust:</strong> A forehand thrust targeting the left side of the opponent's chest.",
    "7": "<strong>Right Chest Thrust:</strong> A backhand thrust targeting the right side of the opponent's chest.",
    "8": "<strong>Left Leg/Knee Strike:</strong> A backhand strike driving downward to hit the opponent's lower left leg or knee.",
    "9": "<strong>Right Leg/Knee Strike:</strong> A forehand strike driving downward to hit the opponent's lower right leg or knee.",
    "10": "<strong>Left Eye Thrust:</strong> A precise forehand poke aiming for the opponent's left eye.",
    "11": "<strong>Right Eye Thrust:</strong> A precise backhand poke aiming for the opponent's right eye.",
    "12": "<strong>Crown Strike:</strong> A straight, downward overhead strike aiming for the top (crown) of the opponent's head."
};

const strikeBtns = document.querySelectorAll('.strike-btn');
const strikeInfoBox = document.getElementById('strike-info-box');

strikeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        strikeBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to the clicked button
        btn.classList.add('active');
        
        // Get the strike number and update the info box
        const strikeNum = btn.getAttribute('data-strike');
        strikeInfoBox.innerHTML = strikeData[strikeNum];
    });
});