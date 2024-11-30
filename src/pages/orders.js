import { getSession, useSession } from "next-auth/react"
import Header from "../components/Header"
import Credentials from "next-auth/providers/credentials";
import moment from "moment/moment";
import db from "../../firebase"
import Order from "../components/Order";

function Orders({ orders }) {

const {data: session} = useSession();

console.log(orders);

  return (
    <div>
        <Header />
        <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Tus pedidos</h1>

            {session ? (
                <h2> {orders.length} Orders </h2>
            ): (
                <h2>Por favor Identificate</h2>
            )}

            <div className="mt-5 space-y-4 ">
                {orders?.map(
                    ({id, amount, items, timestamp}
                    ) =>(
                    <Order
                        key={id}
                        id={id}
                        amount={amount}
                        items={items}
                        timestamp={timestamp}
                    />
                ))}
            </div>


            
        </main>
    </div>
  )
}

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY);

    //Get the users logged in Credentials...
    const session = await getSession(context);

    if (!session) {
        return{
            props: {},
        };

    }

    //Firebase db
    const stripeOrders = await db
     .collection('users')
     .doc(session.user.email)
     .collection('orders')
     .orderBy('timestamp', 'desc')
     .get();

    
     //stripe orders

     const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id,{
                    limit:100,
                })
            ).data,
        }))
     );

     return {
        props: {
            orders,
        }
     }

}