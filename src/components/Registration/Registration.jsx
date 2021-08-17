import style from './Registration.module.scss'
import RegLogo from './RegLogo/RegLogo'
import RegInputs from './RegInputs/RegInputs'
import DataInputs from './DataInputs/DataInputs'
import Verifi from './Verifi/Verifi'
import RegButtons from './RegButtons/RegButtons'

const Registration = (props) => {
    return (
        <div className={style.registr}>
            <RegLogo />
            <RegInputs />
            <DataInputs />
            <Verifi />
            <RegButtons />
        </div>
    )
}

export default Registration;