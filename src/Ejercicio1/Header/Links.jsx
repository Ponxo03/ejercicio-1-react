function Links({ links }) {
  return (
    <div>
      {links.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.url}>
              <span>{item.text}</span>
              <span>{item.url}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Links;
