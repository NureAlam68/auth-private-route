import { Helmet } from "react-helmet-async";

const Orders = () => {
    return (
        <div className="mt-[88px] ml-[300px]">
            <Helmet>
                <title>Orders | Auth Private Route</title>
            </Helmet>
            <ul>
                <li>item-1</li>
                <li>item-2</li>
                <li>item-3</li>
                <li>item-4</li>
                <li>item-5</li>
            </ul>
        </div>
    );
};

export default Orders;