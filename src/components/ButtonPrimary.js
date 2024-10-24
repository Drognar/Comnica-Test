function ButtonPrimary({text, onClick}) {
    return (
        <button onClick={onClick} className='bg-primary-light text-white p-4 rounded-3xl font-bold transition-colors hover:bg-primary-light-90'>{text.toUpperCase()}</button>
    );
}

export default ButtonPrimary;