import moment from "moment"

function Order({id, amount, items, timestamp
}){ 

    const formatedAmount = amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    return (
        <div className="relative border rounded-md ">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>{formatedAmount}</p>
                </div>

                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{items.length} items</p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">Order # {id} </p>
            </div>
        </div>
    );
}

export default Order