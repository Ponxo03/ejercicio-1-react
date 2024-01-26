
function Promotion({promotion}) {
  return (
    <div>
      <p>{promotion.day}</p>
      <p>{promotion.title}</p>
      <p>{promotion.discount}</p>
      <p>{promotion.price}</p>
      <img src={promotion.background}></img>
    </div>
  )
}

export default Promotion
