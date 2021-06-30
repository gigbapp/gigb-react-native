import axios from 'axios';

export const ConsultaEventosArtistas = async (Id_artista) => {
    const url = `https://apirecomendacaogigb.herokuapp.com/ListaEventos?Id_artista=${Id_artista}`;
    let listaEventos = [];
    await axios.get(url).then((sucess) => {listaEventos = sucess.data});
    
    return listaEventos;
};