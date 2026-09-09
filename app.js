
'use strict';

/* ---------- dati FireRed curati ---------- */
const areas=[
["Pallet Town","story",5,["Scegli lo starter e ritira il Pokédex.","Parla con Oak dopo aver consegnato il pacco.","Ritira la Mappa da Daisy."],"Starter","Nessun incontro selvatico rilevante.","Primo obiettivo: arrivare a Viridian City."],
["Route 1","story",3,["Vai verso Viridian City.","Raccogli gli oggetti lungo il percorso."],"Pidgey, Rattata","Lv 2–5","Buona zona per portare lo starter al Lv 6–8."],
["Viridian City","story",5,["Consegna il pacco di Oak.","Ritira il Pokédex.","Compra Poké Ball quando disponibili."],"Pidgey/Rattata sulla Route 22","Lv 2–5","Prima di uscire puoi iniziare a formare il team."],
["Route 2","story",6,["Passa verso nord.","Raccogli l'oggetto e preparati alla foresta."],"Pidgey, Rattata, Nidoran in alcune aree","Lv 3–6","Non serve grindare molto."],
["Viridian Forest","story",7,["Attraversa la foresta.","Cerca Pikachu se vuoi un Elettro per la storia.","Affronta gli allenatori."],"Caterpie, Metapod, Weedle, Kakuna, Pikachu, Pidgey","Lv 3–7","Pikachu è raro: non perdere troppo tempo se non ti serve."],
["Pewter City","story",12,["Affronta Brock.","Ritira TM39 Rock Tomb dopo la vittoria.","Prosegui verso Route 3."],"Nessuno di importante","—","Per Brock, Acqua/Erba/Lotta sono ottimi."],
["Route 3","story",13,["Supera gli allenatori.","Raggiungi Mt. Moon."],"Spearow, Pidgey, Rattata, Nidoran","Lv 6–8","Buona zona per pareggiare i livelli."],
["Mt. Moon","story",15,["Esplora i piani e sconfiggi Team Rocket.","Scegli il Fossile Dome o Helix.","Raccogli TM09 Bullet Seed e TM46 Thief."],"Zubat, Geodude, Paras, Clefairy, Sandshrew/Ekans a seconda della versione","Lv 8–12","Geodude è utile contro molti avversari fisici."],
["Route 4","story",15,["Dopo Mt. Moon raccogli TM05 Roar.","Entra a Cerulean."],"Spearow, Rattata, Ekans/Sandshrew, Mankey in alcune versioni","Lv 8–12","Mankey può essere una risposta eccellente a Misty solo indirettamente: è soprattutto utile più avanti."],
["Cerulean City","story",18,["Affronta Misty.","Segui il Rocket Grunt a nord.","Visita Route 24/25 e casa di Bill."],"Poliwag/Psyduck/Magikarp tramite pesca","Lv 5–15","Starmie Lv 21 è il vero picco della palestra."],
["Route 24 / Route 25","story",18,["Sconfiggi il Nugget Bridge.","Aiuta Bill e ottieni il biglietto per la S.S. Anne.","Raccogli TM45 Attract."],"Oddish/Bellsprout, Caterpie/Weedle, Pidgey, Abra","Lv 8–14","Abra è forte ma richiede pazienza: catturarlo è la parte difficile."],
["Vermilion City / S.S. Anne","story",20,["Esplora la S.S. Anne.","Ottieni HM01 Cut.","Affronta Lt. Surge dopo aver attivato il puzzle della palestra."],"Diglett nella Diglett's Cave","Lv 15–22","Diglett può essere una risposta molto forte a Lt. Surge."],
["Route 9 / Route 10","story",22,["Supera gli allenatori.","Attraversa Rock Tunnel.","Porta Flash se vuoi facilitarti l'esplorazione."],"Rattata, Spearow, Ekans/Sandshrew, Voltorb in alcune zone","Lv 14–22","Non avere fretta: gli allenatori iniziano a salire di livello."],
["Rock Tunnel","story",25,["Attraversa la grotta.","Flash è consigliata ma non obbligatoria.","Arriva a Lavender Town."],"Zubat, Geodude, Machop, Onix, Mankey","Lv 15–22","Machop può diventare utile per il mid-game."],
["Lavender Town","story",25,["Visita Pokémon Tower quando la storia lo richiede.","Non puoi completare subito tutto: tornerai più avanti.","Prosegui verso Celadon/Fuchsia."],"Gastly, Cubone nella Pokémon Tower","Lv 13–25","Non sprecare tempo tentando di liberare subito la torre senza Silph Scope."],
["Celadon City","story",29,["Ottieni Eevee.","Esplora Department Store.","Completa Rocket Hideout.","Affronta Erika quando sei pronto.","Acquista le MT importanti al Game Corner se puoi."],"Eevee, Pokémon pescabili; Eevee è ottenibile come regalo","Lv variabili","Celadon è uno dei punti più importanti per costruire il team."],
["Fuchsia City / Safari Zone","story",35,["Completa Safari Zone.","Ottieni HM03 Surf e il Warden's Gold Teeth.","Affronta Koga.","Prendi gli oggetti rari della Safari Zone."],"Exeggcute, Rhyhorn, Tauros, Kangaskhan, Scyther/Pinsir, Dratini","Lv 22–32","Safari Zone è ricca di Pokémon importanti, ma catturarli richiede pazienza."],
["Saffron City / Silph Co.","story",38,["Salva Silph Co.","Ottieni la Master Ball.","Affronta il rivale e Team Rocket.","Affronta Sabrina."],"Abra/Kadabra nelle zone accessibili","Lv 15–35","Non usare la Master Ball a caso: è una risorsa unica nella run principale."],
["Cinnabar Island","story",42,["Esplora Pokémon Mansion per la chiave.","Affronta Blaine.","Completa la parte della storia sulle Sevii Islands quando richiesto."],"Ponyta/Rapidash; pesca","Lv 28–40","Acqua e Terra sono ottimi contro Blaine."],
["Seafoam Islands","story",42,["Attraversa la grotta oppure usa un percorso alternativo.","Ottieni accesso a Cinnabar/Vermilion a seconda del percorso.","Puoi incontrare Articuno."],"Tentacool, Tentacruel, Seel, Dewgong, Slowpoke, Psyduck","Lv 25–40","Articuno è opzionale ma molto forte per la storia."],
["Viridian City / Gym","story",45,["Affronta Giovanni.","Ottieni TM26 Earthquake.","Con l'ottavo badge puoi affrontare Victory Road."],"—","—","Acqua/Erba/Ghiaccio coprono bene i Pokémon Terra di Giovanni."],
["Victory Road","story",50,["Usa Forza e gli altri HM necessari.","Raccogli TM02 Dragon Claw e TM50 Overheat.","Prepara la squadra per la Lega."],"Machoke, Graveler, Onix, Rhyhorn, Golbat, Moltres opzionale","Lv 40–48","È il momento di stabilizzare il team, non di aggiungere troppi Pokémon nuovi."],
["Pokémon League","story",55,["Compra cure e status heal.","Salva prima di entrare.","Preparati a cinque battaglie consecutive."],"—","—","Un team intorno a Lv 50–55 può farcela; 55–60 rende la run più confortevole."],
["Sevii Islands / post-game","optional",60,["Completa le missioni post-game.","Sblocca il National Pokédex quando richiesto.","Accedi alle aree e agli incontri aggiuntivi."],"Molti Pokémon aggiuntivi","Variabili","La composizione degli Elite Four cambia dopo gli eventi post-game."],
];

