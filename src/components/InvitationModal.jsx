import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">
              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                Gabung Sekarang
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                Dapatkan Akses Gratis
              </h2>

              <ul className="mb-6 text-white mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Bimbingan dari mentor</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Sharing sesuai dunia industri</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Akses materi gratis</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                  <div className="mr-2 font-extrabold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    KOPICO
                  </div>
              </div>

              <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center">
                Join 500+ other developers
              </h3>
                <div className="w-full sm:w-4/5 p-2 mt-4 space-y-3 mx-auto">
                  <button
                    className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7274f3] transition ease-in-out duration-200"
                    type="button"
                    onClick={() => window.location.href="https://discord.gg/mcsh4KqtPV"}
                  >
                    Join With Discord
                  </button>     <button
                    className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-green-500 hover:bg-green-600 transition ease-in-out duration-200"
                    type="button"
                    onClick={() => window.location.href="https://chat.whatsapp.com/GLDK5K5Z3EYFDF3kngVT2H"}
                  >
                    Join With Whatsapp
                  </button>
                </div>
            </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
