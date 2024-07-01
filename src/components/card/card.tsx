import "./card.css"

interface CardProps {
    price:number | undefined,
    image:string,
    title:string
}
const zero = 0
const empy = "..."
const imgDefault = "https://camo.githubusercontent.com/70937ab1109ce0ebdfc41538a3064ae7ee51592867f08e4ce5c4b4a920f3fc20/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"

export function Card( { price, image, title } : CardProps ) {
    return (
      <div className="card">
        <img src={image || imgDefault}/>
        <h2>{title || empy }</h2>
        <p><b>Preço:</b> R${price || zero}</p>
      </div>
    )
  
}

export default Card



