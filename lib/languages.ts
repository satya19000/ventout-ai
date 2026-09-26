export const languages=[
['en-US','English'],['te-IN','తెలుగు'],['hi-IN','हिन्दी'],['ta-IN','தமிழ்'],['kn-IN','ಕನ್ನಡ'],['ml-IN','മലയാളം'],['bn-IN','বাংলা'],['mr-IN','मराठी'],['es-ES','Español'],['pt-BR','Português'],['fr-FR','Français'],['de-DE','Deutsch'],['it-IT','Italiano'],['nl-NL','Nederlands'],['ar-SA','العربية'],['tr-TR','Türkçe'],['ru-RU','Русский'],['ja-JP','日本語'],['ko-KR','한국어'],['zh-CN','简体中文'],['id-ID','Bahasa Indonesia'],['th-TH','ไทย'],['vi-VN','Tiếng Việt']
] as const;
export type LanguageCode=(typeof languages)[number][0];
