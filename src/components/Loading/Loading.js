import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import classNames from "classnames/bind"
import style from './Loading.module.scss'

const cx = classNames.bind(style)


function Loading() {
    return (
        <FontAwesomeIcon icon={faCircleNotch} className={cx('loading')}/>
    )
}

export default Loading