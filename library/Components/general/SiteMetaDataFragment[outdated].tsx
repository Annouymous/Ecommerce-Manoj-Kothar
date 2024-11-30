// 'use client'
// import React, { useState } from 'react'
// import HeadFragment from '../components/HeadFragment'
// import MediaUploadFragment from '../components/MediaUploadFragment'
// import InputFragment from '../components/InputFragment'

// function SiteMetaDataFragment() {
//   const [Process,setProcess] = useState(false)
//   const [GeneralInformation,setGeneralInformation] = useState({
//     WebsiteLogo:null,
//     Favicon:null,
//     AdminLogo:null,
//     WebsiteName:'',
//     Tagline:'',
//     Description:'',
//     email:'',
//     Whatsapp:'',
//     BusinessAddress:''
//   })

//   const handleGeneralInformation = (e)=>{
//     if(e.id=='Website name'){
//       console.log(e)
//       setGeneralInformation({
//         ...GeneralInformation,
//         WebsiteName: e.value,
//       })
//     }
//     if(e.id=='Tagline'){
//       console.log(e)
//       setGeneralInformation({
//         ...GeneralInformation,
//         Tagline: e.value,
//       })
//     }
//     if(e.id=='Description'){
//       console.log(e)
//       setGeneralInformation({
//         ...GeneralInformation,
//         Description: e.value,
//       })
//     }
//     if(e.id=='Update Business email'){
//       console.log(e)
//       setGeneralInformation({
//         ...GeneralInformation,
//         email: e.value,
//       })
//     }
//     if(e.id=='Update Whatsapp Number'){
//       console.log(e)
//       setGeneralInformation({
//         ...GeneralInformation,
//         Whatsapp:`+91 ${e.value}`,
//       })
//     }
//     if(e.id=='Update Business Address'){
//       console.log(e)
//       setGeneralInformation({
//         ...GeneralInformation,
//         BusinessAddress:e.value,
//       })
//     }
//     if(e.id=='Admin Logo'){
//       console.log(e.id)

//     }
//     if(e.id=='Favicon'){
//       console.log(e.id)

//     }
//     if(e.id=='Website Logo'){
//       console.log(e.id)
//     }
//   }


//   const handleGeneralInformationSubmission = () =>{
//     setProcess(true)
//   }

//   return (
//     <div className="flex flex-col p-5 bg-white shadow-sm m-3 rounded-md">
//       <div className='p-5'>
//         <HeadFragment onClick={handleGeneralInformationSubmission} des="This information will be displayed publicly so be careful what you share." title="General information" />
//         <div className="flex flex-row gap-3">
//           <MediaUploadFragment DropFile={handleGeneralInformation} handleImageChange={handleGeneralInformation} label="Website Logo" />
//           <MediaUploadFragment DropFile={handleGeneralInformation} handleImageChange={handleGeneralInformation} label="Favicon" />
//           <MediaUploadFragment DropFile={handleGeneralInformation} handleImageChange={handleGeneralInformation} label="Admin Logo" />
//         </div>
//         <InputFragment placeholder='omgs acrylic Photo' isTextArea={false} onchange={handleGeneralInformation} info="Name of the website" label="Website name"/>
//         <InputFragment placeholder='Short line' isTextArea={false} onchange={handleGeneralInformation} info="Write a tagline for the website" label="Tagline"/>
//         <InputFragment placeholder='Short description' isTextArea={false} onchange={handleGeneralInformation} info="Write a few sentences about website" label="Description" />
//         <div className='flex flex-wrap gap-2'>
//           <InputFragment isNumber={true} placeholder='+91-000-000-000' isTextArea={false} onchange={handleGeneralInformation} info="Name of the website" label="Update Whatsapp Number"/>
//           <InputFragment placeholder='exmple@gmail.com' isTextArea={false} onchange={handleGeneralInformation} info="Name of the website"  label="Update Business email"/>
//         </div>
//         <InputFragment isTextArea={true} onchange={handleGeneralInformation} info="Write a few sentences about website" label="Update Business Address" />      
//       </div>
//       {
//             Process &&
//             <div className= 'select-none backdrop-blur-sm bg-gray-600/20 absolute rounded-md  w-full h-full'>
//                 <div className='text-gray-600 text-sm font-semibold flex h-full items-center justify-center'>
//                     Saving Changes...
//                 </div>
//             </div>
//         }
//     </div>
//   )
// }

// export default SiteMetaDataFragment