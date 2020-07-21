import React from 'react';
import Map from './Map.js';
import axios from 'axios';
import AnimatedNumber from "animated-number-react";

import AsyncSelect from 'react-select/async';
import { convert, deconvert } from './urlConverter.js';

import Router from 'next/router';

const api_url = 'https://langmap-api.herokuapp.com/';

class LanguageInput extends React.Component {

  constructor (props) {
    super(props);

    var tagObjects = [];
    if(this.props.code){
      var tagList = deconvert(this.props.code);
      for(var i = 0; i < tagList.length; i++){
        tagObjects.push({value : tagList[i].charAt(0).toUpperCase() + tagList[i].slice(1), label : tagList[i].charAt(0).toUpperCase() + tagList[i].slice(1)});
      }
        if (tagObjects.length > 1) {
        this.multipleLanguageQueries(tagObjects).then((langData) => {
          this.setState({ langData });
          let sum = 0;
          for(var i = 0; i < tagObjects.length; i++){
              sum += langData[tagObjects[i].value][Object.keys(langData[tagObjects[i].value])[0]].reduce((a, b) => a + (b['val'] || 0), 0);
          }
          this.setState({ value : sum});
        });
      } else if (tagObjects.length > 0) {
       this.getLangData(tagObjects[0].value).then((langData) => {
          this.setState({ langData });
          this.setState({ value : langData[tagObjects[0].value].reduce((a, b) => a + (b['val'] || 0), 0)});
        });
      }
    }

    this.state = {
      tags: tagObjects,
      langData: [],
      value: 0
    };

    this.getLangData = this.getLangData.bind(this);
    this.multipleLanguageQueries = this.multipleLanguageQueries.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.promiseOptions = this.promiseOptions.bind(this);
    this.formatValue = this.formatValue.bind(this);
    this.localizeName = this.localizeName.bind(this);
  }

  async getLangData(language) {
    const response = await axios.get(api_url + 'search/' + language.toLowerCase());
    return response.data;
  }

  async multipleLanguageQueries(languages) {
    let langData = {};
    for(var i = 0; i < languages.length; i++){
      const value = await this.getLangData(languages[i].value);
      langData[languages[i].value] = value;
    }
    return langData;
  }

  handleChange(tags) {
    if (tags === null){
      this.setState({ tags : [], langData : [], value : 0 });
      return;
    } 
    this.setState({ tags });
    if (tags.length > 1) {
      this.multipleLanguageQueries(tags).then((langData) => {
        this.setState({ langData });
        let sum = 0;
        for(var i = 0; i < tags.length; i++){
            sum += langData[tags[i].value][Object.keys(langData[tags[i].value])[0]].reduce((a, b) => a + (b['val'] || 0), 0);
        }
        this.setState({ value : sum});
      });
    } else if (tags.length > 0) {
     this.getLangData(tags[0].value).then((langData) => {
        this.setState({ langData });
        this.setState({ value : langData[tags[0].value].reduce((a, b) => a + (b['val'] || 0), 0)});
      });
    }
    history.pushState(null, null, '/l/' + convert(tags.map(a => a.value)));
  }

  async promiseOptions(inputValue) {
    const response = await axios.get(api_url + 'languages');
    console.log(response);
    let options = [];
    console.log(this.localizeName(response.data[0][0]));
    for(var i = 0; i < response.data.length; i++) {
      console.log(i);
      var name = response.data[i][0].charAt(0).toUpperCase() + response.data[i][0].slice(1) + ' (' + this.localizeName(response.data[i][0]) + ')';
      console.log(name);
      options.push({value: response.data[i][0].charAt(0).toUpperCase() + response.data[i][0].slice(1), label: name });
    }
    return options;
  }

