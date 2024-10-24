import { useEffect } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import data from "../../dummy.json"

const ViewedEventKey = "viewedUUIDList"

const toJson = (str: string) => {
  return JSON.parse(str)
}
const toStr = (str: Object) => {
  return JSON.stringify(str)
}

export const EventDetail = () => {
  const {eventId} = useParams()
  
  console.log(data)

  const searchResult = data.find((val) => val.eid === eventId)

  console.log(searchResult)
  if (searchResult === undefined) {
    return <Navigate replace to="/"/>
  }

  if(eventId){
    console.log(eventId)
    const UUIDListText = localStorage.getItem(ViewedEventKey)
    if (UUIDListText) {
      const UUIDList: Array<{UUID: string, EventName: string}> = toJson(UUIDListText)
      const viewedUUID = UUIDList.find((val) => val.UUID === eventId)
      if (viewedUUID === undefined) {
        const viewedEventObj: {UUID: string, EventName: string} = {UUID: eventId, EventName: eventId}
        UUIDList.push(viewedEventObj)
      localStorage.setItem(ViewedEventKey, toStr(UUIDList))
      }
    } else {
      const viewedEventObj: {UUID: string, EventName: string} = {UUID: eventId, EventName: eventId}
      localStorage.setItem(ViewedEventKey, toStr([viewedEventObj]))
    }

  } else {
    console.log("ID is empty")
  }


  return (
    <div>
      <h1>EventDetail</h1>
      <h2>ID: {eventId}</h2>
      <Link to={`/event/${eventId}/edit`}>編集</Link>
    </div>
  )
}