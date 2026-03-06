export type MemoryItem = {
  id: string;
  src: string;
  caption: string;
};

export const MEMORIES: MemoryItem[] = [
  { id: "m01", src: "/first.jpg", caption: "Бидний анхны зураг📷" },
  {
    id: "m02",
    src: "/call.jpg",
    caption: "Дэр өөлхөн инээдийг нь халаазэээ вууааакакакака 🫶",
  },
  {
    id: "m03",
    src: "/gar.jpg",
    caption: "Чамтай хамт бүх зүйл гоё болдог✨ хар болтлоо воллдсон өдөр 🏐",
  },
  {
    id: "m04",
    src: "/untah.jpg",
    caption: "Ниээнанананаа нойлсож буй гүнж нумуудаа🥰",
  },
  {
    id: "m05",
    src: "/last.jpg",
    caption: "Бидний сүүлчийн зураг цаашдаа илүү их дурсамжуудыг бүтээх болно гэдэгт итгэлтэй байна❤️",
  },
  // ... 10-20 хүртэл нэм
];
