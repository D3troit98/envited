import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Event from './pages/Event'
import Home from './pages/Home'
import Create from './pages/Create'

const App = () => {
  const [form, setForm] = useState({
    eventName: '', hostName: '', date: '', location: '', endDate: ''
  })
  const [selectImage, setSelectImage] = useState();
  const [imageSource, setImageSource] = useState()
  return (
    <Routes>
      <Route path="event" element={<Event form={form} selectImage={selectImage} imageSource={imageSource} setImageSource={setImageSource} />} />
      <Route path="/*" element={<Home />} />
      <Route path="create" element={<Create setForm={setForm} form={form} setSelectImage={setSelectImage} />} />
    </Routes>
  )
}

export default App