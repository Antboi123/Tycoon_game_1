let cash = 1000;
let materials = 0;
let labor = 0;
let industry = null;

const cashElement = document.getElementById('cash');
const materialsElement = document.getElementById('materials');
const laborElement = document.getElementById('labor');
const retailBtn = document.getElementById('retail-btn');
const manufacturingBtn = document.getElementById('manufacturing-btn');
const energyBtn = document.getElementById('energy-btn');
const produceBtn = document.getElementById('produce-btn');
const sellBtn = document.getElementById('sell-btn');
const expandBtn = document.getElementById('expand-btn');
const messageElement = document.getElementById('message');

retailBtn.addEventListener('click', () => selectIndustry('retail'));
manufacturingBtn.addEventListener('click', () => selectIndustry('manufacturing'));
energyBtn.addEventListener('click', () => selectIndustry('energy'));
produceBtn.addEventListener('click', produce);
sellBtn.addEventListener('click', sell);
expandBtn.addEventListener('click', expand);

function selectIndustry(industryName) {
    industry = industryName;
    messageElement.textContent = `Selected industry: ${industryName}`;
}

function produce() {
    if (industry === 'retail') {
        materials += 10;
        labor += 5;
        cash -= 50;
    } else if (industry === 'manufacturing') {
        materials += 20;
        labor += 10;
        cash -= 100;
    } else if (industry === 'energy') {
        materials +=
```
[11/05, 17:42] Meta AI: Here's the complete JavaScript code:

```
let cash = 1000;
let materials = 0;
let labor = 0;
let industry = null;

const cashElement = document.getElementById('cash');
const materialsElement = document.getElementById('materials');
const laborElement = document.getElementById('labor');
const retailBtn = document.getElementById('retail-btn');
const manufacturingBtn = document.getElementById('manufacturing-btn');
const energyBtn = document.getElementById('energy-btn');
const produceBtn = document.getElementById('produce-btn');
const sellBtn = document.getElementById('sell-btn');
const expandBtn = document.getElementById('expand-btn');
const messageElement = document.getElementById('message');

retailBtn.addEventListener('click', () => selectIndustry('retail'));
manufacturingBtn.addEventListener('click', () => selectIndustry('manufacturing'));
energyBtn.addEventListener('click', () => selectIndustry('energy'));
produceBtn.addEventListener('click', produce);
sellBtn.addEventListener('click', sell);
expandBtn.addEventListener('click', expand);

function selectIndustry(industryName) {
    industry = industryName;
    messageElement.textContent = `Selected industry: ${industryName}`;
}

function produce() {
    if (industry === 'retail') {
        materials += 10;
        labor += 5;
        cash -= 50;
    } else if (industry === 'manufacturing') {
        materials += 20;
        labor += 10;
        cash -= 100;
    } else if (industry === 'energy') {
        materials += 30;
        labor += 15;
        cash -= 150;
    }
    updateStats();
    messageElement.textContent = `Produced materials and labor for ${industry}.`;
}

function sell() {
    if (industry === 'retail') {
        cash += materials * 5;
        materials = 0;
    } else if (industry === 'manufacturing') {
        cash += materials * 10;
        materials = 0;
    } else if (industry === 'energy') {
        cash += materials * 15;
        materials = 0;
    }
    updateStats();
    messageElement.textContent = `Sold materials for ${industry}.`;
}

function expand() {
    if (industry === 'retail') {
        cash -= 500;
        labor += 20;
    } else if (industry === 'manufacturing') {
        cash -= 1000;
        labor += 40;
    } else if (industry === 'energy') {
        cash -= 1500;
        labor += 60;
    }
    updateStats();
    messageElement.textContent = `Expanded ${industry} operations.`;
}

function updateStats() {
    cashElement.textContent = cash;
    materialsElement.textContent = materials;
    laborElement.textContent = labor;
}


