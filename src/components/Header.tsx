interface HeaderProps {
  headTitle: string,
  headSubtitle?: string[]
}

const Header = ({ headTitle, headSubtitle }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{headTitle}</h1>
      {headSubtitle && (
        <div className="mb-8">
          <p className="text-lg">
            {headSubtitle.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </p>
        </div>
      )}
    </div>
  )
}

export default Header
