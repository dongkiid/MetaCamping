import React, { useState} from "react";
import axios from "axios";
import qs from 'qs';
import "../styles/Login.css";

function Login() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const axiosConfig = {
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    const axiosBody = {
        username:inputId,
        userpassword:inputPw
    }

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    // login 버튼 클릭 이벤트
    const LoginCheck = () => {
        //axios.post('url','body 자리', callback함수)
        //요청 url에서 bodyparser 설정 후 req.body로 읽을 수 있음
        axios
            .post("/dologin", qs.stringify(axiosBody), axiosConfig)
            .then((res) => {
                console.log("login"+res.data);

            })
            .catch();
    };

    function checkAll() {
        if (!CheckUserId(inputId)) {
            return false;
        }
        if (!CheckPassword(inputPw)) {
            return false;
        }

        LoginCheck();
    }

    // 공백확인 함수
    function checkExistData(value, dataName) {
        if (value === "") {
            alert(dataName + " 입력해주세요!");
            return false;
        }
        return true;
    }

    function CheckUserId(id) {
        //Id가 입력되었는지 확인하기
        if (!checkExistData(id, "아이디를")) return false;

        var idRegExp = /^[a-zA-z0-9]{2,16}$/; //아이디 유효성 검사
        if (!idRegExp.test(id)) {
            alert("아이디는 영문 대소문자와 숫자 2 ~ 16자리로 입력해야합니다!");
            return false;
        }
        return true; //확인이 완료되었을 때
    }

    function CheckPassword(password) {
        //비밀번호가 입력되었는지 확인하기
        if (!checkExistData(password, "비밀번호를")) return false;

        var passwordRegExp = /^[a-zA-z0-9]{2,16}$/; //비밀번호 유효성 검사
        if (passwordRegExp.test(password)=== false) {
            alert("비밀번호는 영문 대소문자와 숫자 2 ~ 16자리로 입력해야합니다!");
            return false;
        }
        return true; //확인이 완료되었을 때
    }


    return (
        <body className="text-center">
        <main className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">로그인</h1>
                <div className="form-floating">
                    <input
                        type="text"
                        name="input_id"
                        value={inputId}
                        className="form-control"
                        placeholder="ID"
                        onChange={handleInputId}
                        minLength={2}
                        maxLength={16}
                        required
                    />
                    <label>ID</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name="input_pw"
                        value={inputPw}
                        className="form-control"
                        placeholder="Password"
                        onChange={handleInputPw}
                        minLength={2}
                        maxLength={16}
                        required
                    />
                    <label>Password</label>
                </div>

                <button
                    className="w-100 btn btn-lg btn-primary"
                    type="button"
                    onClick={checkAll}
                >
                    Log in
                </button>
            </form>
        </main>
        </body>
    );
}

export default Login;
