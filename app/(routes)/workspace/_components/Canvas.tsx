import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from '../../dashboard/_components/FileList';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
function Canvas({onSaveTrigger,fileId,fileData}:{onSaveTrigger:any,fileId:any,fileData:FILE}) {

  const [whiteBoardData,setWhiteBoardData]=useState<any>();
    
  const updateWhiteboard=useMutation(api.file.updateWhiteboard)

  useEffect(()=>{
    onSaveTrigger&&saveWhiteboard();
   },[onSaveTrigger])

   const saveWhiteboard=()=>{
      updateWhiteboard({
         _id:fileId,
         whiteboard:JSON.stringify(whiteBoardData)
      }).then(resp=>console.log(resp))
   }

  return (
    <div style={{ height: "600px" }}>
    {fileData&& <Excalidraw 
      initialData={{
          elements:fileData?.whiteboard&&JSON.parse(fileData?.whiteboard)
      }}
    onChange={(excalidrawElements, appState, files)=>
      setWhiteBoardData(excalidrawElements)}
    UIOptions={{
        canvasActions:{
            saveToActiveFile:false,
            loadScene:false,
        }
    }}
    >
        <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas/>
            <MainMenu.DefaultItems.Export/>
            <MainMenu.DefaultItems.SaveAsImage/>
            <MainMenu.DefaultItems.ChangeCanvasBackground/>
            <MainMenu.DefaultItems.ToggleTheme/>
            <MainMenu.DefaultItems.Help/>
        </MainMenu>
        <WelcomeScreen>
            <WelcomeScreen.Center>
            <WelcomeScreen.Center.Heading>
              Welcome To GMI !
            </WelcomeScreen.Center.Heading>
                <WelcomeScreen.Center.MenuItemLoadScene/>
                <WelcomeScreen.Center.MenuItemHelp/>
            </WelcomeScreen.Center>

        </WelcomeScreen>
    

    </Excalidraw>}
    </div>
  )
}

export default Canvas
