import { icons, images } from "./";

const myProfile = {
    name: "ByProgrammers",
    profile_image: images.profile,
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food"
    },
    {
        id: 2,
        name: "Fruit"
    },
    {
        id: 3,
        name: "Cake"
    },
    {
        id: 4,
        name: "Bead"
    },
    {
        id: 5,
        name: "Meat"
    },
    {
        id: 6,
        name: "Cream"
    },
    {
        id: 7,
        name: "Drink"
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: 'A food consisting of fillings',
    detail_description: "These ground chicken burgers are juicy, moist, and flavorful! No more dry chicken, and you can have these burgers on the table in half an hour.",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    image: require("../assets/dummyData/hamburger.png"),
    ratings: '4.5',
    time_cook: '30 Mins',
    fee_shipping: 4
}


const hotTacos = {
    id: 2,
    name: "Hot Chicken Tacos",
    description: "Mexican tortilla & tacos",
    detail_description: 'crispy fried chicken tenders are coated in a cayenne pepper sauce and served in tortillas with pickled jalapeno mayonnaise and dill pickle slices. These southern tacos are HOT & SPICY!',
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    image: require("../assets/dummyData/hot_tacos.png"),
    ratings: '3',
    time_cook: '15 Mins',
    fee_shipping: 0
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    detail_description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    image: require("../assets/dummyData/veg_biryani.png"),
    ratings: '3.5',
    time_cook: '32 Mins',
    fee_shipping: 0
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    detail_description: 'Bacon. Lettuce. Tomato. Ask anyone, and they’ll probably say that there’s nothing quite like biting into a juicy, flavorful BLT sandwich.',
    categories: [1, 2],
    price: 5.00,
    calories: 78,
    image: require("../assets/dummyData/wrap_sandwich.png"),
    ratings: '3',
    time_cook: '15 Mins',
    fee_shipping: 0
}
const Key_lime_pie = {
    id: 5,
    name: "Key Lime Pie",
    description: "A staple on south Florida menus.",
    detail_description: "If life gives you limes, don't make limeade, make a Key lime pie. The official state pie of Florida, this sassy tart has made herself a worldwide reputation, which started in -- where else? -- the Florida Keys, from whence come the tiny limes that gave the pie its name.\nAunt Sally, a cook for Florida's first self-made millionaire, ship salvager William Curry, gets the credit for making the first Key lime pie in the late 1800s. But you might also thank Florida sponge fisherman for likely originating the concoction of key lime juice, sweetened condensed milk, and egg yolks, which could be 'cooked' (by a thickening chemical reaction of the ingredients) at sea.",
    categories: [2, 3],
    price: 1.00,
    calories: 10,
    image: require("../assets/dummyData/Key_lime_pie.png"),
    ratings: '4.5',
    time_cook: '12 Mins',
    fee_shipping: 3.2
}
const Tater_tots = {
    id: 6,
    name: "Tater Tots",
    description: "Crunchy fried potatoes.",
    detail_description: 'We love French fries, but for an American food variation on the potato theme, one beloved at Sonic drive-ins and school cafeterias everywhere, consider the Tater Tot.',
    categories: [1, 2],
    price: 4.34,
    calories: 14,
    image: require("../assets/dummyData/Tater_tots.png"),
    ratings: '2.5',
    time_cook: '12 Mins',
    fee_shipping: 1.4
}

const sourdough_bread = {
    id: 7,
    name: "Sourdough Bread",
    description: "Sourdough bread is San Francisco's most beloved baked treat.",
    detail_description: 'Sourdough is as old as the pyramids and not coincidentally was eaten in ancient Egypt. But the hands-down American favorite, and the sourest variety, comes from San Francisco.',
    categories: [1, 4],
    price: 0.3,
    calories: 20,
    image: require("../assets/dummyData/sourdough_bread.png"),
    ratings: '5',
    time_cook: '23 Mins',
    fee_shipping: 0
}

