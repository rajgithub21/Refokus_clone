import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    var images=[
        ["https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg"],  
        ["https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg","https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg"],
    ];
  return (
    <div className='mt-20 py-20 mb-20'>
        {images.map((val,index)=><Marquee key={index} dir={index===0 ? "left" : "right"} imagesurl={val}/>)}
    </div>
  )
}

export default Marquees