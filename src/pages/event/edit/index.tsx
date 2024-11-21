import { useNavigate, useParams } from "react-router-dom";
import { flexCol } from "./edit.css";
import React, { ReactNode, useState } from "react";

export const Edit = () => {
  const [view, setView] = useState<ReactNode | undefined>();

  return (
    <div>
      {view ? view :<PasswordComponent setView={setView}/>}
    </div>
  ) 
};

const PasswordComponent: React.FC<{
  setView: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}> = ({ setView }) => {

  const [passValue, setPassValue] = useState<string>("")
  const PASSWORD = "password"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(e.target.value)
  }

  const onPasswordCheck = (e: any) => {
    e.preventDefault()
    if (passValue === PASSWORD) {
      setView(<FormComponent></FormComponent>)
    } else {
      alert("パスワードが違います")
    }
  };

  return (
    <div>
      <form onSubmit={onPasswordCheck}>
        <input type="password" value={passValue} onChange={handleChange} />
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

const FormComponent = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const onSubmit = (data: any) => {
    navigate(`/event/${eventId}/info`);
  };
  return (
    <div className="">
      <h1>Editページ</h1>

      <form className={flexCol} onSubmit={onSubmit}>
        <div className={flexCol}>
          <label htmlFor="eventName">イベント名</label>
          <input type="text" id="eventName" />
        </div>

        <div className={flexCol}>
          <label htmlFor="eventDetail">イベント詳細</label>
          <textarea name="" id="eventDetail"></textarea>
        </div>

        <div className={flexCol}>
          <label>公式/非公式</label>
          <div>
            <label>
              <input type="radio" name="official" id="official" value={1} />
              公式
            </label>
            <label>
              <input type="radio" name="official" id="official" value={0} />
              非公式
            </label>
          </div>
        </div>

        <div className={flexCol}>
          <label htmlFor="deadline">募集期限</label>
          <input type="text" id="deadline" />
        </div>

        <div className={flexCol}>
          <label htmlFor="start">開始日時</label>
          <input type="text" id="start" />
        </div>

        <div className={flexCol}>
          <label htmlFor="end">終了日時</label>
          <input type="text" id="end" />
        </div>

        <div className={flexCol}>
          <label htmlFor="area">開催地域</label>
          <input type="text" id="area" />
        </div>

        <div className={flexCol}>
          <label htmlFor="place">開催場所</label>
          <input type="text" id="place" />
        </div>

        <div className={flexCol}>
          <label htmlFor="address">開催地住所</label>
          <input type="text" id="address" />
        </div>

        <div className={flexCol}>
          <label htmlFor="googleMapURL">GoogleMap URL</label>
          <input type="text" id="googleMapURL" />
        </div>

        <div className={flexCol}>
          <label htmlFor="owner">運営</label>
          <input type="text" id="owner" />
        </div>

        <div className={flexCol}>
          <label htmlFor="memo">メモ</label>
          <textarea id="memo"></textarea>
        </div>

        <div className={flexCol}>
          <label htmlFor="password">パスワード</label>
          <input type="text" id="password" />
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};
