import { useState } from 'react'

import SvgOptios from 'svg/options'

export const ButtonOptions = ({ nameMusic, setQueueHandler }) => {
    const [showOptios, setShowOptios] = useState(false)
    function setNextMusic (nameMusic) {
        setShowOptios(false)
        console.log(nameMusic)
        setQueueHandler(nameMusic)
    }
    return (
        <div
            className='container__button--music--options'
            onMouseLeave={() => setShowOptios(false)}>
            {
                showOptios &&
                <div
                    className='music--options flex flex-column gap-1'
                >
                    <span
                        className='music--option flex align-center p-1'
                        onClick={() => setNextMusic(nameMusic)}
                    >
                        play next
                    </span>

                    <span
                        className='music--option flex align-center p-1'
                        onClick={() => setNextMusic(nameMusic)}
                    >
                        Remove from queue
                    </span>
                </div>
            }

            <button className='button button--music--options'
                onClick={() => setShowOptios(!showOptios)}
            >
                <SvgOptios />
            </button>
        </div>
    )
}