const Cobb_salad = {
    id: 8,
    name: "Cobb Salad",
    description: "One of America's favorite appetizers.",
    detail_description: 'The chef`s salad originated back East, but American food innovators working with lettuce out West weren`t going to be outdone.',
    categories: [1, 2],
    price: 3.6,
    calories: 23,
    image: require("../assets/dummyData/Cobb_salad.png"),
    ratings: '5',
    time_cook: '13 Mins',
    fee_shipping: 1.2
}
const Pot_roast = {
    id: 9,
    name: "Pot Roast",
    description: "The perfect warming hot pot.",
    detail_description: 'The childhood Sunday family dinner of baby boomers everywhere, pot roast claims a sentimental favorite place in the top 10 of American comfort foods',
    categories: [5],
    price: 20.6,
    calories: 103,
    image: require("../assets/dummyData/Pot_roast.png"),
    ratings: '5',
    time_cook: '45 Mins',
    fee_shipping: 2
}
const Fajitas = {
    id: 10,
    name: "Fajitas",
    description: "The epitome of Tex-Mex cuisine.",
    detail_description: 'Take some vaqueros working on the range and the cattle slaughtered to feed them. Throw in the throwaway cuts of meat as part of the hands` take-home pay, and let cowboy ingenuity go to work.',
    categories: [1, 4],
    price: 10.5,
    calories: 60,
    image: require("../assets/dummyData/Fajitas.png"),
    ratings: '4.5',
    time_cook: '30 Mins',
    fee_shipping: 4
}
const Banana_split = {
    id: 11,
    name: "Banana Split",
    description: "Like the banana makes it good for you.",
    detail_description: 'Still, kudos to whoever invented the variation of the sundae known as the banana split. There"s the 1904 Latrobe, Pennsylvania, story, in which future optometrist David Strickler was experimenting with sundaes at a pharmacy soda fountain, split a banana lengthwise, and put it in a long boat dish',
    categories: [6],
    price: 2.5,
    calories: 10,
    image: require("../assets/dummyData/Banana_split.png"),
    ratings: '4.5',
    time_cook: '5 Mins',
    fee_shipping: 1
}
const Cornbread = {
    id: 12,
    name: "Cornbread",
    description: "Popular across the country, but it's a Southern classic.",
    detail_description: 'It"s one of the pillars of Southern cooking, but cornbread is the soul food of many a culture -- black, white, and Native American -- and not just south of the Mason-Dixon. Grind corn coarsely and you"ve got grits; soak kernels in alkali, and you"ve got hominy (which we encourage you to cook up into posole). Leaven finely ground cornmeal with baking powder, and you"ve got cornbread.',
    categories: [1, 4],
    price: 5.4,
    calories: 40,
    image: require("../assets/dummyData/Cornbread.png"),
    ratings: '4',
    time_cook: '10 Mins',
    fee_shipping: 1.2
}
const ChickenFried = {
    id: 13,
    name: "Chicken Fried",
    description: "Pan fry it in bread crumbs, of course..",
    detail_description: 'A guilty pleasure if there ever was one, chicken fried steak was born to go with American food classics like mashed potatoes and black-eyed peas.\nA slab of tenderized steak breaded in seasoned flour and pan fried, it"s kin to the Weiner Schnitzel brought to Texas by Austrian and German immigrants, who adapted their veal recipe to use the bountiful beef found in Texas.\nLamesa, on the cattle-ranching South Texas plains, claims to be the birthplace of the dish, but John "White Gravy" Neutzling of Lone Star State cowboy town of Bandera insisted he invented it. Do you care, or do you just want to ladle on that peppery white gravy and dig in?',
    categories: [1, 5],
    price: 10.6,
    calories: 35,
    image: require("../assets/dummyData/ChickenFried.png"),
    ratings: '5',
    time_cook: '15 Mins',
    fee_shipping: 3.7
}
const Samon = {
    id: 14,
    name: "Samon",
    description: "Salmon is delicious and nutritious. What more could you want?.",
    detail_description: 'Unlike Atlantic salmon, which is 99.8% farmed, Alaska salmon is wild, which means the fish live free and eat clean -- all the better to glaze with Dijon mustard or real maple syrup. Alaska salmon season coincides with their return to spawning streams (guided by an amazing sense of smell to the exact spot where they were born).',
    categories: [2, 5],
    price: 7.9,
    calories: 75,
    image: require("../assets/dummyData/Samon.png"),
    ratings: '3.5',
    time_cook: '10 Mins',
    fee_shipping: 4
}
const Potato = {
    id: 15,
    name: "Potato",
    description: "America's most popular -- and most addictive -- snack?",
    detail_description: 'We have a high-maintenance resort guest to thank for America"s hands-down favorite snack.',
    categories: [1],
    price: 2,
    calories: 30,
    image: require("../assets/dummyData/Potato.png"),
    ratings: '3.5',
    time_cook: '5 Mins',
    fee_shipping: 0.5
}
const Cioppino = {
    id: 16,
    name: "Cioppino",
    description: "Portugal meets meets Italy meets France by way of San Francisco.",
    detail_description: "San Francisco's answer to French bouillabaisse, cioppino (cho-pea-no) is fish stew with an Italian flair.\nIt's an American food that's been around since the late 1800s, when Portuguese and Italian fishermen who settled the North Beach section of the city brought their on-board catch-of-the-day stew back to land and area restaurants picked up on it.",
    categories: [4, 5],
    price: 4.8,
    calories: 60,
    image: require("../assets/dummyData/Cioppino.png"),
    ratings: '3.5',
    time_cook: '7 Mins',
    fee_shipping: 0.5
}
const Sandswich = {
    id: 17,
    name: "Sandswich",
    description: "A peanut butter and banana sandwich, Elvis Presley's favorite snack.",
    detail_description: "Creamy or chunky? To each his own, but everybody -- except those afflicted with the dreaded and dangerous peanut allergy and the moms who worry sick about them -- loves a good peanut butter sandwich.",
    categories: [1, 2, 4, 5],
    price: 4.8,
    calories: 60,
    image: require("../assets/dummyData/Sandswich.png"),
    ratings: '3.5',
    time_cook: '3 Mins',
    fee_shipping: 0.5
}
const Popcorn = {
    id: 18,
    name: "Popcorn",
    description: "When your love for popcorn goes that step too far...",
    detail_description: "As the imperative on the Orville Redenbacher site urges: 'All hail the super snack.' The bow-tied entrepreneur pitched his popcorn tent in Valparaiso, Indiana, which celebrates its heritage at the Valparaiso Popcorn Festival the first Saturday after Labor Day.",
    categories: [1, 2],
    price: 2.5,
    calories: 60,
    image: require("../assets/dummyData/Popcorn.png"),
    ratings: '3.5',
    time_cook: '3 Mins',
    fee_shipping: 0.2
}
const Chocolatecake = {
    id: 19,
    name: "Chocolate Cake",
    description: "you can't just have one, the clue's in the name.",
    detail_description: "Gooey, melty, warm and sweet -- nothing evokes family vacations and carefree camping under the stars quite like this classic American food.",
    categories: [3],
    price: 5,
    calories: 30,
    image: require("../assets/dummyData/Chocolatecake.png"),
    ratings: '4.5',
    time_cook: '20 Mins',
    fee_shipping: 1
}
const Cocacola = {
    id: 20,
    name: "Cocacola",
    description: "You can know this drink.",
    detail_description: "Refreshing carbonated drink with typical Cola flavor and a little caffeine; helps you not only feel refreshed, but also makes the moments of rest and eating more enjoyable.",
    categories: [7],
    price: 2,
    calories: 20,
    image: require("../assets/dummyData/Cocacola.png"),
    ratings: '4.5',
    time_cook: '1 Mins',
    fee_shipping: 0
}
const Beer = {
    id: 21,
    name: "Beer",
    description: "An alcoholic drink made from grain and hops.",
    detail_description: "A dark beer, the flavor of stouts depend on where they come from. Sweet stouts largely originate from Ireland and England and are known for their low bitterness. In fact, Ireland’s Guinness brand produces some of the world’s most recognizable stout beer.",
    categories: [7],
    price: 2,
    calories: 20,
    image: require("../assets/dummyData/Beer.png"),
    ratings: '4.5',
    time_cook: '1 Mins',
    fee_shipping: 0
}
const food = [wrapSandwich, hamburger, hotTacos, vegBiryani, Key_lime_pie, Tater_tots, sourdough_bread, Cobb_salad, Pot_roast, Fajitas,
    Banana_split, Cornbread, ChickenFried, Samon, Potato, Cioppino, Sandswich, Popcorn, Chocolatecake, Cocacola, Beer]

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani, Key_lime_pie, sourdough_bread, Fajitas, Banana_split, ChickenFried, Samon, Potato, Cioppino, Sandswich, Popcorn
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich, sourdough_bread, Cobb_salad, Banana_split, Cornbread, ChickenFried, Potato, Popcorn, Chocolatecake
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich, Key_lime_pie, Tater_tots, Pot_roast, Cornbread, Samon, Sandswich, Popcorn, Cocacola, Beer
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani, Cobb_salad, Pot_roast, Banana_split, Samon, Potato, Cioppino, Chocolatecake, Beer
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich, Tater_tots, Fajitas, Cornbread, ChickenFried, Sandswich, Chocolatecake, Cocacola, Beer
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich, Key_lime_pie, Pot_roast, Cornbread, ChickenFried, Cioppino, Chocolatecake, Cocacola
        ]
    },

]
const sizes = [
    {
        id: 1,
        label: '12"'
    },
    {
        id: 2,
        label: '14"'
    },
    {
        id: 3,
        label: '16"'
    },
    {
        id: 4,
        label: '18"'
    },
    {
        id: 5,
        label: '20"'
    },
    {
        id: 6,
        label: '24"'
    }
]
const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]
const dateOrder = [
    {
        id: 1,
        name: "19 Sep, 2021",
        list: [
            KFC, Star_Buck, Domino_Pizza
        ]
    },
    {
        id: 2,
        name: "18 Sep, 2021",
        list: [
            Pizza_Hut
        ]
    }

]
const KFC =
{
    id: 1,
    brand: "KFC",
    price: 45.38,
    brand_img: images.kfc_logo,
    time_order: '19 Sep, 14:30',
    number_item: 3,
    status: 'Order Delivered'

}
const Star_Buck =
{
    id: 2,
    brand: "Star Buck",
    price: 19.30,
    brand_img: images.star_buck,
    time_order: '19 Sep, 17:16',
    number_item: 2,
    status: 'Order Delivered'
}
const Domino_Pizza =
{
    id: 3,
    brand: "Domino Pizza",
    price: 10.34,
    brand_img: images.domino_logo,
    time_order: '19 Sep, 20:09',
    number_item: 1,
    status: 'Order Cancelled'
}
const Pizza_Hut =
{
    id: 4,
    brand: "Pizza Hut",
    price: 20.38,
    brand_img: images.pizza_hut,
    time_order: '18 Sep, 8:38',
    number_item: 2,
    status: 'Order Delivered'
}
const listOrder = [KFC, Pizza_Hut, Star_Buck, Domino_Pizza]
const listUpcoming = [
    {
        id: 1,
        brand: "KFC",
        price: 45.38,
        brand_img: images.kfc_logo,
        time_order: '19 Sep, 14:30',
        number_item: 3,
        status: 'Food is on the way'
    },
    {
        id: 2,
        brand: "Star Buck",
        price: 19.30,
        brand_img: images.star_buck,
        time_order: '19 Sep, 17:16',
        number_item: 2,
        status: 'Food is on the way'
    }
]
const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]
const couponCode = [
    {
        id: 1,
        code: 'YYTT5678',
        label: 'You got 5% off food and 20% off shipping!!!',
        saleOnShipping: 0.2,
        saleOnFood: 0.05,
    },
    {
        id: 2,
        code: 'PYTTI6L8',
        label: 'You got 5% off food and 30% off shipping!!!',
        saleOnShipping: 0.3,
        saleOnFood: 0.05,
    },
    {
        id: 3,
        code: 'HGN60FSF',
        label: 'You got 1% off food and 60% off shipping!!!',
        saleOnShipping: 0.6,
        saleOnFood: 0.01,
    },
    {
        id: 4,
        code: 'DARD239NL',
        label: 'You got 100% off shipping!!!',
        saleOnShipping: 1,
        saleOnFood: 0,
    },
    {
        id: 5,
        code: 'PYTTI6L8',
        label: 'You got 60% off shipping!!!',
        saleOnShipping: 0.6,
        saleOnFood: 0,
    },
    {
        id: 6,
        code: 'PHSNF938',
        label: 'You got 3% off food and 30% off shipping!!!',
        saleOnShipping: 0.3,
        saleOnFood: 0.03,
    }
]

export default {
    myProfile,
    categories,
    menu,
    food,
    vegBiryani,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    dateOrder,
    listOrder,
    listUpcoming,
    couponCode
}