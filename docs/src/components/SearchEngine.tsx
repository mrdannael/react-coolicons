import { useState } from 'react';
import Fuse from 'fuse.js';
import SVG from "react-inlinesvg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import IconsSet from '../icons.json';

interface Icon {
  path: string;
  name: string;
  componentName: string;
  category: string;
}

interface Icons {
  icons: Icon[];
}

const fuse = new Fuse((IconsSet as Icons).icons, { includeMatches: false, threshold: 0.1, keys: ["componentName"] });

const Heading = ({ text }: { text: string }) => (
  <div className="pb-2 border-b border-coolnavy">
    <h1 className="font-extrabold text-2xl mt-8">{text}</h1>
  </div>
)

const IconBox = ({ category, name, componentName }: Omit<Icon, 'path'>) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`<${componentName} />`);
    toast.success(`<${componentName} /> icon copied to clipboard`, {
      autoClose: 2000,
      theme: "dark",
      pauseOnHover: false,
      draggable: false,
      position: "bottom-right"
    });
  }

  return (
    <div
      title={componentName}
      onClick={copyToClipboard}
      className="transition flex flex-col w-20 h-20 rounded-lg border-stone-700 hover:border-red-600 m-4 p-4 hover:cursor-pointer hover:text-coolred shadow-lg hover:ease-in hover:shadow-xl"
    >
      <SVG src={`/react-coolicons/icons/${category}/${name}`} name={componentName} height={48} width={48}/>
    </div>
  )
}

const Results = ({ searchResults }: { searchResults: Icon[] }) => {
  const categories = [...new Set(searchResults.map((result) => result.category))];


  return categories.map((category) => <div key={category}>
    <Heading text={category} />
    <div className="flex flex-wrap">
      {searchResults.filter((result) => result.category === category).map((icon) => <IconBox key={icon.name} {...icon} />)}
    </div>
  </div>);
}

export default function SearchEngine() {
  const [searchResults, setSearchResults] = useState<Icon[]>(IconsSet.icons);

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget;

    // If the user searched for an empty string,
    // display all data.
    if (value.length === 0) {
      setSearchResults(IconsSet.icons);
      return;
    }

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setSearchResults(items);
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z" />
          </svg>
        </div>
        <input type="text" id="default-search" className="outline-none block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-coolrose focus:border-coolrose font-semibold" placeholder="Search icons..." required onChange={handleSearch} />
      </div>
      <Results searchResults={searchResults} />
      <ToastContainer progressStyle={{ background: "#f53d7a"}} />
    </div>
  )
};