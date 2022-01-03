import React from 'react';

const SubscribeBoxTest = ({ textAlign }) => (
  <div id="mc_embed_signup">
    <form action="https://585588ae.sibforms.com/serve/MUIEAEbLBtFILCXJM0NDF8-38xnk2z1U24BVVEju01n5A0RG7ECKLkHRG8Ek4ZqmFeenkalgNODowLbmo3xRxBMdNp9O0D7IRKp_f6Ge7ZZQ_RG3L9nqAf2gL7fk_sn2tMsb-R-urPeKKPFTAqsCK1dT-M3PyPsWkH0KvoTe9GMRIyYchvdcgf4ySnw-1cDPapSvo6AGfnp07zET" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <input type="email" defaultValue="" name="EMAIL" className={`email rounded-sm text-gray-900 w-full p-2 mt-2 mb-4 text-lg xl:max-w-lg ${textAlign}`} id="mce-EMAIL" placeholder="email address" required />
      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
      <div style={{position: "absolute", left: "-5000px"}}>
        <input type="text" name="b_3022cc50d612eca6691bc09f3_928ec47fcf" tabIndex="-1" defaultValue="" />
      </div>
      <div className="clear">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button bg-primary-yellow hover:bg-primary-yellowdarker text-primary-black p-3 w-1/2 xl:w-56 cursor-pointer uppercase text-lg font-bold rounded" />
      </div>
    </form>
  </div>
);

export default SubscribeBoxTest;
