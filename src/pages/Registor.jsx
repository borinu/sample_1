import "../scss/styles.scss";
import "../scss/button.scss";
import "../scss/editInputStyle.scss";
import { Link } from "react-router-dom";

export const Registor = () => {
  return (
    <>
      <h1>社員情報登録</h1>
      <table className="lineTable">
        <tbody>
          <tr>
            <th>氏名</th>
            <td>山田たかお</td>
          </tr>
          <tr>
            <th>性別</th>
            <td>男性</td>
          </tr>
          <tr>
            <th>年齢</th>
            <td>80</td>
          </tr>
          <tr>
            <th>部署</th>
            <td>システム開発</td>
          </tr>
        </tbody>
      </table>
      <div className="buttonWrap">
        <p className="button">
          <Link to="/List">登録</Link>
        </p>
      </div>
    </>
  );
};
