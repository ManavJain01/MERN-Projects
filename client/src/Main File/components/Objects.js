// Importing Images
import UsersInfo from '../Images/Users Info.png'
import Dismefa from '../Images/Dismefa.png'
import webStreaming from '../Images/web streaming.png'

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
    Link:"https://webstreaming.netlify.app/",
    Img: webStreaming,
    p1:"My Major MERN Project",
    p2:"Web Streaming",
    id:`project${i++}`
  },
  //Minor Projects
  {
    Link:"/UsersInfo",
    Img: UsersInfo,
    p1:"MERN Project",
    p2:"User Information",
    id:`project${i++}`
  },
]

export default object;