import { Link } from "react-router-dom"
import { flexCol } from "./top.css"

const ViewedEventKey = "viewedUUIDList"

const toJson = (str: string) => {
  return JSON.parse(str)
}
const toStr = (str: Object) => {
  return JSON.stringify(str)
}

export const Top = () => {
    let viewedEventList: Array<{UUID: string, EventName: string}> = []
    const UUIDListText = localStorage.getItem(ViewedEventKey)
    if (UUIDListText) {
      viewedEventList = toJson(UUIDListText)
    } 

  return (
    <div>
      <h1>Topページ</h1>
      <div className={flexCol}>
        {viewedEventList.map((val, i) => {
          return (
            <Link key={i} to={`/event/${val.UUID}`}>{val.EventName}</Link>
          )
        })}
      </div>
    </div>
  );
};
