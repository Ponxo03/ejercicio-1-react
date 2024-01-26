Basandote en la imagen asociada, crea componentes para cada uno de los marcos con exactamente el mismo nombre que tengan abajo a la izquierda. EJ: El marco amarillo describe el componente "Heading".

Todos los componentes deberán recibir información como `props` siguiendo la estructura del siguiente json. Donde la información que le pases a cada componente es la información de la propiedad con el mismo nombre en minúscula. 

```js
const data = {
    header: {
        logo: {
            img: "https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
        },
        links: [{
            text: "Tendencias",
            url: "https://teconte.es"
        }, {
            text: "Reservas",
            url: "https://app.breakord.com/es"
        }, {
            text: "Proximos lanzamientos",
            url: "https://codictados.com"
        }, {
            text: "Soporte 24/7",
            url: "https://wishylist.app/"
        }],
        menu: [{
            text: "PC",
            url: "https://teconte.es"
        }, {
            text: "Playstation",
            url: "https://app.breakord.com/es"
        }, {
            text: "Xbox",
            url: "https://codictados.com"
        }, {
            text: "Nintendo",
            url: "https://wishylist.app/"
        }]
    },
    promotion: {
        day: "Tomorrow",
        title: "Tekken 8",
        discount: 36,
        price: "44.79€",
        background: "https://gaming-cdn.com/img/products/9579/hcover/9579.jpg"
    },
    heading: {
        text: "Tendencias",
        url: "https://teconte.es"
    },
    gallery: [
        {
            card: {
                title: "Assetto corsa",
                discount: 28,
                price: "12.89€",
                tag: "DLC",
                img: "https://gaming-cdn.com/images/products/15737/380x218/assetto-corsa-competizione-gt2-pack-pc-juego-steam-cover.jpg?v=1706184000"
            }
        },{
            card: {
                title: "Football Manager 2024",
                discount: 51,
                price: "29.66€",
                img: "https://gaming-cdn.com/images/products/14704/380x218/football-manager-2024-pc-mac-juego-steam-europe-cover.jpg?v=1706184000"
            }
        },{
            card: {
                title: "Los Sims 4 Se alquila",
                discount: 40,
                price: "23.87",
                tag: "DLC",
                img: "https://gaming-cdn.com/images/products/15236/380x218/los-sims-4-se-alquila-pc-mac-juego-ea-app-cover.jpg?v=1706184000"
            }
        }
    ]

}

```

A su vez, deberán estar mostrados como en la imagen. `Header, Promotion, Heading y Gallery` deberán estar en el componente `App` y el resto ser hijos de sus respectivos componentes tal y como muestra la imagen.

PD: Si alguna imagen no funcionara, sustituirla por otra

