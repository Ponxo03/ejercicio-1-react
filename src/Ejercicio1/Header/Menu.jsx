function Menu({ menu }) {
  return (
    <div>
      {menu.map((item, index) => (
        <div key={index}>
          <a href={item.url}>
            <span>{item.text}</span>
            <span>{item.url}</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Menu;
