function Gallery({ gallery }) {
  return (
    <div>
      <div>
        {gallery.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.url}>
                <p>{item.card.day}</p>
                <p>{item.card.title}</p>
                <p>{item.card.discount}</p>
                <p>{item.card.price}</p>
                <img src={item.card.img}></img>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
