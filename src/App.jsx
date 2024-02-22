import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState(null)
  const fetchTours = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const tourList = await response.json()
      console.log(tourList)

      setTours(tourList)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={() => fetchTours()}
          >
            Refresh Tours
          </button>
        </div>
      </main>
    )
  }

  return (
    <>
      <main>{tours && <Tours tourList={tours} removeTour={removeTour} />}</main>
    </>
  )
}
export default App
