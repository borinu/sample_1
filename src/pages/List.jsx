import "../scss/styles.scss";
import "../scss/button.scss";
import "../scss/table.scss";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const List = () => {
  return (
    <>
      <h1>社員情報一覧</h1>
      <table>
        <thead>
          <tr>
            <th>氏名</th>
            <th>性別</th>
            <th>年齢</th>
            <th>部署</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/detail">山田たかお</Link>
            </td>
            <td>男性</td>
            <td>80</td>
            <td>営業</td>
          </tr>
          <tr>
            <td>鈴木はなみ</td>
            <td>女性</td>
            <td>70</td>
            <td>総務</td>
          </tr>
          <tr>
            <td>武田しんげん</td>
            <td>男性</td>
            <td>78</td>
            <td>システム開発</td>
          </tr>
        </tbody>
      </table>
      <div className="buttonWrap">
        <p className="button">
          <Link to="/registor">新規登録</Link>
        </p>
      </div>
      {/* <Button text="新規登録" /> */}
    </>
  );
};
