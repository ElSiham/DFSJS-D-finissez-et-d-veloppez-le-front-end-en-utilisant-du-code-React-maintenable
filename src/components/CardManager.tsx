interface CardManagerProps {
  cards: {
    title: string
    text: string
  }[]
}

const CardManager = ({ cards }: CardManagerProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 mb-2 md:h-full">
      {cards.map((card, index) => (
        <div
          className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          key={index}
        >
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-4xl font-bold text-blue-400">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CardManager
