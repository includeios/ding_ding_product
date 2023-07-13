import Button from '@mui/material/Button';



export default function TimeSwiper() {
  return (
    <div className="time-swiper">
      <Button variant="contained">
        今日
      </Button>
      <Button variant="contained">
        本周
      </Button>
      <Button variant="contained">
        本月
      </Button>
      {/* 季度 半年 年度 支持自定义按钮 */}
      {/* 支持时间筛选 */}
    </div>

  )
}