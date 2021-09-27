import React, {Component} from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import axios from '../utils/api';
import FolderDoctor from '../Components/FilesDoctor/FolderDoctor';
import FileDoctor from '../Components/FilesDoctor/FileDoctor';
import ModalDoctor from '../Components/FilesDoctor/ModalDoctor';

import SidebarDoctor from '../Components/FilesDoctor/SidebarDoctor';
import NavbarDoctor from '../Components/FilesDoctor/NavbarDoctor';

import {Row} from 'react-bootstrap';

import './Files.css'


import { Box, Stack, Container, Typography, Divider } from '@material-ui/core';

class FilesDoctor extends Component {

    
    state = {
        foldersdoctor : [],
        filesdoctor : [],
        parentfolderdoctor: null,
        currentFolderIddoctor:null,
        currentFolderNamedoctor:"",
        renameModalShow:false,
        rename:"",
        renameId:null,
        renameFileType:null
    }
    componentDidMount(){
        axios.get('/folderdoctor')
            .then((response)=>{
                const {foldersdoctor,filesdoctor} = response.data;
                this.setState({
                    foldersdoctor:foldersdoctor,
                    filesdoctor:filesdoctor,
                    parentfolderdoctor:null,
                    currentFolderIddoctor:null
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onClickFolder = (id)=>{
        const folderdoctor = this.state.foldersdoctor.filter(folderdoctor=>folderdoctor._id===id);
        console.log(folderdoctor);
        const parentfolderdoctor = folderdoctor[0].parentfolderdoctor;
        axios.get('/folderdoctor/'+id)
            .then((response)=>{
                const {foldersdoctor,filesdoctor} = response.data;
                this.setState({
                    foldersdoctor:foldersdoctor,
                    filesdoctor:filesdoctor,
                    parentfolderdoctor:parentfolderdoctor,
                    currentFolderIddoctor:id,
                    currentFolderNamedoctor:folderdoctor[0].namedoctor
                })

            })
            .catch(err=>{
                console.log(err);
            })
    }

    backClickHandler = ()=>{

        const pId = (this.state.parentfolderdoctor === null || this.state.parentfolderdoctor === undefined)?"":this.state.parentfolderdoctor._id
        axios.get('/folderdoctor/'+pId)
            .then((response)=>{
                const {foldersdoctor,filesdoctor} = response.data;
                const parentfolderdoctor = (this.state.parentfolderdoctor!=null)?this.state.parentfolderdoctor.parentfolderdoctor:null;
                
                this.setState({
                    foldersdoctor:foldersdoctor,
                    filesdoctor:filesdoctor,
                    parentfolderdoctor:parentfolderdoctor,
                    currentFolderIddoctor:pId===""?null:pId,
                    currentFolderNamedoctor:pId===""?null:this.state.parentfolderdoctor.namedoctor
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onAddFolderHandler = (folderNamedoctor)=>{
        const newFolder = {
            parentIddoctor:this.state.currentFolderIddoctor,
            namedoctor:folderNamedoctor
        }
        axios.post('/folderdoctor',newFolder)
            .then((response)=>{
                const updatedFolders = this.state.foldersdoctor.concat(response.data);
                this.setState({
                    foldersdoctor:updatedFolders
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onAddFileHandler = (fileNamedoctor)=>{
        const newFile = {
            parentIddoctor:this.state.currentFolderIddoctor,
            namedoctor:fileNamedoctor,
            extensiondoctor:".txt",
            fileTypedoctor:"file",
            contentdoctor:"content"
        }
        axios.post('/filedoctor',newFile)
            .then((response)=>{
                const updatedFiles = this.state.filesdoctor.concat(response.data);
                this.setState({
                    filesdoctor:updatedFiles
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onRenameClickHandler = (id,type)=>{
        this.setState({
            renameModalShow:true,
            renameId:id,
            renameFileType:type
        })
    }
    onRenameSaveHandler = ()=>{
        if(this.state.renameFileType==="filedoctor"){
            axios.put('/filedoctor',{updatedName:this.state.rename,id:this.state.renameId})
                .then(response=>{
                    const updatedFiles = this.state.filesdoctor.map(filedoctor=>{
                        if(filedoctor._id===this.state.renameId){
                            filedoctor.namedoctor=this.state.rename;
                        }
                        return filedoctor;
                    })

                    this.setState({
                        filesdoctor:updatedFiles
                    })
                })
        }
        else if(this.state.renameFileType==="folderdoctor"){
            axios.put('/folderdoctor',{updatedName:this.state.rename,id:this.state.renameId})
                .then(response=>{
                    const updatedFolders = this.state.foldersdoctor.map(folderdoctor=>{
                        if(folderdoctor._id===this.state.renameId){
                            folderdoctor.name=this.state.rename;
                        }
                        return folderdoctor;
                    })
                    
                    this.setState({
                        foldersdoctor:updatedFolders
                    })
                })
        }
    }
    onDeleteClickHandler = (id,type)=>{
        const body={
            id:id
        }
        if(type==="filedoctor"){
            axios.delete("/filedoctor",{data:body})
                .then((response)=>{
                    const updatedFiles = this.state.filesdoctor.filter(filedoctor=>filedoctor._id!==id);
                    this.setState({
                        filesdoctor:updatedFiles
                    })
                })            
                .catch(err=>{
                    console.log(err);
                })
        }
        else if(type==="folderdoctor"){
            axios.delete("/folderdoctor",{data:body})
                .then(response=>{
                    const updatedFolders = this.state.foldersdoctor.filter(folderdoctor=>folderdoctor._id!==id);
                    this.setState({
                        foldersdoctor:updatedFolders
                    })
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
    closeModal = ()=>{
        this.setState({
            renameModalShow:false
        })
    }

    nameChange = (e)=>{
        this.setState({
            rename:e.target.value
        })
    }

    render(){

        let updatedFolders = null;
        let updatedFiles = null;
        const updatedFilesFolders = [];
        if(this.state.foldersdoctor){
            updatedFolders = this.state.foldersdoctor.map(folderdoctor=>{
                return (
                    <React.Fragment key={folderdoctor._id}>
                        <ContextMenuTrigger  id={folderdoctor._id}>
                                <FolderDoctor  name={folderdoctor.name} clicked={()=>this.onClickFolder(folderdoctor._id)}/>
                        </ContextMenuTrigger>
                        <ContextMenu className="ContextMenu" id={folderdoctor._id}>
                            <MenuItem onClick={()=>this.onRenameClickHandler(folderdoctor._id,"folderdoctor")} className="MenuItem">
                                Rename
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem className="MenuItem" onClick={()=>this.onDeleteClickHandler(folderdoctor._id,"folderdoctor")}>
                                Delete
                            </MenuItem>
                        </ContextMenu>
                    </React.Fragment>
                )
            })
            updatedFilesFolders.push(...updatedFolders)
        }
        if(this.state.filesdoctor){
            updatedFiles = this.state.filesdoctor.map(filedoctor=>{
                return ( 
                <React.Fragment key={filedoctor._id}>
                    <ContextMenuTrigger id={filedoctor._id}>
                            <FileDoctor name={filedoctor.name}/>
                    </ContextMenuTrigger>
                    <ContextMenu className="ContextMenu" id={filedoctor._id}>
                        <MenuItem onClick={()=>this.onRenameClickHandler(filedoctor._id,"filedoctor")} className="MenuItem">
                            Rename
                        </MenuItem>
                        <MenuItem divider/>
                        <MenuItem className="MenuItem" onClick={()=>this.onDeleteClickHandler(filedoctor._id,"filedoctor")}>
                            Delete
                        </MenuItem>
                    </ContextMenu>
                </React.Fragment>
                )
                        
            })
            updatedFilesFolders.push(...updatedFiles)

        }
        return (
            <Container maxWidth="xl">

                <Typography variant="h4">My Files</Typography>
                

                <div style={{paddingBottom: "5px", paddingTop:"15px"}}>


                <div style={{paddingBottom: "15px", paddingTop:"5px"}}>
                <SidebarDoctor addFolder={this.onAddFolderHandler} addFile={this.onAddFileHandler} />
                </div>

                <Divider />

                <div style={{paddingBottom: "5px", paddingTop:"15px"}}>
                <NavbarDoctor currentFolder={this.state.currentFolderName} clicked={this.backClickHandler}/>
                </div>


                </div>
                

                <Divider />

               
                <Row>
                    {updatedFilesFolders}
                </Row>
               
              

                <ModalDoctor 
                    show={this.state.renameModalShow} 
                    handleSave={this.onRenameSaveHandler}
                    title="Rename"
                    label="Enter new title"
                    name={this.state.rename}
                    handleChange={(value)=>this.nameChange(value)}
                    handleClose={()=>this.closeModal(1)} />
            </Container>
        );

    }
}

export default FilesDoctor;