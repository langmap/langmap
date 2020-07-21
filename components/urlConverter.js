const top10 = {
	'arabic' : '0',
	'bengali' : '1',
	'english' : '2',
	'mandarin' : '3',
	'japanese' : '4',
	'hindi' : '5',
	'spanish' : '6',
	'tagalog' : '7',
	'russian' : '8',
	'portuguese' : '9',
}

const collisions = {
	'hakka' : 'hk',
	'kannada' : 'kn',
	'lao' : 'lo',
	'lingala' : 'lg',
	'malay' : 'my',
	'malayam' : 'mm',
	'macedonian' : 'mc',
	'slovak' : 'sv',
	'swahili' : 'sa',
	'german' : 'gm'
}

const initials = 
{
	'af': 'afrikaans', 
	'al': 'albanian', 
	'am': 'amharic', 
	'ar': 'armenian', 
	'be' : 'belarusian',
	'az': 'azerbaijani', 
	'bo': 'bosnian', 
	'ca': 'cantonese', 
	'cr': 'croatian', 
	'cz': 'czech', 
	'da': 'danish', 
	'du': 'dutch', 
	'es': 'estonian', 
	'pe': 'persian', 
	'fi': 'finnish', 
	'fr': 'french', 
	'ge' : 'georgian',
	'gr': 'greek', 
	'gu': 'gujarati', 
	'ha': 'hausa', 
	'he': 'hebrew', 
	'hi': 'hindi', 
	'hu': 'hungarian', 
	'ic': 'icelandic', 
	'ig': 'igbo', 
	'in': 'indonesian', 
	'it': 'italian', 
	'ja': 'javanese', 
	'ka': 'kazahk', 
	'kh': 'khmer', 
	'ko': 'korean', 
	'la': 'latvian', 
	'li': 'lithuanian', 
	'ma': 'marathi', 
	'ho': 'hokkien', 
	'mo': 'mongolian', 
	'ne': 'nepali', 
	'no': 'norwegian', 
	'od': 'odia', 
	'pu': 'punjabi', 
	'ro': 'romanian', 
	'se': 'serbian', 
	'sp' : 'spanish',
	'sh': 'shona', 
	'sl': 'slovene', 
	'so': 'somali', 
	'sw': 'swedish', 
	'ta': 'tamil', 
	'te': 'telugu', 
	'th': 'thai', 
	'ti': 'tibetan', 
	'tu': 'turkish', 
	'uk': 'ukrainian', 
	'ur': 'urdu', 
	'uz': 'uzbek', 
	'vi': 'vietnamese', 
	'wu': 'wu', 
	'xh': 'xhosa', 
	'yi': 'yiddish', 
	'yo': 'yoruba', 
	'zu': 'zulu',
	'hk' : 'hakka',
	'kn' : 'kannada',
	'lo' : 'lao',
	'lg' : 'lingala',
	'my' : 'malay',
	'mm' : 'malayam',
	'mc' : 'macedonian',
	'sv' : 'slovak',
	'sa' : 'swahili',
	'gm' : 'german',
	'po' : 'polish'
}

export function convert(tags){
	return convertTagsToShort(tags);
}

export function deconvert(shortURL){
	return convertShortToTags(shortURL);
}

function convertTagsToShort(tags){
	var languages = [];
	for(var i = 0; i < tags.length; i++){
		languages.push(tags[i].toLowerCase());
	}
	languages.sort();
	var url = '';
	for(var i = 0; i < languages.length; i++){
		if(Object.keys(top10).includes(languages[i])) url += top10[languages[i]];
		else if(Object.keys(collisions).includes(languages[i])) url += collisions[languages[i]];
		else url += languages[i].substring(0, 2);
	}
	return url;
}

function convertShortToTags(shortURL){
	var languages = [];
	for(var i = 0; i < shortURL.length; i++){
		if('1234567890'.includes(shortURL.charAt(i))){
			languages.push(getKeyByValue(top10, shortURL.charAt(i)));
		}  
	}
	const stripped = shortURL.replace(/[0-9]/g, '');
	for(var i = 0; i < stripped.length; i += 2){
		languages.push(initials[stripped.substring(i, i + 2)]);
	}
	return languages;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
