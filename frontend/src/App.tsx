import './App.css'

function App() {
  return (
    <div className="app">

                                  {/* NAV BAR */}
      <header className="navbar">
        <div className="logo">EFND</div>
        <nav>
          <span>How It Works</span>
          <span>About</span>
        </nav>
      </header>

                                  {/* HOMEPAGE/MAIN CONTENT */}
      <main className="main-content">
        <h1>Check a news article.</h1>

        <p>
          Explore the credibility of online news through
          machine learning and supporting fact checking evidence.
        </p>

                                  {/* NEWS ARTICLE SUBMISSION POINT */}
        <section className="analysis-box">
          <label htmlFor="article-url">Article URL</label>

          <input 
            id="article-url"
            type="url"
            placeholder="https://example.com/news/article"
          />

          <button type="button" disabled>
            Analyse Article
          </button>
        </section>

        <p className="disclaimer">
          AI-assisted assessments can be incorrect.
          Always review evidence and come to your own
          conclusion with what facts you have to determine
          the credibility of a news article.
        </p>
      </main>

    </div>
  )
}

export default App