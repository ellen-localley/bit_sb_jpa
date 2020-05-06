"use strict"
var user = user || {}
user = (() => {
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let admin_vue, join
	let init = () => {
		admin_vue = `/resources/vue/admin_vue.js`
		onCreate()
	}
	
	let onCreate = () => {
		$.when(
				$.getScript(admin_vue)
		).done(()=>{
			setContentView()
			$('#register_button').click(e => {
				$('#image').empty()
				$('#image').html(adminVue.join())
		
				$(`<input type="button"/>`)
				.attr({'value':'등록'})
				.css({width: '100px', height: '50px','font-size': '16px'})
				.appendTo('#button_box')
				.click(e => {
					alert('등록버튼 클릭')
				})
				$(`<input type="button"/>`)
				.attr({'value':'취소'})
				.css({width: '100px', height: '50px', 'font-size': '16px'})
				.appendTo('#button_box')
				.click(e => {
					alert('취소버튼 클릭')
				})
					
				})
				
				$('#access_button').click(e => {
					e.preventDefault()
					$('#image').empty()
					$('#image').html(adminVue.login())
					$(`<input type="button">`)
					.attr({value: "로그인"})
					.appendTo('#login_box')
					.click(e => {
						location.href = "/admin"
						/*e.preventDefault()
						$.ajax({
							url: ``,
							type: `post`,
							data: JSON.stringify({
								
							}),
							dataType: `json`,
							contentType: `application/json`,
							success: d => {},
							error: (r,x,e) => {
								alert(r)
							}
						})*/
					})
					$(`<input type="button">`)
					.attr({value: "취소"})
					.appendTo('#login_box')
					.click(e => {
						e.preventDefault()
					})
					
//					location.href = "/admin"
				})
		}).fail(()=>{
			alert(WHEN_ERROR)
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