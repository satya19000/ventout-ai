import type { Config } from 'tailwindcss';
export default {darkMode:'class',content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{boxShadow:{soft:'0 18px 50px rgba(37,99,235,.10)'},animation:{float:'float 5s ease-in-out infinite'},keyframes:{float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-8px)'}}}}},plugins:[]} satisfies Config;
