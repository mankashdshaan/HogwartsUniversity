let currentPage = 1;
let currentCourse = '';

function showHome() {
    document.getElementById('course-content').style.display = 'none';
}

function showCourse(course) {
    currentCourse = course;
    currentPage = 1;
    document.getElementById('course-content').style.display = 'block';
    document.getElementById('course-title').innerHTML = course.charAt(0).toUpperCase() + course.slice(1);
    document.getElementById('course-chapter').innerHTML = getNotes();
}

function previousPage() {
    // No previous page for Day Zero
}

function nextPage() {
    // No next page for Day Zero
}

function getNotes() {
    let notes = '<h2>Day Zero</h2>' +
        '<h3>Social Messages</h3>' +
        '* Use Please, Thanks, Sorry whenever needed do not stop<br>' +
        '* Donate the needy<br>' +
        '* Respect only good<br>' +
        '* Speak against wars and terrorism on social media platforms<br>' +
        '* Speak against government if they support Russia and China<br>' +
        '* Promote awareness about the impact of terrorism<br><br>' +
        '<h3>Anti-Russia and China Messages</h3>' +
        '* Do not buy Russian and Chinese products<br>' +
        '* Russia and China use terrorism to become number 1 country in the world<br>' +
        '* USA is already the richest country and doesn\'t need to be villain<br><br>' +
        '<h3>Political and Governance</h3>' +
        '* Become minister and use RAW to ensure no weapon production deal happens<br>' +
        '* Stop weapon production deals to ensure better lives<br><br>' +
        '<h3>Health and Nutrition</h3>' +
        '* Our body needs carbohydrates for energy, protein for cell production, vitamin and minerals for benefits<br>' +
        '* Body breaks carbohydrates into glucose and protein into amino acids<br>' +
        '* Study the required amount of each nutrient on Grok AI, Meta AI, ChatGPT<br><br>' +
        '<h3>Historical Notes</h3>' +
        '<h4>Kings and Their Good Deeds</h4>' +
        '* King Bharshiva Nagas (Kashyapa gotra): Supported the revival of Hinduism, performed the Ashvamedha sacrifice, promoting Vedic traditions.<br>' +
        '* King Bhatta Narayana (Vats gotra): Contributed to the development of Sanskrit literature, particularly in drama and poetry.<br>' +
        '* King Parashurama (Bhargava gotra): Protected the innocent, fought against injustice, symbolizing justice and morality.<br>' +
        '* King Shandilya Maharshi (Shandilya gotra): Contributed to the development of the Upanishads and ancient Indian philosophical thought.<br>' +
        '* King Angirasa (Gautama gotra): Associated with the composition of Vedic hymns, contributing to ancient Indian spiritual literature.<br>' +
        '* Maharana Pratap: Defended Mewar against the Mughal Empire, promoted local culture, supported artisans and craftsmen.<br>' +
        '* Prithviraj Chauhan: Expanded education, patronized scholars.<br>' +
        '* Rana Sanga: Unified Rajput clans, fought for regional autonomy.<br>' +
        '* Raja Todar Mal: Implemented administrative and revenue reforms.';
    return notes;
}