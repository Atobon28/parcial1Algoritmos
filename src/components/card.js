function data() { 
    return [
        {
            "id": 1,
            "destino": "París, Francia",
            "duracion": 2,
            "costo": 2500,
            "descripcion": "Explora la ciudad del amor con visitas a la Torre Eiffel y el Louvre.",
            "actividades": ["Tour guiado", "Cena en barco por el Sena", "Museos"],
            "reservado": false,
            "imagen": "paris.jpg",
            "calificacion": 4.8,
            "alojamiento": "Hotel 5 estrellas",
            "guia_incluido": true
          },
          {
            "id": 2,
            "destino": "Machu Picchu, Perú",
            "duracion": 1,
            "costo": 1800,
            "descripcion": "Una experiencia inolvidable en una de las maravillas del mundo.",
            "actividades": ["Trekking", "Tour arqueológico", "Fotografía"],
            "reservado": false,
            "imagen": "machu_picchu.jpg",
            "calificacion": 4.9,
            "alojamiento": "Hostal turístico",
            "guia_incluido": true
          },
          {
            "id": 3,
            "destino": "Nueva York, EE.UU.",
            "duracion": 2,
            "costo": 3000,
            "descripcion": "Descubre la ciudad que nunca duerme con espectáculos y compras.",
            "actividades": ["Broadway", "Empire State", "Central Park"],
            "reservado": true,
            "imagen": "nyc.jpg",
            "calificacion": 4.7,
            "alojamiento": "Hotel 4 estrellas",
            "guia_incluido": false
          },
          {
            "id": 4,
            "destino": "Santorini, Grecia",
            "duracion": 1,
            "costo": 2200,
            "descripcion": "Playas espectaculares y vistas impresionantes del mar Egeo.",
            "actividades": ["Buceo", "Paseo en velero", "Gastronomía local"],
            "reservado": false,
            "imagen": "santorini.jpg",
            "calificacion": 4.8,
            "alojamiento": "Cabaña privada",
            "guia_incluido": false
          },
          {
            "id": 5,
            "destino": "Tokio, Japón",
            "duracion": 3,
            "costo": 4000,
            "descripcion": "Tecnología, cultura y tradiciones en una sola ciudad.",
            "actividades": ["Anime Tour", "Templos antiguos", "Gastronomía"],
            "reservado": true,
            "imagen": "tokio.jpg",
            "calificacion": 4.9,
            "alojamiento": "Hotel cápsula",
            "guia_incluido": true
          },
          {
            "id": 6,
            "destino": "Roma, Italia",
            "duracion": 2,
            "costo": 2800,
            "descripcion": "Historia y arte en cada esquina de la ciudad eterna.",
            "actividades": ["Coliseo Romano", "Vaticano", "Fontana di Trevi"],
            "reservado": false,
            "imagen": "roma.jpg",
            "calificacion": 4.8,
            "alojamiento": "Hotel boutique",
            "guia_incluido": true
          },
          {
            "id": 7,
            "destino": "Bali, Indonesia",
            "duracion": 2,
            "costo": 2000,
            "descripcion": "Paraíso tropical con playas y templos exóticos.",
            "actividades": ["Surf", "Yoga", "Exploración de templos"],
            "reservado": false,
            "imagen": "bali.jpg",
            "calificacion": 4.7,
            "alojamiento": "Resort frente al mar",
            "guia_incluido": false
          },
          {
            "id": 8,
            "destino": "Londres, Reino Unido",
            "duracion": 2,
            "costo": 2600,
            "descripcion": "Explora la historia británica y la modernidad en una sola ciudad.",
            "actividades": ["Big Ben", "London Eye", "Museo Británico"],
            "reservado": false,
            "imagen": "londres.jpg",
            "calificacion": 4.6,
            "alojamiento": "Hotel 3 estrellas",
            "guia_incluido": true
          },
          {
            "id": 9,
            "destino": "Dubai, Emiratos Árabes Unidos",
            "duracion": 1,
            "costo": 5000,
            "descripcion": "Lujo y arquitectura futurista en el desierto.",
            "actividades": ["Burj Khalifa", "Safari en el desierto", "Compras en Dubai Mall"],
            "reservado": true,
            "imagen": "dubai.jpg",
            "calificacion": 4.9,
            "alojamiento": "Hotel 7 estrellas",
            "guia_incluido": false
          },
          {
            "id": 10,
            "destino": "Sídney, Australia",
            "duracion": 3,
            "costo": 3500,
            "descripcion": "Explora la ópera, las playas y la cultura australiana.",
            "actividades": ["Ópera de Sídney", "Playa Bondi", "Zoológico Taronga"],
            "reservado": false,
            "imagen": "sidney.jpg",
            "calificacion": 4.7,
            "alojamiento": "Hotel 5 estrellas",
            "guia_incluido": true
          },
          {
            "id": 11,
            "destino": "Barcelona, España",
            "duracion": 2,
            "costo": 2700,
            "descripcion": "Arte, arquitectura y gastronomía en una ciudad vibrante.",
            "actividades": ["Sagrada Familia", "Barrio Gótico", "Playas del Mediterráneo"],
            "reservado": false,
            "imagen": "barcelona.jpg",
            "calificacion": 4.8,
            "alojamiento": "Apartamento turístico",
            "guia_incluido": true
          },
          {
            "id": 12,
            "destino": "Ámsterdam, Países Bajos",
            "duracion": 1,
            "costo": 2300,
            "descripcion": "Canales, bicicletas y arte en la ciudad más liberal de Europa.",
            "actividades": ["Museo Van Gogh", "Paseo en barco", "Casa de Ana Frank"],
            "reservado": false,
            "imagen": "amsterdam.jpg",
            "calificacion": 4.6,
            "alojamiento": "Hotel boutique",
            "guia_incluido": false
          },
          {
            "id": 13,
            "destino": "Río de Janeiro, Brasil",
            "duracion": 2,
            "costo": 2500,
            "descripcion": "Playas, samba y el Cristo Redentor en un destino lleno de alegría.",
            "actividades": ["Cristo Redentor", "Copacabana", "Carnaval"],
            "reservado": false,
            "imagen": "rio.jpg",
            "calificacion": 4.7,
            "alojamiento": "Resort",
            "guia_incluido": true
          }
    ];
 }
 
 class TarjetaViaje extends HTMLElement {
     constructor() {
         super();
         this.attachShadow({ mode: 'open' });
         this.datos = null;
     }
     
     connectedCallback() {
         const destinoId = parseInt(this.getAttribute('destino-id') || '1');
         this.cargarDatos(destinoId);
     }
     
     cargarDatos(id) {
         const todosLosDatos = data();
         this.datos = todosLosDatos.find(item => item.id === id);
         
         if (this.datos) {
             this.renderizar(this.datos);
         } else {
             console.error(`error: ${id}`);
         }
     }
     
     renderizar(datos) {
         let actividadesHTML = '';
         if (Array.isArray(datos.actividades)) {
             datos.actividades.forEach(actividad => {
                 actividadesHTML += `<li>${actividad}</li>`;
             });
         }
         
         const disponibilidadClase = datos.reservado ? 'no-disponible' : 'disponible';
         const disponibilidadTexto = datos.reservado ? 'Reservado' : 'Disponible';
         
         this.shadowRoot.innerHTML = `
             <style>
                 .tarjeta {
                     border: 1px solid white;
                     padding: 15px;
                     margin: 10px;
                     width: 300px;
                     font-family: Arial, sans-serif;
                     box-shadow: 0 4px 8px black);
                     border-radius: 8px;
                 }
                 
                 .tarjeta img {
                     width: 100%;
                     height: 150px;
                     object-fit: cover;
                     border-radius: 4px;
                 }
                 
                 .tarjeta h2 {
                     color: blue;
                     text-align: center;
                     margin-top: 10px;
                 }
                 
                 .disponible {
                     color: green;
                     font-weight: bold;
                 }
                 
                 .no-disponible {
                     color: red;
                     font-weight: bold;
                 }
                 
                 ul {
                     padding-left: 20px;
                 }
                 
                 .info-row {
                     display: flex;
                     justify-content: space-between;
                     margin: 5px 0;
                 }
                 
                 .precio {
                     font-size: 1.2em;
                     font-weight: bold;
                     color: blue;
                 }
                 
                 .calificacion {
                     display: inline-block;
                     background: white;
                     color: #333;
                     padding: 2px 8px;
                     border-radius: 4px;
                     font-weight: bold;
                 }
             </style>
             
             <div class="tarjeta">
                 <img src="https://picsum.photos/seed/picsum/200/300" src="https://picsum.photos/seed/picsum/200/300">
                 <h2>${datos.destino}</h2>
                 <p class="${disponibilidadClase}">${disponibilidadTexto}</p>
                 
                 <div class="info-row">
                     <span><strong>Duración:</strong> ${datos.duracion} días</span>
                     <span class="precio">$${datos.costo}</span>
                 </div>
                 
                 <p><strong>Descripción:</strong> ${datos.descripcion}</p>
                 <p><strong>Alojamiento:</strong> ${datos.alojamiento}</p>
                 
                 <div class="info-row">
                     <span><strong>Calificación:</strong> <span class="calificacion">${datos.calificacion}</span></span>
                     <span><strong>Guía:</strong> ${datos.guia_incluido ? 'Incluido' : 'No incluido'}</span>
                 </div>
                 
                 <p><strong>Actividades:</strong></p>
                 <ul>
                     ${actividadesHTML}
                 </ul>
             </div>
         `;
     }
 }
 
 customElements.define('tarjeta-viaje', TarjetaViaje);