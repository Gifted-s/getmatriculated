import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'
import Contact from '../Home/Contact'
import Tour from '../Home/Tour'
const schools= [
    {name:'Federal University Of Technolgy Akure',
      news:`We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated 
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated  
      We provide you with the best solution to questions and keep you
      informed on information regarding the institution of your choice
      We are here to get you matriculated `
},
    {name:'Ekiti State University'},
    {name:'University Of Jos'},
    {name:'Obafemi Awolowo University'},
    {name:'Covenant University'},
    {name:'Covenant College'},
    {name:'Afe Babalola University'},
    
]


export default class News extends Component {
    constructor(props){
        super(props);
        this.state={
            schools:[],
            selected:'',
            news:false
        }
    }
    componentDidMount(){
        this.setState({schools})
    }
   
    proceed=()=>{
      this.setState((prevState)=>{
          return{ news: !prevState.news}
      });
      this.sort()


    }
    sort=()=>{
        const schools= this.state.schools[0].news;
        const end=182;
        const stringtoArray= schools.split('');
       
        const _f= stringtoArray.slice(0,end+1);
        const _s= stringtoArray.slice(end+1, end*2+1);
        const _t= stringtoArray.slice(end*2, end*3+1);
        const _fo= stringtoArray.slice(end*3+1, end*4+1);
        const _fi= stringtoArray.slice(end*4+1, end*5+1);
        const _si= stringtoArray.slice(end*5+1, end*6+1);
        const _se= stringtoArray.slice(end*6+1,end*7+1);
        const _ei= stringtoArray.slice(end*7+1, end*8+1);
        const _ni= stringtoArray.slice(end*8+1, end*9+1);
        const _te= stringtoArray.slice(end*9+1, end*10+1);
        const _el= stringtoArray.slice(end*11+1, end*12+1);
        const _tw= stringtoArray.slice(end*12+1, end*13+1);
      
        const arr=[[_f], [_s], [_t], [_fo], [_fi], [_si], [_se], [_ei],[_ni], [_te], [_el],[_tw]];
        return arr
        
    }


    News=()=>{
        return (
            <React.Fragment>
                     <div  className="tour row new__">
                        <div className=" i news_image  col-sm-12 col-md-6">
                        
                        <img  src='https://i2.wp.com/www.pmnewsnigeria.com/wp-content/uploads/2016/10/FUTA-Ondo-State-e1475696272495.jpg?resize=500%2C320&ssl=1' className="img-fluid ii " alt="loading...."/>
                        </div>
                        <div style={{marginTop:'-15px'}}   className=" about_right abb col-sm-12 col-md-6">
                        {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;d like to wish you a Merry Christmas.<br/><br/>May the beauty of this season fill your life with love and joy. 🎄🎅🎁<br/><br/>From all of us at Andela Nigeria. 💙<a href="https://twitter.com/hashtag/ThisIsAndela?src=hash&amp;ref_src=twsrc%5Etfw">#ThisIsAndela</a> <a href="https://twitter.com/hashtag/MerryChristmas?src=hash&amp;ref_src=twsrc%5Etfw">#MerryChristmas</a> <a href="https://twitter.com/hashtag/Christmas?src=hash&amp;ref_src=twsrc%5Etfw">#Christmas</a> <a href="https://t.co/gOH9JpQ1hd">pic.twitter.com/gOH9JpQ1hd</a></p>&mdash; Andela Nigeria (@Andela_Nigeria) <a href="https://twitter.com/Andela_Nigeria/status/1209731604718985217?ref_src=twsrc%5Etfw">December 25, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                        
                        <h3 className='text___'  style={{color:'rgb(39, 113, 223)'}}>Federal University of Technolgy,<br/>Akure </h3>
                        <p style={{paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[0]}
                        </p>
                         <p style={{paddingLeft:'0', border:'none'}} className="about_text">
                         { this.sort()[1]}

                        </p>
                        <p style={{paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[2]}

                        </p>
                        
                        </div>
                
                      
                </div>

                <div style={{padding:'10px'}} className="other_text row " >
                        <div className="text_p col-md-4 col-sm-10">
                          
                        <p style={{fontSize:'14px', border:'none'}} className="about_text">
                        {this.sort()[3]}
                        </p> 
                         <p style={{fontSize:'14px', paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[4]}

                        </p>
                        <p style={{fontSize:'14px', paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[5]}

                        </p>
                      
                          </div> 
                           <div className="text_p col-md-4 col-sm-10">
                            
                        <p style={{fontSize:'14px', paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[6]}
                        </p>
                        <p style={{fontSize:'14px', paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[7]}

                        </p>
                        <p style={{ fontSize:'14px',paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[8]}

                        </p>  
                          </div> 

                          <div className="text_p col-md-4 col-sm-10">
                            
                        <p style={{ fontSize:'14px',paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[9]}

                        </p>
                        <p style={{fontSize:'14px', paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[10]}

                        </p>
                        <p style={{ fontSize:'14px',paddingLeft:'0', border:'none'}} className="about_text">
                        { this.sort()[11]}

                        </p>  
                          </div>
                      </div>

            </React.Fragment>
           

        )
    }

    Selection =()=>{
        return (
            <React.Fragment>
    <div className="row">
                   
                   <div  className="select  offset-md-3 col-md-6 col-sm-10">
                   {/* <select onChange={(e)=>this.setState({selected:e.target.value})} style={{color:'rgb(0,0,0,0.6)'}}  className=" btn bg-transparent   custom-select btn-primary">
                   {this.state.schools.map((school)=>{
                       return(
                       <option key={school.name} value={school.name}>{school.name}</option>
                       )
                   })}    
                   </select> */}
                           <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in <span className="btn btn-primary">Read</span></a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>
                   </div>
                 </div>
       
            
       
               {/* <div className="row">
                   <div className="btn__ offset-md-5 col-md-3 col-sm-12">
                  
                   <div className="btn-group ">
                  
                     <div onClick={this.proceed} style={{marginTop:'0px',padding:'3px 26px',fontSize:'12px' ,color:'rgb(39, 113, 223)'}} className="but btn btn-primary bg-transparent">
                           <span style={{position:"relative", top:'-5px'}}>PROCEED</span>
                      
                       <FontAwesomeIcon style={{
                           color:"rgb(39, 113, 223)", width:"19px", height:"19px",
                           display:'inline',
                           marginLeft:'13px',
                           
                           marginTop:'5px',
                          
                           }} icon={faChevronCircleRight} />
                      </div>
                   </div>
                   </div>
               </div> */}
            </React.Fragment>
            
        )
    }
    render() {
        return (
            <React.Fragment>
                 <div className="container about">
               
                {!this.state.news?
                <this.Selection/>
                :
                <this.News/>
                }
                <div className="ww">
                <Tour/>
                </div>
               
                </div>
            </React.Fragment>
        )
    }
}
