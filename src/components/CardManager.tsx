interface CardManagerProps {
  cards: {
    title: string
    text: string
  }[]
}

const CardManager = ({ cards }: CardManagerProps) => {
  return (
    <div className="mb-2">
      {cards.map((card, index) => (
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2"
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
