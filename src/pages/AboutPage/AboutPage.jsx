import classNames from "classnames/bind";

import styles from './AboutPage.module.scss'
import MultiplePizzas from "~/assets/images/multiplePizzas.jpeg";

const cx = classNames.bind(styles)

function AboutPage() {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('about-top')}
                style={{ backgroundImage: `url(${MultiplePizzas})` }}
            >
            </div>
            <div className={cx('about-bottom')}>
                <h1 className={cx('heading')}> ABOUT US</h1>
                <p className={cx('description')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                    molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                    nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                    error repudiandae fuga? Ipsa laudantium molestias eos sapiente
                    officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.
                    Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
                    cumque velit
                </p>
            </div>
        </div>
    );
}

export default AboutPage;