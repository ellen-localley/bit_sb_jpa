"use strict"
var admin = admin || {}
admin = (() => {
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let user_vue
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`
		onCreate()
	}
	
	let onCreate = () => {
		
		$.when(
			$.getScript(user_vue)
		).done(()=>{
			setContentView()
			$.getJSON('/users', d => {
			$('#total_count').text('총 회원 수: '+d.length)
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
        			   $(userVue.detail())
        			   .appendTo('#content')
        			   $.getJSON(`/users/${j.userid}`, d=>{
        				   $('#userId').text(d.userid)
        				   $('#userName').text(d.name)
        				   $('#userSSN').text(d.ssn)
        				   $('#userAddr').text(d.addr)
        				   $('#userEmail').text(d.email)
        				   $('#userPhoneNumber').text(d.phoneNumber)
        				   $('#registerDate').text(d.registerDate)
        			   })
        		   })
        		   
			}) // each
		}) // getJSON
				
				$('#lost_menu').click(e => {
					$('#lost_menu').addClass('active')
					$('#user_menu').removeClass('active')
						
						e.preventDefault()
						$('#content').empty()
						$('#content').html(`<table id="lostData">
                        <tr>
                        	<th>
                                <span>No.</span>
                            </th>
                            <th>
                                <span>분실물 ID</span>
                            </th>
                            <th>
                                <span>습득물품명</span>
                            </th>
                             <th>
                                <span>습득일자</span>
                            </th>
                           <th>
                                <span>습득물분류</span>
                            </th>
                            <th>
                                <span>습득위치(지하철)</span>
                            </th>
                        </tr>
                        
                    </table>`)
                    
						$.getJSON(`/losts`, d => {
							$('#total_count').text('총 분실물 수: '+d.length)
							$.each(d, (i,j) => {
								$(`<tr>
							<td>
								<span>${i+1}</span>
							</td>
                            <td>
                                <span>${j.lostId}</span>
                            </td>
                            <td>
								<span id="lost_`+(i+1)+`"></span>
                            </td>
                             <td>
                                <span>${j.lostDate}</span>
                            </td>
                           <td>
                                <span>${j.lostClass}</span>
                            </td>
                            <td>
                                <span>${j.lostLoca}</span>
                            </td>
                        </tr>`).appendTo('#lostData')
                        
                        $(`<a>${j.lostItem}</a>`)
                        .css({cursor: 'pointer', color: 'blue'})
                        .appendTo("#lost_"+(i+1))
							})//each
						})//getJSON
					})
					
		}).fail(()=>{
			alert(WHEN_ERROR)
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