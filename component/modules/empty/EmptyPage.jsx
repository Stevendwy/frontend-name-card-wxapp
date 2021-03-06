import React, { Component } from 'react';
import styles from './EmptyPage.scss';
import CSSModules from 'react-css-modules';
import {Link} from 'react-router';
import {PureComponent} from 'component/modules/HOC/';
import {miniProgramLogin} from 'js/util/miniProgramLogin';

@CSSModules(styles, {allowMultiple: true})
export default class EmptyPage extends PureComponent{
	defaultConfig = {
		msg: "",
		btnText: "",
		link: "",
		imgUrl: "",
		imgWidth:75,
		imgHeight:75,
	};
	render(){
		let {config} = this.props;
		config = {...this.defaultConfig, ...config};
		return(
			<div styleName="emptyPage">
				<img src={config.imgUrl} width={config.imgWidth} height={config.imgHeight}/>
				<p className="c-fs12 c-cc9">{config.msg}</p>
				{!config.noBtn ?<a styleName="redBtn" onClick={(e)=>{
					e.preventDefault();
					config.isH5 ? browserHistory.push(config.link) : miniProgramLogin(config.link);
				}}>{config.btnText}</a> : null}
			</div>
		)
	}
}