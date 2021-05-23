import { signIn, useSession } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/cartSlice";

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const total = useSelector(selectTotal);
  const route = useRouter();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Shopping Cart - Amazon India</title>
      </Head>

      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length ? "Shopping Cart" : "Your Cart is empty"}
            </h1>

            {items.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">{`₹${Math.floor(
                  total * 100
                )}`}</span>
              </h2>

              <button
                onClick={
                  !session
                    ? () => signIn()
                    : () => alert("Proceed to checkout flow is left")
                }
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-white"
                }`}
              >
                {session ? "Proceed to checkout" : "Sign in to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
