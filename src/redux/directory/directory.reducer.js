const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/q3272PCz/pexels-hat.webp",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/LDmgS2cP/pexels-jacket.webp",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/WvwQJtkX/pexels-shoe.webp",
      id: 3,
      linkUrl: "shop/shoes",
    },
    {
      title: "jewelries",
      imageUrl: "https://i.ibb.co/nmKv6tW/pexels-jewelry.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/jewelries",
    },
    {
      title: "bags",
      imageUrl: "https://i.ibb.co/PvxNGmhB/pexels-bag.webp",
      size: "large",
      id: 5,
      linkUrl: "shop/bags",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
