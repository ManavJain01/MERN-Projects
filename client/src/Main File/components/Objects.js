// Importing Images
import UsersInfo from '../Images/Users Info.png'
import StudentDetails from '../Images/Student Details.png';
import Dismefa from '../Images/Dismefa.png'
import FoodDelivery from '../Images/Food Delivery App.png'
import webStreaming from '../Images/webStreaming.png'
import NextAuth from'../Images/NextAuth.png'

export let i = 1;

const object = [
  //Major Projects
  {
    Link:"https://dismefa.netlify.app/",
    Img: Dismefa,
    p1:"My Major MERN Project",
    p2:"Medicine E-Commerce",
    id:`project${i++}`
  },
  {
    Link:"https://food-delivery-app-phi-ten.vercel.app/",
    Img: FoodDelivery,
    p1:"MERN Project with Tailwind, Jwt",
    p2:"Food Delivery App",
    id:`project${i++}`
  },
  {
    Link:"https://webstreaming.netlify.app/",
    Img: webStreaming,
    p1:"My Major MERN Project",
    p2:"Web Streaming",
    id:`project${i++}`
  },
  {
    Link:"",
    Img: NextAuth,
    p1:"My First NextJS, Typescript Project",
    p2:"Next Auth",
    id:`project${i++}`
  },
  //Minor Projects
  {
    Link:"/UsersInfo",
    Img: UsersInfo,
    p1:"MERN Project with CRUD Operations",
    p2:"User Information",
    id:`project${i++}`
  },
  {
    Link:"/StudentDetails",
    Img: StudentDetails,
    p1:"MERN Project with Search functionality",
    p2:"Student Details",
    id:`project${i++}`
  },
]

export default object;