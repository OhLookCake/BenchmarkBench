(() => {
'use strict';

const levels=['Simple','Plausible','Ambitious','Absurd','Unhinged'];
const domains=['Law','Med','SWE','Fin','Bio','Math','Chem','Geo','Astro','Econ','Linguistics','Logistics','Civic','Agri','Art','Mech', '', '', '', ''];
const roots=['Reason','Logic','Proof','Context','Query','Plan','Recall','Task','Fact','Code','Agent','Skill','Tool','Science','Sense','Knowledge','Vision','Search','World','Causal','Memory','Puzzle','Ground','Language','Decision','Trust','Schema','Action','Dialogue','Concept'];
const prefixes=['Deep','Super','Mega','Ultra','Hyper','Omni','Meta','Frontier','Live','Open','Big','Long','Multi','Cross','Real','Beyond'];
const endings=['Bench','Eval','QA','Test','Arena','Exam','Challenge','LM'];
const upgrades=['Pro','Hard','Diamond','Verified','Expert','Plus','XL','Advanced','Extreme','Max','Gold','Platinum'];
const modes=['Adversarial','Multimodal','Long-Horizon','Cross-Domain','Zero-Shot','Agentic','Interactive','Compositional','Out-of-Distribution','Counterfactual','Tool-Augmented','Multilingual', 'Decision'];
const oddSubjects=['Fishnet','Salmon','Ironmonger','Pigeon','Badonkadonk','Fungus','Goose','Apiary','Toaster','Gnome','Librarian','Sourdough Starter','Elderberry','Dachshund','Goblin','Chumbawamba','Kazoo','Accordionist','Middle-Management','Teapot','Capybara','Sloth','Beekeeper','String-Cheese','Fax Machine'];
const grandPrefixes=['Derp','Hyper','Wibbly-Wobbly','PostHuman','OmniFrontier','Max^Max','Transcendental','Quantum','MetaMeta','Recursive','UnreasonablyBig'];
const owners=['Humanity’s','Civilisation’s','Doritos® Presents','God’s','Scunthorpe Council’s','Godzilla’s', 'DJ Jazzy Jeff &', 'Chef’s-kiss-emoji', '🤷', 'Chicago Style', '', '', ''];
const finales=['Penultimate','Post-Final','Actually Last','Pre-Singularity','Last (Promise)', 'Phillips-head'];
const impossibles=['Extra Harder','Diamond++','Unsolved','Contamination-Proof(ish)','AGI-Certified','Saturation-Resistant','Peer-Review-Proof','Infinite-Context','Self-Destructive'];
const realms=['Underworld','Interstellar','Anachronistic','Post-Singularity','Prehistoric','Parallel-Universe','Haunted','Orbital','Bureaucratic','Post-Apocalyptic','Dreamworld','Mirror-Dimension','Galactic','Neon'];
const versions=['2.0','3.5','4.0','5.1','7.0','9.9','42.0','v153.1.1','vNext','v∞','v0.0.1-final', '²', '³', '¾', 'MCMLXXXIV', 'v0', 'Ribbed for your pleasure', 'ka-ching!'];
const assessments=['Benchmark','Bench','Eval','Exam','Challenge','Arena','Gauntlet'];
const easterEggs={
4:['Untss-untss-untss-Bench','Zaphod Beeblebrox for President','All Your Bench Are Belong to Us','Nobody Expects the Spanish Evaluation','Sir, This Is a Benchmark', '-... . -. -.-. ....'],
5:['Kenny!','My Other Benchmark Is a Toaster','This Benchmark Has Been Intentionally Left Blank','Help, I’m Trapped in a Benchmark Factory!','The Real Benchmark Was the Friends We Made Along the Way']
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
const hyphen=value=>value===''?'':value+'-';
const domain=pick(domains),subject=pick(oddSubjects);
// Recipes add components at each level; subject + discipline stay paired.
switch(Number(level)){
case 1:return pick(roots)+pick(endings);
case 2:{
const omitted=rng()<0.5?Math.floor(rng()*3):-1;
return (omitted===0?'':pick(prefixes))+(omitted===1?'':domain)+pick(endings)+(omitted===2?'':' '+pick(upgrades));
}
case 3:return pick(prefixes)+domain+'Bench '+pick(upgrades)+': '+pick(modes);
case 4:return hyphen(pick(grandPrefixes))+hyphen(pick(modes))+hyphen(pick(realms))+hyphen(subject)+hyphen(domain)+pick(assessments)+' '+pick(upgrades)+' '+pick(versions);
case 5:return pick(owners)+' '+(rng()<0.4?pick(finales)+' ':'')+hyphen(pick(prefixes))+hyphen(pick(grandPrefixes))+hyphen(pick(realms))+hyphen(subject)+hyphen(domain)+pick(assessments)+' '+pick(upgrades)+' '+pick(impossibles)+' '+pick(versions);
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
  $('level').textContent=level;
  $('scale').setAttribute('aria-valuetext',`${value} of 5: ${level}`);
  $('scale').style.setProperty('--progress',`${(value-1)*25}%`);
  generate();
}
$('generate').addEventListener('click',generate);
$('scale').addEventListener('input',updateScale);
updateScale();

})();
