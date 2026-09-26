export type MoodEntry={day:string;anger:number;stress:number;sadness:number;createdAt:string};
const MOODS='ventout:moods', PREFS='ventout:prefs';
export function loadMoods():MoodEntry[]{if(typeof window==='undefined')return[];try{return JSON.parse(localStorage.getItem(MOODS)||'[]')}catch{return[]}}
export function saveMood(entry:Omit<MoodEntry,'createdAt'>){const all=loadMoods();all.push({...entry,createdAt:new Date().toISOString()});localStorage.setItem(MOODS,JSON.stringify(all.slice(-30)))}
export function loadPrefs(){if(typeof window==='undefined')return null;try{return JSON.parse(localStorage.getItem(PREFS)||'null')}catch{return null}}
export function savePrefs(v:unknown){localStorage.setItem(PREFS,JSON.stringify(v))}
export function deleteLocalData(){Object.keys(localStorage).filter(k=>k.startsWith('ventout:')).forEach(k=>localStorage.removeItem(k));sessionStorage.clear()}
