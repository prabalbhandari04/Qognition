import React, {Component} from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import axios from '../utils/api';
import Folder from '../Components/Files/Folder';
import File from '../Components/Files/File';
import Modal from '../Components/Files/Modal';

import Sidebar from '../Components/Files/Sidebar';
import Navbar from '../Components/Files/Navbar';

import {Row} from 'react-bootstrap';

import './Files.css'


import { Box, Stack, Container, Typography, Divider } from '@material-ui/core';

class Files extends Component {

    
    state = {
        folders : [],
        files : [],
        parentfolder: null,
        currentFolderId:null,
        currentFolderName:"",
        renameModalShow:false,
        rename:"",
        renameId:null,
        renameFileType:null
    }
    componentDidMount(){
        axios.get('/folder')
            .then((response)=>{
                const {folders,files} = response.data;
                this.setState({
                    folders:folders,
                    files:files,
                    parentfolder:null,
                    currentFolderId:null
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onClickFolder = (id)=>{
        const folder = this.state.folders.filter(folder=>folder._id===id);
        console.log(folder);
        const parentfolder = folder[0].parentfolder;
        axios.get('/folder/'+id)
            .then((response)=>{
                const {folders,files} = response.data;
                this.setState({
                    folders:folders,
                    files:files,
                    parentfolder:parentfolder,
                    currentFolderId:id,
                    currentFolderName:folder[0].name
                })

            })
            .catch(err=>{
                console.log(err);
            })
    }

    backClickHandler = ()=>{

        const pId = (this.state.parentfolder === null || this.state.parentfolder === undefined)?"":this.state.parentfolder._id
        axios.get('/folder/'+pId)
            .then((response)=>{
                const {folders,files} = response.data;
                const parentfolder = (this.state.parentfolder!=null)?this.state.parentfolder.parentfolder:null;
                
                this.setState({
                    folders:folders,
                    files:files,
                    parentfolder:parentfolder,
                    currentFolderId:pId===""?null:pId,
                    currentFolderName:pId===""?null:this.state.parentfolder.name
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onAddFolderHandler = (folderName)=>{
        const newFolder = {
            parentId:this.state.currentFolderId,
            name:folderName
        }
        axios.post('/folder',newFolder)
            .then((response)=>{
                const updatedFolders = this.state.folders.concat(response.data);
                this.setState({
                    folders:updatedFolders
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    onAddFileHandler = (fileName)=>{
        const newFile = {
            parentId:this.state.currentFolderId,
            name:fileName,
            extension:".txt",
            fileType:"file",
            content:"content"
        }
        axios.post('/file',newFile)
            .then((response)=>{
                const updatedFiles = this.state.files.concat(response.data);
                this.setState({
                    files:updatedFiles
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
        if(this.state.renameFileType==="file"){
            axios.put('/file',{updatedName:this.state.rename,id:this.state.renameId})
                .then(response=>{
                    const updatedFiles = this.state.files.map(file=>{
                        if(file._id===this.state.renameId){
                            file.name=this.state.rename;
                        }
                        return file;
                    })

                    this.setState({
                        files:updatedFiles
                    })
                })
        }
        else if(this.state.renameFileType==="folder"){
            axios.put('/folder',{updatedName:this.state.rename,id:this.state.renameId})
                .then(response=>{
                    const updatedFolders = this.state.folders.map(folder=>{
                        if(folder._id===this.state.renameId){
                            folder.name=this.state.rename;
                        }
                        return folder;
                    })
                    
                    this.setState({
                        folders:updatedFolders
                    })
                })
        }
    }
    onDeleteClickHandler = (id,type)=>{
        const body={
            id:id
        }
        if(type==="file"){
            axios.delete("/file",{data:body})
                .then((response)=>{
                    const updatedFiles = this.state.files.filter(file=>file._id!==id);
                    this.setState({
                        files:updatedFiles
                    })
                })            
                .catch(err=>{
                    console.log(err);
                })
        }
        else if(type==="folder"){
            axios.delete("/folder",{data:body})
                .then(response=>{
                    const updatedFolders = this.state.folders.filter(folder=>folder._id!==id);
                    this.setState({
                        folders:updatedFolders
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
        if(this.state.folders){
            updatedFolders = this.state.folders.map(folder=>{
                return (
                    <React.Fragment key={folder._id}>
                        <ContextMenuTrigger  id={folder._id}>
                                <Folder  name={folder.name} clicked={()=>this.onClickFolder(folder._id)}/>
                        </ContextMenuTrigger>
                        <ContextMenu className="ContextMenu" id={folder._id}>
                            <MenuItem onClick={()=>this.onRenameClickHandler(folder._id,"folder")} className="MenuItem">
                                Rename
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem className="MenuItem" onClick={()=>this.onDeleteClickHandler(folder._id,"folder")}>
                                Delete
                            </MenuItem>
                        </ContextMenu>
                    </React.Fragment>
                )
            })
            updatedFilesFolders.push(...updatedFolders)
        }
        if(this.state.files){
            updatedFiles = this.state.files.map(file=>{
                return ( 
                <React.Fragment key={file._id}>
                    <ContextMenuTrigger id={file._id}>
                            <File name={file.name}/>
                    </ContextMenuTrigger>
                    <ContextMenu className="ContextMenu" id={file._id}>
                        <MenuItem onClick={()=>this.onRenameClickHandler(file._id,"file")} className="MenuItem">
                            Rename
                        </MenuItem>
                        <MenuItem divider/>
                        <MenuItem className="MenuItem" onClick={()=>this.onDeleteClickHandler(file._id,"file")}>
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
                <Sidebar addFolder={this.onAddFolderHandler} addFile={this.onAddFileHandler} />
                </div>

                <Divider />

                <div style={{paddingBottom: "5px", paddingTop:"15px"}}>
                <Navbar currentFolder={this.state.currentFolderName} clicked={this.backClickHandler}/>
                </div>


                </div>
                

                <Divider />

               
                <Row>
                    {updatedFilesFolders}
                </Row>
               
              

                <Modal 
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

export default Files;