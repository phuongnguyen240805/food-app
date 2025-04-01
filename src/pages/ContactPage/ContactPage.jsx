import classNames from "classnames/bind";

import PizzaLeft from "~/assets/images/pizzaLeft.jpg";
import styles from './ContactPage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx("leftSide")}
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className={cx("rightSide")}>
                <h1> Contact Us</h1>

                <form id={cx("contact-form")} method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default HomePage;