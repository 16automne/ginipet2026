import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Join(props) {

  // [1] 변수선언
  const [form, setForm] = useState({
    username:'',
    password:'',
    password2:'',
    email:'',
    tel:''
  });

  // 회원가입실패 - error
  const [error, setError] = useState({ text: '', color: '' });

  // [2] input 입력값 저장
  const handleChange =(e)=> {
    setForm({
      ...form,
      [e.target.name]:e.target.value //사용자가 입력한 데이터를 저장
    });   
    setError(''); // 데이터 값이 없는 경우 에러 초기화
  }

  // [3] url주소 관리 (페이지 이동)
  const navigate = useNavigate();

  // [4] 아이디 중복 체크
  const checkUsername =()=> {
    //axios.post('http://localhost:9070/check-username', {
    axios.post('https://port-0-backend2026-mkumigxw608a3e4b.sel3.cloudtype.app/check-username', {
      username:form.username
    })
    .then(res=>{
      if(res.data.exists){
        setError({text: '이미 사용중인 아이디', color: '#f00'});
      }else{
        setError({text: '사용 가능한 아이디', color: '#0f0'});
      }
    })
  }

  // [5] 회원가입 버튼 클릭시 해당 값들을 서버측으로 전송
  const handleSubmit =(e)=> { // 입력data를 back서버에 post방식으로 전송
    e.preventDefault();
    if(form.password !== form.password2){
      setError('비밀번호 불일치');
      return;
    }

    //axios.post('http://localhost:9070/register', form) // 비밀번호일치시 서버측으로 내용 전송
    axios.post('https://port-0-backend2026-mkumigxw608a3e4b.sel3.cloudtype.app/register', form) // 비밀번호일치시 서버측으로 내용 전송
    .then(()=> {
      alert('회원가입 완료. 로그인 페이지로 이동');
      navigate('/login');
    })
    .catch(err=>{
      console.log(err);
      setError('회원가입 실패. 아이디가 이미 존재하거나 서버 오류');
    })
  }

  return (
    <main>
      <section>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor='username'>아이디 : </label>
            <input 
              type='text' id='username' name='username' 
              placeholder='아이디 입력'
              value={form.username} onChange={handleChange}
              required
            />
            <button type='button' onClick={checkUsername}>중복확인</button>
          </p>
          <p>
            <label htmlFor='password'>비밀번호 : </label>
            <input 
              type='password' id='password' name='password' 
              placeholder='비밀번호 입력'
              value={form.password} onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='password2'>비밀번호 확인 : </label>
            <input 
              type='password' id='password2' name='password2' 
              placeholder='비밀번호 확인'
              value={form.password2} onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='email'>이메일주소 : </label>
            <input 
              type='email' id='email' name='email' 
              placeholder='id@domain.co.kr OR com'
              value={form.email} onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='tel'>전화번호 : </label>
            <input 
              type='tel' id='tel' name='tel' 
              placeholder='01000000000'
              value={form.tel} onChange={handleChange}
              required
            />
          </p>
          <p>
            <input type='checkbox' id='agree' required />
            <label htmlFor='agree'>이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의</label>
          </p>
          <p><button type='submit'>회원가입</button></p>

          {/* 회원가입 실패시 */}
          {/* {error && <p style={{color:'#f00'}}>{error}</p>} */}
          {error.text && (
            <p style={{color: error.color}}>{error.text}</p>
          )}
        </form>
      </section>
    </main>
  )
}


export default Join
