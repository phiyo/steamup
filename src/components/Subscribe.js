import React from 'react';

const SubscribeBox = ({ textAlign }) => (
  <div id="mc_embed_signup">
    <form action="https://facebook.us4.list-manage.com/subscribe/post?u=3022cc50d612eca6691bc09f3&amp;id=928ec47fcf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
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

export default SubscribeBox;
