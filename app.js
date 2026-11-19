(() => {
'use strict';

const levels=[
{name:'Simple',note:'One capability. One suffix. Entirely reasonable.',tag:'A modest contribution'},
{name:'Plausible',note:'Two or three of: a prefix, a specialist field, an upgrade.',tag:'Camera-ready energy'},
{name:'Ambitious',note:'A specialist field, an evaluation mode, bigger claims.',tag:'State-of-the-name'},
{name:'Absurd',note:'Real expertise, applied to increasingly unlikely subjects.',tag:'Reviewer 2 has concerns'},
{name:'Unhinged',note:'A very specialised exam for a civilisation that does not exist.',tag:'Beyond peer review'}
];
// Keep each compact field stem paired with its genuine subspecialisations.
const domains=[
{stem:'Law',fields:['Constitutional Litigation','Maritime Arbitration','Tax Law','Patent Litigation','Contract Interpretation','Criminal Appeals']},
{stem:'Med',fields:['Clinical Triage','Differential Diagnosis','Emergency Medicine','Neonatal Surgery','Radiology','Epidemiology']},
{stem:'SWE',fields:['Legacy Code Migration','Distributed Systems Debugging','Compiler Optimisation','Dependency Resolution','Production Incident Response','Database Recovery']},
{stem:'Fin',fields:['Forensic Accounting','Derivatives Pricing','Sovereign Debt Restructuring','Fraud Detection','Algorithmic Trading','Portfolio Risk']},
{stem:'Bio',fields:['Protein Design','Microbial Ecology','Genome Annotation','Evolutionary Genetics','Cellular Signalling']},
{stem:'Math',fields:['Algebraic Topology','Formal Proof','Combinatorial Optimisation','Number Theory','Stochastic Analysis']},
{stem:'Chem',fields:['Molecular Synthesis','Catalyst Design','Reaction Prediction','Polymer Chemistry','Spectroscopy']},
{stem:'Geo',fields:['Volcanic Risk Assessment','Plate Tectonics','Mineral Exploration','Seismic Inversion','Palaeoclimatology']},
{stem:'Astro',fields:['Orbital Mechanics','Exoplanet Classification','Stellar Evolution','Cosmological Inference','Asteroid Deflection']},
{stem:'Econ',fields:['Market Design','Inflation Forecasting','Labour Economics','Mechanism Design','Auction Theory']},
{stem:'Linguistics',fields:['Historical Phonology','Low-Resource Translation','Pragmatic Inference','Syntactic Ambiguity','Dialect Identification']},
{stem:'Logistics',fields:['Supply Chain Optimisation','Warehouse Scheduling','Last-Mile Delivery','Rail Timetabling','Cold-Chain Management']},
{stem:'Civic',fields:['Urban Planning','Planning Permission Appeals','Waste Management','Public Procurement','Electoral Systems']},
{stem:'Agri',fields:['Crop Rotation','Soil Restoration','Irrigation Planning','Plant Pathology','Precision Agriculture']},
{stem:'Art',fields:['Art Restoration','Music Theory','Literary Criticism','Museum Curation','Dramatic Interpretation']},
{stem:'Mech',fields:['Structural Analysis','Thermodynamics','Fluid Dynamics','Control Systems','Materials Fatigue']}
];
const roots=['Reason','Logic','Proof','Context','Query','Plan','Recall','Task','Fact','Code','Agent','Skill','Tool','Science','Sense','Knowledge','Vision','Search','World','Causal','Memory','Puzzle','Ground','Language','Decision','Trust','Schema','Action','Dialogue','Concept'];
const prefixes=['Deep','Super','Mega','Ultra','Hyper','Omni','Meta','Frontier','Live','Open','Big','Long','Multi','Cross','Real','Beyond'];
const endings=['Bench','Eval','QA','Test','Arena','Exam','Challenge','LM'];
const upgrades=['Pro','Hard','Diamond','Verified','Expert','Plus','XL','Advanced','Extreme','Max','Gold','Platinum'];
const modes=['Adversarial','Multimodal','Long-Horizon','Cross-Domain','Zero-Shot','Agentic','Interactive','Compositional','Out-of-Distribution','Counterfactual','Tool-Augmented','Multilingual', 'Decision'];
// Odd subjects combine with genuine disciplines, retaining grammatical structure.
const oddSubjects=[
{stem:'Fishnet',label:'Deep-Sea Fish'},{stem:'Salmon',label:'Migratory Salmon'},
{stem:'Ironmonger',label:'Victorian Ironmongers'},{stem:'Pigeon',label:'Urban Pigeons'},
{stem:'Badonkadonk',label:'Badonkadonk'},{stem:'Fungus',label:'Sentient Mushrooms'},
{stem:'Goose',label:'Geese'},{stem:'Apiary',label:'Apiary Collectives'},
{stem:'Toaster',label:'Smart Toasters'},{stem:'Gnome',label:'Garden Gnomes'},
{stem:'Plumber',label:'Interplanetary Plumbers'},{stem:'Librarian',label:'Time-Travelling Librarians'},
{stem:'Potato',label:'Conscious Potatoes'},{stem:'Sourdough Starter',label:'Sourdough Civilisations'},
{stem:'Trolley',label:'Abandoned Shopping Trolleys'},{stem:'Elderberry',label:'Bureaucratic Elderberries'},
{stem:'VendingMachine',label:'Haunted Vending Machines'},{stem:'Dachshund',label:'Retired Space Dachshunds'},
{stem:'Goblin',label:'Unionised Goblins'},{stem:'Stapler',label:'Office Staplers'},
{stem:'Disco',label:'Disco Astronauts'},{stem:'Karaoke',label:'Competitive Karaoke Judges'},
{stem:'Chumbawamba',label:'Chumbawamba Tribute Bands'},{stem:'Kazoo',label:'Kazoo Orchestras'},
{stem:'Accordionist',label:'Interdimensional Accordionists'},{stem:'Middle-Management',label:'Middle-Management Dinosaurs'},
{stem:'Teapot',label:'Orbital Teapots'},{stem:'Capybara',label:'Capybara Cooperatives'},
{stem:'Sloth',label:'Hypercompetitive Sloths'},{stem:'Beekeeper',label:'Underwater Beekeepers'},
{stem:'String-Cheese',label:'Self-Aware Cheese Wheels'},{stem:'Fax',label:'Retrofuturist Fax Machines'}
];
const grandPrefixes=['Derp','Hyper','Wibbly-Wobbly','PostHuman','OmniFrontier','Max^Max','Transcendental','Quantum','MetaMeta','Recursive','UnreasonablyBig'];
const owners=['Humanity’s','Civilisation’s','Doritos Presents','God’s','Scunthorpe Council’s','Godzilla’s', 'DJ Jazzy Jeff &', 'Chef’s-kiss-emoji'];
const finales=['Last','Final','Penultimate','Absolutely Final','Post-Final','Actually Last','Pre-Singularity','Last (Promise)', 'Phillips-head', ];
const impossibles=['Extra Harder','Diamond++','Unsolved',,'Contamination-Proof(ish)','AGI-Certified','Saturation-Resistant','Peer-Review-Proof','Infinite-Context','Self-Destructive'];
const realms=['Underworld','Interstellar','Quantum','Post-Singularity','Prehistoric','Parallel-Universe','Haunted','Orbital','Bureaucratic','Post-Apocalyptic','Dreamworld','Mirror-Dimension','Galactic','Neon'];
const versions=['2.0','3.5','4.0','5.1','7.0','9.9','42.0','v153.1.1','vNext','v∞','v0.0.1-final', '²', '³', '¾', 'MCMLXXXIV', 'v0', 'Ribbed for your pleasure', 'ka-ching!'];
const assessments=['Benchmark','Bench','Eval','Exam','Challenge','Arena','Gauntlet'];
const easterEggs={
4:['Untss-untss-untss-Bench','Zaphod Beeblebrox for President','All Your Bench Are Belong to Us','Nobody Expects the Spanish Evaluation','Sir, This Is a Benchmark'],
5:['Kenny!','My Other Benchmark Is a Toaster','This Benchmark Has Been Left Blank Intentionally','Help, I’m Trapped in a Benchmark Factory','The Real Benchmark Was the Friends We Made Along the Way']
};
function makeName(level,rng=Math.random){
level=Number(level);
// Each easter egg has a 2% chance of replacing the entire name.
const surprises=easterEggs[level];
if(surprises){
const index=Math.floor(rng()*50);
if(index<surprises.length)return surprises[index];
}
const pick=a=>a[Math.floor(rng()*a.length)];
const domain=pick(domains),subject=pick(oddSubjects),field=pick(domain.fields);
// Recipes add components at each level; subject + discipline stay paired.
switch(Number(level)){
case 1:return pick(roots)+pick(endings);
case 2:{
const omitted=rng()<0.5?Math.floor(rng()*3):-1;
return (omitted===0?'':pick(prefixes))+(omitted===1?'':domain.stem)+pick(endings)+(omitted===2?'':' '+pick(upgrades));
}
case 3:return pick(prefixes)+domain.stem+'Bench '+pick(upgrades)+': '+pick(modes);
case 4:return pick(grandPrefixes)+'-'+pick(modes)+'-'+pick(realms)+'-'+subject.stem+'-'+domain.stem+'-'+pick(assessments)+' '+pick(upgrades)+' '+pick(versions);
case 5:return pick(owners)+' '+pick(finales)+' '+pick(prefixes)+'-'+pick(grandPrefixes)+'-'+pick(realms)+'-'+subject.stem+'-'+domain.stem+'-'+pick(assessments)+' '+pick(upgrades)+' '+pick(impossibles)+' '+pick(versions);
default:throw new RangeError('Level must be 1–5');
}
}
function nextName(level,previous,rng=Math.random){
for(let i=0;i<100;i++){
const candidate=makeName(level,rng);
if(candidate!==previous)return candidate;
}
throw new Error('Could not find a fresh name');
}

const $=id=>document.getElementById(id);
let previous='';
function generate(){
  const level=Number($('scale').value);
  previous=nextName(level,previous);
  $('name').textContent=previous;
  $('name').className=previous.length>110?'epic':previous.length>48?'long':'';
  const result=document.querySelector('.result');
  result.classList.remove('flash');void result.offsetWidth;result.classList.add('flash');
}
function updateScale(){
  const value=Number($('scale').value),level=levels[value-1];
  $('level').textContent=level.name;
  $('scale').setAttribute('aria-valuetext',`${value} of 5: ${level.name}`);
  $('scale').style.setProperty('--progress',`${(value-1)*25}%`);
  generate();
}
$('generate').addEventListener('click',generate);
$('scale').addEventListener('input',updateScale);
updateScale();

})();
