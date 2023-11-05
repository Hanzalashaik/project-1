import { BiSolidCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    menu == false ? setMenu(true) : setMenu(false);
  };

  return (
    <>
      <div className="flex justify-between   h-[95px]">
        <div className=" ">
          <Link to="/">
            <img
              className="w-[100px] h-[95px] md:w-[150px] md:h-[95px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAABC1BMVEX///8kHiABAQH+1AMhHyAfGRv+uRRAPj4ZEhRtbGwdGxwgHyAEAAAiHB4kHSD8///j4+P5+PguLC3X1dZ7eHnq6uodFRhXV1cKAAOPjo8VExRnZ2cOCw3w8PD///u1tbXR0dFJSUmWlpbHx8f+uBWpqakPAAczMzPd3d0SCg2UkpN+fH2Ghoa7u7v8//X91gFeXl4mJiZDQ0P94mf8416sq6v79dP67qL35nz63Db33EX68NwuJyn8777103H557/56pb6xwD3vyb23qD8vwD4x1j444X35Kv54nL7ymX58r769ef8+uD57tD73an/xAD715Xywj742YT6vTX651j44UH8zyvyzlfz46JRgO85AAAOm0lEQVR4nO2dC2OayBbHxwkvEYLgA0VEQIkS0aiJbZLbbDZt2k1f2+1j7+73/yR3ZsA3qMneiHbn3zY+QDu/nJkzZ4aZAwBUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVP8SqfVSKd/BKiB11LTL8zTVS52C3Rt7p9WgWNN57RUr+JVKRYIz+Y5bSLuY66XWsSEKdrPXa4zd027NaYt+yFA5OfF9QSizrIyVWVTZh2xgp138BJXckWhWZnaQMAniOM5sJ9mEmltPmyJGLqywco5hcuhfqC2JpmJyYgUWO2mDLMuFj2Bgh2IStwB1O22WRfnLLWeNykGVTz69DPV98iYl6REmk51AZ9eRw1o+baCpSpXtwRgjKK4ly2QMWN2XLu5xZN2uI64/ham8aqbNFOoxZMiDsJtbJQuze2G2x5FtJ5PZB7M9BxkjwiBtruchQ4JO6SclYwzR/knJUI0c/5RkSMfw9CclQ2jFn5QM+ZFsmmSPiRsfLamWHpn6nDZDVvPSQ+MTR1z/D4nt9MjG8DnJcjDFobZjPiMZI6XYq6k6fHqFZFCXbCCJSbMnfqoRZKMN/fLjqeSycAIh1PQsGrZBIf6k8iBNMgDswMHTomU5MsP6gTM6o+xL0NC7XjMfjcU6RcjGTXuVnXTJkFR7HAxeQWiKjMg7aweYBoRO0Fue8SiMYG6VjOVToVlVvVnlodENRslW86VsL37etBrjZtkU3f6KmoxeTZzuOIZB8nRwb9UX7RUZqJ8WE8kqa4MKu7KMxmq7KvV2qmoJZHJ5/eyNDdn9JgPFhDlxRtpwaaLJw4VZ570jA6fxaIy5cTiZrwon8h6TgQaM9fwMXJhxsywLKOhRUfA/Bb1GL1S34jP7SwaaZqznlyV7do5lKYr14uXlxdXV1fXF5cv/9IHVR+/XszBqqPvlGyN1XsVFTIwIe7Nz+jcXZ0dY4c+jo19uLXKgF8Vre0kG6o4ZF+jK0EUHEYBi/XpGiM7m6O5ev+njOlrizf0lA6AWO3hjYE1FZNbLiaHmdXZ0//oWNz11IO0xWWzAhCJis42iRusdttIq3dkd9/YTtinuOvaWDA25YwdvRgW5SOVdjM1CtPtbJUTbR98YyTaMeD/SAH3lIp7s7K7V+htbrXayx2Qg3/bjvD+D0MDHs9imhtA4jqA5/ijt8q+ROohvbNAGyk1CfTziuNZvSt+qm920i79WQUw8gkbeYh0o54lNrcXhttbsbf76NNWAcbG/WQTWpxjnSITq4/e+lXbBN6ugxTQ2BnaA8nAU29aOju457puSdrm3kFpbrZGMWQXgRYLNzr5wHPci7WJvJQ8ajGgsTOLgial+Etldi+PeHoLRkPt34KCoLQwrcYBxFU+Gq2OLuzkMNOAOFtbwMHjKTUkiO/uCjPZeOQAngpX35qfrGKOWXBtJdWzdf0y7yFurIcycJAlDPiRVRtxbc9xt2gXeXvUAeZLQjYiaCpTrJLIjQvb+QBoaUT4LfVIn0eDaepEMRsheH0g7I0NpxBZoUJIg6s0Sov0Z2aE0NAXcPHwi7q7TaHSApSS2sgkZ9zntMm8nS/n9y9HDC0uJXv0nyTGSsTaK97nWTcpF3lbKH3eoyNcvP+EJxv6HZLCpzX5Pu8hbCpGFpb66/nG9nusIh1eHRHY/qWtHR0lR/iGSWdYbbjIgW4+FDn8hZL+lXeYtpdy27tbXwSkZHqAdjm8E/c+tL1uS3REw7kD6M2B9vOeS5geWyHBlbL3m+mkXeTtZlvKV27I6Eou13qZd5G1lKd9a3JJxYk14Fray1h+HExF/5pAPWYZZgYtaWYv7fDARMbC+c9zdAsnV1SpY5Bi5r4djMgB+bXH3C0Y6/xEa7WzuOhoBa9233lgHhNa/x2gT4zy8+/P84uLdxdXlw8Plj/Pr84s5i7Ve98Hh1EYUYGFrRFa7fvjxcHF+eXV59e7H5Y+Hh+vL62hCjujvQwIDVv81tkaIdnZ9+XBxcfZweYWhzs+vHy4mYRVuZYfEhR3/De6Dw24NmQrb7M+XN58+9vv9jzcfLv/LkcPYsJ8PqJHh6QJLedfCs6T3yPtfXJ4jMjRcI8cUoo83374Tj//moMCw+upfLWKX+7ur84uH6w/LlU7pf7x98/WbdVCtDMuy+l8nTenL3dG1QmxTL5WiNVkKUFVku4Pyi6FQgftvkc2w3dAPfMGlkNUqEJ7ogTs+1CwNkSz1F27iAAG5TkNmIMumKUFm4Nr7uNl/K1mqpbwhRuNavyggDyeLo/GDLJxAwwkah2o8S3nxF3Hu7xXgrWyukVlfghk9aOQPEM9SrNuviO17HFl0rQbXTT3oLeGpan2qPQRXMBu4fc+1PoNShY3dYoHflPHSfm1Q9cbjsXfarekOr4lmlD3FFIftkT4onnori+RTl9K//RuAJoxb6DN3cbTsV6AkVUxfKJen282PEbfMsmVBQEfhYOdeZ22NsVTQx71ZZ7S8NHrVgOtSjzBMztztnoVmrS34Gb7mFeLxZn3xWJteV3uidrqZN4v6KflYLguoqXSbG1p7T4eVTYZbp11uofHgxAoMwwpwWGyubwt514GS8IhUKguSzd05yvaiCWQBGoPx+m37pUZWg5KfuB9tneDO/KPCrC7bMSTouAmNbqJ8o+sYSRvS1pHtbuckL2SWfvXIFMdlE2rZxoaMC/VmUWKXP72JzN4JFRbqphbLJkfVk0UuxanaG0zHo0/Lj/ApOyQDeX2hm5K10dy+EB+yA29d2Fsfiguf2Ei209RLPX62y5ExgsBZIEVRvZYd55NmBdyK0Q309Zl75sl2vEMZsUXLvxnRqa7kTpKRT0F0sbazoegEg23Jjne/97o3Ch0dI8ZlhUIGZYUKHm+u9HanvhEUtybLbNoB9hxq6hCvbCxns6OkcuKaKfFZr1ki1lPr+V5NYsRa1tnWh8jM7sEA3lUsVeSMYKzfVI6NB4U2z7czKLZHvwzGELZ2jkJa6URKVQY1uC1iCzQwiXIkPi6xIEwvl5TaGEHjqVHhRhnp7ry2a9LJP4nnk8WmmZWCqHQ6hE9IcrCkyTB0kgyTPWHtlMGweg58TNbHGMmGaU6Sl1YqyOsMq3syQ9npljfODiQJRWVQ07teo9dE6jU8z+ulXRHnpTYcaMZkYFgnnKOiAvmgl3pmtg0qdI3HtTgWSrq3d7NvscKG87eslagSOt6+G2tenSCzzZyVALXqYVhrTmpvIElrayV7Ig32IVflE1TyHCiV5ZhYimFkH7bdQ6qFyyqNaww0l2Mv1oRM1067bP9Yqu3qGSjhnOFYAuq32sGm6deDkdppuDWH17T2qObu3/UVKioqKioqKioqqqdLtXuNvZpkepzyGh/KqVUXhsF2LZwdZKaJKXV0lmaHz2s8356mpbHJd0SnNdv8vGpA1eZfazsba+chy06HV8PZopoAL6zCY2bZnCRf4w10UrQ4RRdYc5q9POujj+ON/1i96ReSL9WBuvDG7q5S5KXjyZQ0uYtI9PYAvc3kygKL2aJc3jyetIoA9HJGmJxbJ0tdyvqETBRFMi/JoCcGJsuhF2KkHZOJ5M5muHwwrGIBxDkpRb02kvBig3ANACETh+oyWSPM/BgtW+mxGhL6EDNEj8NBRKZFMnZKVtbzhU6zKuAruASigLNCQRcz5B1hkqackDFSdZlMR2egQ/5cCssCghWidojJ0kjli8mEMCl+Ha9NMnB5awbDkPx/uGDoXYY0NUKWOZbwvNQcGV5TbFb9hbRrhCy6orkHZKAg4SRCKqibDCNOy9mEYcYTQoZtg4nmyFyTEdv1k4VLmPtGBhyRwYmfEMtcYnJ1KGfkjIrJGNExSKqyeTIEjE7W2dDcoZbJZM1zQzV2xLVEVkXGQhXPQwaozIqAKDKwRMhMN2swhjNPZkNiLa+CzD29JLZMlpElqXKCBHd3N4gFMi8kc/1MRpolUSsK4WobTHZaQq0Kef4ZWVfIyKyKWhtqjdPucIUsE00nC7u7hccCmTsjm8uNmp0jq4JqJcMOZ2SqLIefR5VytsZ0hYydXPDcXY76BbIAk5GalanMwhG8cgXWJ2S42UlebULWQwwSrrlVf24d1aoHKdihdheHLpDx2IPkSdOZVZu6gTyIpk7IcMcsa7wcnTFABj3BfTT+kFlNJNsZ0FTzZNgnigwqS1mecwdj1LKI24vIgFPO4PuXErLw7jP44jqOVcRh9Jk9IyvgCysksWTXzzATH14SxdDRT8kKYTRFyMJtJJO4c5pvel/IWKfXaHgk959Mor88fioN8NMegwMTEu1OyECRZC0mZDiDmWj6ROjNaZ+/QqZMN8bskoxExCZZ9xfFVB6OiA045Cs4QyUbBrtTsvqUrIPrb7saEA3Rmyf1WLKZb4Q7W7mTlzKzBTbC9D5fAcQXNGUW/yxHdWxKBlwYkQXIIfpRgAmKxvQ+A4tk8xdGmZ2tZM9DIZIP528X60GyTi6HLMdHv+W2KcDq9KkgoeEygx6nRmiir/LDBlVAT+GUTJjXzshKtWyo4mlj4f+sn7bx7ZBNfRpmdbPZWtTLNdGnai4oDPAHJ8dV/FUDcoU6PyDHw7cH2XnV9uESdqlzsPcQp6KioqKioqKioqKioqKioqKioqKioqKioqKioqLaheDPKkp2eFog66RViufQjKzqohenVRgUB4ETGEEuxVJtI3M0zOVycCjqjinyujNqtx1da7cnx6dkrpp3gVequ6AJbBu0AZ9OgbeWkc3qgV4cwK4+1EbZWlfXHb7YXSVz9PwYOHrJA049a6va3pOZQ9PMjfihMUR/NR4asG1CEz1EmpEBewx0UPCAXi8eAtkmTcmarjcGdtA7HLKRU3McXYeD0WDgZB2+7aA3sqPJ4SlZAPI94IJ8AwzUYseug3b89+2PvEaA/jSGLrJJcNptam7VC06DyeGE/mxQBNquSvhUGQY0TNMQc9DMGYbZRa9yprHazhbl2d6uCvhc+pfEID+Vfl6y/wEuYHycMDHVQwAAAABJRU5ErkJggg=="
              alt="logo"
            />
          </Link>
        </div>
        <div className="bg-blue-500 w-full hidden md:block items-center ">
          <ul className="text-white flex justify-evenly mt-8">
            <li className="font-bold text-xl  hover:text-yellow-400">
              <NavLink to="/" className="focus:text-yellow-400">
                Home
              </NavLink>
            </li>

            <li className="font-medium text-xl hover:text-yellow-400">
              <NavLink to="contact" className="focus:text-yellow-400">
                Contact
              </NavLink>
            </li>
            <li className="font-medium text-xl hover:text-yellow-400">
              <NavLink to="help" className="focus:text-yellow-400">
                Donate Now
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="md:hidden ">
          <div className="flex justify-end mt-5">
            {menu != true ? (
              <div className="flex w-[50px] justify-between">
                <GiHamburgerMenu
                  className="w-[30px] h-[40px] "
                  onClick={handleMenu}
                />
              </div>
            ) : (
              <RxCross2
                className="w-[30px] h-[40px] mr-3"
                onClick={handleMenu}
              />
            )}
          </div>
          {menu == true && (
            <>
              <div className="flex bg-blue-500 justify-center absolute top-11 right-12 w-[240px] h-[200px] rounded-md ">
                <ul className="text-white flex justify-evenly  flex-col text-center   ">
                  <li className="font-bold text-xl text-black hover:text-white">
                    <NavLink
                      to="/"
                      className="focus:text-yellow-400 "
                      onClick={() => setMenu(false)}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="font-medium text-xl text-black hover:text-white">
                    <NavLink
                      to="contact"
                      className="focus:text-yellow-400"
                      onClick={() => setMenu(false)}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="font-medium text-xl text-black hover:text-white">
                    <NavLink
                      to="help"
                      className="focus:text-yellow-400"
                      onClick={() => setMenu(false)}
                    >
                      Donate Now
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
