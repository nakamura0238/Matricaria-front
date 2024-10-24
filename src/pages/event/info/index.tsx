import { Link, Navigate, useParams } from "react-router-dom";
import data from "../../dummy.json";
import { QRCodeCanvas } from "qrcode.react";

export const Info = () => {
  const { eventId } = useParams();

  console.log(data);

  // データ取得
  const searchResult = data.find((val) => val.eid === eventId);
  if (searchResult === undefined) {
    return <Navigate replace to="/" />;
  }

  // url取得
  const url = new URL(location.href);
  console.log(url.origin);

  return (
    <div>
      <h1>Infoページ</h1>
      <p>QRコード</p>
      <div>
        <QRCodeCanvas
          value={`${url.origin}/event/${eventId}`}
          size={128}
          bgColor={"#FFFFFF"}
          fgColor={"#000000"}
          level={"Q"}
          marginSize={4}
        />
      </div>
      <p>リンク</p>
      <Link to={`/event/${eventId}`}>イベント詳細</Link>
    </div>
  );
};
