"use strict"
const listVue = {
		userlist : () => {
			return `<table id="userData">
                        <tr>
                            <td>
                                <a id="number">No.</a>
                            </td>
                            <td>
                                <a id="userid">아이디</a>
                            </td>
                             <td>
                                <a id="name">이름</a>
                            </td>
                           <td>
                                <a id="ssn">주민번호</a>
                            </td>
                            <td>
                                <a id="email">이메일</a>
                            </td>
                            <td>
                                <a id="phoneNumber">전화번호</a>
                            </td>
                            <td>
                                <a id="registerDate">등록일자</a>
                            </td>
                        </tr>
                        
                    </table>`
		},
		
		detail : () => {
			return `<table id="regi_profile">
	<tr>
		<td rowspan="4" id="photo"><img alt="" src="https://t1.daumcdn.net/cfile/tistory/99A783505D15071406"><br>
		<br>
		<button id="regi_photo">사진 변경</button>
		</td>
		<td>
			<table id="profile_card">
				<tr><td><label>아이디 </label></td>
					<td><input id="userid" type="text"/></td></tr>
				<tr><td><label>이름</label></td>
					<td><input id="name" type="text"/></td></tr>
				<tr><td><label>주민번호</label></td>
					<td><input id="ssn" type="text"/></td></tr>
				<tr><td><label>이메일</label></td>
					<td><input id="email" type="text"/></td></tr>
				<tr><td><label>전화번호</label></td>
					<td><input id="phoneNumber" type="text"/></td></tr>
				<tr><td><label>등록일자</label></td>
					<td><input id="registerDate" type="text"/></td></tr>
			</table>
		</td>
	<tr style="height: 20%">
     <td>
       <input id="admin_register" type="button" class="button button2" value="수정" 
       style="width: 100px; height: 50px;font-size: 16px;"/>
       <input id="admin_cancel" type="button" class="button button4" value="뒤로가기" 
       style="width: 100px; height: 50px; font-size: 16px;"/>
     </td>
   </tr>
</table>`
		}
}