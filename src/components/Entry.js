
const Entry = ({id, body}) => {
    
    return ( //El id en el campo key de la etiqueta div lo pide react para iterar elementos
        <div key={id}>  
            <strong>Tip #{id}</strong>
            <p>{body}</p>
        </div>
        
    );
}

export default Entry;