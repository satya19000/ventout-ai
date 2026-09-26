'use client';import {languages} from '@/lib/languages';
export default function LanguageSelect({value,onChange}:{value:string,onChange:(v:string)=>void}){return <select className="input" value={value} onChange={e=>onChange(e.target.value)}>{languages.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select>}
