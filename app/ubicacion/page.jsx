import Link from 'next/link'
import React from 'react'

const ubicacion = () => {
  return (
    <div className='flex flex-col px-auto items-center justify-center z-10'>
      <Link href="https://www.google.com/maps?q=Sal%C3%B3n+Del+Vergel,+C.+Sim%C3%B3n+Bol%C3%ADvar,+Mendoza&ftid=0x9679a9dcc63f9671:0x3f7e773b005f1a2b&entry=gps&lucs=,47071704,47069508,47084304,94206605&g_ep=CAISDTYuMTAxLjMuNDE1NjAYACCenQoqJCw0NzA3MTcwNCw0NzA2OTUwOCw0NzA4NDMwNCw5NDIwNjYwNUICQVI%3D&g_st=iw" className='z-10'>
        <img src=" /ubicacion/ubicacion.png" alt="imagen" className="h-screen w-70 " />
      </Link>
    </div>
  )
}

export default ubicacion