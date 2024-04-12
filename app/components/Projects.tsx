import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-white" id="projects">
      <h1 className="pt-20 pb-20 text-7xl font-bold w-2/3 mx-auto">My Work</h1>
      <div className="flex hover-project">
        <div className="w-1/2">
          <Image
            src="/images/leopard.png"
            alt=""
            width={2000}
            height={2000}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-4/12 my-auto ml-10">
          <div className="flex gap-3">
            <h3 className="bg-gray-200 text-lg rounded-full px-3">REACT</h3>
            <h3 className="bg-gray-200 text-lg rounded-full px-3">SCSS</h3>
          </div>
          <h2 className="h1 text-4xl pt-4 font-bold pb-4 tracking-wide">
            Pilanesberg Leopard Project
          </h2>
          <p className="text-2xl font-semi-bold">
            A webiste to help track and identify leopards fostering consevation
            efforts within the Pilanesberg Game Reserve in South Africa.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse py-10">
        <div className="w-1/2">
          <Image
            src="/images/holiday.png"
            alt=""
            width={2000}
            height={2000}
            className="w-full h-96 rounded-lg"
          />
        </div>
        <div className="w-4/12 my-auto ml-10">
          <div className="flex gap-3">
            <h3 className="bg-gray-200 text-lg rounded-full px-3">
              JAVASCRIPT
            </h3>
            <h3 className="bg-gray-200 text-lg rounded-full px-3">FIREBASE</h3>
          </div>
          <h2 className="text-4xl pt-4 font-bold pb-4 tracking-wide">
            A Holiday Keeper
          </h2>
          <p className="text-2xl font-semi-bold pr-12">
            An app to keep track of holiday destinations a user wants to visit.
          </p>
        </div>
      </div>
      <div className="flex pb-20">
        <div className="w-1/2">
          <Image
            src="/images/recipe.png"
            alt=""
            width={2000}
            height={2000}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-4/12 my-auto ml-10">
          <div className="flex gap-3">
            <h3 className="bg-gray-200 text-lg rounded-full px-3">JAVSCRIPT</h3>
            <h3 className="bg-gray-200 text-lg rounded-full px-3">HTML</h3>
            <h3 className="bg-gray-200 text-lg rounded-full px-3">CSS</h3>
          </div>
          <h2 className="text-4xl pt-4 font-bold pb-4 tracking-wide">Recipe Planner</h2>
          <p className="text-2xl font-semi-bold">
            A recipe planner that generates recipes and a shopping list for the
            week.
          </p>
        </div>
      </div>
    </div>
  );
}
