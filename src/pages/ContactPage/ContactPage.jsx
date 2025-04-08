import classNames from "classnames/bind";

import PizzaLeft from "~/assets/images/pizzaLeft.jpg";
import styles from './ContactPage.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles)

function ContactPage() {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx("left-side")}
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className={cx("right-side")}>
                <h1 className={cx("heading")}> Contact Us</h1>

                <form className={cx('contact-form')} id={cx("contact-form")} method="POST">
                    <label
                        className={cx('label')}
                        htmlFor="name">Full Name</label>
                    <input className={cx('input')} name="name" placeholder="Enter full name..." type="text" />

                    <label
                        className={cx('label')}
                        htmlFor="email">Email</label>
                    <input className={cx('input')} name="email" placeholder="Enter email..." type="email" />
                    
                    <label
                        className={cx('label')}
                        htmlFor="message">Message</label>
                    <textarea
                    className={cx('comment')}
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    >
                    </textarea>
                    <Button type="submit" medium>Send Message</Button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;