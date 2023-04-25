
import React, {useEffect, useState} from "react";

import FixedNavbar from "../components/Header/fixednav";
import HostSlogansSection from "../components/Host/HostSlogansSection";
import HostDashboard from "../components/Host/HostDashboard";



export default function Host(props) {


    const {...rest} = props;


    const [isLoading, setIsLoading] = useState(false)


  return (
    <>
      <FixedNavbar full={false} />
<div >

              <>

          {isLoading ? (
            <>

                </>
          ):(

              <div className="relative top-20 bg-[rgb(243,243,243)]">
                          {/*<HostSlogansSection />*/}
                          <HostDashboard />

              </div>

          )}
          </>

</div>

    </>
  )
}
