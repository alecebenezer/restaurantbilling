const menuItems = [
  // Biryani
  { id: 1, name: "Chicken Biryani", price: 180 },
  { id: 2, name: "Mutton Biryani", price: 250 },
  { id: 3, name: "Egg Biryani", price: 140 },
  { id: 4, name: "Veg Biryani", price: 120 },

  // Fried Rice
  { id: 5, name: "Chicken Fried Rice", price: 160 },
  { id: 6, name: "Egg Fried Rice", price: 130 },
  { id: 7, name: "Veg Fried Rice", price: 110 },

  // Noodles
  { id: 8, name: "Chicken Noodles", price: 160 },
  { id: 9, name: "Egg Noodles", price: 130 },
  { id: 10, name: "Veg Noodles", price: 110 },

  // Starters
  { id: 11, name: "Chicken 65", price: 180 },
  { id: 12, name: "Chicken Lollipop", price: 220 },
  { id: 13, name: "Dragon Chicken", price: 240 },
  { id: 14, name: "Paneer 65", price: 170 },

  // Dosa
  { id: 15, name: "Plain Dosa", price: 50 },
  { id: 16, name: "Masala Dosa", price: 70 },
  { id: 17, name: "Ghee Roast", price: 90 },

  // Parotta
  { id: 18, name: "Parotta", price: 20 },
  { id: 19, name: "Kothu Parotta", price: 120 },
  { id: 20, name: "Chicken Kothu Parotta", price: 180 },

  // Meals
  { id: 21, name: "Veg Meals", price: 120 },
  { id: 22, name: "Non Veg Meals", price: 180 },

  // Beverages
  { id: 23, name: "Tea", price: 15 },
  { id: 24, name: "Coffee", price: 20 },
  { id: 25, name: "Lime Juice", price: 40 },
  { id: 26, name: "Coke", price: 40 },
  { id: 27, name: "Pepsi", price: 40 },
  { id: 28, name: "Water Bottle", price: 20 },

  // Desserts
  { id: 29, name: "Ice Cream", price: 60 },
  { id: 30, name: "Gulab Jamun", price: 40 }
];

// Get all menu items
export const getMenuItems = () => {
  return menuItems;
};

// Get menu item by ID
export const getMenuItemById = (id) => {
  return menuItems.find((item) => item.id === id);
};

export default menuItems;