import '../static/css/common.css'
import full_layout from './views/full_layout'

function App() {
	var app = document.getElementById('app')
	
	app.innerHTML = full_layout.tpl({})
}

new App()

var data = [
	{
		name: 'age'
	}
]

var data1 = JSON.parse(JSON.stringify(data))

data1[0].name = 'wall'

console.log(data)

var arr = [1,2,3,45,6,7,8,1,2,3,45,6,7]

var arr1 = [1,2,3,45,6,7,8,1,2,3,45,6,7]
function q(arr) {
	qq()
	return arr.filter((x, index,self)=>self.indexOf(x) === index)
}
q(arr)
