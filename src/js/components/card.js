import { LitElement, html, css } from 'lit';



export class Card extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .card{
                display: flex;
                flex-direction: column;
                width: 200px;
                background-color: #f8f8f8;
                align-items: center;
                box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5);
                max-heigth:400px;
                min-height:300px;
                margin:1rem;
            }
            
            .card::after{
                background-color: #454545;
                left: 50px;
            }
            
            .card-title{
                font-size: 1.2em;
                color: rgb(122, 122, 122);
                margin: 2px auto;
            }
            
            .card-img{
                width: 12.5rem;
                height: 13rem;
            }
            
            .description{
                margin: 1rem ;
            }
            
            
            .card-btn{
                background-color: transparent;
                border-color:#324fff;
                border-radius: 18px;
                border-width: 3px;
                color:#324fff;
                width: 6rem;
                padding: 0.2rem 0;
                margin: 1rem;
                -webkit-margin-collapse: collapse;
            
            }
            
            .card-btn:hover{
                 background-color: #324fff;
                 color:white;
            }
        `
    ];
    
    static get properties() {
        return {
            title:       { type: String },
            img:         { type: String },
            description: { type: String },

        };
    }

    constructor(){
        super();
        this.title='temp';
        this.img='https://rickandmortyapi.com/api/character/avatar/98.jpeg';
        this.description='tempo';
      
    }


    render() {
        return html`
       
        <div class="card">
            <h1 class="card-title">${this.title}</h1>
            <img  class="card-img" src="${this.img}" alt="" srcset=""/>
            <p class="description">${this.description}</p>
            <button class="card-btn">learn more</button>
        </div>
        
        
        
        `;
    }
}
customElements.define('card-lit', Card);
