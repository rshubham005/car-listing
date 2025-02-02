import { Car } from "@/types/types";

export const mockCars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 32000,
    description:
      "The Toyota Camry offers a perfect blend of comfort, reliability, and style. This sedan features advanced safety technologies and excellent fuel efficiency, making it ideal for both daily commutes and long drives.",
    specifications: {
      mileage: 15000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "Sedan",
    },
    images: [
      "https://images.pexels.com/photos/28688908/pexels-photo-28688908/free-photo-of-dynamic-toyota-camry-driving-on-erbil-highway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11285174/pexels-photo-11285174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/14542673/pexels-photo-14542673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2023,
    price: 34500,
    description:
      "The Honda CR-V is a versatile SUV that combines spacious interior with outstanding fuel economy. Perfect for families, this vehicle offers advanced safety features and ample cargo space.",
    specifications: {
      mileage: 12000,
      transmission: "CVT",
      fuelType: "Gasoline",
      bodyType: "SUV",
    },
    images: [
      "https://imgd.aeplcdn.com/1056x594/n/cw/ec/134113/new-wr-v-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80&wm=1",
      "https://imgd.aeplcdn.com/1056x594/n/cw/ec/134113/new-wr-v-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80&wm=1",
      "https://imgd.aeplcdn.com/1056x594/n/cw/ec/134113/new-wr-v-interior-dashboard.jpeg?isig=0&q=80&wm=1",
    ],
  },
  {
    id: "3",
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 48000,
    description:
      "The Tesla Model 3 is an all-electric sedan that offers impressive range and cutting-edge technology. Features include autopilot capabilities and a minimalist interior with a large touchscreen display.",
    specifications: {
      mileage: 8000,
      transmission: "Electric",
      fuelType: "Electric",
      bodyType: "Sedan",
    },
    images: [
      "https://cdn.pixabay.com/photo/2021/01/21/11/09/tesla-5937063_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/01/20/20/39/car-4781370_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/03/02/07/09/car-8607713_1280.jpg",
    ],
  },
  {
    id: "4",
    make: "BMW",
    model: "X5",
    year: 2023,
    price: 65000,
    description:
      "The BMW X5 is a luxury SUV that delivers powerful performance and premium comfort. Features include advanced driver assistance systems and premium leather interior.",
    specifications: {
      mileage: 10000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "SUV",
    },
    images: [
      "https://images.pexels.com/photos/7762678/pexels-photo-7762678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7762700/pexels-photo-7762700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/12532746/pexels-photo-12532746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "5",
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 45000,
    description:
      "The Ford Mustang continues its legacy as an iconic sports car. This model combines powerful performance with modern technology and classic styling.",
    specifications: {
      mileage: 5000,
      transmission: "Manual",
      fuelType: "Gasoline",
      bodyType: "Coupe",
    },
    images: [
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/_R7A1515_1a_V1.tif?croppathe=1_3x2&wid=1440",
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_61007.tif?croppathe=1_3x2&wid=1440",
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_61047.tif?croppathe=1_3x2&wid=1440",
    ],
  },
  {
    id: "6",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 55000,
    description:
      "The Mercedes-Benz C-Class exemplifies luxury and sophistication. This sedan features premium materials, advanced technology, and exceptional performance.",
    specifications: {
      mileage: 9000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "Sedan",
    },
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80",
    ],
  },
  {
    id: "7",
    make: "Chevrolet",
    model: "Silverado",
    year: 2023,
    price: 42000,
    description:
      "The Chevrolet Silverado is a capable and reliable pickup truck. Perfect for both work and recreation, it offers impressive towing capacity and comfortable interior.",
    specifications: {
      mileage: 15000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "Pickup Truck",
    },
    images: [
      "https://media.istockphoto.com/id/1390876696/photo/chevrolet-silverado-display-chevy-offers-the-silverado-in-wt-custom-custom-trail-boss-lt-rst.jpg?s=1024x1024&w=is&k=20&c=ewqYOO4fKPf4clGGfrkuIKebm2U3bEFo-EOpACF5tJE=",
      "https://media.istockphoto.com/id/1408300818/photo/chevrolet-silverado-black-widow-display-chevy-offers-the-silverado-in-custom-modified-models.jpg?s=612x612&w=0&k=20&c=n6aHAnQcnO9iZq8CGCHYlKq1pogfIjPNzVG32Q8sP6U=",
      "https://media.istockphoto.com/id/1411882332/photo/chevrolet-silverado-2500hd-display-chevy-offers-the-2500hd-in-work-custom-lt-ltz-and-high.jpg?s=612x612&w=0&k=20&c=Kdej_lkBKBctdkL5MIsPJKu7JVUorcH8u_FXZl--Ep4=",
    ],
  },
  {
    id: "8",
    make: "Audi",
    model: "Q7",
    year: 2023,
    price: 70000,
    description:
      "The Audi Q7 is a premium SUV that offers sophisticated styling and advanced technology. Features include quattro all-wheel drive and luxurious interior appointments.",
    specifications: {
      mileage: 11000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "SUV",
    },
    images: [
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/192279/q7-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/192279/q7-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/192279/q7-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
    ],
  },
  {
    id: "9",
    make: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 29000,
    description:
      "The Hyundai Tucson is a stylish compact SUV with great value. It offers modern design, good fuel efficiency, and comprehensive safety features.",
    specifications: {
      mileage: 13000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "SUV",
    },
    images: [
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    ],
  },
  {
    id: "10",
    make: "Porsche",
    model: "911",
    year: 2023,
    price: 120000,
    description:
      "The Porsche 911 is an iconic sports car that delivers exceptional performance and handling. This model features advanced aerodynamics and race-inspired technology.",
    specifications: {
      mileage: 3000,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "Sports Car",
    },
    images: [
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/39232/911-exterior-right-front-three-quarter-154382.jpeg?isig=0&wm=1&q=80",
      "https://imgd.aeplcdn.com/370x208/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154381.jpg?wm=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/187179/porsche-911-front-view2.jpeg?isig=0&q=80",
    ],
  },
  {
    id: "11",
    make: "Volkswagen",
    model: "Golf",
    year: 2023,
    price: 28000,
    description:
      "The Volkswagen Golf continues to be a benchmark in the compact car segment. It offers refined driving dynamics and premium interior quality.",
    specifications: {
      mileage: 14000,
      transmission: "Manual",
      fuelType: "Gasoline",
      bodyType: "Hatchback",
    },
    images: [
      "https://media.istockphoto.com/id/458296913/photo/volkswagen-golf-vii.jpg?s=612x612&w=0&k=20&c=b8t8dTuRcj9QUbDKjdTalAV2QEULmErliSf1A9FSOac=",
      "https://media.istockphoto.com/id/1218950084/photo/new-volkswagen-golf-driving.jpg?s=612x612&w=0&k=20&c=mQCirtTqAqQMIpgG1HWDx4Tdrgwqd0_5Ccf-Q2aYOpw=",
      "https://media.istockphoto.com/id/1303894075/photo/front-view-of-new-volkswagen-golf-parked-in-the-street.jpg?s=612x612&w=0&k=20&c=WH-glSmsALxPf79JzNoevmbwV0MSuYKSOtGRKbyNDyM=",
    ],
  },
  {
    id: "12",
    make: "Lexus",
    model: "RX",
    year: 2023,
    price: 52000,
    description:
      "The Lexus RX combines luxury with reliability in a premium SUV package. Features include a refined hybrid powertrain option and premium Mark Levinson audio system.",
    specifications: {
      mileage: 9500,
      transmission: "Automatic",
      fuelType: "Hybrid",
      bodyType: "SUV",
    },
    images: [
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/139465/rx-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/139465/rx-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/139465/rx-facelift-exterior-left-side-view.jpeg?isig=0&q=80",
    ],
  },
  {
    id: "13",
    make: "Kia",
    model: "Telluride",
    year: 2023,
    price: 44000,
    description:
      "The Kia Telluride is a spacious and capable SUV that offers excellent value. It features premium materials and advanced safety technologies.",
    specifications: {
      mileage: 12500,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "SUV",
    },
    images: [
      "https://www.kia.com/us/content/dam/kia/us/en/vehicles/telluride/2025/gallery/exterior/gallery_telluride_2025_exterior-7.jpg/_jcr_content/renditions/cq5dam.thumbnail.1024.680.png",
      "https://www.kia.com/us/content/dam/kia/us/en/vehicles/telluride/2025/gallery/exterior/gallery_telluride_2025_exterior-1.jpg/_jcr_content/renditions/cq5dam.thumbnail.1024.680.png",
      "https://www.kia.com/us/content/dam/kia/us/en/vehicles/telluride/2025/gallery/exterior/gallery_telluride_2025_exterior-2.jpg/_jcr_content/renditions/cq5dam.thumbnail.768.510.png",
    ],
  },
  {
    id: "14",
    make: "Subaru",
    model: "Outback",
    year: 2023,
    price: 33000,
    description:
      "The Subaru Outback is a versatile wagon with standard all-wheel drive. Perfect for outdoor adventures, it offers robust safety features and ample cargo space.",
    specifications: {
      mileage: 11500,
      transmission: "CVT",
      fuelType: "Gasoline",
      bodyType: "Wagon",
    },
    images: [
      "https://s7d1.scene7.com/is/image/scom/25_OBK_gallery_ext_07?$1550w$",
      "https://s7d1.scene7.com/is/image/scom/25_OBK_gallery_ext_08?$1550w$",
      "https://s7d1.scene7.com/is/image/scom/25_OBK_gallery_ext_11?$1550w$",
    ],
  },
  {
    id: "15",
    make: "Mazda",
    model: "CX-5",
    year: 2023,
    price: 31000,
    description:
      "The Mazda CX-5 stands out with its upscale design and engaging driving dynamics. It offers premium features at a competitive price point.",
    specifications: {
      mileage: 13500,
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "SUV",
    },
    images: [
      "https://www.mazdausa.com/siteassets/vehicles/2025/cx-5/02_gallery/2025-mazda-cx-5-crossover-suv-eye-catching-design?w={width}",
      "https://www.mazdausa.com/siteassets/vehicles/2025/cx-5/02_gallery/2025-mazda-cx-5-crossover-suv-mazda-intelligent-drive-select-technology?w={width}",
      "https://www.mazdausa.com/siteassets/vehicles/2025/cx-5/02_gallery/2025-mazda-cx-5-crossover-suv-i-activ-awd?w={width}",
    ],
  },
];
