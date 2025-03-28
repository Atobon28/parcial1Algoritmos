import type { TypeFromRequire } from "pkg"

class TarjetaViaje extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        this.cargarDatos();
    }

    cargarDatos() {
        let datos = {
            destino: this.getAttribute('destino'), 
            duracion: this.getAttribute('duracion'), 
            costo: this.getAttribute('costo'),
            descripcion: this.getAttribute('descripcion'),
            actividades: this.getAttribute('actividades'), 
            disponibilidad: this.getAttribute('disponible') === 'true' ? 'Disponible' : 'No disponible',
            imagen: this.getAttribute('imagen'), 
            calificacion: this.getAttribute('calificacion'),
            alojamiento: this.getAttribute('alojamiento'), 
            guia: this.getAttribute('guia') === 'true' ? 'Sí' : 'No'
        };

        this.renderizar(datos); 
    }

    renderizar(datos) {
        let actividadesLista = datos.actividades ? datos.actividades.split(',') : []; 
        let actividadesHTML = '';
        
        // Corregido el bucle para generar la lista de actividades
        for (let i = 0; i < actividadesLista.length; i++) {
            actividadesHTML += '<li>' + actividadesLista[i] + '</li>'; 
        }
        
        // Clase disponibilidad basada en el estado
        const disponibilidadClase = datos.disponibilidad === 'Disponible' ? 'disponible' : 'no-disponible';
       
        // HTML completo
        this.shadowRoot.innerHTML = `
            <style>
                .tarjeta {
                    border: 1px solid black; /* Un borde simple */
                    padding: 10px;
                    margin: 10px;
                    width: 300px;
                    font-family: Arial;
                }
                
                .tarjeta img {
                    width: 100%;
                    height: 150px;
                }

                .tarjeta h2 {
                    color: blue;
                    text-align: center;
                }

                .disponible {
                    color: green;
                    font-weight: bold;
                }

                .no-disponible {
                    color: red;
                    font-weight: bold;
                }
            </style>
            
            <div class="tarjeta">
                <img src="${datos.imagen}" src="https://picsum.photos/seed/picsum/200/300">
                <h2>${datos.destino}</h2>
                <p class="${disponibilidadClase}">${datos.disponibilidad}</p>
                <p><strong>Duración:</strong> ${datos.duracion}</p>
                <p><strong>Costo:</strong> ${datos.costo}</p>
                <p><strong>Descripción:</strong> ${datos.descripcion}</p>
                <p><strong>Alojamiento:</strong> ${datos.alojamiento}</p>
                <p><strong>Calificación:</strong> ${datos.calificacion}</p>
                <p><strong>Guía incluido:</strong> ${datos.guia}</p>
                <p><strong>Actividades:</strong></p>
                <ul>
                    ${actividadesHTML}
                </ul>
            </div>
        `;
    }
}

customElements.define('tarjeta-viaje', TarjetaViaje);