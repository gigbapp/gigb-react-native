import axios from 'axios';

export const ConsultaEventosArtistas = async (Id_artista) => {
    const url = `https://apirecomendacaogigb.herokuapp.com/ListaEventos?Id_artista=${Id_artista}`;

    let listaEventos = []
    
    await axios.get(url).then((sucess) => {listaEventos = sucess.data});
    
    /*for (const key in res.data) {
        listaEventos.push(res.data[key]);   
    }*/
    
    return listaEventos;
};