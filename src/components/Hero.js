import ButtonPrimary from "./ButtonPrimary";

function Hero() {
    return (
        <div className='flex flex-col lg:flex-row min-w-[100vw] min-h-[100vh]'>
            <img className='fixed bottom-0 opacity-[3%] pointer-events-none' src='/lines.svg' alt='lines'/>
            <div className='flex flex-col md:flex-row gap-16 justify-between lg:w-2/3 min-h-full bg-primary-light-90 py-20 lg:py-36 px-8 lg:px-16'>
                <div>
                    <h1 className='font-bold text-4xl text-primary-dark'>Comnica Signature</h1>
                    <p className='mt-4 font-bold'>Digitális aláíró szolgáltatlás a Comnicától</p>
                </div>
                <img className='max-w-96 lg:max-h-96' src='/isometric_laptop.png' alt='Laptop graphics' />
            </div>
            <div className='lg:w-1/3 min-h-full bg-primary-light-50 py-20 lg:py-36 px-8 lg:px-16 bg-opacity-50'>
                <h2 className='text-secondary text-4xl font-bold'>Üdvözlöm a Comnica Signature-ben!</h2>
                <p className='mt-4 mb-16'>A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.</p>
                <ButtonPrimary onClick={() => console.log("Hello World! :D")} text='Kezdhetjük' />
            </div>
        </div>
    );
}

export default Hero;