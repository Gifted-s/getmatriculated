import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import { faChevronCircleRight, faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
const members=[
    {"image_path":"https://images.fineartamerica.com/public/images/overview/apparel/mensTshirts002.jpg",
     "name":"Adewmi Sunkanmi",
     "position":"CTO"
   },
   {"image_path":"https://images.fineartamerica.com/public/images/overview/apparel/womensTshirts002.jpg",
       "name":"Kolawole Sola",
       "position":"Product Design"
   },
   {"image_path":"https://images.fineartamerica.com/public/images/overview/apparel/tankTops001.jpg",
       "name":"Lolade Kunle",
       "position":"Finacial secretary"
    },
    {"image_path":"https://images.fineartamerica.com/public/images/HomepageProductDuvetCover.jpg",
       "name":"Ayo Kunle",
       "position":"Business Admin"
    },
    {"image_path":"https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       "name":"Lolade Bayo",
       "position":"PRO"
    },
    {"image_path":"https://render.fineartamerica.com/images/rendered/default/phone-case/iphone7/images/artworkimages/medium/1/tree-clouds-01d2-aimelle.jpg?&targetx=-46&targety=0&imagewidth=409&imageheight=538&modelwidth=317&modelheight=538&backgroundcolor=425679&orientation=0",
       "name":"Kunle Afford",
       "position":"Secretary"
    },
    {"image_path":"https://images.pexels.com/photos/209719/pexels-photo-209719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       "name":"Kolawole Sola",
       "position":"Product Design"
   },
   {"image_path":"https://images.fineartamerica.com/public/images/overview/apparel/tankTops001.jpg",
       "name":"Lolade Kunle",
       "position":"Finacial secretary"
    },
    {"image_path":"https://images.fineartamerica.com/public/images/HomepageProductDuvetCover.jpg",
       "name":"Ayo Kunle",
       "position":"Business Admin"
    },
    {"image_path":"https://images.fineartamerica.com/public/images/overview/overviewBeach003.jpg",
       "name":"Lolade Bayo",
       "position":"PRO"
    },
]

export default class Team extends Component {

    constructor(props){
        super(props);
        this.state={
            members:[],
            start:0,
            end:4

        }
    }
    componentDidMount(){
       this.setState({members})
    }
    next=()=>{
        let {members}= this.state
        this.setState((prev)=>{
            return {start:(prev.start===members.length-3?0: prev.start+1)}
        })
        this.setState((prev)=>{
            return {end:(prev.end===members+1?4: prev.start+4)}
        })
    }
    prev=()=>{
        this.setState((prev)=>{
            return {start:(prev.start===0?0: prev.start-1)}
        })
        this.setState((prev)=>{
            return {end:(prev.end===4?4: prev.end-1)}
        })
    }
    render() {
        return (
           <React.Fragment>
               <div className="container team">
               <ScrollAnimation animateIn='fadeIn'><h2  className="mx-auto text-secondary  font-weight-bold my-4 text-center text-capitalize">meet the team</h2></ScrollAnimation>
                   <ScrollAnimation animateIn='fadeIn'><p className="mx-auto text-center my-3">Here are the team members of GetMatriculated</p></ScrollAnimation>
                   <ScrollAnimation animateIn='fadeIn'>
                   <div style={{position:'relative'}} className="row members">
                       {this.state.members.slice(this.state.start,this.state.end).map((member)=>{
                         return (
                            <div key={member.name} className="col-md-3 col-sm-12">
                            <div className="card  align-items-center" style={{width: '15rem'}}>
                                 <img src={`${member.image_path}`}    style={{height: '14rem', borderRadius:'6px'}} className="card-img-top" alt="..."/>
                                 <div className="card-body">
                         <h5 style={{fontSize:'17px', color:'rgb(0,0,0,0.8)', fontWeight:'bold'}} className="card-title text-center">{member.name}</h5>
                         <p style={{fontSize:'14px', color:'rgb(0,0,0,0.6)'}} className="card-text text-center">{member.position}</p>
                                     <span className="line ll mx-auto"></span>
                                 </div>
                               </div>
                            </div>
                         )
                       })}

                       <FontAwesomeIcon onClick={this.prev} style={{color:'blue',position:'absolute',top:'150px',left:'10px' ,background:'white'}}  icon={faChevronCircleLeft}/>
                       <FontAwesomeIcon onClick={this.next} style={{color:'blue',position:'absolute',top:'150px',right:'10px', background:'white'}} icon={faChevronCircleRight}/>
                   </div>
                   </ScrollAnimation>
                  
               </div>


            
           </React.Fragment>
        )
    }
}
