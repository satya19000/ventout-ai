const urgentPatterns=[/kill myself/i,/end my life/i,/suicide/i,/hurt myself/i,/kill (him|her|them|someone)/i,/i will attack/i,/medical emergency/i,/చచ్చిపోవాలి/i,/ఆత్మహత్య/i,/చంపేస్తా/i,/मर जाऊ/i,/आत्महत्या/i,/मार दूँ/i];
export function detectSafetyRisk(text:string){return urgentPatterns.some(p=>p.test(text));}
