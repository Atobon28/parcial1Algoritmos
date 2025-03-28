class TarjetaViaje extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
        this.datos = null;
    }

    connectedCallback() {
        this.cargarDatos();
    }

    async cargarDatos() {
        const id = this.getAttribute('id') || '';
        try {
            const response = await fetch('/data/destinos.json');
            if (!response.ok) {
                throw new Error('error');
            }
            
            const data = await response.json();
            this.datos = data.find(item => item.id === id) || {};
            
            this.renderizar(this.datos);
        } catch (error) {
            console.error('Error al cargar los datos:', error);
            this.shadowRoot.innerHTML = `
                <div>
                    <p>Error al cargar</p>
                </div>
            `;
        }
    }

    renderizar(datos) {
        let actividadesLista = datos.actividades ? datos.actividades.split(',') : []; 
        let actividadesHTML = '';
        
        for (let i = 0; i < actividadesLista.length; i++) {
            actividadesHTML += '<li>' + actividadesLista[i].trim() + '</li>'; 
        }
        
        const disponibilidadClase = datos.disponibilidad === 'Disponible' ? 'disponible' : 'no-disponible';
       
        this.shadowRoot.innerHTML = `
            <style>
                .tarjeta {
                    border: 1px solid black;
                    padding: 10px;
                    margin: 10px;
                    width: 300px;
                    font-family: Arial;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
            </style>
            
            <div class="tarjeta">
                <img src="${datos.imagen || 'https://picsum.photos/seed/picsum/200/300'}" alt="${datos.destino || 'Destino'}">
                <h2>${datos.destino || 'Sin nombre'}</h2>
                <p class="${disponibilidadClase}">${datos.disponibilidad || ''}</p>
                <p><strong>Duración:</strong> ${datos.duracion || ''}</p>
                <p><strong>Costo:</strong> ${datos.costo || ''}</p>
                <p><strong>Descripción:</strong> ${datos.descripcion || 'Sin descripción'}</p>
                <p><strong>Alojamiento:</strong> ${datos.alojamiento || ''}</p>
                <p><strong>Calificación:</strong> ${datos.calificacion || ''}</p>
                <p><strong>Guía incluido:</strong> ${datos.guia || ''}</p>
                <p><strong>Actividades:</strong></p>
                <ul>
                    ${actividadesHTML || ''}
                </ul>
            </div>
        `;
    }
}

customElements.define('tarjeta-viaje', TarjetaViaje);