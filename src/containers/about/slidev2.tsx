const data = [
  { modernequipped: "img_modern_equipped_computer_lab_250x400.png" },
  { modernequipped: "img_man_working_table.png" },
  { modernequipped: "img_modern_equipped_computer_lab.png" },
  { modernequipped: "img_short_haired_bu.png" },
  { modernequipped: "img_modern_equipped_computer_lab_250x400.png" },
  { modernequipped: "img_man_working_table.png" },
  { modernequipped: "img_modern_equipped_computer_lab.png" },
  { modernequipped: "img_short_haired_bu.png" },
  { modernequipped: "img_modern_equipped_computer_lab_250x400.png" },
  { modernequipped: "img_man_working_table.png" },
  { modernequipped: "img_modern_equipped_computer_lab.png" },
  { modernequipped: "img_short_haired_bu.png" },
  { modernequipped: "img_modern_equipped_computer_lab_250x400.png" },
  { modernequipped: "img_man_working_table.png" },
  { modernequipped: "img_modern_equipped_computer_lab.png" },
  { modernequipped: "img_short_haired_bu.png" },
  { modernequipped: "img_modern_equipped_computer_lab_250x400.png" },
  { modernequipped: "img_man_working_table.png" },
  { modernequipped: "img_modern_equipped_computer_lab.png" },
  { modernequipped: "img_short_haired_bu.png" },
];

export default function SlideV2() {
  return (
    <div className=" overflow-hidden  w-full">
      <div className="w-full  flex gap-4 animate-slide-left-10 sm:animate-slide-left-5">
        {data.map((d, index) => (
          <img
            key={"about1" + index}
            src={"/images/" + d.modernequipped}
            alt={d.modernequipped}
            className=" !w-[29%] md:!w-[40%] md:mr-4 sm:mr-2 mr-6 sm:!w-[80%] object-contain "
          />
        ))}
      </div>
    </div>
  );
}