  localizeName(name){
    const names = {
        'afrikaans': 'Afrikaans', 
        'albanian': 'Shqipëri', 
        'amharic': 'አማርኛ', 
        'armenian': 'հայերեն', 
        'belarusian' : 'беларуская мова',
        'azerbaijani': 'Azərbaycan dili', 
        'bosnian': 'Bosanski', 
        'cantonese': '廣東話', 
        'croatian': 'Hrvatski', 
        'czech': 'Čeština', 
        'danish': 'Dansk', 
        'dutch': 'Nederlands', 
        'estonian': 'Eesti keel', 
        'persian': 'فارسی', 
        'finnish': 'Suomen kieli', 
        'french': 'Français', 
        'georgian' : 'ქართული',
        'greek': 'Ελληνικά', 
        'gujarati': 'ગુજરાતી', 
        'hausa': 'Harshen Hausa', 
        'hebrew': 'עברית', 
        'hindi': 'हिंदी', 
        'hungarian': 'Magyar nyelv', 
        'icelandic': 'Íslenska', 
        'igbo': 'Asụsụ Igbo', 
        'indonesian': 'Bahasa Indonesia', 
        'italian': 'Italiano', 
        'javanese': 'ꦧꦱꦗꦮ', 
        'kazahk': 'Қазақша', 
        'khmer': 'ភាសាខ្មែរ', 
        'korean': '한국어', 
        'latvian': 'Latviešu valoda', 
        'lithuanian': 'Lietuvių kalba', 
        'marathi': 'मराठी', 
        'hokkien': '閩南語', 
        'mongolian': 'монгол хэл', 
        'nepali': 'नेपाली', 
        'norwegian': 'Norsk', 
        'odia': 'ଓଡ଼ିଆ', 
        'punjabi': 'ਪੰਜਾਬੀ', 
        'romanian': 'Limba română', 
        'serbian': 'српски', 
        'spanish' : 'Español',
        'shona': 'chiShona', 
        'slovene': 'Slovenščina', 
        'somali': 'Af Soomaali', 
        'swedish': 'Svenska', 
        'tamil': 'தமிழ்', 
        'telugu': 'తెలుగు', 
        'thai': 'ภาษาไทย', 
        'tibetan': 'བོད་སྐད་', 
        'turkish': 'Türkçe', 
        'ukrainian': 'українська мова', 
        'urdu': 'اُردُو', 
        'uzbek': 'O‘zbekcha', 
        'vietnamese': 'Tiếng Việt', 
        'wu': '吳語', 
        'xhosa': 'isiXhosa', 
        'yiddish': 'ייִדיש', 
        'yoruba': 'Èdè Yorùbá', 
        'zulu': 'isiZulu',
        'hakka' : '客家話',
        'kannada' : 'ಕನ್ನಡ',
        'lao' : 'ພາສາລາວ',
        'lingala' : 'Lingála',
        'malay' : 'Bahasa Melayu',
        'malayam' : 'മലയാളം',
        'macedonian' : 'македонски',
        'slovak' : 'Slovenčina',
        'swahili' : 'Kiswahili',
        'german' : 'Deutsch',
        'arabic' : 'اَلْعَرَبِيَّةُ‎',
        'bengali' : 'বাংলা',
        'english' : 'English',
        'mandarin' : '中文',
        'japanese' : '日本語',
        'tagalog' : 'Tagalog',
        'russian' : 'Русский',
        'portuguese' : 'Português',
        'polish' : 'Język polski'
    }
     return names[name];
  }

  formatValue(value) {
    return "You can speak with " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " people!";
  }

  render () {
    return(
      <div>
        <div style={{'marginTop' : '5px', 'marginBottom' : '5px'}}>
        <AsyncSelect cacheOptions placeholder={'Select some languages...'} isSearchable={false} defaultOptions value={this.state.tags} loadOptions={this.promiseOptions} onChange={this.handleChange} isMulti />
        { this.state.value > 0 && 
          <h1 align="center"> <AnimatedNumber value={this.state.value} formatValue={this.formatValue} duration="300"/> </h1>
        }
        </div>
        <div>
          <Map langData={this.state.langData} number={this.state.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
        </div>
      </div>
    )
  }
}
 
export default LanguageInput; 