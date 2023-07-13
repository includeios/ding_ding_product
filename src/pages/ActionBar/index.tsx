import AddNewButton from "@/components/AddNewButton";
import TimeSwiper from "@/components/TimeSwiper";
import './index.less'

export default function Header() {
  return (
    <div className="action-bar">
      <AddNewButton />
      <br />
      <br />
      <TimeSwiper />
    </div>
  )
}