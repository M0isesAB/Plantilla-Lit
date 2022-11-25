import { LitElement, html, css } from 'lit';
import { filtroPersonaje  } from '../riq-api';

export class Filtro extends LitElement {
    static styles = [
        css`
            .title{
                text-align: center;
                font-size: 1.5rem;
                color:var(--color-blue);
                margin: 0.5rem 0;
            }
            
            .container {
                display: flex;
                height: 3rem;
                background-color: #f4f4f4;
                align-items: center;
                justify-content: space-evenly;
            }
            .btn{
                background-color:transparent;
                border-radius:3px;
                border-weight: 5px;
                border-color:blue;
                color:blue;
                font-weight:blod;


            }
            .btn:hover{
                background-color:blue;
                color:white;

            }
        
        `
    ];

    
    __personajes=[];

    async buscarPersonaje(){
        let nombre = this.shadowRoot.querySelector('select').value;
        console.log(nombre);
        this.__personajes= await filtroPersonaje(nombre);
        
    }

    async _dispatchPersonajes() {
         await this.buscarPersonaje();
        const data =  this.__personajes;
        //console.log('ENCONTRO LOS PERSONAJES ',this.__personajes);
        if (data) {
          const options = {
            detail: {data},
            bubbles: true,
            composed: true,
          };
          this.dispatchEvent(new CustomEvent('dataPersonajes', options));
        }
      }

    render() {
        return html`
            <h3 class="title">Buscador</h3>
            <div class="container">
                <div>
                    <label for="">Palabra</label>
                    <input type="text" placeholder="Hola">
                </div>
            <div>
                <label for="">Personaje</label>
                <select name="" id="">
                    <option value="Morty" class="">Morty</option>
                    <option value="Summer " class="">Summer</option>
                    <option value="Rick" class="">Rick </option>
                </select>
            </div>

             <button class="btn" @click=${this._dispatchPersonajes}>Buscar</button>
            
            </div>
        
        `;
    }
}
customElements.define('filtro-lit', Filtro);
