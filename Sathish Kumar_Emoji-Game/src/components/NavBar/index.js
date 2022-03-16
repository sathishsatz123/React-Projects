import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <div className="nav-bar-container">
      <div className="logo-section">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-section">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
