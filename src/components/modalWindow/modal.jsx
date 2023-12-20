import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ orderModal, handleOpenModal }) => {
  return (
    <>
      {orderModal && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1>Order Your Book</h1>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => handleOpenModal(false)}
                />
              </div>
            </div>
            {/* Form */}
            <div className="mt-4">
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Adress"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
              </form>
              <div className="flex justify-center">
                <button
                  onClick={() => handleOpenModal(false)}
                  className="bg-primary text-white px-8 py-2 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
