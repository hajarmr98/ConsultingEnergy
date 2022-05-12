import React, { Component } from 'react';
import FormData from 'form-data'
import './UploadInvoice.css'


class UploadInvoice extends Component {

    state = {
        selectedFiles: undefined,
        displayFile: undefined,
        objectDisplay: undefined,
        i: 0,
        body: false,
        show: "image-wrap-none",
        secondImg: "",
        name: []

    }

    fileSelectedHandler  = e => {
        let files = e.target.files;
        let i;
        i = this.state.i
        let resultselected = [];
        let resultdisplayed = [];
        let resultOBdisplayed;
        let name = [];
            
            if (this.state.displayFile)
            {
                resultselected = [...this.state.selectedFiles, ...files]
                resultdisplayed = [...resultselected].map(URL.createObjectURL)
            }
            else
            {
                resultselected = files
                resultdisplayed = [...files].map(URL.createObjectURL)
            }
            resultOBdisplayed = [...resultdisplayed]
            let keys = Object.keys(resultOBdisplayed)
            for (keys in resultOBdisplayed)
            {
                resultOBdisplayed[i - this.state.i] = {
                    blob: resultOBdisplayed[i - this.state.i],
                    id: i - this.state.i
                }
                i++;
            }
            let body = new FormData()
            if (resultselected.length > 0)
            {
                for(let i = 0; i < resultselected.length; i++)
                {
                    name.push(resultselected[i].name)
                    console.log(resultselected[i].name)
                    body.append("imagenes", resultselected[i], resultselected[i].name)
                }
            }
            console.log(name)
            // console.log(body.getAll('imagenes'))
            this.props.send(body)
            this.setState({
                selectedFiles: resultselected,
                displayFile: resultdisplayed,
                objectDisplay: resultOBdisplayed,
                body: body,
                i: i,
                name: name
            })
    }

    removeFileFromFileList(index, sel) {
        let dt = new DataTransfer()
        let files = sel
        for (let i = 0; i < files.length; i++) {
          let file = files[i]
          if (index != i)
          {
              dt.items.add(file)
          }
        }
        console.log("DT:", dt.files)
        let body = new FormData()
        if (dt.files.length > 0)
        {
            for(let i = 0; i < dt.files.length; i++)
            {
                body.append("imagenes", dt.files[i], dt.files[i].name)
            }
        }
        // console.log("En Remove",body.getAll('imagenes'))
        this.props.send(body)
        return dt.files
      }
    removeImage(src) {
        let objDis = this.state.objectDisplay
        let afterRemDisO = Object.keys(objDis).filter(image => objDis[image].blob === src)
        let i = 0;
        let dis;
        let sel;
        for (i; i < afterRemDisO.length; i++)
        {
            dis = this.state.displayFile
            delete dis[afterRemDisO[i]]
            delete objDis[afterRemDisO[i]]
            sel = this.state.selectedFiles
            sel = this.removeFileFromFileList(afterRemDisO[i], sel)

        }
        this.setState({
            displayFile: dis,
            selectedFiles: sel,
            objectDisplay: objDis
        })
        this.forceUpdate()
    }
    fileUploadHandler = () => {
        console.log("ESTOY EN EL POST")
        let body = new FormData()
        if (this.state.selectedFiles.length > 0)
        {
            for(let i = 0; i < this.state.selectedFiles.length; i++)
            {
                body.append("imagenes", this.state.selectedFiles[i], this.state.selectedFiles[i].name)
            }
            this.setState({
                ...this.state,
                body: body
            })
    }
    }
    
    showAllImages() {
        this.setState({
            ...this.state,
            show: "image-wrap",
            secondImg: ""
        })
    }
    darkenImg() {
        console.log("Estoy en darken img")
        this.setState({
            ...this.state,
            secondImg: "second-image"
        })
    }
    componentDidUpdate(){
        // console.log("Hola has cambiado algooo")
        // console.log("selectedFile:", this.state.selectedFiles)
        // console.log("displayFile:", this.state.displayFile)
        // console.log("objectDisplay:", this.state.objectDisplay)
}

    render() {
        return(
            <div className="image-uploader">
                <input 
                style={{display: 'none'}}
                type="file"
                name="imagenes"
                onChange={this.fileSelectedHandler}
                ref={fileInput => this.fileInput = fileInput}
                multiple>   
                </input>
                
                 {!this.state.displayFile ? 
                console.log("AÑADE IMÁGENES:") : 
                <div className="images-wrap"> 
                <div className="form-factura" onClick={() => this.fileInput.click()}>
                        <img className="form-factura-img" src="/images/factura.png"></img>
                        {this.state.name ? this.state.name.map(x => <p className="form-factura-names">{x}   &#9989;</p>) : <p className="form-factura-text">* Añade tu factura</p>}
                </div>
                 </div>}
                
               

                {(!this.state.displayFile || this.state.displayFile.length === 0) ? 
                <div className="initial">
                   <div className="form-factura" onClick={() => this.fileInput.click()}>
                        <img className="form-factura-img" src="/images/factura.png"></img>
                        <p className="form-factura-text">* Añade tu factura</p>
                </div>
                </div> : 
                console.log("AÑADE IMÁGENES:")}
                
              
            </div>
        )
    }
}

export default UploadInvoice;