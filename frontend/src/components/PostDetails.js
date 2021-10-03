import React, { Component } from 'react'
import axios from 'axios'
import "../CSS/ShasRet.css"

import {Link} from 'react-router-dom';
export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{},
            ret:[],
            Research:[],
            projects:[],
            bookings: [],
            Medical:[],
            zooAnimal:[],
            
        };
        this.retrieveAnimal();
        this.retrieveBookings();
        this.retrieveResearch();
        this.retrieveProjects();
        this.retrieveMedical();
    }
    retrieveAnimal(){
        axios.get("http://localhost:8015/animal").then(res=>{
          if(res.data.success){
            this.setState({
              zooAnimal:res.data.existingPosts
            });
            console.log(this.state.zooAnimal);
          }
        });
        }
    retrieveMedical(){
        axios.get("http://localhost:8015/medical/").then(res =>{
          if(true){
            this.setState({
              Medical:res.data.existingMedical
            });
            console.log(this.state.Medical)
          }
        })
      
        
      }
    retrieveBookings() {
        axios.get("http://localhost:8015/booking").then((res) => {
          if (res.data.success) {
            this.setState({
              bookings: res.data.existingBookings,
            });
          }
        });
      }
    retrieveProjects(){
        axios.get('http://localhost:8015/projects').then(res =>{
          if(res.data.success){
            this.setState({
              projects:res.data.existingPosts
            });
            console.log(this.state.projects)
          }
        });
      }
    

    retrievePosts(){
        axios.get("http://localhost:8015/posts").then(res=>{
          if(res.data.success){
            this.setState({
              ret:res.data.existingPosts
            })
            console.log(this.state.ret)
          }
        })
      }
      

    componentDidMount(){
        const id =  this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                })
                console.log(this.state.post)
            }
        })
    }

    retrieveResearch(){
        axios.get("http://localhost:8015/research").then(res =>{
          if(true){
            this.setState({
              Research:res.data.existingResearch
            });
            console.log(this.state.Research)
          }
        })
      

            //doc obj
            var doc =new jsPDF('p','pt');
    
            doc.autoTable({ html: '#my-table' })
            //add texts
    
            doc.text(200,20,'Project Report')
        
            doc.autoTable({
               
               tableWidth:'auto',
               margin: { top: 10 },
                columnStyles: { europe: { halign: 'center' } },
                theme:'grid',
                head: [['Firstname', 'Lastname', 'EID','Email','Address','Designation','D.O.B','Salary']],
                body: [
                   
                  [this.state.post.firstName,this.state.post.lastName,this.state.post.eID,this.state.post.email,this.state.post.address,this.state.post.employeeType,this.state.post.DOB,this.state.post.salary], 
                ],
               
                styles: {  fontSize:10 },
             
                
              })
              
         
    
         
            //Save pdf 
            doc.save("Employee Report.pdf");
    
    
        }

      }

    
    render() {

        const {eID,userName,firstName,lastName,email,address,employeeType,DOB,salary} = this.state.post;

        return (
            <div style={{marginTop:'20px'}}>
                
                 
                <h1 style={{color:'black'}}>Hello, {userName}</h1>
                <hr/>

                <form className="shasForms">

                <div class="form-group" id="shaszz">
                        <label style ={{marginBottom:'5px',color:"black"}} for="firstName">First Name  </label>
                        <input type="text" class="form-control" id="firstName" placeholder={firstName} disabled/>
                    </div>

                

                <br/>
                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="lastName"> Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder={ lastName} disabled/>
                        
                    </div>


                    <br/>
                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="eID"> Employee ID</label>
                        <input type="text" class="form-control" id="eID" placeholder={ eID}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="email"> E-mail</label>
                        <input type="text" class="form-control" id="email" placeholder={ email} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="address"> Address</label>
                        <input type="text" class="form-control" id="address" placeholder={ address} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="employeeType"> Designation</label>
                        <input type="text" class="form-control" id="employeeType" placeholder={ employeeType} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label  style ={{marginBottom:'5px',color:"black"}}for="DOB">Date Of Birth</label>
                        <input type="text" class="form-control" id="DOB" placeholder={DOB} disabled/>
                        
                    </div>
                    <br/>

                    <div class="form-group" id="shaszz">
                    <label style ={{marginBottom:'5px',color:"black"}} for="salary">Salary</label>
                        <input type="text" class="form-control" id="salary" placeholder={salary} disabled/>
                        
                    </div>
                    <br/>



                    
                    </form>

                <div>

                
                <div>
                {this.state.zooAnimal.map(zooAnimal =>(
                   
                <div>
               {zooAnimal.Attended_Zookeeper==userName && 

             
                    <div>
                        <center>
                        <Link to = {`animal/details/${zooAnimal._id}`} style = {{textDecoration:"none"}}>
                      <h2>Click to See Animals under the preview of our Zookeeper</h2>
                      </Link>
                </center>
                    </div>
    }</div>
    ))}</div>


{/* **************************Vinod not completed********************************* */}

<div>
                {this.state.bookings.map(bookings =>(
                   
                <div>
               {bookings.TourGuideName == userName && 

             
                    <div>
                        <center>
                        <Link to = {`/booking/update/${bookings._id}`} style = {{textDecoration:"none"}}>
                      <h2>Click to see tour Guide's work!</h2>
                      </Link>
                </center>
                    </div>
    }</div>
    ))}</div>


<div>
                {this.state.Medical.map(Medical =>(
                   
                <div>
               {Medical.vname == userName && 

             
                    <div>
                        <center>
                        <Link to = {`/medical/details/${Medical._id}`} style = {{textDecoration:"none"}}>
                      <h2>Click to see veterinarians appointments!</h2>
                      </Link>
                </center>
                    </div>
    }</div>
    ))}</div>

             

<div>
                {this.state.Medical.map(Medical =>(
                   
                <div>
               {Medical.vname == userName && 

             
                    <div>
                        <center>
                        <Link to = {`/medical/details/${Medical._id}`} style = {{textDecoration:"none"}}>
                      <h2>Click to see veterinarians appointments!</h2>
                      </Link>
                </center>
                    </div>
    }</div>
    ))}</div>


                

              </div>
                <br/><br/><br/><br/><br/><br/>

                {/* <table style={{color:'black'}}> 
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">FirstName</td>
                    <td style={{border:"0px"}} className="col-sm-9">{firstName}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">LastName</td>
                    <td style={{border:"0px"}} className="col-sm-9">{lastName}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">EID</td>
                    <td style={{border:"0px"}} className="col-sm-9">{eID}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Email</td>
                    <td style={{border:"0px"}} className="col-sm-9">{email}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Address</td>
                    <td style={{border:"0px"}} className="col-sm-9">{address}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Designation</td>
                    <td style={{border:"0px"}} className="col-sm-9">{employeeType}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">D.O.B</td>
                    <td style={{border:"0px"}} className="col-sm-9">{DOB}</td>
                </tr>
                <tr>
                    <td style={{border:"0px"}} className="col-sm-3">Salary</td>
                    <td style={{border:"0px"}} className="col-sm-9">{salary}</td>
                </tr>
                </table> */}

                {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            </div>
        )
    }
}
