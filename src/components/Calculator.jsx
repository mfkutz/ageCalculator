import React, { useState } from 'react'
import Icon from './Icon'

const Calculator = () => {

    const [days, setDays] = useState('')
    const [months, setMonths] = useState('')
    const [years, setYears] = useState('')

    const [showResults, setShowResults] = useState(false)

    const [diffDays, setDiffDays] = useState(0);
    const [diffMonths, setDiffMonths] = useState(0);
    const [diffYears, setDiffYears] = useState(0)

    //ESTADOS DE LOS DATOS MAL INGRESADOS O VACIOS
    const [dayError, setDayError] = useState('');
    const [monthError, setMonthError] = useState('');
    const [yearsError, setYearsError] = useState('');


    const handleChangeDays = (e) => {
        setDays(e.target.value)
    }
    const handleChangeMonths = (e) => {
        setMonths(e.target.value)
    }

    const handleChangeYears = (e) => {
        setYears(e.target.value)
    }


    const validateForm = () => {

        let isValid = true;
        //DAYS
        if (!days) {
            setDayError('This field is required');
            isValid = false;
        } else {
            setDayError('');
        }
        //MONTHS
        if (!months) {
            setMonthError('This field is required');
            isValid = false;
        } else {
            setMonthError('');
        }
        //YEARS
        if (!years) {
            setYearsError('This field is required');
            isValid = false;
        } else {
            setYearsError('');
        }
        return isValid;
    }



    const handleSubmit = (e) => {
        //hago un preventDefault para que no refresque la pagina
        e.preventDefault()

        if (validateForm()) {

            //cuando hago clic en el boton se cambia a true y muestra el resultado
            setShowResults(true)

            //new Date() obtiene la fecha y nos devuelve un objeto
            const currentDate = new Date();


            //con esta linea establecemos una fecha
            const inputDate = new Date(`${years}-${months}-${days}`);

            //diferencia de tiempo se obtiene en MILISEGUNDOS
            const diffTime = Math.abs(currentDate - inputDate);

            // Convertir la diferencia de milisegundos a años, meses y días
            const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
            const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
            const diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));

            setDiffDays(diffDays);
            setDiffMonths(diffMonths);
            setDiffYears(diffYears);
        }

    }


    return (
        <div className='flex items-center justify-center h-screen bg-light-grey'>
            <div className='bg-[white] xl:min-h-[650px] xl:min-w-[840px] min-w-[345px] min-h-[485px] rounded-xl rounded-br-[80px]'>
                <div className='xl:pt-14 pt-12 pb-9 xl:pl-14 pl-[24px] max-w-[320px]'>

                    {/* ///////////////////////FORM////////////////////////////// */}

                    <form onSubmit={handleSubmit} className='max-w-[310px]'>
                        <div className='flex xl:gap-8 gap-4 max-w-[310px]'>
                            <div className='flex-col'>
                                <div className='uppercase xl:text-[14px] text-[12px] text-gray-500 poppins-b tracking-[2px] xl:pb-2 pb-[5px] '>Day</div>
                                <input
                                    value={days}
                                    onChange={handleChangeDays}
                                    type="number"
                                    min='1'
                                    max='31'
                                    placeholder='DD'
                                    className=' xl:w-[160px] w-[88px] h-[54px] xl:h-[73px] rounded-[8px] border-[1px] focus:border-purple xl:pl-6 pl-4 caret-purple poppins-b xl:text-[32px] text-[20px] appearance-none'

                                />
                                {dayError && <p className="text-light-red xl:text-[14px] text-[8px] poppins-i pt-2">{dayError}</p>}

                            </div>
                            <div className='flex-col'>
                                <div className='uppercase xl:text-[14px] text-[12px] text-gray-500 poppins-b tracking-[2px] xl:pb-2 pb-[5px]'>Month</div>
                                <input
                                    value={months}
                                    onChange={handleChangeMonths}
                                    type="number"
                                    min='1'
                                    max='12'
                                    placeholder='MM'
                                    className=' xl:w-[160px] w-[88px] h-[54px] xl:h-[73px] rounded-[8px] border-[1px] focus:border-purple xl:pl-6 pl-4 caret-purple poppins-b xl:text-[32px] text-[20px] appearance-none'
                                />
                                {monthError && <p className="text-light-red xl:text-[14px] text-[8px] poppins-i pt-2">{monthError}</p>}
                            </div>
                            <div className='flex-col'>
                                <div className='uppercase xl:text-[14px] text-[12px] text-gray-500 poppins-b tracking-[2px] xl:pb-2 pb-[5px]'>Year</div>
                                <input
                                    value={years}
                                    onChange={handleChangeYears}
                                    type="number"
                                    min='1900'
                                    max={new Date().getFullYear()}
                                    placeholder='YYYY'
                                    className=' xl:w-[160px] w-[88px] h-[54px] xl:h-[73px] rounded-[8px] border-[1px] focus:border-purple xl:pl-6 pl-4 caret-purple poppins-b xl:text-[32px] text-[20px] appearance-none'
                                />
                                {yearsError && <p className="text-light-red xl:text-[14px] text-[8px] poppins-i pt-2">{yearsError}</p>}
                            </div>
                        </div>
                        <div className='xl:mr-10 mr-6 relative border-b border-b-gray-200 xl:pt-12 pt-16 xl:min-w-[725px] min-w-[290px] '>
                            <button className='flex items-center justify-center bg-purple xl:h-[92px] h-[65px] xl:w-[92px] w-[65px] rounded-full absolute xl:right-0 right-[110px] xl:top-[3px] top-8 hover:bg-black '><Icon /></button>

                        </div>
                    </form>

                </div>
                <div className='xl:pt-6 pt-2 ml-14 mr-15 max-w-[700px] xl:mt-3 mt-10  '>
                    <div className='xl:text-[100px] text-[56px] pop-ebi xl:pl-10 pl-1 xl:-m-10 -m-8 max-w-[310px] xl:max-w-[720px]'>
                        {showResults && days ? <span className='text-purple'>{diffYears}</span> : <span className='text-purple'>--</span>} years
                    </div>
                    <div className='xl:text-[100px] text-[56px] pop-ebi xl:pl-10 pl-1  xl:-m-10 -m-8 pt-1 max-w-[320px] xl:max-w-[720px] '>
                        {showResults && days ? <span className='text-purple'>{diffMonths}</span> : <span className='text-purple'>--</span>} months
                    </div>
                    <div className='xl:text-[100px] text-[56px] pop-ebi xl:pl-10 pl-1 xl:-m-10 -m-8 pt-2 max-w-[310px] xl:max-w-[720px]'>
                        {showResults && days ? <span className='text-purple'>{diffDays}</span> : <span className='text-purple'>--</span>} days
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calculator