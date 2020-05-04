"use strict"
var admin = admin || {}
admin = (() => {
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let list_vue
	let init = () => {
		list_vue = `/resources/vue/list_vue.js`
		onCreate()
	}
	
	let onCreate = () => {
		
		$.when(
				$.getScript(list_vue)
		).done(()=>{
			setContentView()
			$.getJSON('/users', d => {
			$('#total_count').text('총 회원수: '+d.length)
			$.each(d, (i, j) => {
						$(`<tr>
            			<td>
            				<span>${i+1}</span>
						</td>
            			<td>
            				<span>${j.userid}</span>
						</td>
						<td>
           					<span id="user_`+(i+1)+`"></span>
						</td>
						<td>
            				<span>${j.ssn}</span>
						</td>
						<td>
           					<span>${j.email}</span>
						</td>
						<td>
           					<span>${j.phoneNumber}</span>
						</td>
						<td>
           					<span>${j.registerDate}</span>
						</td>
        		   </tr>`).appendTo('#userData')
        		   
        		   $(`<a>${j.name}</a>`)
        		   .css({cursor: 'pointer', color: 'blue'})
        		   .appendTo("#user_"+(i+1))
        		   .click(e => {
        			   $('#content').empty()
        			   $('#content').html(listVue.detail())
        			   				.addClass('center')
        			   
        		   })
			}) // each
		}) // getJSON
		})
		
		
	/*
	$.when(
			
			$.getScript(list_vue)
	).done(()=>{
		setContentView()
		$('#userData').empty()
		$('#userData').html(listVue.userDetail())
		})*/
		
	}
	
	let setContentView = () => {
		$('#userData tr').first().css({'background-color': 'yellow'})
	}
	
	return {init}
})()