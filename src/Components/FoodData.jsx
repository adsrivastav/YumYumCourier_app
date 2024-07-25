export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/menu') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              menu: [
                {
                  id: 1,
                  name: 'Margherita Pizza',
                 description : 'Fresh mozzarella, tomato sauce, and basil.delicious dish that has captured the hearts and taste buds of people all over the world. It originated in Naples, Italy, but has since become a global culinary sensation with countless variations and flavors. Fast food refers to food that is prepared and served quickly, typically in a fast-food restaurant or through a drive-through. It is known for its convenience, affordability, and quick servic. Fast-food menus typically include hamburgers, cheeseburgers, chicken sandwiches, French fries, soft drinks, milkshakes, pizza, tacos, burritos, fried chicken, and various other fried or grilled items',
                  price: 12.99,
                  image:
                    'https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 30,
                },
                {
                  id: 2,
                  name: 'Pepperoni Pizza',
                  description: 'Pepperoni, mozzarella, and tomato sauce.delicious dish that has captured the hearts and taste buds of people all over the world. It originated in Naples, Italy, but has since become a global culinary sensation with countless variations and flavors. Fast food refers to food that is prepared and served quickly, typically in a fast-food restaurant or through a drive-through. It is known for its convenience, affordability, and quick servic. Fast-food menus typically include hamburgers, cheeseburgers, chicken sandwiches, French fries, soft drinks, milkshakes, pizza, tacos, burritos, fried chicken, and various other fried or grilled items',
                  price: 14.99,
                  image:
                    'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg',
                  is_vegetarian: false,
                  is_spicy: true,
                  delivery_time: 35,
                },
                {
                  id: 3,
                  name: 'Pesto Pasta',
                  description: 'Penne pasta with homemade pesto sauce.delicious dish that has captured the hearts and taste buds of people all over the world. It originated in Naples, Italy, but has since become a global culinary sensation with countless variations and flavors. Fast food refers to food that is prepared and served quickly, typically in a fast-food restaurant or through a drive-through. It is known for its convenience, affordability, and quick servic. Fast-food menus typically include hamburgers, cheeseburgers, chicken sandwiches, French fries, soft drinks, milkshakes, pizza, tacos, burritos, fried chicken, and various other fried or grilled items',
                  price: 10.99,
                  image:
                    'https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 25,
                },
                {
                  id: 4,
                  name: 'Chicken Alfredo',
                  description:
                    'Fettuccine pasta with creamy Alfredo sauce and grilled chicken.delicious dish that has captured the hearts and taste buds of people all over the world. It originated in Naples, Italy, but has since become a global culinary sensation with countless variations and flavors. Fast food refers to food that is prepared and served quickly, typically in a fast-food restaurant or through a drive-through. It is known for its convenience, affordability, and quick servic.  Fast-food menus typically include hamburgers, cheeseburgers, chicken sandwiches, French fries, soft drinks, milkshakes, pizza, tacos, burritos, fried chicken, and various other fried or grilled items',
                  price: 13.99,
                  image:
                    'https://assets.kraftfoods.com/recipe_images/opendeploy/120201_640x428.jpg',
                  is_vegetarian: false,
                  is_spicy: false,
                  delivery_time: 40,
                },
                {
                  id: 5,
                  name: 'Tiramisu',
                  description:
                    'Classic Italian dessert with ladyfingers, espresso, and mascarpone cream.delicious dish that has captured the hearts and taste buds of people all over the world. It originated in Naples, Italy, but has since become a global culinary sensation with countless variations and flavors. Fast food refers to food that is prepared and served quickly, typically in a fast-food restaurant or through a drive-through. It is known for its convenience, affordability, and quick servic. Some of the most well-known fast-food chains around the world.  Fast-food menus typically include hamburgers, cheeseburgers, chicken sandwiches, French fries, soft drinks, milkshakes, pizza, tacos, burritos, fried chicken, and various other fried or grilled items',
                  price: 6.99,
                  image:
                    'https://www.countdown.co.nz/Content/Recipes/224513%20Tiramisu%20810x570.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 15,
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Food list not found.',
          })
        }
      }, 2000)
    })
  }