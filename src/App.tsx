import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState<User | null>(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        if (data.user) {
          setUserData(data.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>로그인</button>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div>
        {userData && userData.displayName
          ? "당신의 이름은 : " + userData.displayName
          : "로그인 버튼을 눌러주세요."}
      </div>
    </div>
  );
}

export default App;
