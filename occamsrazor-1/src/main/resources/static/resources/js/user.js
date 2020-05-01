"user strict"
var user = user || {}
user = (() => {
	let init = () => {
		alert('1')
		onCreate()
	}
	
	let onCreate = () => {
		setContentView()
		$('#register_button').click(e => {
			e.preventDefault()
			location.href = "/admin"
		})
		
		$('#access_button').click(e => {
			
		})
	}
	
	let setContentView = () => {
		$('#home').css({width:'60%',height:'500px'}).addClass('center')
		$('#home tr').addClass('border_black width_full')
		$('#title').css({width:'200px',height:'100px'}).addClass('center')
		$('#searchEngine').css({width:'400px',height:'50px'}).addClass('center')
		$('#menu').css({width:'100%',height:'50px'}).addClass('border_black width_full')
		$('#menu tr').addClass('border_black width_full')
	}
	
	return {init}
	
})()