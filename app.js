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
{stem:'Fish',label:'Deep-Sea Fish'},{stem:'Salmon',label:'Migratory Salmon'},
{stem:'Ironmonger',label:'Victorian Ironmongers'},{stem:'Pigeon',label:'Urban Pigeons'},
{stem:'Ferret',label:'Ferrets'},{stem:'Fungus',label:'Sentient Mushrooms'},
{stem:'Goose',label:'Geese'},{stem:'Apiary',label:'Apiary Collectives'},
{stem:'Toaster',label:'Smart Toasters'},{stem:'Gnome',label:'Garden Gnomes'},
{stem:'Plumber',label:'Interplanetary Plumbers'},{stem:'Librarian',label:'Time-Travelling Librarians'},
{stem:'Crab',label:'Horseshoe Crabs'},{stem:'Moth',label:'Moths'},
{stem:'Potato',label:'Conscious Potatoes'},{stem:'Sourdough Starter',label:'Sourdough Civilisations'},
{stem:'Trolley',label:'Abandoned Shopping Trolleys'},{stem:'Badger',label:'Bureaucratic Badgers'},
{stem:'VendingMachine',label:'Haunted Vending Machines'},{stem:'Dachshund',label:'Retired Space Dachshunds'},
{stem:'Goblin',label:'Unionised Goblins'},{stem:'Stapler',label:'Office Staplers'},
{stem:'Disco',label:'Disco Astronauts'},{stem:'Karaoke',label:'Competitive Karaoke Judges'},
{stem:'Chumbawamba',label:'Chumbawamba Tribute Bands'},{stem:'Kazoo',label:'Kazoo Orchestras'},
{stem:'Accordionist',label:'Interdimensional Accordionists'},{stem:'Middle-Management',label:'Middle-Management Dinosaurs'},
{stem:'Teapot',label:'Orbital Teapots'},{stem:'Capybara',label:'Capybara Cooperatives'},
{stem:'Sloth',label:'Hypercompetitive Sloths'},{stem:'Beekeeper',label:'Underwater Beekeepers'},
{stem:'Cheese',label:'Self-Aware Cheese Wheels'},{stem:'Fax',label:'Retrofuturist Fax Machines'}
];
const grandPrefixes=['Derp','Hyper','Ultra','PostHuman','OmniFrontier','Max^Max','Transcendental','Quantum','MetaMeta','Recursive','UnreasonablyBig'];
const owners=['Humanity’s','Civilisation’s','Doritos Presents','God’s','Scunthorpe Council’s','Godzilla’s', 'DJ Jazzy Jeff &', 'Chef’s-kiss-emoji'];
const finales=['Last','Final','Penultimate','Absolutely Final','Post-Final','Actually Last','Pre-Singularity','Ultimate', 'Phillips-head', ];
const impossibles=['Extra Harder','Diamond++','Unsolved',,'Contamination-Proof(ish)','AGI-Certified','Saturation-Resistant','Peer-Review-Proof','Infinite-Context','Self-Destructive'];
const realms=['Underworld','Interstellar','Quantum','Post-Singularity','Prehistoric','Parallel-Universe','Haunted','Orbital','Bureaucratic','Post-Apocalyptic','Dreamworld','Mirror-Dimension','Galactic','Neon'];
const versions=['2.0','3.5','4.0','5.1','7.0','9.9','42.0','v153.1.1','vNext','v∞','v0.0.1-final', '²', '³', '¾'];
const assessments=['Benchmark','Bench','Eval','Exam','Challenge','Arena','Gauntlet'];
function makeName(level,rng=Math.random){
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
function nextName(level,previous,excluded,rng=Math.random){
for(let i=0;i<100;i++){
const candidate=makeName(level,rng);
if(candidate!==previous&&!excluded.has(candidate.toLowerCase()))return candidate;
}
throw new Error('Could not find a fresh name');
}

const harness='https://github.com/EleutherAI/lm-evaluation-harness/tree/main/lm_eval/tasks/';
const tasks=(items)=>items.split('|').map(x=>{const [name,folder]=x.split('~');return {name,url:harness+folder};});
const refs=(items)=>items.map(([name,url])=>({name,url}));
const survey=[
 {title:'Knowledge, science & reasoning',items:tasks('MMLU~mmlu|MMLU-Pro~mmlu_pro|MMLU-Redux~mmlu_redux|MMLU-Pro+~mmlu-pro-plus|GPQA~gpqa|ARC~arc|AGIEval~agieval|LogiQA~logiqa|LogiQA 2.0~logiqa2|SciQ~sciq|OpenBookQA~openbookqa|PIQA~piqa|CommonsenseQA~commonsense_qa|Social IQa~siqa|BIG-bench~bigbench|BIG-Bench Hard~bbh|Mastermind~mastermind|GroundCoCoA~groundcocoa|MetaBench~metabench|SLR-Bench~slr_bench')},
 {title:'Difficulty escalation & grand claims',items:refs([
 ['BIG-Bench Extra Hard','https://github.com/google-deepmind/bbeh'],['SuperGPQA','https://github.com/SuperGPQA/SuperGPQA'],['GPQA Diamond','https://github.com/idavidrein/gpqa'],["Humanity’s Last Exam",'https://www.lastexam.ai/'],['HLE-Diamond','https://www.lastexam.ai/blog/hle-diamond'],['HLE-Rolling','https://www.lastexam.ai/'],['FrontierMath','https://epoch.ai/frontiermath'],['FrontierMath: Open Problems','https://epoch.ai/frontiermath/open-problems'],['FrontierMath Erdős','https://epoch.ai/latest/announcing-frontiermath-erdos']])},
 {title:'Math & competitions',items:tasks('GSM8K~gsm8k|MATH~hendrycks_math|MathQA~mathqa|MGSM~mgsm|Minerva Math~minerva_math|HRM8K~hrm8k|AIME~aime|ASDiv~asdiv|Physics GRE~physics_gre|Putnam Axiom~putnam_axiom')},
 {title:'Code & software engineering',items:[...tasks('HumanEval~humaneval|HumanEval Infilling~humaneval_infilling|MBPP~mbpp|CodeXGLUE~code_x_glue|JSONSchemaBench~jsonschema_bench'),...refs([
 ['SWE-bench','https://www.swebench.com/'],['SWE-bench Verified','https://www.swebench.com/verified.html'],['SWE-bench Lite','https://www.swebench.com/lite.html'],['LiveCodeBench','https://github.com/LiveCodeBench/LiveCodeBench'],['SciCode','https://github.com/scicode-bench/SciCode'],['BigCodeBench','https://github.com/bigcode-project/bigcodebench']])]},
 {title:'Agents, tools & browsing',items:refs([
 ['BrowseComp','https://openai.com/index/browsecomp/'],['WebArena','https://github.com/web-arena-x/webarena'],['OSWorld','https://github.com/xlang-ai/OSWorld'],['AgentBench','https://github.com/THUDM/AgentBench'],['GAIA','https://arxiv.org/abs/2311.12983'],['Terminal-Bench','https://www.tbench.ai/'],['τ-bench','https://github.com/sierra-research/tau-bench'],['ToolBench','https://github.com/OpenBMB/ToolBench'],['Mind2Web','https://github.com/OSU-NLP-Group/Mind2Web'],['AppWorld','https://github.com/StonyBrookNLP/appworld']])},
 {title:'Language, wordplay & comprehension',items:tasks('HellaSwag~hellaswag|WinoGrande~winogrande|BLiMP~blimp|MultiBLiMP~multiblimp|LAMBADA~lambada|GLUE~glue|SuperGLUE~super_glue|SWAG~swag|DROP~drop|CoQA~coqa|RACE~race|SQuAD 2.0~squadv2|TriviaQA~triviaqa|Natural Questions~nq_open|QASPER~qasper|Story Cloze~storycloze|MuTual~mutual|ANLI~anli|MC-TACO~mc_taco')},
 {title:'Long context & instruction following',items:[...tasks('LongBench~longbench|LongBench v2~longbench|RULER~ruler|SCROLLS~scrolls|bAbI~babi|BABILong~babilong|LongProc~longproc|LIBRA~libra|IFEval~ifeval|tinyBenchmarks~tinyBenchmarks'),...refs([['LiveBench','https://github.com/LiveBench/LiveBench'],['InfiniteBench','https://github.com/OpenBMB/InfiniteBench']])]},
 {title:'Safety, bias & factuality',items:[...tasks('TruthfulQA~truthfulqa|BBQ~bbq|CrowS-Pairs~crows_pairs|ETHICS~hendrycks_ethics|ToxiGen~toxigen|Moral Stories~moral_stories|DiscrimEval~discrim_eval|RealToxicityPrompts~realtoxicityprompts|EQ-Bench~eq_bench'),...refs([['SimpleQA','https://openai.com/index/introducing-simpleqa/'],['FACTS','https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/']])]},
 {title:'Law, medicine & specialist knowledge',items:tasks('LegalBench~legalbench|MedQA~medqa|MedMCQA~medmcqa|PubMedQA~pubmedqa|HEAD-QA~headqa|CareQA~careqa|KorMedMCQA~kormedmcqa|JFinQA~jfinqa|KBL~kbl')},
 {title:'Multilingual & cultural knowledge',items:tasks('Belebele~belebele|C-Eval~ceval|CMMLU~cmmlu|KMMLU~kmmlu|Global-MMLU~global_mmlu|MMLU-ProX~mmlu_prox|ArabicMMLU~arabicmmlu|GreekMMLU~greekmmlu|TurkishMMLU~turkishmmlu|HAERAE~haerae|CLIcK~click|ArabCulture~arabculture|AraDiCE~aradice|MLQA~mlqa|TyDi QA~tydiqa|PAWS-X~paws-x|NorEval~noreval|LingOly~lingoly')},
 {title:'Multimodal understanding',items:refs([
 ['MMMU','https://github.com/MMMU-Benchmark/MMMU'],['MMMU-Pro','https://github.com/MMMU-Benchmark/MMMU'],['MMBench','https://github.com/open-compass/MMBench'],['MathVista','https://github.com/lupantech/MathVista'],['MathVision','https://github.com/mathllm/MATH-Vision'],['ChartQA','https://github.com/vis-nlp/ChartQA'],['DocVQA','https://www.docvqa.org/'],['TextVQA','https://textvqa.org/'],['OCRBench','https://github.com/Yuliang-Liu/MultimodalOCR'],['CharXiv','https://github.com/princeton-nlp/CharXiv'],['ScreenSpot-Pro','https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding'],['ZeroBench','https://github.com/jonathan-roberts1/zerobench']])}
];
const realNames=new Set(survey.flatMap(g=>g.items.map(x=>x.name.toLowerCase())));

const $=id=>document.getElementById(id);
let previous='';
function generate(){
  const level=Number($('scale').value);
  previous=nextName(level,previous,realNames);
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
