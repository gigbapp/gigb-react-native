
export const verificarCampoPreenchidoObrigatorio =  (valor) =>{
    return (valor == null || valor.trim() == '') ? false :true;
};

export const verificarEmailPreenchidoCorretamente =  (valor) =>{
    return valor.trim().includes('@')? true: false; 
};

export const retirarEspacamento = (palavra) => {
    return palavra.replace('/\s+/g', '')
}