import "./card.css"

interface CardProps {
    price:number,
    image:string,
    title:string
}

export function Card( { price, image, title } : CardProps ) {
    return (
      <div className="card">
        <img src={image}/>
        <h2>{title}</h2>
        <p><b>Preço:</b> R${price}</p>
      </div>
    )
  
}

export default Card



