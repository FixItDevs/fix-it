import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';

export const categoriesList = [
  {
    main: "Plumbing",
    icon: <ShowerOutlinedIcon />,
    sub: ["Drainage", "Heating", "Pipes", "Toilet", "Taps", "Showers", "Plumbing repairs", "New plumbing installations", "Waste", "Soldering", "Compression"]
  },
  {
    main: "Electrical",
    icon: <TungstenOutlinedIcon />,
    sub: ["Lighting", "Cabling", "Mains", "Consumer unit", "Sockets", "Switches", "Electrical repairs", "New electrical installations", "Earthing", "Bonding", "Testing"]
  },
  {
    main: "Appliances",
    icon: <KitchenOutlinedIcon />,
    sub: ["Washing Machine", "Dishwasher", "Fridge", "Oven", "Hob", "Extractor", "Microwave", "Tumble Dryer", "Freezer", "Waste Disposal", "Water Softener", "Water Heater"]
  },
  {
    main: "Decorating",
    icon: <FormatPaintOutlinedIcon />,
    sub: ["Painting", "Wallpaper", "Tiling", "Flooring", "Furniture", "Plastering", "Coving", "Skirting", "Architrave", "Staining", "Varnishing", "Sealing"]
  },
  {
    main: "Roofing",
    icon: <RoofingOutlinedIcon />,
    sub: ["Tiles", "Slates", "Flashing", "Gutters", "Chimney", "Fascia", "Soffit", "Leadwork", "Flat Roofing", "Pitched Roofing", "Roof Repairs", "New Roofing"]
  },
  {
    main: "Carpentry",
    icon: <ConstructionOutlinedIcon />,
    sub: ["Doors", "Windows", "Furniture", "Flooring", "Decking", "Fencing", "Stairs", "Shelving", "Cupboards", "Worktops", "Skirting", "Architrave"]
  },
  {
    main: "Metalwork",
    icon: <EngineeringOutlinedIcon />,
    sub: ["Welding", "Cutting", "Blacksmithing", "Forging", "Casting", "Polishing", "Grinding", "Drilling", "Tapping", "Bending", "Soldering", "Riveting"]
  },
  {
    main: "Gardening",
    icon: <LocalFloristOutlinedIcon />,
    sub: ["Lawn", "Hedge", "Tree", "Shrub", "Flower", "Vegetable", "Fruit", "Greenhouse", "Pond", "Water Feature", "Patio", "Decking"]
  },
  {
    main: "Furniture",
    icon: <ChairOutlinedIcon />,
    sub: ["Flat-pack", "Assembly", "Table", "Chair", "Sofa", "Bed", "Wardrobe", "Cabinet", "Shelf", "Desk", "Dresser", "Sideboard", "Chest", "Mirror", "TV Stand"]
  }
];
