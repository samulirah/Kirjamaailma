import reading from '../components/reading.jpg'


const data ={
  products: [ {
    nimi: 'Kirja',
    slug: 'kirja-1',
    kategoria: 'kaunokirjallisuus',
    image: './reading.jpg',
    hinta: 120,
    countInstock: 10,
    ratings: 12
    
  },
],
products: [ {
  nimi: 'Kirja',
  slug: 'kirja-1',
  kategoria: 'kaunokirjallisuus',
  image: './reading.jpg', // 679px x 679px
  hinta: 120,
  countInstock: 10,
  ratings: 12
  
},
],
products: [ {
  nimi: 'Kirja',
  slug: 'kirja-1',
  kategoria: 'kaunokirjallisuus',
  image: './reading.jpg', // 679px x 679px
  hinta: 120,
  countInstock: 10,
  ratings: 12
  
}
]
};

export default data;






























/*const product =() =>{
const [data, setdata] = useState([]);
const [filter, setFilter] = useState([data]);
const [loading, setLoading] = useState([false]);
let componentMounted = true;

useEffect(() => {
  const getProduct = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/tuotesivu");
  }
  if(componentMounted){
    setdata(await response)
  }

  return () => {
    second
  }
}, [third])



    return (
        <div>

        </div>
    )
}

export default product;*/