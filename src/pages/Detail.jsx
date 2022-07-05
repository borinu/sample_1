import "../styles.css";
import "../table.scss";
import { Link } from "react-router-dom";

export const Detail = () => {
  return (
    <>
      <h1>社員情報詳細</h1>
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
        <p className="button">削除</p>
        <p className="button">
          <Link to="/change">変更</Link>
        </p>
      </div>
    </>
  );
};
