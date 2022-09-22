import classNames from "classnames/bind"
import Card from "~/components/Card/Card"
import style from './Introduce.module.scss'

import {faCompass, faGem, faBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const cx = classNames.bind(style)

const intro = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faCompass}/>,
        title: 'Mission',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faGem}/>,
        title: 'Vision',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faBook}/>,
        title: 'History',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
    }
]

function Introduce() {
    return (
        <section className={cx('wrapper')}>
            <section className={cx('center')}>
                <div className={cx('container')}>
                    <h1>Custom Furniture<br/>Built Only For You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>
                <div className={cx('card')}>
                    {intro.map(item => {
                        return (
                            <Card key={item.id} icon={item.icon} title={item.title} description={item.description}/>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default Introduce