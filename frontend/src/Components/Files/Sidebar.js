import React,{Component} from 'react';
import Modal from './Modal'
import {Button,Row} from 'react-bootstrap';

import {AiFillPlusCircle} from 'react-icons/ai'

import { Box, Stack, Container, Typography, } from '@material-ui/core';

class Sidebar extends Component {

    state = {
        folderModalShow:false,
        fileModalShow:false,
        folderName:"",
        fileName:""
    }

    toggleStatus = (index)=>{
        if(index===0)
            this.setState({
                folderModalShow:true
            })
        else
            this.setState({
                fileModalShow:true
            })
    }
    closeModal = (index)=>{
        if(index===0)
            this.setState({
                folderModalShow:false
            })
        else
            this.setState({
                fileModalShow:false
        })
    }

    nameChange = (index,e)=>{
        if(index===0)
            this.setState({
                folderName:e.target.value
            })
        else
            this.setState({
                fileName:e.target.value
        })
    }

    

        
    render(){

        return (
            <div>

            <Stack direction="row" alignItems="left" >
                
            <div style={{paddingRight: "15px"}}>
            <Button onClick={()=>this.toggleStatus(0)} style={{background:"white", color:"#6331d8"}}  >
              <AiFillPlusCircle /> &nbsp; Folder  
            </Button>
            </div>
          
              <Button onClick={()=>this.toggleStatus(1)} style={{background:"white", color:"#6331d8"}} >
              <AiFillPlusCircle/> &nbsp; File 
            </Button>
            
      </Stack>
               
                <Modal 
                    show={this.state.folderModalShow} 
                    handleSave={this.props.addFolder}
                    title="Create New Folder"
                    label="Enter Folder Name"
                    name={this.state.folderName}
                    handleChange={(value)=>this.nameChange(0,value)}
                    handleClose={()=>this.closeModal(0)} />
                <Modal 
                    show={this.state.fileModalShow} 
                    handleSave={this.props.addFile}
                    title="Create New File"
                    label="Enter File Name"
                    name={this.state.fileName}
                    handleChange={(value)=>this.nameChange(1,value)}
                    handleClose={()=>this.closeModal(1)} />
            </div>
        );
    }
}

export default Sidebar;