import AddNewButton from "@/components/AddNewButton";
import TimeSwipe from "@/components/TimeSwipe";
import './index.less'

export default function Header() {
  return (
    <div className="action-bar">
      <AddNewButton />
      <br />
      <br />
      <TimeSwipe />
    </div>
  )
}