<template>
<div>
	<h1>Sig Plot</h1>
	<div id="plot">
	</div>
</div>
</template>

<script>
//require('script!sigplot-debug.js')
//import exec from 'script.exec.js';
//import exec from 'script-loader!./sigplot-debug.js';
require('../sigplot/sigplot-debug.js') //Tried this get this error 'Cannot read property 'clientWidth' of null'

//var plot = new sigplot.Plot(document.getElementById('plot'), {});

export default {
	name: 'sigplotvue',
	data: function () {
    	return {
      		title: 'My Title'
    	}
  	},
	head: {
		title: function () {
      		return {
        		inner: this.title
      		}
    	},
    	script: [
    		{ type: 'text/javascript', src: 'http://demo.axiosengineering.com/sigplot/sigplot/sigplot-debug.js', async: true, body: true}
    	]
	},
	created(){
		var plot = new sigplot.Plot(document.getElementById('plot'), {});

		//console.log(plot)
	}
}
</script>

<style>
#plot { 
	height: 400px; 
	width: 600px; 
}
</style>