import { CheckCircleIcon } from "@heroicons/react/20/solid"
import Header from "../components/Header"
import { useRouter } from "next/router"

function success() {

  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen ">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Gracias, su pedido ha sido confirmado! </h1>
          </div>
          <p>
            Gracis por su compra. Le enviaremos una confirmación, sus productos han sido enviado, si desea ver el estatus de su orden haga click en el enlace
          </p>
          <button onClick={() => router.push('/orders')} className="button mt-8" >Ir a tus pedidos</button>
        </div>
      </main>
    </div>
  )
}

export default success