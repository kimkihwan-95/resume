import { TVAD } from "../../constant/Summary"
import Card from "../Card"
import npp from "../../asset/nppdemo.mp4"

export const Npp = () => {

  return (
    <video src={npp} width="100%" controls/>
  )
}