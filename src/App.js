import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Event from './pages/Event'
import Home from './pages/Home'
import Create from './pages/Create'

const App = () => {
  const [form, setForm] = useState({
    eventName: '', hostName: '', date: '', location: ''
  })
  const [selectImage, setSelectImage] = useState();
  return (
    <Routes>
      <Route path="event" element={<Event form={form} selectImage={selectImage} />} />
      <Route path="/*" element={<Home />} />
      <Route path="create" element={<Create setForm={setForm} form={form} setSelectImage={setSelectImage} />} />
    </Routes>
  )
}

export default App