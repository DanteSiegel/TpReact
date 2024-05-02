import './ItemFormulario.css';

const ItemFormulario = (
    {
        texto = "default",
        placeHolder = "ingrese texto aqui",
        clase = "u-full-width",
        type = "type"
    }
    
    ) => {
    return (
        <>
            <label>{texto}</label>
            <input placeholder={placeHolder} className={clase} type={type}/>
        </>
    );
}

export default ItemFormulario;