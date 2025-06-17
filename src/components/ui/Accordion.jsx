export default function Accordion(props) {
  return (
    <div className=" rounded-md mb-1">
      <button
        className="
          w-full 
          p-4 
          bg-teal-400! hover:bg-teal-500 
          transition duration-300 
          flex justify-between items-center   
          pr-8                                 
          text-left
        "
        onClick={e => {
          e.stopPropagation();
          props.toggleAccordion();
        }}
      >
        <span className="font-medium">{props.title}</span>
        <span
          className={`
            transform transition-transform duration-300
            ${props.isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        >
          &#9660;
        </span>
      </button>

      {props.isOpen && (
        <div
          className="p-4 bg-white"
          onClick={e => e.stopPropagation()}
        >
          {props.data}
        </div>
      )}
    </div>
  );
};