const gyms=[
{name:"Brock",city:"Pewter City",type:"Roccia",badge:"Boulder",level:14,team:[["Geodude",12],["Onix",14]],weak:"Acqua • Erba • Lotta • Terra",strategy:"Lo starter Acqua o Erba rende lo scontro semplice. Se hai Charmander, allenati e usa una risposta Lotta o un Pokémon catturato apposta.",tm:"TM39 Rock Tomb"},
{name:"Misty",city:"Cerulean City",type:"Acqua",badge:"Cascade",level:21,team:[["Staryu",18],["Starmie",21]],weak:"Elettro • Erba",strategy:"Starmie è veloce e sorprendentemente forte. Pikachu è ottimo, ma anche un buon Pokémon Erba funziona molto bene.",tm:"TM03 Water Pulse"},
{name:"Lt. Surge",city:"Vermilion City",type:"Elettro",badge:"Thunder",level:24,team:[["Voltorb",21],["Pikachu",18],["Raichu",24]],weak:"Terra",strategy:"Un Pokémon Terra può rendere inutili gli attacchi Elettro. Diglett della Diglett's Cave è una soluzione naturale.",tm:"TM34 Shock Wave"},
{name:"Erika",city:"Celadon City",type:"Erba",badge:"Rainbow",level:29,team:[["Victreebel",29],["Tangela",24],["Vileplume",29]],weak:"Fuoco • Volante • Ghiaccio • Coleottero • Veleno",strategy:"Fuoco e Volante sono le risposte più immediate. Evita di affidarti a un singolo Pokémon vulnerabile alle mosse di stato.",tm:"TM19 Giga Drain"},
{name:"Koga",city:"Fuchsia City",type:"Veleno",badge:"Soul",level:43,team:[["Koffing",37],["Muk",39],["Koffing",37],["Weezing",43]],weak:"Psico • Terra",strategy:"Psico e Terra sono le debolezze principali. Presta attenzione a Veleno e alle strategie che allungano lo scontro.",tm:"TM06 Toxic"},
{name:"Sabrina",city:"Saffron City",type:"Psico",badge:"Marsh",level:43,team:[["Mr. Mime",37],["Kadabra",38],["Venomoth",38],["Alakazam",43]],weak:"Buio • Spettro • Coleottero",strategy:"Alakazam è veloce e colpisce molto forte sullo Speciale. Un attaccante robusto o una buona copertura Buio/Spettro/Coleottero aiuta.",tm:"TM04 Calm Mind"},
{name:"Blaine",city:"Cinnabar Island",type:"Fuoco",badge:"Volcano",level:47,team:[["Growlithe",42],["Ponyta",40],["Rapidash",42],["Arcanine",47]],weak:"Acqua • Terra • Roccia",strategy:"Acqua è la soluzione più semplice. Non arrivare sottolivellato: Arcanine è il Pokémon più impegnativo.",tm:"TM38 Fire Blast"},
{name:"Giovanni",city:"Viridian City",type:"Terra",badge:"Earth",level:50,team:[["Rhyhorn",45],["Dugtrio",42],["Nidoqueen",44],["Nidoking",45],["Rhydon",50]],weak:"Acqua • Erba • Ghiaccio",strategy:"Acqua ed Erba coprono molto bene il team. Attenzione a Rhydon, il Pokémon di livello più alto.",tm:"TM26 Earthquake"}
];

const elite=[
["Lorelei","Ghiaccio/Acqua",[["Dewgong",54],["Cloyster",53],["Slowbro",54],["Jynx",56],["Lapras",56]],"Elettro • Erba • Lotta • Roccia","Gli Acqua richiedono Elettro/Erba; Jynx è vulnerabile a Fuoco/Roccia/Acciaio/Fantasma/Buio."],
["Bruno","Lotta/Roccia",[["Onix",51],["Hitmonchan",53],["Hitmonlee",53],["Onix",54],["Machamp",56]],"Acqua • Erba • Volante • Psico","I due Onix sono facili con Acqua/Erba; Machamp è il vero pericolo fisico."],
["Agatha","Spettro/Veleno",[["Gengar",54],["Golbat",54],["Haunter",53],["Arbok",56],["Gengar",58]],"Psico • Terra • Buio • Spettro","Evita di affidarti solo a mosse Normali contro i suoi Spettri: in Gen III Spettro e Normale hanno interazioni particolari."],
["Lance","Drago/Volante",[["Gyarados",56],["Dragonair",54],["Dragonair",54],["Aerodactyl",58],["Dragonite",60]],"Elettro • Ghiaccio • Roccia","Ghiaccio è eccezionale contro Dragonair/Dragonite. Attenzione ad Aerodactyl e alla velocità."],
["Campione / Rivale","Misto",[["Pidgeot",59],["Alakazam",57],["Rhydon",59],["Exeggutor",59],["Gyarados",63],["Charizard",65]],"Dipende dallo starter scelto","La squadra esatta del rivale dipende dallo starter scelto. Prepara risposte a Volante, Psico, Terra, Erba, Acqua e Fuoco."]
];

const tms=[
["01","Focus Punch","Lotta",150,20,"Fisica","Silph Co. 5F",false],["02","Dragon Claw","Drago",80,15,"Fisica","Victory Road 1F",true],["03","Water Pulse","Acqua",60,20,"Speciale","Palestra di Misty",false],["04","Calm Mind","Psico","—",20,"Stato","Palestra di Sabrina",true],["05","Roar","Normale","—",20,"Stato","Route 4 / Celadon Department Store",false],["06","Toxic","Veleno","—",10,"Stato","Palestra di Koga",true],["07","Hail","Ghiaccio","—",10,"Stato","Victory Road 2F",false],["08","Bulk Up","Lotta","—",20,"Stato","Silph Co. 7F",true],["09","Bullet Seed","Erba",25,30,"Fisica","Mt. Moon",false],["10","Hidden Power","Normale",60,15,"Speciale","Pickup (5%)",false],["11","Sunny Day","Fuoco","—",5,"Stato","Safari Zone Area 1",false],["12","Taunt","Buio","—",20,"Stato","Rocket Hideout B2F",false],["13","Ice Beam","Ghiaccio",90,10,"Speciale","Celadon Game Corner",true],["14","Blizzard","Ghiaccio",110,5,"Speciale","Pokémon Mansion B1F",false],["15","Hyper Beam","Normale",150,5,"Speciale","Celadon Department Store",false],["16","Light Screen","Psico","—",30,"Stato","Celadon Department Store / tetto",false],["17","Protect","Normale","—",10,"Stato","Power Plant",false],["18","Rain Dance","Acqua","—",5,"Stato","Route 15",false],["19","Giga Drain","Erba",75,10,"Speciale","Palestra di Erika",true],["20","Safeguard","Normale","—",25,"Stato","Celadon Department Store / tetto",false],["21","Frustration","Normale","—",20,"Fisica","Rocket Hideout B3F",false],["22","Solar Beam","Erba",120,10,"Speciale","Pokémon Mansion B1F",true],["23","Iron Tail","Acciaio",100,15,"Fisica","Celadon Game Corner",false],["24","Thunderbolt","Elettro",90,15,"Speciale","Celadon Game Corner",true],["25","Thunder","Elettro",110,10,"Speciale","Power Plant",false],["26","Earthquake","Terra",100,10,"Fisica","Palestra di Giovanni",true],["27","Return","Normale","—",20,"Fisica","Route 12",true],["28","Dig","Terra",80,10,"Fisica","Cerulean / Celadon Department Store",true],["29","Psychic","Psico",90,10,"Speciale","Saffron City",true],["30","Shadow Ball","Spettro",80,15,"Speciale","Celadon Game Corner",true],["31","Brick Break","Lotta",75,15,"Fisica","S.S. Anne / Celadon Department Store",true],["32","Double Team","Normale","—",15,"Stato","Safari Zone",false],["33","Reflect","Psico","—",20,"Stato","Celadon Department Store",false],["34","Shock Wave","Elettro",60,20,"Speciale","Palestra di Lt. Surge",true],["35","Flamethrower","Fuoco",90,15,"Speciale","Celadon Game Corner",true],["36","Sludge Bomb","Veleno",90,10,"Fisica","Rocket Warehouse",true],["37","Sandstorm","Roccia","—",10,"Stato","Victory Road",false],["38","Fire Blast","Fuoco",110,5,"Speciale","Palestra di Blaine",false],["39","Rock Tomb","Roccia",60,15,"Fisica","Palestra di Brock",false],["40","Aerial Ace","Volante",60,20,"Fisica","Route 9",true],["41","Torment","Buio","—",15,"Stato","Silph Co. 4F",false],["42","Facade","Normale",70,20,"Fisica","Memorial Pillar",true],["43","Secret Power","Normale",70,20,"Fisica","Route 24 / Celadon Department Store",false],["44","Rest","Psico","—",5,"Stato","S.S. Anne",false],["45","Attract","Normale","—",15,"Stato","Route 24 / Celadon Department Store",false],["46","Thief","Buio",60,25,"Fisica","Mt. Moon",true],["47","Steel Wing","Acciaio",70,25,"Fisica","Safari Zone Area 2",false],["48","Skill Swap","Psico","—",10,"Stato","Route 12",false],["49","Snatch","Buio","—",10,"Stato","Rocket Hideout B4F",false],["50","Overheat","Fuoco",130,5,"Speciale","Victory Road 3F",true]
];
const hms=[["HM01","Cut","Normale","Taglia piccoli alberi; indispensabile in vari punti."],["HM02","Fly","Volante","Permette di viaggiare rapidamente tra città già visitate."],["HM03","Surf","Acqua","Indispensabile per moltissime aree e per esplorare via acqua."],["HM04","Strength","Normale","Sposta massi; necessaria in Victory Road e altre aree."],["HM05","Flash","Normale","Illumina Rock Tunnel; utile ma non strettamente obbligatoria."],["HM06","Rock Smash","Lotta","Utilità e accesso ad alcune aree/oggetti; non è richiesta per la storia principale in modo uniforme."],["HM07","Waterfall","Acqua","Utilità soprattutto nel post-game/Sevii Islands."]];

