export default function Filters({}) {
  return (
    <div className="flex items-center flex-col justify-center border-b">
      <div className="py-4 px-4 w-full grid md:grid-cols-5 grid-cols-2 max-w-[1220px] gap-4 items-center md:gap-5">
        {filterItems.map((item) => (
          <select
            key={item.title}
            className="w-full h-[40px] rounded-[7px] bg-[#F3F3F3] text-[16px] font-medium text-[#585858] flex items-center justify-center px-2"
          >
            <option>{item.title}</option>
            {item.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
}

const filterItems = [
  {
    title: "Expertise",
    options: ["Dermatologist", "Gynecologist", "General Physician"],
  },
  {
    title: "Gender",
    options: ["Male", "Female", "Other"],
  },
  {
    title: "Fees",
    options: ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"],
  },
  {
    title: "Languages",
    options: ["English", "Spanish", "French", "German", "Chinese"],
  },
  {
    title: "All filters",
    options: ["Reset all filters"],
  },
];
