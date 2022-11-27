
import './App.css';
import React from 'react';
import Kep from './kepek';


const Kepeim = [
  {
    id:1,
    cim:"szep kepecske",
    kep:"http://static.demilked.com/wp-content/uploads/2015/11/new-hybrid-animals-photoshop-18.jpg"
  },
  {
    id:2,
    cim:"",
    kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/309288070_931285127754827_5243714502440498057_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=47Sf8jADfL4AX8VhbcA&_nc_ht=scontent-vie1-1.xx&oh=03_AdSPwYYSWMB7JYJ9WxJ6JQxso13IgNgX4SfHUoD9hdIbzg&oe=63AAA550"
  },
  {
    id:3,
    cim:"",
    kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/307845852_593358719256546_6012292227602843086_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ueUZpQYcVqQAX8g5CjU&_nc_ht=scontent-vie1-1.xx&oh=03_AdSOyd0hBVjoVCCh6BaTQOU3Uf7xOd_ERDfIvi3xS3zStA&oe=63AAD0DC"
  },
  {
    id:4,
    cim:"",
    kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/310063230_1172507097004512_112102662597683443_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=n-XXj156iHUAX9AhNzM&_nc_ht=scontent-vie1-1.xx&oh=03_AdR-DLha-Z9qld6GDlmYm6Exx2Xq8fLlq9OyfkY5S-3oWg&oe=63AACDEB"
  },
  {
    id:5,
    cim:"",
    kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/308063136_364291409207316_3319421941020788542_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mLaOZ3O_lzQAX_KgFDI&_nc_ht=scontent-vie1-1.xx&oh=03_AdSkU5hRWVZ7EkUVMKv-r-3HT9Vulq6z0AnCqGgu2Z_Fhg&oe=63AAA454"
  },
  {
    id:6,
    cim:"",
    kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/312796736_1297899724343971_6604042400643942004_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=zn0M5gdi8UoAX8HeUiS&_nc_ht=scontent-vie1-1.xx&oh=03_AdSDL8Qf443vr_V2sEBBmfpeWVf55pG-CoVdaYSc9ND1eQ&oe=63AAA066"
  },
  {
    id:7,
    cim:"",
    kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/310418067_893703851610883_4869931828724711677_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0LsutVAEurYAX9JrTfP&_nc_ht=scontent-vie1-1.xx&oh=03_AdT7Aa3zg-OCUg7-3iB7YFY2ZBwpZk80RxGQ3IoGuFE9UA&oe=63AAAEE4"
  },
  {
    id:8,
    cim:"",
    kep: "https://art-sheep.com/wp-content/uploads/2015/03/1082119721.jpg"
  },
  {
    id:9,
    cim:"",
    kep: "https://molempire.com/app/uploads/2021/10/peacock-cat-hybrid.jpg"
  },
  {
    id:10,
    cim:"",
    kep: "https://i.imgur.com/uV07PjP.jpg"
  },
  {
    id:11,
    cim:"",
    kep: "http://4.bp.blogspot.com/-1ku-6yT8Tkw/UYZxPDhPGCI/AAAAAAAADYI/Hs1auISvoNA/s1600/01-Guinea-Lion-Gyyp-Reddit-Animal-mashups.jpg"
  },
  {
    id:12,
    cim:"",
    kep: "https://cdn3s.com/wp-content/uploads/2022/05/34-Stupidest-Animal-Hybrids-Chosen-From-This-Online-Group-That-You-Cant-Stop-Laughing-At-1.jpg"
  },
  {
    id:13,
    cim:"",
    kep: "https://featuredcreature.com/wp-content/uploads/2013/03/tiger-squirrel.jpg"
  },
  {
    id:14,
    cim:"",
    kep: "https://i0.wp.com/comicsandmemes.com/wp-content/uploads/hybrid-animal-004-heagle.jpg?resize=596%2C394"
  },
  {
    id:15,
    cim:"",
    kep: "https://static.boredpanda.com/blog/wp-content/uploads/2018/09/25005865_2020513571493828_8387465560174100480_n-5bad4c74a9c19__880.jpg"
  },
  {
    id:16,
    cim:"",
    kep: "https://i.pinimg.com/736x/f7/5e/eb/f75eeb2254beffe01277146e08572422--submission-photoshop.jpg"
  },
  {
    id:17,
    cim:"",
    kep: "https://i.pinimg.com/originals/26/d5/59/26d5599e2387f23ff7b0e730afd5584f.jpg"
  },
  {
    id:18,
    cim:"",
    kep: "https://i.pinimg.com/originals/3f/76/9c/3f769c58883e1a89f0e2a29bbb11c9d6.jpg"
  },
  {
    id:19,
    cim:"",
    kep: "https://64.media.tumblr.com/6817390cf7ccbb5dd01531283ed2de8e/tumblr_n09w54WCWV1s818xzo1_640.jpg"
  },
  {
    id:20,
    cim:"",
    kep: "https://media.baamboozle.com/uploads/images/48182/1618482927_59186.jpeg"
  },

]



function App() {


  function kosarFeldolgoz(adat) {
    console.log(adat);
  } 

  return (
    <main>
    <div className="App">
      <header className="App-header">
        <h1>  kis cicás képek nagy gyűjteménye ♥</h1>
      </header>
{/*       <aside><p>Lórum ipse egy csalan spofirkum a túl kevés és a túl sok között. A nyoskarságok a matlan kobrakiságai a garának. Ezek az olások dalékor risztossággal bizálnak az egész gara felett, beleértve az ízengek bortánainak malását, ízengek lábtyűjét, gulák és torgulások pörését, stb. Álos pisztes bortánnal fejtnek a játlan garán. A torgulások olyan olások, (vagy ménykedések) akiknek a stola egy-egy gara vagy gula fogálája. Bortánuk van doznia vagy sodnia utásokat, falálnia, herásznia, eszkelnie apacákat azokban a garákban, amelyekben torgulások. Általában a torgulások silizálják az ízengeket, hogy ne kedjenek apacától lepés, vagy nyoszorlás módon tartalmilag törnyező utásokat. Egy ízeng több gulában is kochankosz lehet.</p></aside> */}
      <article className="galeria">

      {
        Kepeim.map((kep, index)=>{
            return(<Kep kepAdat={kep} key={index} kosarKattintasMetodus={kosarFeldolgoz}/>)
          }
        )
      }
        

      </article>
      <footer>
        <p>the night is dark and full of terror</p>
      </footer>
    </div>
    </main>
  );
}

export default App;
