// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect } from "react";
// import { useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useAuth from "../../../Hooks/useAuth";
// import './CheckOutForm.css'


// const CheckOutForm = ({ price, cart }) => {

//     const stripe = useStripe();
//     const elements = useElements();
//     const { user } = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     const [cardError, setCardError] = useState('');
//     const [clientSecret, setClientSecret] = useState('');
//     // const [processing, setProcessing] = useState(false);
//     const [transactionId, setTransactionId] = useState('');


//     // useEffect(() => {
//     //     if (price > 0) {
//     //         axiosSecure.post('/create-payment-intent', { price })
//     //             .then(res => {
//     //                 console.log(res.data.clientSecret);
//     //                 setClientSecret(res.data.clientSecret)
//     //             })
//     //     }
//     // }, [price, axiosSecure])

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement);

//         if (card === null) {
//             return
//         }


//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//         })

//         if (error) {
//             console.log("Error", error)
//             setCardError(error.message)
//         }
//         else {
//             setCardError('')
//             console.log("Payment Method", paymentMethod);
//         }

//         // setProcessing(true);

//         // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//         //     clientSecret,
//         //     {
//         //         payment_method: {
//         //             card: card,
//         //             billing_details: {
//         //                 email: user?.email || 'unknown',
//         //                 name: user?.displayName || 'anonymous'
//         //             },
//         //         },
//         //     },
//         // );

//         // if (confirmError) {
//         //     console.log(confirmError);
//         // }

//         // console.log(paymentIntent);
//         // setProcessing(false);

//         // if (paymentIntent.status === 'succeeded') {
//         //     setTransactionId(paymentIntent.id)
//             // Saved payment 
//             const payment = {
//                 email: user?.email,
//                 transactionId: paymentIntent.id,
//                 price,
//                 date: new Date(),
//                 status: 'service pending',
//                 quantity: cart.length,
//                 cartItems: cart.map(item => item._id),
//                 menuItems: cart.map(item => item.menuItemId),
//                 itemNames: cart.map(item => item.name)
//             }
//             axiosSecure.post('/payments', payment)
//                 .then(res => {
//                     console.log(res.data);
//                     if (res.data.insertedId) {
//                         // 
//                     }
//                 })
//         }

//     }

//     return (
//         <>
//             <form className="w-2/3 m-8" onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe }>
//                     Pay
//                 </button>
//             </form>
//             {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
//             {transactionId && <p className="text-green-400 ml-8">TransactionId : {transactionId}</p>}
//         </>
//     );
// };

// export default CheckOutForm;