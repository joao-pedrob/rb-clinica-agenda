const fs = require('fs');

const document = fs.readFileSync('dist/index.html', 'utf8');
const scripts = [...document.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
const script = scripts.join('\n');

scripts.forEach(code => new Function(code));

if (!script.includes("$\('status'\).value=item?.status||'Agendado'")) throw new Error('New appointments must default to Agendado.');
if (!script.includes('data-confirm')) throw new Error('Confirmation action is missing.');
if (!script.includes("status:'Confirmado'")) throw new Error('Confirmation must update status.');
if (!script.includes("$('datePicker').onchange")) throw new Error('Date picker must update the selected day.');
if (!script.includes('selectedLabel')) throw new Error('Selected weekday and date label is missing.');
if (!document.includes('id="dailyPulse"')) throw new Error('Editorial daily pulse is missing.');
if (!script.includes('clientInitials')) throw new Error('Appointment client initials are missing.');

console.log('Confirmation flow static checks passed.');

