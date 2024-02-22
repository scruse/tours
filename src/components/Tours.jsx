import Tour from './Tour'

const Tours = ({ tourList, removeTour }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>

        <section className="tours">
          {tourList.map((tour, index) => {
            return <Tour {...tour} removeTour={removeTour} key={index} />
          })}
        </section>
      </section>
    </>
  )
}

export default Tours
