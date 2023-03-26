import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import useListas from '../hooks/useListas';

const SELECCION = ['Me lo Pido', 'Comprado']

const ModalFormularioLista = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [seleccion, setSeleccion] = useState('');

    const { modalFormularioLista, handleModaList } = useListas();

  return (
    <>

      <Transition appear show={modalFormularioLista} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleModaList}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-teal-900"
                  >
                    Añadir regalo
                  </Dialog.Title>
                  <div className="mt-2">
                   <form className="my-10">
                    <div className="mb-5">
                        <label 
                            className="text-teal-800 uppercase text-sm"
                            htmlFor="nombre"
                        >
                            Nombre Regalo
                        </label>
                        <input 
                            type="text"
                            id="nombre"
                            placeholder="Nombre del regalo"
                            className="border-2 w-full p-2 mt-2 placeholder-teal-600 rounded-md"
                            value={nombre}
                            onClick={ e => setNombre(e.target.value) }
                        />
                    </div>

                    <div className="mb-5">
                        <label 
                            className="text-teal-800 uppercase text-sm"
                            htmlFor="descripcion"
                        >
                            Descripción Regalo
                        </label>
                        <textarea 
                            id="descripcion"
                            placeholder="Descripción del regalo"
                            className="border-2 w-full p-2 mt-2 placeholder-teal-600 rounded-md"
                            value={descripcion}
                            onClick={ e => setDescripcion(e.target.value) }
                        />
                    </div>

                    <div className="mb-5">
                        <label 
                            className="text-teal-800 uppercase text-sm"
                            htmlFor="seleccion"
                        >
                            Selección del regalo
                        </label>
                        <select 
                            id="seleccion"
                            className="border-2 w-full p-2 mt-2 placeholder-teal-600 rounded-md"
                            value={seleccion}
                            onChange={ e => setSeleccion(e.target.value) }
                        >
                            <option value="">-- Seleccionar --</option>
                            {SELECCION.map( opcion => (
                                <option key={opcion}>{opcion}</option>
                            ))}
                        </select>
                    </div>
                    <input 
                        type="submit"
                        className="bg-teal-600 hover:bg-teal-700 w-full p-3 text-white uppercase cursor-pointer transition-colors rounded text-sm"
                        value="Crear regalo"
                    />
                   </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                      onClick={ handleModaList }
                    >
                     Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalFormularioLista
