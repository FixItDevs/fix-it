import {
  ShowerOutlined,
  TungstenOutlined,
  KitchenOutlined,
  FormatPaintOutlined,
  RoofingOutlined,
  ConstructionOutlined,
  EngineeringOutlined,
  LocalFloristOutlined,
  ChairOutlined
} from "@mui/icons-material";

const fontSize = 30;

export const categoriesList = [
  {
    main: "Plumbing",
    icon: <ShowerOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Drainage",
      "Heating",
      "Pipes",
      "Toilet",
      "Taps",
      "Showers",
      "Plumbing repairs",
      "New plumbing installations",
      "Waste",
      "Soldering",
      "Compression"
    ]
  },
  {
    main: "Electrical",
    icon: <TungstenOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Lighting",
      "Cabling",
      "Mains",
      "Consumer unit",
      "Sockets",
      "Switches",
      "Electrical repairs",
      "New electrical installations",
      "Earthing",
      "Bonding",
      "Testing"
    ]
  },
  {
    main: "Appliances",
    icon: <KitchenOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Washing Machine",
      "Dishwasher",
      "Fridge",
      "Oven",
      "Hob",
      "Extractor",
      "Microwave",
      "Tumble Dryer",
      "Freezer",
      "Waste Disposal",
      "Water Softener",
      "Water Heater"
    ]
  },
  {
    main: "Decorating",
    icon: <FormatPaintOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Painting",
      "Wallpaper",
      "Tiling",
      "Flooring",
      "Furniture",
      "Plastering",
      "Coving",
      "Skirting",
      "Architrave",
      "Staining",
      "Varnishing",
      "Sealing"
    ]
  },
  {
    main: "Roofing",
    icon: <RoofingOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Tiles",
      "Slates",
      "Flashing",
      "Gutters",
      "Chimney",
      "Fascia",
      "Soffit",
      "Leadwork",
      "Flat Roofing",
      "Pitched Roofing",
      "Roof Repairs",
      "New Roofing"
    ]
  },
  {
    main: "Carpentry",
    icon: <ConstructionOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Doors",
      "Windows",
      "Furniture",
      "Flooring",
      "Decking",
      "Fencing",
      "Stairs",
      "Shelving",
      "Cupboards",
      "Worktops",
      "Skirting",
      "Architrave"
    ]
  },
  {
    main: "Metalwork",
    icon: <EngineeringOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Welding",
      "Cutting",
      "Blacksmithing",
      "Forging",
      "Casting",
      "Polishing",
      "Grinding",
      "Drilling",
      "Tapping",
      "Bending",
      "Soldering",
      "Riveting"
    ]
  },
  {
    main: "Gardening",
    icon: <LocalFloristOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Lawn",
      "Hedge",
      "Tree",
      "Shrub",
      "Flower",
      "Vegetable",
      "Fruit",
      "Greenhouse",
      "Pond",
      "Water Feature",
      "Patio",
      "Decking"
    ]
  },
  {
    main: "Furniture",
    icon: <ChairOutlined sx={{ fontSize: fontSize }} />,
    sub: [
      "Flat-pack",
      "Assembly",
      "Table",
      "Chair",
      "Sofa",
      "Bed",
      "Wardrobe",
      "Cabinet",
      "Shelf",
      "Desk",
      "Dresser",
      "Sideboard",
      "Chest",
      "Mirror",
      "TV Stand"
    ]
  }
];
