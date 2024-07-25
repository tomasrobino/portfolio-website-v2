import {ReactElement} from "react";

export default function ProjectPage(props: {title: string, content: ReactElement, img: string}) {

  return (
    <div>
      <h1>{props.title}</h1>
      {props.content}
    </div>
  )
}