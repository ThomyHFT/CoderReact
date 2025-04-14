
const Button=({text,handler,style})=>{
    return(
        <button className={style} onClick={handler}>
            {text}
        </button>
    )

}

export default Button