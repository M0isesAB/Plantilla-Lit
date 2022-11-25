import { LitElement, html, css } from 'lit';
import './card';
import { getPersonajes } from '../riq-api';



export class LoadCArds extends LitElement {
    static styles = [
        css`
           
            .cards{
                margin: 2rem 1rem;
                display: inline-flex;
                justify-content: space-evenly;
                flex-wrap:wrap;
            }
            
        `
    ];
    static get properties() {
        return {
            personajes: { type: Array },
        };
    }

    
    constructor(){
        super();
        this.personajes=[];
    }

   

    async obtenerPersonajes(){
         this.personajes=await getPersonajes();
        // console.log(this.personajes.map(i => console.log('heelo',i.origin.url)))
    }

     async firstUpdated(){
         this.obtenerPersonajes();
    } 

    __filtroPersonajes(e){
        console.log('ENCONTRO LOS PERSONAJES ',e.detail.data);
        this.personajes=e.detail.data;
    }

    render() {
        return html`
        <h1>Inserte aqui su slot</h1>
        <div @dataPersonajes=${this.__filtroPersonajes}><slot></slot></div>
            <div class="cards">
                 ${
                    this.personajes.map(i=> 
                        html`
                        <card-lit title="${i.name}" description=${i.species + ' '+ i.status} img="${i.image}"></card-lit>
                        
                        
                       `
                        )
                 }
                 
            </div>
        
        `;
    }
}
customElements.define('loadcards-lit', LoadCArds);
