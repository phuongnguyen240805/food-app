import classNames from "classnames/bind";

import styles from './MenuPage.module.scss'
import { MenuList } from "~/helpers/MenuList";
import MenuItem from "~/components/MenuItem";

const cx = classNames.bind(styles)

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                    return (
                        <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;