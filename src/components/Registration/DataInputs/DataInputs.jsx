import style from './DataInputs.module.css'

const DataInputs = (props) => {
    return (
        <div className={style.dataInputsWrap}>
            <div className={style.dataText}>Введите вашу дату рождения:</div>
            <form>
                <div className={style.dataInputs}>
                    <div className={style.dataInput}>
                        <label>Data</label>
                        <input type="text" placeholder='DD' />
                    </div>
                    <div className={style.dataInput}>
                        <label>Mounth</label>
                        <select placeholder='Maand'>
                            <option>Январь</option>
                            <option>Февраль</option>
                            <option>Март</option>
                            <option>Апрель</option>
                            <option>Май</option>
                            <option>Июнь</option>
                            <option>Июль</option>
                            <option>Август</option>
                            <option>Сентябрь</option>
                            <option>Октябрь</option>
                            <option>Ноябрь</option>
                            <option>Декабрь</option>
                        </select>
                    </div>
                    <div className={style.dataInput}>
                        <label>Year</label>
                        <input type="text" placeholder='JJJJ' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataInputs;