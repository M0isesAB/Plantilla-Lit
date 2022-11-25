const urlCRUD= 'https://rickandmortyapi.com/api/character';

 const getPersonajes = async ()=>{
    try{

        const resp = await fetch(urlCRUD);
         const {results}= await resp.json();
         return results;

    }catch (err){
         return err;
    }
}

const filtroPersonaje = async(name)=>{
    try{

        const resp = await fetch(urlCRUD+'/?name='+name);
         const {results}= await resp.json();
         console.log(results);
         return results;

    }catch (err){
         return err;
    }
}
export { getPersonajes, filtroPersonaje};