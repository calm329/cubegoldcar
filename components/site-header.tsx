"use client"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const pathname = usePathname();
  const [navbarSticy, setNavbarSticky] = useState(false)
  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    if (pathname != '/') {
      setNavbarSticky(true)
    }else{
      setNavbarSticky(false)
    }
    // setChanges((prev) => prev + 1);
  }, [pathname]);
  return (
    <header className={`${navbarSticy ? "bg-white sticky shadow-md " : 'bg-transparent absolute'} p-[22px] py-0  top-0 w-full z-20 relative`}>
      <div className="nav flex justify-between relative items-center">
        <div className="flex items-center">
          <Image
            alt="logo"
            src={"/static/images/logo.png"}
            width={282}
            height={86}
          />
          <div className="flex ml-10">
            <Link href={'/'} className="text-xl font-bold text-[#223B80] mr-7 navLinks">Home</Link>
            <Link href={'/Cars'} className="text-xl font-bold text-[#223B80] mr-7 navLinks">Cars</Link>
            <Link href={'/about-us'} className="text-xl font-bold text-[#223B80] mr-7 navLinks">About Us</Link>
            <Link href={'/how-it-works'} className="text-xl font-bold text-[#223B80] mr-7 navLinks">How It Works</Link>
          </div>
        </div>
        {/* <div
          className="searchInput flex justify-between max-w-[518px] w-full py-3 px-5 rounded-full border-2 border-[#223B80] absolute left-[50%] top-[50%]"
          style={{ transform: `translate(-50%,-50%)` }}
        >
          <svg
            className="mr-5"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1646 21C17.6886 21 22.1667 16.7467 22.1667 11.5C22.1667 6.25329 17.6886 2 12.1646 2C6.64066 2 2.1626 6.25329 2.1626 11.5C2.1626 16.7467 6.64066 21 12.1646 21Z"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2195 22L21.1138 20"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            className="max-w-96 w-full outline-none"
            placeholder="Search something here"
          />
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8378 6.5H17.5207"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99224 6.5H2.78086"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.2036 10C13.2388 10 14.8886 8.433 14.8886 6.5C14.8886 4.567 13.2388 3 11.2036 3C9.16848 3 7.51867 4.567 7.51867 6.5C7.51867 8.433 9.16848 10 11.2036 10Z"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.8378 17.5H19.6264"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.09793 17.5H2.78086"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.415 21C17.4502 21 19.1 19.433 19.1 17.5C19.1 15.567 17.4502 14 15.415 14C13.3799 14 11.73 15.567 11.73 17.5C11.73 19.433 13.3799 21 15.415 21Z"
              stroke="#223B80"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}
        <div className="flex items-center ">
          <div className="languageSelect flex items-center">
            <svg
              className="mr-[6px]"
              width="41"
              height="31"
              viewBox="0 0 41 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="41" height="31" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_107_2207"
                    transform="matrix(0.00504065 0 0 0.00666667 -0.00406504 0)"
                  />
                </pattern>
                <image
                  id="image0_107_2207"
                  width="200"
                  height="150"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAYAAACb3McZAAAMPWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkJDQAhGQEnoTBKQjJYQWQUA62AhJgFBiDAQVOyIquHYRARu6KqLoWgBZbIhiWxR7XywoKOuiLnblTQrosq9873zfzPz3zJn/nDl35t4ZANRPcsXibFQDgBxRniQ6JICZmJTMJHUDBKCACjSAIZeXK2ZFRYUDKIPt3+XdTWgN5Zq9jOuf/f9VNPmCXB4ASBTEqfxcXg7EhwHAq3hiSR4ARJnebEaeWIZhAdoSGCDES2U4XYGrZDhVgQ/IbWKj2RC3AqBC5XIl6QCoXYF6Zj4vHXKo9UHsKOILRQCoMyH2zcmZxoc4BWJraCOGWMbvkfoDT/rfOFOHOLnc9CGsmItcVAKFueJs7qz/Mx3/W3KypYM+LGGhZkhCo2Vzhnm7nTUtTIapEPeKUiMiIdaC+IOQL7eHGKVkSEPjFPaoAS+XDXMGGBA78rmBYRAbQBwsyo4IV+pT04TBHIjhCkFnCvM4sRDrQrxUkBsUo7TZKpkWrfSF1qdJ2Cyl/hxXIvcr8/VQmhXHUvK/yRBwlPyYWkFGbALEFIjN84XxERCrQeyQmxUTprQZW5DBjhi0kUijZfGbQxwtEIUEKPix/DRJcLTSviQnd3C+2NYMISdCiQ/mZcSGKvKDtfK48vjhXLArAhErbpBHkJsYPjgXviAwSDF3rFsgiotR8nwQ5wVEK8biFHF2lNIeNxVkh8j0phC75ObHKMfi8XlwQSr48TRxXlSsIk68IJM7LkoRD74KhAM2CARMIIUlFUwDmUDY3tvQC58UPcGACyQgHQiAvVIzOCJB3iOCdQwoAH9AJAC5Q+MC5L0CkA/1X4e0itoepMl78+UjssAziHNAGMiGz1L5KNGQt3jwFGqE//DOhYUH482GRdb/7/WD2u8aFtSEKzXSQY9M9UFLYhAxkBhKDCba4Pq4L+6Nh8PaHxZn3AP3HJzHd3vCM0IH4THhBqGTcGeqsFAyLMrxoBPyBytzkfpjLnBLyOmKB+A+kB0y4wxcH9jjLtAPC/eDnl2hlq2MW5YV5jDuv83gh7ehtCM7klHyCLI/2Xr4SDVbNdchFlmuf8yPItbUoXyzh3qG+2f/kH0+bMOGW2JLsUNYG3YKO481Yw2AiZ3AGrFL2DEZHlpdT+Wra9BbtDyeLMgj/Ie/wTcry2SuY61jj+MXRV+eYKbsGw3Y08SzJML0jDwmC/4RBEyOiOcwiuns6OwCgOz/ovh8vWXI/xsI48J3XeEDAHySBgYGmr/rwuH+PdwNt3/vd51VLQC04wCcW8yTSvIVOlxWEeBXQh3uND1gBMyANZyPM3AD3sAfBIFxIBLEgiQwBUafAde5BMwAc8BCUAxKwSqwHlSALWA72A32gYOgATSDU+AsuAiugBvgHlw9XeAl6APvwGcEQUgIDaEjeogxYoHYIc6IB+KLBCHhSDSShKQg6YgIkSJzkEVIKbIGqUC2ITXIL8hR5BRyHulA7iCPkB7kDfIJxVAqqo0aopboaNQDZaFhaCw6GU1Hp6MFaBG6Ai1Hq9G9aD16Cr2I3kA70ZdoPwYwVYyBmWD2mAfGxiKxZCwNk2DzsBKsDKvG6rAm+J6vYZ1YL/YRJ+J0nInbwxUcisfhPHw6Pg9fjlfgu/F6vBW/hj/C+/BvBBrBgGBH8CJwCImEdMIMQjGhjLCTcIRwBu6lLsI7IpHIIFoR3eFeTCJmEmcTlxM3EfcTTxI7iE+I/SQSSY9kR/IhRZK4pDxSMWkjaS/pBOkqqYv0QUVVxVjFWSVYJVlFpFKoUqayR+W4ylWV5yqfyRpkC7IXOZLMJ88iryTvIDeRL5O7yJ8pmhQrig8llpJJWUgpp9RRzlDuU96qqqqaqnqqTlAVqi5QLVc9oHpO9ZHqR6oW1ZbKpk6iSqkrqLuoJ6l3qG9pNJolzZ+WTMujraDV0E7THtI+qNHVHNQ4any1+WqVavVqV9VeqZPVLdRZ6lPUC9TL1A+pX1bv1SBrWGqwNbga8zQqNY5q3NLo16RrOmlGauZoLtfco3les1uLpGWpFaTF1yrS2q51WusJHaOb0dl0Hn0RfQf9DL1Lm6htpc3RztQu1d6n3a7dp6Ol46ITrzNTp1LnmE4nA2NYMjiMbMZKxkHGTcanEYYjWCMEI5aNqBtxdcR73ZG6/roC3RLd/bo3dD/pMfWC9LL0Vus16D3Qx/Vt9Sfoz9DfrH9Gv3ek9kjvkbyRJSMPjrxrgBrYGkQbzDbYbnDJoN/QyDDEUGy40fC0Ya8Rw8jfKNNondFxox5jurGvsdB4nfEJ4xdMHSaLmc0sZ7Yy+0wMTEJNpCbbTNpNPptamcaZFpruN31gRjHzMEszW2fWYtZnbmw+3nyOea35XQuyhYdFhsUGizaL95ZWlgmWSywbLLutdK04VgVWtVb3rWnWftbTrautr9sQbTxssmw22VyxRW1dbTNsK20v26F2bnZCu012HaMIozxHiUZVj7plT7Vn2efb19o/cmA4hDsUOjQ4vBptPjp59OrRbaO/Obo6ZjvucLznpOU0zqnQqcnpjbOtM8+50vn6GNqY4DHzxzSOee1i5yJw2exy25XuOt51iWuL61c3dzeJW51bj7u5e4p7lfstD22PKI/lHuc8CZ4BnvM9mz0/erl55Xkd9PrT2947y3uPd/dYq7GCsTvGPvEx9eH6bPPp9GX6pvhu9e30M/Hj+lX7PfY38+f77/R/zrJhZbL2sl4FOAZIAo4EvGd7seeyTwZigSGBJYHtQVpBcUEVQQ+DTYPTg2uD+0JcQ2aHnAwlhIaFrg69xTHk8Dg1nL5x7uPmjmsNo4bFhFWEPQ63DZeEN41Hx48bv3b8/QiLCFFEQySI5ESujXwQZRU1PerXCcQJURMqJzyLdoqeE90WQ4+ZGrMn5l1sQOzK2Htx1nHSuJZ49fhJ8TXx7xMCE9YkdCaOTpybeDFJP0mY1JhMSo5P3pncPzFo4vqJXZNcJxVPujnZavLMyeen6E/JnnJsqvpU7tRDKYSUhJQ9KV+4kdxqbn8qJ7UqtY/H5m3gveT789fxewQ+gjWC52k+aWvSutN90tem92T4ZZRl9ArZwgrh68zQzC2Z77Mis3ZlDWQnZO/PUclJyTkq0hJliVqnGU2bOa1DbCcuFndO95q+fnqfJEyyMxfJnZzbmKcND/KXpNbSxdJH+b75lfkfZsTPODRTc6Zo5qVZtrOWzXpeEFzw82x8Nm92yxyTOQvnPJrLmrttHjIvdV7LfLP5RfO7FoQs2L2QsjBr4W+FjoVrCv9alLCoqciwaEHRk8Uhi2uL1YolxbeWeC/ZshRfKlzavmzMso3LvpXwSy6UOpaWlX5Zzlt+4Senn8p/GliRtqJ9pdvKzauIq0Srbq72W717jeaagjVP1o5fW7+Oua5k3V/rp64/X+ZStmUDZYN0Q2d5eHnjRvONqzZ+qciouFEZULm/yqBqWdX7TfxNVzf7b67bYrildMunrcKtt7eFbKuvtqwu207cnr/92Y74HW0/e/xcs1N/Z+nOr7tEuzp3R+9urXGvqdljsGdlLVorre3ZO2nvlX2B+xrr7Ou27WfsLz0ADkgPvPgl5ZebB8MOthzyOFR32OJw1RH6kZJ6pH5WfV9DRkNnY1Jjx9FxR1uavJuO/Orw665mk+bKYzrHVh6nHC86PnCi4ET/SfHJ3lPpp560TG25dzrx9PXWCa3tZ8LOnDsbfPZ0G6vtxDmfc83nvc4fveBxoeGi28X6S66Xjvzm+tuRdrf2+svulxuveF5p6hjbcfyq39VT1wKvnb3OuX7xRsSNjptxN2/fmnSr8zb/dved7Duv7+bf/XxvwX3C/ZIHGg/KHho8rP7d5vf9nW6dxx4FPrr0OObxvSe8Jy+f5j790lX0jPas7Lnx85pu5+7mnuCeKy8mvuh6KX75ubf4D80/ql5Zvzr8p/+fl/oS+7peS14PvFn+Vu/trr9c/mrpj+p/+C7n3ef3JR/0Puz+6PGx7VPCp+efZ3whfSn/avO16VvYt/sDOQMDYq6EKz8KYLCgaWkAvNkFzwlJANDh/YwyUXH/kwuiuLPKEfhPWHFHlIsbAHWwkR3j2ScBOACL5QLIDZ9lR/hYf4COGTNUBu9q8nulTIjwHrA1UIburI2ngmGiuHP+EPfwFshYXcDw9l8Kz3tYsmC/xQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAyKADAAQAAAABAAAAlgAAAAA/sG4FAAADxUlEQVR4Ae3dsU0DURREUS8ymUtw8RRDGSRE7gEhLRKxfRuYQ7gT/aN3JWccj9v9vPgjQOCpwNvTrz4SIPAvIBCHQCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEBBI4JgICcQMEQkAggWMiIBA3QCAEjp+P96/YTQSmBY7z8+L/pE+fgMeXgJ9YpWObFxDI/AkAKAGBlI5tXkAg8ycAoAQEUjq2eQGBzJ8AgBIQSOnY5gUEMn8CAEpAIKVjmxcQyPwJACgBgZSObV5AIPMnAKAEBFI6tnkBgcyfAIASEEjp2OYFBDJ/AgBKQCClY5sXEMj8CQAoAYGUjm1eQCDzJwCgBARSOrZ5AYHMnwCAEhBI6djmBQQyfwIASkAgpWObFxDI/AkAKAGBlI5tXkAg8ycAoAQEUjq2eQGBzJ8AgBIQSOnY5gUEMn8CAEpAIKVjmxcQyPwJACgBgZSObV5AIPMnAKAEBFI6tnkBgcyfAIASEEjp2OYFBDJ/AgBKQCClY5sXEMj8CQAoAYGUjm1eQCDzJwCgBARSOrZ5AYHMnwCAEhBI6djmBQQyfwIASkAgpWObFxDI/AkAKAGBlI5tXkAg8ycAoAQEUjq2eQGBzJ8AgBIQSOnY5gUEMn8CAEpAIKVjmxcQyPwJACgBgZSObV5AIPMnAKAEBFI6tnkBgcyfAIASEEjp2OYFBDJ/AgBKQCClY5sXEMj8CQAoAYGUjm1eQCDzJwCgBARSOrZ5gevv93UeAQCBVwLH43Y/X42+E1gX8BNr/QK8PwUEkjzGdQGBrF+A96eAQJLHuC4gkPUL8P4UEEjyGNcFBLJ+Ad6fAgJJHuO6gEDWL8D7U0AgyWNcFxDI+gV4fwoIJHmM6wICWb8A708BgSSPcV1AIOsX4P0pIJDkMa4LCGT9Arw/BQSSPMZ1AYGsX4D3p4BAkse4LiCQ9Qvw/hQQSPIY1wUEsn4B3p8CAkke47qAQNYvwPtTQCDJY1wXEMj6BXh/CggkeYzrAgJZvwDvTwGBJI9xXUAg6xfg/SkgkOQxrgsIZP0CvD8FBJI8xnUBgaxfgPengECSx7guIJD1C/D+FBBI8hjXBf4APSEMZWYUUcQAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00018 9.79963C6.59185 9.79963 6.18351 9.64213 5.87435 9.33297L2.07101 5.52963C1.90185 5.36047 1.90185 5.08047 2.07101 4.9113C2.24018 4.74213 2.52018 4.74213 2.68935 4.9113L6.49268 8.71463C6.77268 8.99463 7.22768 8.99463 7.50768 8.71463L11.311 4.9113C11.4802 4.74213 11.7602 4.74213 11.9293 4.9113C12.0985 5.08047 12.0985 5.36047 11.9293 5.52963L8.12601 9.33297C7.81685 9.64213 7.40851 9.79963 7.00018 9.79963Z"
                fill="#1A202C"
                stroke="#1A202C"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <div className="rounded-full cursor-pointer border-[#223B80] p-2 border-2 aspect-square w-11 ml-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.44 3.09985C14.63 3.09985 13.01 3.97985 12 5.32985C10.99 3.97985 9.36998 3.09985 7.55998 3.09985C4.48998 3.09985 1.99998 5.59985 1.99998 8.68985C1.99998 9.87985 2.18998 10.9799 2.51998 11.9999C4.09998 16.9999 8.96998 19.9899 11.38 20.8099C11.72 20.9299 12.28 20.9299 12.62 20.8099C15.03 19.9899 19.9 16.9999 21.48 11.9999C21.81 10.9799 22 9.87985 22 8.68985C22 5.59985 19.51 3.09985 16.44 3.09985Z"
                fill="#223B80"
              />
            </svg>
          </div>
          <div className="rounded-full cursor-pointer border-[#223B80] p-2 border-2 aspect-square w-11 ml-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.34 14.4899L18.34 12.8299C18.13 12.4599 17.94 11.7599 17.94 11.3499L17.94 8.81988C17.94 6.46988 16.56 4.43988 14.57 3.48988C14.05 2.56988 13.09 1.99988 11.99 1.99988C10.9 1.99988 9.91999 2.58988 9.39999 3.51988C7.44999 4.48988 6.09999 6.49988 6.09999 8.81988L6.09999 11.3499C6.09999 11.7599 5.90999 12.4599 5.69999 12.8199L4.68999 14.4899C4.28999 15.1599 4.19999 15.8999 4.44999 16.5799C4.68999 17.2499 5.25999 17.7699 5.99999 18.0199C7.93999 18.6799 9.97999 18.9999 12.02 18.9999C14.06 18.9999 16.1 18.6799 18.04 18.0299C18.74 17.7999 19.28 17.2699 19.54 16.5799C19.8 15.8899 19.73 15.1299 19.34 14.4899Z"
                fill="#223B80"
              />
              <path
                d="M14.83 20.0099C14.41 21.1699 13.3 21.9999 12 21.9999C11.21 21.9999 10.43 21.6799 9.87998 21.1099C9.55998 20.8099 9.31998 20.4099 9.17998 19.9999C9.30998 20.0199 9.43998 20.0299 9.57998 20.0499C9.80998 20.0799 10.05 20.1099 10.29 20.1299C10.86 20.1799 11.44 20.2099 12.02 20.2099C12.59 20.2099 13.16 20.1799 13.72 20.1299C13.93 20.1099 14.14 20.0999 14.34 20.0699C14.5 20.0499 14.66 20.0299 14.83 20.0099Z"
                fill="#223B80"
              />
            </svg>
          </div>
          <div className="rounded-full cursor-pointer border-[#223B80] p-2 border-2 aspect-square w-11 ml-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1 9.21994C18.29 9.21994 17.55 7.93994 18.45 6.36994C18.97 5.45994 18.66 4.29994 17.75 3.77994L16.02 2.78994C15.23 2.31994 14.21 2.59994 13.74 3.38994L13.63 3.57994C12.73 5.14994 11.25 5.14994 10.34 3.57994L10.23 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199L2 12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299C5.02 18.5399 5.33 19.6999 6.24 20.2199L7.97 21.2099C8.76 21.6799 9.78 21.3999 10.25 20.6099L10.36 20.4199C11.26 18.8499 12.74 18.8499 13.65 20.4199L13.76 20.6099C14.23 21.3999 15.25 21.6799 16.04 21.2099L17.77 20.2199C18.68 19.6999 18.99 18.5299 18.47 17.6299C17.56 16.0599 18.3 14.7799 20.11 14.7799C21.15 14.7799 22.01 13.9299 22.01 12.8799L22.01 11.1199C22 10.0799 21.15 9.21994 20.1 9.21994ZM12 15.2499C10.21 15.2499 8.75 13.7899 8.75 11.9999C8.75 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z"
                fill="#223B80"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