const typeChart={
Normale:["Lotta"],Fuoco:["Acqua","Terra","Roccia"],Acqua:["Elettro","Erba"],Elettro:["Terra"],Erba:["Fuoco","Ghiaccio","Veleno","Volante","Coleottero"],Ghiaccio:["Fuoco","Lotta","Roccia","Acciaio"],Lotta:["Volante","Psico"],Veleno:["Terra","Psico"],Terra:["Acqua","Erba","Ghiaccio"],Volante:["Elettro","Ghiaccio","Roccia"],Psico:["Coleottero","Spettro","Buio"],Coleottero:["Fuoco","Volante","Roccia"],Roccia:["Acqua","Erba","Lotta","Terra","Acciaio"],Spettro:["Spettro","Buio"],Drago:["Ghiaccio","Drago"],Buio:["Lotta","Coleottero"],Acciaio:["Fuoco","Lotta","Terra"]};
const types=["Normale","Fuoco","Acqua","Elettro","Erba","Ghiaccio","Lotta","Veleno","Terra","Volante","Psico","Coleottero","Roccia","Spettro","Drago","Buio","Acciaio"];
const starters=new Set(["bulbasaur","charmander","squirtle"]);
const legendary=new Set(["articuno","zapdos","moltres","mewtwo","mew"]);
const tradeLike=new Set(["alakazam","machamp","golem","gengar"]);
const evoOnly=new Set(["ivysaur","venusaur","charmeleon","charizard","wartortle","blastoise","butterfree","beedrill","pidgeotto","pidgeot","raticate","fearow","arbok","raichu","sandslash","nidoqueen","nidoking","clefable","ninetales","wigglytuff","golbat","vileplume","parasect","venomoth","dugtrio","persian","golduck","primeape","arcanine","poliwhirl","poliwrath","kadabra","alakazam","machoke","machamp","weepinbell","victreebel","tentacruel","graveler","golem","rapidash","slowbro","magneton","dodrio","dewgong","muk","cloyster","haunter","gengar","hypno","kingler","electrode","exeggutor","marowak","rhydon","seadra","seaking","starmie","dragonair","dragonite"]);

