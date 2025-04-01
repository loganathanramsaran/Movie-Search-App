export const Footer = () => {
  return (
    <section className="bg-green-300 border-t-4 border-gray-700">
        <div className="container mx-auto flex flex-col pb-1 justify-evenl items-center gap-2 max-md:flex-row">
        <div className="text-gray-700 font-semibold flex  items-center gap-4 flex-wrap justify-center max-md:justify-normal">
          <span>Home</span>
          <span>About Us</span>
          <span>Privacy & Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="flex justify-center items-center flex-col gap-3 ">
        <div className="text-xl text-center text-green-700 font-bold flex gap-1 items-center">
          Movie <span className="text-gray-700">Hub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22"
            width="25"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffa000"
              d="M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM512 192L0 192 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224z"
            />
          </svg>{" "}
        </div>
        <p className="text-center text-gray-700 font-semibold max-sm:line-clamp-2">
          Copyright @ 2025 Movie Hub. All Rights Reserved
        </p>

        </div>
        </div>
    </section>
  );
};
