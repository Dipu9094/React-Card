// const todoTitle = "Call your family"
// let desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, reiciendis?"
let date = new Date()
let today = date.toDateString()


function Card(props) {
  return <div className="card">
    <h2 className="cardTitle">{props.todoTitle}</h2>
    <p className="cardDesc">{props.cardDesc}</p>
    <p className='cardDate'>{today}</p>
  </div>
}

export default Card;