const routeStateKey="pokeguida_route_v2", teamKey="pokeguida_team_v2", checkKey="pokeguida_checks_v2", lastKey="pokeguida_last_v2";
let routeState=JSON.parse(localStorage.getItem(routeStateKey)||"{}");
let team=JSON.parse(localStorage.getItem(teamKey)||"[]");
let checks=JSON.parse(localStorage.getItem(checkKey)||"{}");
let cache={};

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function title(s){return s.replaceAll("-"," ").replace(/\b\w/g,c=>c.toUpperCase());}
function toast(s){const t=document.getElementById("toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1700);}
function save(){localStorage.setItem(routeStateKey,JSON.stringify(routeState));localStorage.setItem(teamKey,JSON.stringify(team));localStorage.setItem(checkKey,JSON.stringify(checks));}
function sprite(id){return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/${id}.png`;}
function renderHome(){
 if(!document.getElementById("homeProgress")) return;
 const done=areas.filter(a=>routeState[a[0]]).length, pct=Math.round(done/areas.length*100);
 document.getElementById("homeProgress").style.width=pct+"%";document.getElementById("progressText").textContent=`${done}/${areas.length} aree principali completate (${pct}%).`;
 document.getElementById("whereSelect").innerHTML=areas.map((a,i)=>`<option value="${i}">${i+1}. ${a[0]}</option>`).join("");
 document.getElementById("whereSelect").value=localStorage.getItem("current_area")||"0";
 updateAdvice();
 document.getElementById("homeTeam").innerHTML=team.length?team.map(n=>`<span class="chip">${title(n)}</span>`).join(" "):'<span class="muted">Nessun Pokémon salvato.</span>';
 document.getElementById("quickRoute").innerHTML=areas.slice(0,12).map((a,i)=>`<div class="route ${routeState[a[0]]?"done":""}" style="margin:6px 0"><div class="n">${i+1}</div><div><h3>${a[0]}</h3><p class="small">${a[5]} • consigliato Lv ${a[2]}</p></div><div><a class="button alt small" href="adventure.html">Apri</a></div></div>`).join("");
}
function updateAdvice(){
 const i=+document.getElementById("whereSelect").value;localStorage.setItem("current_area",String(i));const a=areas[i], next=areas[i+1];
 document.getElementById("nextAdvice").innerHTML=next?`<b>Adesso:</b> ${esc(a[0])}.<br><b>Prossima destinazione:</b> ${esc(next[0])}.<br><span class="small">Livello indicativo: ${next[2]}. ${esc(next[6])}</span>`:`Hai raggiunto la fine del percorso principale. Preparati per il post-game!`;
}


function renderAreas(){
 const q=(document.getElementById("areaSearch").value||"").toLowerCase(), f=document.getElementById("areaFilter").value, lv=document.getElementById("areaLevel").value;
 const list=areas.filter(a=>(!q||a[0].toLowerCase().includes(q)||a[3].toLowerCase().includes(q))&&(f==="all"||a[1]===f)&&(lv==="all"||(+a[2]>=+lv.split("-")[0]&&+a[2]<=+lv.split("-")[1])));
 document.getElementById("areaList").innerHTML=list.map((a)=>{const i=areas.indexOf(a),done=!!routeState[a[0]];return `<article class="route ${done?"done":""}"><div class="n">${i+1}</div><div><h3>${esc(a[0])}</h3><p><span class="badge">Livello ${a[2]}</span> <span class="badge">${esc(a[1])}</span></p><p class="small"><b>Cosa fare:</b> ${a[3].map(esc).join(" • ")}</p><p class="small"><b>Selvatici:</b> ${esc(a[4])} · <b>Livelli:</b> ${esc(a[5])}</p><p class="small"><b>Consiglio:</b> ${esc(a[6])}</p></div><div class="route-actions"><button onclick="toggleArea(${i})">${done?"✓ Completata":"Segna completata"}</button>${i>0?`<a class="button alt" href="adventure.html" onclick="setTimeout(()=>focusArea(${i-1}),0)">←</a>`:""}${i<areas.length-1?`<a class="button alt" href="adventure.html" onclick="setTimeout(()=>focusArea(${i+1}),0)">→</a>`:""}</div></article>`}).join("")||'<div class="card">Nessuna area trovata.</div>';
}
function focusArea(i){document.querySelectorAll("#areaList .route")[Math.max(0,i)]?.scrollIntoView({behavior:"smooth",block:"center"});}
function toggleArea(i){routeState[areas[i][0]]=!routeState[areas[i][0]];save();renderAreas();renderHome();toast(routeState[areas[i][0]]?"Area completata ✓":"Area riaperta");}



async function api(url){
 if(cache[url])return cache[url];
 const r=await fetch(url,{cache:"no-store",headers:{Accept:"application/json"}});
 if(!r.ok)throw new Error("HTTP "+r.status);
 const v=await r.json();cache[url]=v;return v;
}
async function initTypes(){
 const keyForLabel=t=>Object.entries(typeIt).find(([k,v])=>v===t)?.[0]||t.toLowerCase();
 for(const id of ["typeFilter","moveType","teamAddType"]){const el=document.getElementById(id);if(el)el.innerHTML='<option value="all">Tutti i tipi</option>'+types.map(t=>`<option value="${keyForLabel(t)}">${t}</option>`).join("");}
 const tm=document.getElementById("tmType");if(tm)tm.innerHTML='<option value="all">Tutti i tipi</option>'+types.map(t=>`<option value="${t}">${t}</option>`).join("");
}

const allNames=["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr-mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew"];

function nameId(n){return allNames.indexOf(n)+1;}

let pokedexData=[];
const POKE_CACHE_KEY='pokeguida_pokedex_api_v7';
async function getItalianNamesBatch(items){
 for(let i=0;i<items.length;i+=10){
  const batch=await Promise.all(items.slice(i,i+10).map(async x=>{try{const sp=await api(BASE+'pokemon-species/'+x.name);return [x.name,itNameFromNames(sp)]}catch{return [x.name,nameItFallback[x.name]||title(x.name)]}}));
  const map=new Map(batch);items.forEach(x=>{x.itName=map.get(x.name)||title(x.name)});renderPokedex();
 }
}
function renderPokedex(){
 const list=document.getElementById('pokeList');if(!list)return;
 const q=(document.getElementById('pokeSearch').value||'').toLowerCase().trim(),typ=document.getElementById('typeFilter').value,sp=document.getElementById('specialFilter').value;
 if(!pokedexData.length){list.innerHTML='<div class="card"><b>⏳ Caricamento Pokédex...</b><p class="muted">Sto leggendo i dati reali da PokéAPI.</p></div>';return;}
 const arr=pokedexData.filter(x=>{const hay=`${x.itName||x.name} ${x.name} ${x.id}`.toLowerCase();if(q&&!hay.includes(q)&&!String(x.id).padStart(3,'0').includes(q))return false;if(typ!=='all'&&!x.types.includes(typ))return false;if(sp==='starter'&&!starters.has(x.name))return false;if(sp==='legendary'&&!legendary.has(x.name))return false;if(sp==='evolution'&&!evoOnly.has(x.name))return false;if(sp==='trade'&&!tradeLike.has(x.name))return false;return true;});
 list.innerHTML=arr.map(x=>`<div class="poke" onclick="openPoke('${x.name}')"><img loading="lazy" src="${x.sprite}" alt="${esc(x.itName||title(x.name))}"><div class="num">#${String(x.id).padStart(3,'0')}</div><b>${esc(x.itName||title(x.name))}</b><div class="chips">${x.types.map(t=>`<span class="chip">${esc(typeIt[t]||title(t))}</span>`).join('')}</div><div style="text-align:center;margin-top:5px"><span class="small muted">Apri scheda →</span></div></div>`).join('')||'<div class="card">Nessun Pokémon trovato.</div>';
}
async function loadPokedexFromApi(){
 const list=document.getElementById('pokeList');if(!list)return;
 try{
  const saved=localStorage.getItem(POKE_CACHE_KEY);
  if(saved){try{const parsed=JSON.parse(saved);if(Array.isArray(parsed)&&parsed.length===151&&parsed.every(x=>x.itName&&x.sprite)){pokedexData=parsed;renderPokedex();return;}}catch{}}
  list.innerHTML='<div class="card"><b>⏳ Caricamento dei 151 Pokémon di Kanto...</b><p class="muted">Scarico i dati a piccoli blocchi.</p></div>';pokedexData=[];
  for(let start=0;start<151;start+=8){const ids=Array.from({length:Math.min(8,151-start)},(_,j)=>start+j+1);const batch=await Promise.all(ids.map(async id=>{const p=await api(BASE+'pokemon/'+id);return {id:p.id,name:p.name,itName:nameItFallback[p.name]||title(p.name),types:p.types.map(t=>t.type.name),sprite:p.sprites.versions?.['generation-iii']?.['firered-leafgreen']?.front_default||sprite(p.id)}}));pokedexData.push(...batch);pokedexData.sort((a,b)=>a.id-b.id);renderPokedex();list.dataset.loaded=String(pokedexData.length);}
  await getItalianNamesBatch(pokedexData);localStorage.setItem(POKE_CACHE_KEY,JSON.stringify(pokedexData));renderPokedex();
 }catch(e){console.error(e);list.innerHTML=`<div class="card"><b>⚠️ Impossibile caricare PokéAPI.</b><p class="muted">${esc(e.message)}. Controlla la connessione.</p><button onclick="loadPokedexFromApi()">Riprova</button></div>`;}
}

/* ---------- FireRed / LeafGreen helpers ---------- */
const V7='7.0.0';
const BASE='https://pokeapi.co/api/v2/';
const GEN3_VERSION_GROUP='firered-leafgreen';
const evoItemIt={
  'fire-stone':'Pietrafocaia','water-stone':'Pietraidrica','thunder-stone':'Pietratuono','leaf-stone':'Pietrafoglia','moon-stone':'Pietralunare','sun-stone':'Pietrasolare',
  'metal-coat':'Metalcoperta','king-s-rock':'Roccia di Re','dragon-scale':'Squama Drago','upgrade':'Upgrade'
};
const evolutionOverrides={
  charmander:[{to:'charmeleon',text:'🆙 Livello 16'}],charmeleon:[{to:'charizard',text:'🆙 Livello 36'}],
  squirtle:[{to:'wartortle',text:'🆙 Livello 16'}],wartortle:[{to:'blastoise',text:'🆙 Livello 36'}],
  bulbasaur:[{to:'ivysaur',text:'🆙 Livello 16'}],ivysaur:[{to:'venusaur',text:'🆙 Livello 32'}],
  caterpie:[{to:'metapod',text:'🆙 Livello 7'}],metapod:[{to:'butterfree',text:'🆙 Livello 10'}],
  weedle:[{to:'kakuna',text:'🆙 Livello 7'}],kakuna:[{to:'beedrill',text:'🆙 Livello 10'}],
  pidgey:[{to:'pidgeotto',text:'🆙 Livello 18'}],pidgeotto:[{to:'pidgeot',text:'🆙 Livello 36'}],
  rattata:[{to:'raticate',text:'🆙 Livello 20'}],spearow:[{to:'fearow',text:'🆙 Livello 20'}],ekans:[{to:'arbok',text:'🆙 Livello 22'}],
  pikachu:[{to:'raichu',text:'🪨 Pietratuono'}],sandshrew:[{to:'sandslash',text:'🆙 Livello 22'}],
  'nidoran-f':[{to:'nidorina',text:'🆙 Livello 16'}],nidorina:[{to:'nidoqueen',text:'🪨 Pietralunare'}],
  'nidoran-m':[{to:'nidorino',text:'🆙 Livello 16'}],nidorino:[{to:'nidoking',text:'🪨 Pietralunare'}],
  clefairy:[{to:'clefable',text:'🪨 Pietralunare'}],vulpix:[{to:'ninetales',text:'🪨 Pietrafocaia'}],
  jigglypuff:[{to:'wigglytuff',text:'🪨 Pietralunare'}],zubat:[{to:'golbat',text:'🆙 Livello 22'}],
  oddish:[{to:'gloom',text:'🆙 Livello 21'}],gloom:[{to:'vileplume',text:'🪨 Pietrafoglia'},{to:'bellossom',text:'🪨 Pietrasolare • post-National Dex'}],
  paras:[{to:'parasect',text:'🆙 Livello 24'}],venonat:[{to:'venomoth',text:'🆙 Livello 31'}],diglett:[{to:'dugtrio',text:'🆙 Livello 26'}],
  meowth:[{to:'persian',text:'🆙 Livello 28'}],psyduck:[{to:'golduck',text:'🆙 Livello 33'}],mankey:[{to:'primeape',text:'🆙 Livello 28'}],
  growlithe:[{to:'arcanine',text:'🪨 Pietrafocaia'}],poliwag:[{to:'poliwhirl',text:'🆙 Livello 25'}],
  poliwhirl:[{to:'poliwrath',text:'🪨 Pietraidrica'},{to:'politoed',text:'🔄 Scambio con Roccia di Re • post-National Dex'}],
  abra:[{to:'kadabra',text:'🆙 Livello 16'}],kadabra:[{to:'alakazam',text:'🔄 Scambio'}],machop:[{to:'machoke',text:'🆙 Livello 28'}],machoke:[{to:'machamp',text:'🔄 Scambio'}],
  bellsprout:[{to:'weepinbell',text:'🆙 Livello 21'}],weepinbell:[{to:'victreebel',text:'🪨 Pietrafoglia'}],
  tentacool:[{to:'tentacruel',text:'🆙 Livello 30'}],geodude:[{to:'graveler',text:'🆙 Livello 25'}],graveler:[{to:'golem',text:'🔄 Scambio'}],
  ponyta:[{to:'rapidash',text:'🆙 Livello 40'}],slowpoke:[{to:'slowbro',text:'🆙 Livello 37'},{to:'slowking',text:'🔄 Scambio con Roccia di Re • post-National Dex'}],
  magnemite:[{to:'magneton',text:'🆙 Livello 30'}],farfetchd:[],doduo:[{to:'dodrio',text:'🆙 Livello 31'}],seel:[{to:'dewgong',text:'🆙 Livello 34'}],
  grimer:[{to:'muk',text:'🆙 Livello 38'}],shellder:[{to:'cloyster',text:'🪨 Pietraidrica'}],gastly:[{to:'haunter',text:'🆙 Livello 25'}],haunter:[{to:'gengar',text:'🔄 Scambio'}],
  onix:[{to:'steelix',text:'🔄 Scambio con Metalcoperta • post-National Dex'}],drowzee:[{to:'hypno',text:'🆙 Livello 26'}],krabby:[{to:'kingler',text:'🆙 Livello 28'}],
  voltorb:[{to:'electrode',text:'🆙 Livello 30'}],exeggcute:[{to:'exeggutor',text:'🪨 Pietrafoglia'}],cubone:[{to:'marowak',text:'🆙 Livello 28'}],
  koffing:[{to:'weezing',text:'🆙 Livello 35'}],rhyhorn:[{to:'rhydon',text:'🆙 Livello 42'}],chansey:[{to:'blissey',text:'❤️ Felicità alta + livello • post-National Dex'}],
  horsea:[{to:'seadra',text:'🆙 Livello 32'}],seadra:[{to:'kingdra',text:'🔄 Scambio con Squama Drago • post-National Dex'}],goldeen:[{to:'seaking',text:'🆙 Livello 33'}],staryu:[{to:'starmie',text:'🪨 Pietraidrica'}],
  scyther:[{to:'scizor',text:'🔄 Scambio con Metalcoperta • post-National Dex'}],magikarp:[{to:'gyarados',text:'🆙 Livello 20'}],
  eevee:[{to:'vaporeon',text:'🪨 Pietraidrica'},{to:'jolteon',text:'🪨 Pietratuono'},{to:'flareon',text:'🪨 Pietrafocaia'}],
  porygon:[{to:'porygon2',text:'🔄 Scambio con Upgrade • post-National Dex'}],omanyte:[{to:'omastar',text:'🆙 Livello 40'}],kabuto:[{to:'kabutops',text:'🆙 Livello 40'}],
  dratini:[{to:'dragonair',text:'🆙 Livello 30'}],dragonair:[{to:'dragonite',text:'🆙 Livello 55'}]
};
const specialObtain={
  bulbasaur:'🎁 Starter a scelta del Professor Oak',charmander:'🎁 Starter a scelta del Professor Oak',squirtle:'🎁 Starter a scelta del Professor Oak',
  eevee:'🎁 Regalo in Celadon Mansion',hitmonlee:'🎁 Ricompensa dal Dojo di Saffron: scegli Hitmonlee o Hitmonchan',hitmonchan:'🎁 Ricompensa dal Dojo di Saffron: scegli Hitmonlee o Hitmonchan',
  lapras:'🎁 Regalo da un dipendente di Silph Co.',snorlax:'🗺️ Incontro fisso su Route 12 o Route 16',omanyte:'🪨 Fossile Helix: risveglio a Cinnabar Island',kabuto:'🪨 Fossile Dome: risveglio a Cinnabar Island',aerodactyl:'🪨 Old Amber: risveglio a Cinnabar Island',
  porygon:'🎟️ Premio del Game Corner di Celadon',
  'farfetchd':'🔄 Scambio in-game a Vermilion City (per Spearow)',
  'mr-mime':'🔄 Scambio in-game a Route 2 (per Abra)',
  jynx:'🔄 Scambio in-game a Cerulean City (per Poliwhirl)',
  lickitung:'🔄 Scambio in-game a Route 18 (per Golduck)',
  'hitmonlee':'🎁 Dojo Lotta di Saffron City', 'hitmonchan':'🎁 Dojo Lotta di Saffron City'
};
const localEvolutionNotes={
  eevee:'In FireRed non esistono giorno/notte: Espeon e Umbreon non sono evoluzioni ottenibili normalmente nella cartuccia.',
  golbat:'Crobat richiede il National Pokédex in FireRed/LeafGreen.',chansey:'Blissey richiede il National Pokédex in FireRed/LeafGreen.',
  onix:'Steelix richiede National Pokédex e scambio tenendo Metalcoperta.',scyther:'Scizor richiede National Pokédex e scambio tenendo Metalcoperta.',
  seadra:'Kingdra richiede National Pokédex e scambio tenendo Squama Drago.',porygon:'Porygon2 richiede National Pokédex e scambio tenendo Upgrade.'
};
const nameItFallback={
  'nidoran-f':'Nidoran♀','nidoran-m':'Nidoran♂','mr-mime':'Mr. Mime','farfetchd':'Farfetch’d','dewgong':'Dewgong','vileplume':'Vileplume','wigglytuff':'Wigglytuff'
};
function itNameFromNames(obj){return obj?.names?.find(x=>x.language?.name==='it')?.name||nameItFallback[obj?.name]||title(obj?.name||'');}
async function speciesItName(name){try{const s=await api(BASE+'pokemon-species/'+name);return itNameFromNames(s)}catch{return nameItFallback[name]||title(name)}}
function formatEvolutionDetails(details){
 if(!details)return 'Evoluzione';
 const parts=[];
 if(details.trigger?.name==='level-up'){
   if(details.min_level)parts.push(`🆙 Livello ${details.min_level}`); else parts.push('🆙 Salendo di livello');
   if(details.min_happiness)parts.push(`❤️ Felicità ≥ ${details.min_happiness}`);
   if(details.known_move)parts.push(`🎯 Con ${title(details.known_move.name)}`);
   if(details.held_item)parts.push(`🎁 Tenendo ${evoItemIt[details.held_item.name]||title(details.held_item.name)}`);
   if(details.time_of_day)parts.push(`🕐 ${details.time_of_day}`);
 } else if(details.trigger?.name==='use-item') parts.push(`🪨 ${evoItemIt[details.item?.name]||title(details.item?.name||'Pietra/oggetto')}`);
 else if(details.trigger?.name==='trade') parts.push(`🔄 Scambio${details.held_item?` con ${evoItemIt[details.held_item.name]||title(details.held_item.name)}`:''}`);
 else parts.push(title(details.trigger?.name||'Condizione speciale'));
 return parts.join(' • ');
}
function evolutionDetailsFromApi(node){
 const out=[];
 for(const e of (node.evolves_to||[])){
   const name=e.species.name;
   const details=(e.evolution_details||[]).filter(d=>{
     if(d.time_of_day)return false;
     if(['level-up','use-item','trade'].includes(d.trigger?.name))return true;
     return false;
   });
   for(const d of (details.length?details:[null]))out.push({to:name,text:formatEvolutionDetails(d)});
   out.push(...evolutionDetailsFromApi(e));
 }
 return out;
}
function speciesIdFromUrl(url){const m=String(url||'').match(/\/(\d+)\/?$/);return m?Number(m[1]):0;}
function chainNodes(node,depth=0,out=[]){out.push({name:node.species.name,depth});(node.evolves_to||[]).forEach(x=>chainNodes(x,depth+1,out));return out;}
function renderEvolutionTree(node,fromName){
 if(!node)return '';
 const nodes=(node.evolves_to||[]).map(child=>{
   const childName=child.species.name;
   const details=(child.evolution_details||[]).filter(d=>['level-up','use-item','trade'].includes(d.trigger?.name) && !d.time_of_day);
   const override=(evolutionOverrides[node.species.name]||[]).find(x=>x.to===childName);
   const text=override?.text || (details.length?details.map(formatEvolutionDetails).join(' / '):'Condizione speciale');
   return `<div class="evo-branch"><div class="evo-condition">${esc(text)}</div><button class="evo-node ${childName===fromName?'current':''}" onclick="openPoke('${childName}')"><img src="${sprite(speciesIdFromUrl(child.species.url)||nameId(childName))}" alt=""><span>${esc(nameItFallback[childName]||title(childName))}</span></button>${renderEvolutionTree(child,childName)}</div>`;
 }).join('');
 return nodes?`<div class="evo-children">${nodes}</div>`:'';
}
function renderEvolutionSection(chain, current){
 const root=chain?.chain;if(!root)return '<p class="muted">Catena evolutiva non disponibile.</p>';
 const flat=chainNodes(root).map(x=>x.name);
 const currentIndex=flat.indexOf(current);
 const prev=[];
 function findPrev(node){for(const child of (node.evolves_to||[])){if(child.species.name===current)return node.species.name;const p=findPrev(child);if(p)return p;}return null}
 const p=findPrev(root); if(p)prev.push(p);
 const note=localEvolutionNotes[current]?`<div class="notice">${esc(localEvolutionNotes[current])}</div>`:'';
 return `${note}<div class="evo-root"><button class="evo-node ${root.species.name===current?'current':''}" onclick="openPoke('${root.species.name}')"><img src="${sprite(speciesIdFromUrl(root.species.url)||nameId(root.species.name))}" alt=""><span>${esc(nameItFallback[root.species.name]||title(root.species.name))}</span></button></div>${renderEvolutionTree(root,root.species.name)}<p class="small muted">${currentIndex>=0?`Questa specie è nella catena evolutiva #${currentIndex+1}.`:''}</p>`;
}
function encounterLabel(method){const m=method?.name||'';return ({'walk-in-grass':'🌿 Erba','surf':'🌊 Surf','old-rod':'🎣 Vecchio Amo','good-rod':'🎣 Amo Buono','super-rod':'🎣 Super Amo','rock-smash':'🪨 Spaccaroccia','headbutt':'🌳 Albero'}[m]||`📍 ${title(m)}`);}
async function loadEncounters(name){
 try{
   const data=await api(BASE+'pokemon/'+name+'/encounters');
   const rows=[];
   for(const loc of data){const vd=loc.version_details?.find(v=>v.version?.name==='firered');if(!vd)continue;for(const e of vd.encounter_details||[]){rows.push({location:loc.location_area?.name?.replace(/-/g,' ')||'Area sconosciuta',method:encounterLabel(e.method),min:e.min_level,max:e.max_level,chance:e.chance})}}
   return rows;
 }catch{return []}
}
function formatLocationName(n){return title(n).replace(/\bMt Moon\b/,'Mt. Moon').replace(/\bRoute\b/,'Percorso').replace(/\bPokemon\b/,'Pokémon');}
async function openPoke(n){
 const d=document.getElementById('pokeDetail'); if(!d){location.href='pokedex.html?pokemon='+encodeURIComponent(n);return;}
 d.style.display='block';d.innerHTML=`<div class="loading"><b>⏳ Caricamento ${esc(nameItFallback[n]||title(n))}...</b><p class="muted">Dati Pokémon, evoluzioni e incontri FireRed.</p></div>`;d.scrollIntoView({behavior:'smooth',block:'start'});
 try{
  const [p,s]=await Promise.all([api(BASE+'pokemon/'+n),api(BASE+'pokemon-species/'+n)]);
  const chain=await api(s.evolution_chain.url);
  const itName=itNameFromNames(s);
  const abilities=(p.abilities||[]).filter(a=>!a.is_hidden).map(a=>title(a.ability.name)).join(', ')||'—';
  const vg=p.moves.flatMap(m=>m.version_group_details.filter(v=>v.version_group.name===GEN3_VERSION_GROUP).map(v=>({name:m.move.name,method:v.move_learn_method.name,level:v.level_learned_at,url:m.move.url}))).filter((m,i,a)=>a.findIndex(x=>x.name===m.name&&x.method===m.method&&x.level===m.level)===i);
  const level=vg.filter(m=>m.method==='level-up').sort((a,b)=>a.level-b.level);
  const tm=vg.filter(m=>m.method==='machine').sort((a,b)=>a.name.localeCompare(b.name));
  const stats=p.stats.map(x=>`<div class="stat"><span>${({hp:'PS','attack':'Attacco','defense':'Difesa','special-attack':'Att. Speciale','special-defense':'Dif. Speciale','speed':'Velocità'}[x.stat.name]||title(x.stat.name))}</span><b>${x.base_stat}</b></div>`).join('');
  const encounters=await loadEncounters(n);
  const special=specialObtain[n];
  const encounterHtml=encounters.length?`<div class="encounter-grid">${encounters.map(e=>`<div class="encounter"><b>${esc(formatLocationName(e.location))}</b><span>${esc(e.method)}</span><small>Lv. ${e.min===e.max?e.min:`${e.min}–${e.max}`} · ${e.chance}%</small></div>`).join('')}</div>`:'';
  const obtainHtml=(special||encounterHtml)?`${special?`<div class="notice"><b>🎁 Ottenimento speciale:</b> ${esc(special)}</div>`:''}${encounterHtml||'<p class="muted">Nessun incontro selvatico FireRed trovato nei dati PokéAPI.</p>'}`:'<p class="muted">Nessun dato di cattura disponibile.</p>';
  const moves=level.length?`<div class="scroll"><table><thead><tr><th>Lv.</th><th>Mossa</th><th>Tipo/Categoria</th></tr></thead><tbody>${level.map(m=>`<tr><td>${m.level}</td><td><button class="link-button" onclick="openMove('${m.name}')">${esc(title(m.name))}</button></td><td class="move-cell" data-move="${esc(m.name)}">—</td></tr>`).join('')}</tbody></table></div>`:'<p class="muted">Nessuna mossa di livello disponibile.</p>';
  const machines=tm.length?`<div class="chips">${tm.map(m=>`<button class="chip clickable" onclick="openMove('${m.name}')">${esc(title(m.name))}</button>`).join('')}</div>`:'<p class="muted">Nessuna MT/MN compatibile trovata.</p>';
  const flavor=s.flavor_text_entries?.find(x=>x.language?.name==='it'&&['firered','leafgreen'].includes(x.version?.name))?.flavor_text?.replace(/\f/g,' ') || s.flavor_text_entries?.find(x=>x.language?.name==='it')?.flavor_text?.replace(/\f/g,' ') || 'Descrizione non disponibile.';
  const role=`<p><b>⭐ Consiglio FireRed:</b> ${strategyHint(n,p.types.map(x=>x.type.name))}</p>`;
  d.innerHTML=`<div class="detail-head"><div><div class="small muted">Pokédex regionale</div><h2>#${String(p.id).padStart(3,'0')} ${esc(itName)}</h2><div class="chips">${p.types.map(x=>`<span class="chip">${esc(typeIt[x.type.name]||title(x.type.name))}</span>`).join('')}</div></div><img src="${sprite(p.id)}" alt="${esc(itName)}"></div>
  <div class="chips detail-badges"><span class="badge">🔥 FireRed / LeafGreen</span>${special?'<span class="badge">🎁 Ottenimento speciale</span>':''}${tradeLike.has(n)?'<span class="badge">🔄 Scambio/evoluzione speciale</span>':''}</div>
  <div class="two"><div><h3>📊 Statistiche base</h3>${stats}</div><div><h3>🧠 Informazioni</h3><p><b>Abilità Gen III:</b> ${esc(abilities)}</p><p><b>Descrizione:</b> ${esc(flavor)}</p>${role}</div></div>
  <h3>🧬 Evoluzione</h3><div class="card subtle">${renderEvolutionSection(chain,n)}</div>
  <h3>📍 Dove trovarlo in FireRed</h3><div class="card subtle">${obtainHtml}</div>
  <h3>📈 Mosse apprese salendo di livello</h3>${moves}
  <h3>💿 MT/MN compatibili</h3>${machines}
  <p class="small muted">Dati dinamici da PokéAPI; condizioni e disponibilità specifiche FireRed sono filtrate sulla Generazione III e integrate con note locali quando PokéAPI non distingue l'ottenimento in-game.</p>`;
  await enrichMoveCells(d);
 }catch(e){d.innerHTML=`<div class="card"><b>⚠️ Errore nel caricamento.</b><p class="muted">${esc(e.message)}</p><button onclick="openPoke('${n}')">Riprova</button></div>`;}
}
function strategyHint(n,types){
 const hints={charizard:'Molto utile in storia grazie a velocità e Attacco Speciale; evita Roccia e Acqua e sfrutta Fuoco/Volante.',venusaur:'Ottimo controllo di stato e buon equilibrio tra attacco speciale e resistenze.',blastoise:'Affidabile per la storia, soprattutto grazie a Surf e alla buona solidità.',pikachu:'Veloce e ottimo contro Acqua/Volante; Raichu è più immediato se hai già la Pietratuono.',nidoking:'Grande copertura offensiva grazie a MT e mosse di tipi diversi.',nidoqueen:'Più resistente di Nidoking e molto versatile con le MT.',alakazam:'Attaccante speciale eccezionale, ma richiede scambio per essere ottenuto.',machamp:'Ottimo Attaccante fisico e risposta ai tipi Normale/Roccia/Acciaio.',lapras:'Molto completo per la storia, con Acqua/Ghiaccio e ottima resistenza.',snorlax:'Enorme quantità di PS e ottima capacità di reggere gli scontri lunghi.',gengar:'Velocissimo e forte sul lato speciale; richiede scambio.',starmie:'Molto veloce e potente sullo Speciale, eccellente con Surf/Psichico.'};return hints[n]||`Usa il suo STAB ${types.map(t=>typeIt[t]||title(t)).join('/')} e costruisci il moveset attorno alle debolezze degli avversari.`;
}
async function enrichMoveCells(root){
 const cells=[...root.querySelectorAll('.move-cell')];
 for(const c of cells){const n=c.dataset.move;try{const m=await api(BASE+'move/'+n);c.textContent=`${typeIt[m.type.name]||title(m.type.name)} · ${moveCategory(m)}`;}catch{c.textContent='—';}}
}

let apiMoves=[];
const MOVES_CACHE_KEY='pokeguida_moves_api_v7';
const physicalTypes=new Set(['normal','fighting','flying','poison','ground','rock','bug','ghost','steel']);
const typeIt={normal:'Normale',fire:'Fuoco',water:'Acqua',electric:'Elettro',grass:'Erba',ice:'Ghiaccio',fighting:'Lotta',poison:'Veleno',ground:'Terra',flying:'Volante',psychic:'Psico',bug:'Coleottero',rock:'Roccia',ghost:'Spettro',dragon:'Drago',dark:'Buio',steel:'Acciaio'};
function moveCategory(m){if(m.damage_class?.name==='status')return 'Stato';return physicalTypes.has(m.type.name)?'Fisica':'Speciale';}
function moveItName(m){return m.names?.find(x=>x.language?.name==='it')?.name||title(m.name)}
function moveDescription(m){return m.flavor_text_entries?.find(x=>x.language?.name==='it'&&x.version_group?.name===GEN3_VERSION_GROUP)?.flavor_text?.replace(/\f/g,' ')||m.effect_entries?.find(x=>x.language?.name==='it')?.short_effect||m.effect_entries?.find(x=>x.language?.name==='en')?.short_effect||'Descrizione non disponibile.'}
function renderMoves(){const list=document.getElementById('moveList');if(!list)return;const q=(document.getElementById('moveSearch').value||'').toLowerCase().trim(),cat=document.getElementById('moveCat').value,typ=document.getElementById('moveType').value;if(!apiMoves.length){list.innerHTML='<div class="card"><b>⏳ Caricamento archivio mosse...</b><p class="muted">I dati vengono letti direttamente da PokéAPI.</p></div>';return;}const arr=apiMoves.filter(m=>(!q||m.name.includes(q)||(moveItName(m)||'').toLowerCase().includes(q))&&(cat==='all'||moveCategory(m).toLowerCase()===({physical:'fisica',special:'speciale',status:'stato'}[cat]))&&(typ==='all'||m.type.name===typ));list.innerHTML=arr.map(m=>`<div class="card clickable-card" onclick="openMove('${m.name}')"><h3>${esc(moveItName(m))}</h3><div class="chips"><span class="chip">${typeIt[m.type.name]||title(m.type.name)}</span><span class="chip">${moveCategory(m)}</span></div><div class="stat"><span>Potenza</span><b>${m.power??'—'}</b></div><div class="stat"><span>Precisione</span><b>${m.accuracy??'—'}</b></div><div class="stat"><span>PP</span><b>${m.pp??'—'}</b></div><p class="small muted">Gen III · tocca per dettagli</p></div>`).join('')||'<div class="card">Nessuna mossa trovata.</div>';}
async function loadMovesFromApi(){
 const list=document.getElementById('moveList');if(!list)return;
 try{
  const saved=localStorage.getItem(MOVES_CACHE_KEY);
  if(saved){try{const parsed=JSON.parse(saved);if(Array.isArray(parsed)&&parsed.length>=300&&parsed.every(x=>x.names||x.name)){apiMoves=parsed;renderMoves();return;}}catch{}}
  list.innerHTML='<div class="card"><b>⏳ Scarico le mosse Gen III…</b><p class="muted">Il primo caricamento è più lungo; poi i dati restano in cache.</p></div>';
  const index=await api(BASE+'move?limit=1000&offset=0');const refs=index.results.filter(x=>Number(x.url.split('/').filter(Boolean).pop())<=354);apiMoves=[];
  for(let i=0;i<refs.length;i+=8){const batch=await Promise.all(refs.slice(i,i+8).map(x=>api(x.url)));apiMoves.push(...batch);apiMoves.sort((a,b)=>a.id-b.id);list.innerHTML=`<div class="card"><b>⏳ Mosse caricate: ${apiMoves.length}/${refs.length}</b></div>`;}
  localStorage.setItem(MOVES_CACHE_KEY,JSON.stringify(apiMoves));renderMoves();
 }catch(e){console.error(e);list.innerHTML='<div class="card"><b>⚠️ Errore nel caricamento delle mosse.</b><p class="muted">Controlla la connessione e riprova.</p><button onclick="loadMovesFromApi()">Riprova</button></div>';}
}
async function openMove(n){
 const d=document.getElementById('moveDetail');if(!d){location.href='moves.html?move='+encodeURIComponent(n);return;}d.style.display='block';d.innerHTML='<b>⏳ Caricamento mossa...</b>';d.scrollIntoView({behavior:'smooth',block:'start'});
 try{const m=await api(BASE+'move/'+n);const it=moveItName(m);const desc=moveDescription(m);const learners=[];
  for(let i=0;i<allNames.length;i+=10){const batch=await Promise.all(allNames.slice(i,i+10).map(async name=>{try{const p=cache[BASE+'pokemon/'+name]||await api(BASE+'pokemon/'+name);return p.moves.some(x=>x.move.name===n&&x.version_group_details.some(v=>v.version_group.name===GEN3_VERSION_GROUP));}catch{return false}}));batch.forEach((ok,j)=>{if(ok)learners.push(allNames[i+j])});d.querySelector('.move-loading')?.replaceChildren(document.createTextNode(`Compatibilità controllate: ${Math.min(i+10,allNames.length)}/${allNames.length}`));}
  d.innerHTML=`<div class="detail-head"><div><div class="small muted">Mossa Generazione III</div><h2>${esc(it)}</h2><div class="chips"><span class="chip">${typeIt[m.type.name]||title(m.type.name)}</span><span class="chip">${moveCategory(m)}</span></div></div><div class="move-power"><b>${m.power??'—'}</b><span>Potenza</span></div></div><div class="two"><div><div class="stat"><span>Potenza</span><b>${m.power??'—'}</b></div><div class="stat"><span>Precisione</span><b>${m.accuracy??'—'}${m.accuracy?'%':''}</b></div><div class="stat"><span>PP</span><b>${m.pp??'—'}</b></div></div><div><h3>📖 Descrizione</h3><p>${esc(desc)}</p><p class="small muted">Tipo ${typeIt[m.type.name]||title(m.type.name)} · Categoria ${moveCategory(m)} secondo le regole Gen III.</p></div></div><h3>🐾 Pokémon che possono impararla in FireRed/LeafGreen</h3><div class="chips">${learners.map(n=>`<button class="chip clickable" onclick="openPoke('${n}')">${esc(nameItFallback[n]||title(n))}</button>`).join('')||'<span class="muted">Nessun Pokémon Kanto trovato.</span>'}</div>`;
 }catch(e){d.innerHTML=`<div class="card"><b>⚠️ Errore.</b><p>${esc(e.message)}</p></div>`}
}

function renderTMs(){
 const q=document.getElementById("tmSearch").value.toLowerCase(),typ=document.getElementById("tmType").value,imp=document.getElementById("tmImportant").value;
 document.getElementById("tmBody").innerHTML=tms.filter(x=>(!q||x.join(" ").toLowerCase().includes(q))&&(typ==="all"||x[2]===typ)&&(imp==="all"||x[7])).map(x=>`<tr class="clickable-row" onclick="openTM('${x[0]}')"><td><b>TM${x[0]}</b>${x[7]?'<br><span class="small">⭐ storia</span>':""}</td><td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td><td>${x[4]}</td><td>${x[5]}</td><td>${x[6]}</td></tr>`).join("");
 document.getElementById("hmList").innerHTML=hms.map(x=>`<div class="card"><h3>${x[0]} — ${x[1]}</h3><span class="chip">${x[2]}</span><p>${x[3]}</p></div>`).join("");
}
async function openTM(num){
 const d=document.getElementById('tmDetail');if(!d)return;const row=tms.find(x=>x[0]===String(num));if(!row)return;d.style.display='block';d.innerHTML=`<b>⏳ Caricamento ${esc('TM'+num+' — '+row[1])}...</b>`;d.scrollIntoView({behavior:'smooth',block:'start'});
 try{
   const idx=await api(BASE+'move?limit=1000&offset=0');const ref=idx.results.find(x=>x.name===row[1].toLowerCase().replaceAll(' ','-'));const m=ref?await api(ref.url):null;
   const learners=[];if(m){for(let i=0;i<allNames.length;i+=10){const batch=await Promise.all(allNames.slice(i,i+10).map(async name=>{try{const p=cache[BASE+'pokemon/'+name]||await api(BASE+'pokemon/'+name);return p.moves.some(x=>x.move.name===m.name&&x.version_group_details.some(v=>v.version_group.name===GEN3_VERSION_GROUP&&v.move_learn_method.name==='machine'));}catch{return false}}));batch.forEach((ok,j)=>{if(ok)learners.push(allNames[i+j])});}}
   d.innerHTML=`<div class="detail-head"><div><div class="small muted">MT FireRed / LeafGreen</div><h2>TM${row[0]} — ${esc(row[1])}</h2><div class="chips"><span class="chip">${esc(row[2])}</span><span class="chip">${esc(row[5])}</span></div></div><div class="move-power"><b>${row[3]}</b><span>Potenza</span></div></div><div class="two"><div><div class="stat"><span>PP</span><b>${row[4]}</b></div><div class="stat"><span>Categoria</span><b>${row[5]}</b></div><div class="stat"><span>Dove</span><b>${esc(row[6])}</b></div></div><div><h3>🎯 Compatibilità</h3><p>${learners.length} Pokémon Kanto possono impararla in FireRed/LeafGreen.</p></div></div><h3>🐾 Pokémon compatibili</h3><div class="chips">${learners.map(n=>`<button class="chip clickable" onclick="openPoke('${n}')">${esc(nameItFallback[n]||title(n))}</button>`).join('')||'<span class="muted">Nessun dato trovato.</span>'}</div>`;
 }catch(e){d.innerHTML=`<div class="card"><b>⚠️ Errore.</b><p>${esc(e.message)}</p></div>`}
}


function renderGyms(){
 const done=gyms.filter((_,i)=>checks["gym"+i]).length,pct=Math.round(done/8*100);document.getElementById("gymProgress").style.width=pct+"%";document.getElementById("gymProgressText").textContent=`${done}/8 palestre completate`;
 document.getElementById("gymList").innerHTML=gyms.map((g,i)=>`<article class="card"><div style="display:flex;justify-content:space-between;gap:10px"><div><h2>${i+1}. ${g.name}</h2><p class="muted">${g.city} • ${g.type} • Badge ${g.badge}</p></div><button class="${checks["gym"+i]?"good":""}" onclick="toggleGym(${i})">${checks["gym"+i]?"✓ Vinta":"Segna vinta"}</button></div><p><b>Squadra:</b> ${g.team.map(x=>`${x[0]} Lv.${x[1]}`).join(" • ")}</p><p><b>Debolezze:</b> <span class="success">${g.weak}</span></p><p><b>Strategia:</b> ${g.strategy}</p><p><b>Ricompensa:</b> ${g.tm}</p></article>`).join("");
 document.getElementById("eliteList").innerHTML=elite.map(e=>`<div class="card" style="margin:9px 0"><h3>${e[0]}</h3><p><b>Specialità:</b> ${e[1]}</p><p><b>Squadra:</b> ${e[2].map(x=>`${x[0]} Lv.${x[1]}`).join(" • ")}</p><p><b>Risposte:</b> ${e[3]}</p><p>${e[4]}</p></div>`).join("");
}
function toggleGym(i){checks["gym"+i]=!checks["gym"+i];save();renderGyms();renderChecklist();renderHome();toast(checks["gym"+i]?"Palestra completata ✓":"Palestra riaperta");}

function teamCard(n){const id=nameId(n);return `<div class="poke" onclick="addTeam('${n}')"><img loading="lazy" src="${sprite(id)}" alt="${title(n)}"><b>${title(n)}</b><div class="small" style="text-align:center">+ aggiungi</div></div>`}
function renderTeam(){
 const q=document.getElementById("teamSearch").value.toLowerCase(),typ=document.getElementById("teamAddType").value;
 document.getElementById("teamResults").innerHTML=allNames.filter(n=>n.includes(q)).filter(n=>typ==="all"||cache[n]?.types?.some(t=>t.type.name===typ)||!typ).slice(0,36).map(teamCard).join("");
 document.getElementById("teamSlots").innerHTML=Array.from({length:6},(_,i)=>{const n=team[i];return `<div class="card team-slot">${n?`<div><img src="${sprite(nameId(n))}" style="width:75px;height:75px;display:block;margin:auto"><h3 style="text-align:center">${title(n)}</h3></div><div class="team-actions"><button class="danger" onclick="removeTeam(${i})">Rimuovi</button><button class="button alt" onclick="selectCompare('${n}')">Confronta</button></div>`:`<div><h3>Slot ${i+1}</h3><p class="muted">Vuoto</p></div>`}</div>`}).join("");
 renderAnalysis();renderCompare();
}
async function addTeam(n){if(team.includes(n)){toast("Già nella squadra");return}if(team.length>=6){toast("La squadra è già completa");return}team.push(n);save();renderTeam();renderHome();toast(`${title(n)} aggiunto ✓`);await loadTeamData(n);}
function removeTeam(i){team.splice(i,1);save();renderTeam();renderHome();}
function loadTeamData(n){return api(`https://pokeapi.co/api/v2/pokemon/${n}`).then(p=>cache[n]=p).catch(()=>{});}
async function renderAnalysis(){
 const data=[];for(const n of team){let p=cache[n];if(!p)try{p=await api(`https://pokeapi.co/api/v2/pokemon/${n}`);cache[n]=p}catch{}if(p)data.push(p)}
 const present=new Set(data.flatMap(p=>p.types.map(t=>title(t.type.name)))), counts={};data.forEach(p=>p.types.forEach(t=>counts[title(t.type.name)]=(counts[title(t.type.name)]||0)+1));
 const coverage=new Set();data.forEach(p=>p.types.forEach(t=>(typeChart[title(t.type.name)]||[]).forEach(w=>coverage.add(w))));
 const common=[];const allWeak=types.filter(t=>data.length&&data.every(p=>(typeChart[t]||[]).includes(title(p.types[0].type.name)))); // indicatore semplice
 document.getElementById("teamAnalysis").innerHTML=team.length?`<p><b>Tipi presenti:</b> ${types.map(t=>`<span class="chip">${present.has(t)?"✅":"—"} ${t}${counts[t]?` (${counts[t]})`:""}</span>`).join(" ")}</p><p><b>Tipi utili da avere come attacchi:</b> ${[...coverage].map(t=>`<span class="chip">${t}</span>`).join(" ")||"—"}</p><p><b>Consiglio:</b> ${team.length<6?"Completa la squadra solo con ruoli che ti servono davvero.":"Controlla che almeno 4–5 tipi offensivi utili siano rappresentati e che non ci siano troppe debolezze condivise."}</p><p class="small muted">L'analisi è volutamente orientata alla storia e non sostituisce il calcolo competitivo.</p>`:"<p class=muted>Aggiungi Pokémon per vedere l'analisi.</p>";
}
function selectCompare(n){document.getElementById("compareA").value=n;renderCompare();}
function renderCompare(){
 const opts=['<option value="">Seleziona</option>',...allNames.map(n=>`<option value="${n}">${title(n)}</option>`)].join("");document.getElementById("compareA").innerHTML=opts;document.getElementById("compareB").innerHTML=opts;
 if(team[0])document.getElementById("compareA").value=team[0];if(team[1])document.getElementById("compareB").value=team[1];showCompare();
}
async function showCompare(){
 const a=document.getElementById("compareA").value,b=document.getElementById("compareB").value;if(!a||!b||a===b){document.getElementById("compareResult").innerHTML='<p class="muted">Scegli due Pokémon diversi.</p>';return}
 try{const [pa,pb]=await Promise.all([api(`https://pokeapi.co/api/v2/pokemon/${a}`),api(`https://pokeapi.co/api/v2/pokemon/${b}`)]);const rows=pa.stats.map((s,i)=>`<tr><td>${title(s.stat.name)}</td><td><b>${s.base_stat}</b></td><td><b>${pb.stats[i].base_stat}</b></td></tr>`).join("");document.getElementById("compareResult").innerHTML=`<div class="scroll"><table><thead><tr><th>Stat</th><th>${title(a)}</th><th>${title(b)}</th></tr></thead><tbody>${rows}</tbody></table></div><p><b>Tipi:</b> ${title(a)} = ${pa.types.map(x=>title(x.type.name)).join("/")} · ${title(b)} = ${pb.types.map(x=>title(x.type.name)).join("/")}</p><p class="tip"><b>Per la storia:</b> non scegliere solo dal totale delle statistiche. Considera disponibilità, livello a cui viene ottenuto, mosse e copertura del resto della squadra.</p>`}catch(e){document.getElementById("compareResult").textContent="Errore nel confronto."}
}


function renderChecklist(){
 const gymHTML=gyms.map((g,i)=>checkItem("gym"+i,`${i+1}. ${g.name} — Badge ${g.badge}`)).join("");
 const areaHTML=areas.map((a,i)=>checkItem("area"+i,`${i+1}. ${a[0]}`)).join("");
 const goals=[["goalOak","Completa il Pokédex regionale / National Dex secondo i tuoi obiettivi"],["goalMaster","Ottieni la Master Ball"],["goalBird","Cattura almeno uno dei tre uccelli leggendari"],["goalMewtwo","Cattura Mewtwo"],["goalLeague","Diventa Campione"],["goalSevii","Completa le missioni principali delle Sevii Islands"]];
 document.getElementById("gymChecks").innerHTML=gymHTML;document.getElementById("areaChecks").innerHTML=areaHTML;document.getElementById("goalChecks").innerHTML=goals.map(x=>checkItem(x[0],x[1])).join("");
 updateCheckProgress();
}
function checkItem(key,label){return `<div class="check ${checks[key]?"done":""}"><input type="checkbox" ${checks[key]?"checked":""} onchange="toggleCheck('${key}')"><label>${esc(label)}</label></div>`}
function toggleCheck(k){checks[k]=!checks[k];save();renderChecklist();renderHome();}
function updateCheckProgress(){const total=8+areas.length+6,done=[...Object.keys(checks)].filter(k=>checks[k]).length,pct=Math.round(done/total*100);document.getElementById("checkProgress").style.width=pct+"%";document.getElementById("checkProgressText").textContent=`${done}/${total} obiettivi completati (${pct}%).`}


const page=document.body.dataset.page;
try{localStorage.setItem("pokeguida_version", V7)}catch{}
initTypes();
function listen(id,evt,fn){const el=document.getElementById(id);if(el)el.addEventListener(evt,fn);}
if(page==="home"){listen("whereSelect","change",updateAdvice);renderHome();}
if(page==="adventure"){["areaSearch","areaFilter","areaLevel"].forEach(id=>listen(id,"input",renderAreas));renderAreas();}
if(page==="pokedex"){["pokeSearch","typeFilter","specialFilter"].forEach(id=>listen(id,"input",renderPokedex));renderPokedex();loadPokedexFromApi();const qp=new URLSearchParams(location.search).get("pokemon");if(qp)setTimeout(()=>openPoke(qp),250);}
if(page==="moves"){["moveSearch","moveCat","moveType"].forEach(id=>listen(id,"input",renderMoves));renderMoves();loadMovesFromApi();const qm=new URLSearchParams(location.search).get("move");if(qm)setTimeout(()=>openMove(qm),700);}
if(page==="tms"){["tmSearch","tmType","tmImportant"].forEach(id=>listen(id,"input",renderTMs));renderTMs();}
if(page==="gyms")renderGyms();
if(page==="team"){["teamSearch","teamAddType"].forEach(id=>listen(id,"input",renderTeam));listen("compareA","change",showCompare);listen("compareB","change",showCompare);const reset=document.getElementById("resetTeam");if(reset)reset.onclick=()=>{if(confirm("Vuoi cancellare la squadra salvata?")){team=[];save();renderTeam();}};renderTeam();}
if(page==="checklist"){const reset=document.getElementById("resetChecks");if(reset)reset.onclick=()=>{if(confirm("Resettare tutto il progresso?")){checks={};routeState={};save();renderChecklist();toast("Progresso azzerato");}};renderChecklist();}
