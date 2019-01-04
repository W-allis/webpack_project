import top_bar from '../../components/top_bar'
import tpl from './index.tpl'

function Full_layout() {
	return {
		name: 'full_layout',
		tpl: tpl
	}
}

var full_layout = new Full_layout()

export default full_layout

window.onload = function() {
	var topBar = document.querySelector('.top_bar')
	topBar.innerHTML = top_bar.tpl({
		title_list: [
			'首页',
			'产品',
			'介绍',
			'关于我们'
		]
	})
}

