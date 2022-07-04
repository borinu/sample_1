export const Login = () => {
  return (
    <>
      <form className="loginForm">
        <h1>ログイン</h1>
        <div>
          <div className="inputWrap">
            <label htmlFor="userID">userID</label>
            <input type="id" name="userID" placeholder="UserID" />
          </div>
          <div className="inputWrap">
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="inputWrap">
            <label htmlFor="sbmit"></label>
            <input type="submit" name="sbmit" value="ログイン" />
          </div>
        </div>
      </form>
    </>
  );
};
