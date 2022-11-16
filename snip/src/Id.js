import { useParams } from "react-router-dom"

export default function Order() {
  let params = useParams()
  return params.id
}

