/*import { useState, useEffect} from "react";

export function useFetch(url){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('url')
        .then((response) => response.json())
        .then((data) =>setData(data));
    }, []);

    return { data };
}*/

/*Este es el codigo que se usa para hacer la peticion a una url y guardar los datos en un estado de react
Cuando se utiliza el hook de useFetch, para llamarlo solo basta con invocarlo como una función y pasarle la url desde
function useFetch(url) es una funcion personalizada que recibe como parametro la url desde donde queremos obtener
los datos. Esto permite que cuando se renderize el componente solo haga la llamada si no tiene los datos cargados 
aquí estariamos llamando a la api por utilizar, yo estoy utilizando una api propia, cuento actualmente con el archivo .json creado*/
