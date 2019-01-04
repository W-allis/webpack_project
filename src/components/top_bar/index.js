import tpl from './index.tpl'
import './index.less'

 function Top_bar() {
	return {
		name: 'top_bar',
		tpl: tpl
	}
}

var top_bar = new Top_bar()

export default top_bar
