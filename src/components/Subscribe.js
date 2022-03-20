import React from 'react';

const SubscribeBox = ({ textAlign }) => (
  <div id="mc_embed_signup">
    <form action="https://585588ae.sibforms.com/serve/MUIEAGhvz3EenIgwuRHySaqfSiBLdEiiYR59B58fT1W3D69VR07lp1YpGaOCJZ8h7FYNSZ9jBy8KoiqYtGcM8fUnpt3h93veQgXFcW7VJQKVi7TNfnnvWRvSwYDJn3-tmGm_LCrEJuvFaGlf1wOLuE--JdcIthSlGi0X1DkVYqb09zQaaPkLW8wVLGzBuF-6ux9tqBT7JFR68rBu" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <input type="email" defaultValue="" name="EMAIL" className={`email rounded-sm text-gray-900 w-full p-2 mt-2 mb-4 text-lg xl:max-w-xl ${textAlign}`} id="mce-EMAIL" placeholder="email address" required />
      <div className="mb-4 border border-gray-400 border-solid px-4 pt-2 pb-4 bg-black bg-opacity-75 text-left relative inline-block">
        <input type="checkbox" defaultValue="1" name="OPT_IN" className={`absolute left-15 top-15`} required /> <button type="button" className="group cursor-pointer inline focus:border-0 focus:outline-none text-left text-white ml-6">I agree to receive your newsletters and accept <span className="underline text-primary-yellow hover:text-white">this data privacy statement<span className="visible relative group-focus:invisible group-focus:absolute">.</span><span className="invisible absolute group-focus:visible group-focus:relative">:</span></span> <span className="text-gray-400 invisible absolute group-focus:visible group-focus:relative">We use Sendinblue as our marketing platform. By clicking the "Subscribe" button below to submit this form, you acknowledge that the information you provided will be transferred to Sendinblue for processing in accordance with their <a className="text-white underline hover:text-primary-yellow" href="https://www.sendinblue.com/legal/termsofuse/" target="_blank">terms of use</a>.
        </span></button>
      </div>
      <p className="mb-4 block">You may unsubscribe at any time using the link in our newsletter.</p>
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

export default SubscribeBox;
