const stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    console.log(items);
    console.log(email)

    const transformedItems = items.map((item) =>({
      price_data: {
        currency: 'mxn',
        product_data:{
            name: item.title
        },
        unit_amount: item.price * 100
      },
       quantity:1,
       
    }))

    const session = await stripe.checkout.sessions.create({

        line_items: transformedItems,
        //line_items: [
          //  {
            //    price_data: {
              //      currency: 'mxn',
                //    product_data: {
                  //      name: 't shirt',
                    //},
                    //unit_amount: 2000,
                //},
                  //  quantity:1,
                
            //}
        //],
        mode:'payment',
        shipping_address_collection: {
            allowed_countries: ['MX', 'US']
        },
        
    
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        },
        
    });

    res.status(200).json({ id:session.id })
    
};