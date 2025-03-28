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
        for (let i = 0; i < actividadesLista.length; i++) {
            actividadesHTML += '<li>' + actividadesLista[i] + '</li>'; 

       
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


        `;
    }
}

customElements.define('tarjeta-viaje', TarjetaViaje);
