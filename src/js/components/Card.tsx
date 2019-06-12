// TODO: refactor tags
import React from "react"
import { TagPill } from "./TagPill"
import { UserInitials } from "./UserInitials"
import { DiagonalLine } from "../components/DiagonalLine"
import { BACKLOG, WORKING, READY, DONE } from "../../data/COLUMNS"

type CardProps = {
  id: number
  title: string
  dateCreated: string
  owner: string
  assignee: string
  status: string
  archived: boolean
  tags: any
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`card card${props.status === READY ? "--selected" : ""}`}
      onClick={handleCardClick}
    >
      <div
        className={`wavy-line wavy-line${
          props.status === WORKING ? "--show" : "--hide"
        }`}
      />
      <div className="card-inner__wrapper">
        <div className="card-id">{props.id}</div>
        <div className="card-assignee">
          <UserInitials fullName={props.assignee} />
        </div>
        <h2 className="card-title"> {props.title} </h2>
        <div className="card-tags">{addTagsToCard(props.tags)}</div>
        <div className="card-creator">
          date created: {props.dateCreated} by {props.owner}
        </div>
        <div
          className={`card__diagonal-line-wrapper ${applyDoneStyleToCard(
            props.status
          )}`}
        >
          <DiagonalLine color="#ffeedd" />
        </div>
      </div>
    </div>
  )
}
export default Card

const handleCardClick = () => console.log("hehe, you clicked a card")

const addTagsToCard = (tags: any) => <div>refactor</div>
//tags.map((tag: any, index: number) => {
// return <TagPill label={tag} key={index} />
// })

const applyDoneStyleToCard = (status: string) => {
  return status === DONE
    ? `.card__diagonal-line--show`
    : `card__diagonal-line--hide`
}
