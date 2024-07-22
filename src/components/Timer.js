import React, {useEffect, useState} from 'react'

const INITIAL_STATE = 30;
const TIME_IN_MILLISECONDS = 1000;
const Timer = () => {
    const [timer, setTimer] = useState(INITIAL_STATE);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(prevTimer => prevTimer - 1);
            }
        }, TIME_IN_MILLISECONDS);

        return () => clearInterval(interval);
    }, []);
    /*TODO:    Sử dụng setInterval() để thực hiện trừ timer sau mỗi 1 giây.  Lưu ý, cần clean up effect setInterval ở cuối hàm useEffect để đảm bảo chương trình chạy đúng, hãy return một function cần thiết để clean up effect.

*/


    return (<div>Timer:{timer < 0 ? setTimer(INITIAL_STATE) : timer}</div>

    )
}
export default Timer
