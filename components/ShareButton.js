import React from "react";
// import icons
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaReddit} from 'react-icons/fa';
import {FaWeibo} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTumblr} from 'react-icons/fa';
import {FaVk} from 'react-icons/fa';
import {FaXing} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';

import { convert, deconvert } from './urlConverter.js';

class ShareBlock extends React.Component {

  constructor (props) {
    super(props);
    this.formatList = this.formatList.bind(this);
  }

  formatList(res){
  	if (res.length < 2) return res; 
  	if (res.length === 2) return res[0] + ' and ' + res[1]; 
  	let newString = "";
  	for(var i = 0; i < res.length - 2; i++){
  		newString += res[i] + ', ';
  	}
  	newString += res[res.length - 2] + ' and ' + res[res.length - 1];
  	return newString;
  }

  render(){ 
  	const hash_tags = ['langmap'].concat(this.props.languages);
  	const url = 'https://langmap.me/l/' + convert(this.props.languages);
  	const title = `I can speak with ${this.props.number} people using ${this.formatList(this.props.languages)}! How many people can you speak with? Make your own map at: `;
  	const reddit_title = `I can speak with ${this.props.number} people using ${this.formatList(this.props.languages)}!`;
  	const tumblr_title = 'Check out this language map!';
  	const caption = `I can speak with ${this.props.number} people using ${this.formatList(this.props.languages)}! How many people can you speak with? Make your own map at: `;
  	const urls = {
  		twitter: [`https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=langmap`, <FaTwitter size='2.5em'/>],
  		facebook: [`https://www.facebook.com/sharer.php?u=${url}`, <FaFacebook size='2.5em'/>],
  		reddit: [`https://reddit.com/submit?url=${url}&title=${reddit_title}`, <FaReddit size='2.5em'/>],
  		weibo: [`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, <FaWeibo size='2.5em'/>],
  		linkedin: [`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, <FaLinkedin size='2.5em'/>],
  		tumblr: [`http://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${tumblr_title}&caption=${caption}&tags=${hash_tags}`, <FaTumblr size='2.5em'/>],
  	   vk: [`http://vk.com/share.php?url=${url}&title=${reddit_title}&comment=${caption}`, <FaVk size='2.5em'/>],
       xing: [`https://www.xing.com/spi/shares/new?url=${url}`, <FaXing size='2.5em'/>],
       telegram: [`https://t.me/share/url?url=${url}&text=${reddit_title}`, <FaTelegram size='2.5em'/>]
    };
  	return (
  		<a href={ urls[this.props.network][0] }>
  			{urls[this.props.network][1]}
  		</a>
  	);
  }

}

export default ShareBlock;