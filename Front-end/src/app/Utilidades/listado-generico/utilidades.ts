export function ParsearErroresAPI(response:any): string[]{
  const resultado:string[]=[];
  if(response.error){
    if(typeof response.error === 'string'){
      resultado.push(response.error);
    } else if(Array.isArray(response.error)){
       response.error.forEach(valor => resultado.push(valor.description));
    } else{
      const mapaErrores = response.error.errors;
      const inputs = Object.entries(mapaErrores);
      inputs.forEach((arreglo:any[])=>{
        const campo = arreglo[0];
        arreglo[1].forEach(messageError => {
           resultado.push(`${campo}: ${messageError}`);
        });
      });
    }
  }
  return resultado;
}
