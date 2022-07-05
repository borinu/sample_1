import "../styles.css";
import "../change.scss";
import { Link } from "react-router-dom";

export const Change = () => {
  return (
    <>
      <h1>社員情報変更</h1>
      <form action="" method="post">
        <table>
          <tbody>
            <tr>
              <th>氏名</th>
              <td>
                <input
                  className="editLine"
                  type="text"
                  placeholder="氏名を入力"
                />
              </td>
            </tr>
            <tr>
              <th>性別</th>
              <td className="radioWrap">
                <label for="woman" className="radioLabel">
                  <input
                    checked
                    type="radio"
                    id="woman"
                    class="radio"
                    name="gender"
                  />
                  <span class="labelCheck round">男性</span>
                </label>
                <label for="man" className="radioLabel">
                  <input
                    checked
                    type="radio"
                    id="man"
                    class="radio"
                    name="gender"
                  />
                  <span class="labelCheck round">女性</span>
                </label>
              </td>
            </tr>
            <tr>
              <th>年齢</th>
              <td>
                <input
                  className="editLine"
                  type="text"
                  placeholder="年齢を入力"
                />
              </td>
            </tr>
            <tr>
              <th>部署</th>
              <td className="radioWrap">
                <label for="soumu" className="radioLabel">
                  <input
                    checked
                    type="radio"
                    id="soumu"
                    class="radio"
                    name="Department"
                  />
                  <span class="labelCheck round">総務</span>
                </label>
                <label for="eigyou" className="radioLabel">
                  <input
                    checked
                    type="radio"
                    id="eigyou"
                    class="radio"
                    name="Department"
                  />
                  <span class="labelCheck round">営業</span>
                </label>
                <label for="engineer" className="radioLabel">
                  <input
                    checked
                    type="radio"
                    id="engineer"
                    class="radio"
                    name="Department"
                  />
                  <span class="labelCheck round">システム開発</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="buttonWrap">
        <p className="button">
          <Link to="/list">更新</Link>
        </p>
      </div>
    </>
  );
};
