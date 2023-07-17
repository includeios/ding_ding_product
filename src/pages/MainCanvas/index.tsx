import CardListStorage from '@/context/card-list'
import type { CardList } from '@/context/card-list'
import BasicCard from '@/components/BasicCard'
import './index.less'

const MainCanvas = () => {
  const cardList = CardListStorage.get() as CardList

  const handleDeleteCard = (index: number) => {
    cardList.splice(index, 1)
    CardListStorage.set(cardList)
  }

  return (
    <div className="min-canvas">
      {cardList.map((item, index) => (
        <BasicCard
          key={index}
          data={item}
          deleteCard={() => handleDeleteCard(index)}
        />
      ))}
      <BasicCard />
    </div>


  )
}

export default MainCanvas