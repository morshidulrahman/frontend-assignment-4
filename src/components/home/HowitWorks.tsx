import { Fade } from "react-awesome-reveal";

const HowitWorks = () => {
  return (
    <section className="container mx-auto px-4 md:py-20 py-10">
      <div className="flex items-center justify-center flex-col text-center gap-4">
        <Fade direction="up" delay={200} duration={1500}>
          <p className="text-xl text-gray-500">HOW IT WORKS</p>
          <h2 className="text-3xl font-semibold">
            Presenting Your New Go-To Car <br className=" " />
            Rental Experience
          </h2>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-4 mt-10">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <div className="card-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={62}
              height={62}
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M49.313 41.2315L48.8132 39.4095H50.9677C51.6364 39.4095 52.1787 38.8673 52.1787 38.1985C52.1787 37.5297 51.6364 36.9876 50.9677 36.9876H48.1489L46.524 31.0641C45.7819 28.3587 43.2978 26.4692 40.483 26.4692H38.0675C41.1541 22.8713 44.2066 18.0707 44.2066 13.153C44.2066 5.90053 38.2821 0 31 0C23.7179 0 17.7934 5.90054 17.7934 13.1531C17.7934 18.0708 20.846 22.8715 23.9326 26.4693H21.5171C18.7023 26.4693 16.2182 28.3588 15.4761 31.0641L13.8512 36.9876H11.0322C10.3634 36.9876 9.82129 37.5297 9.82129 38.1985C9.82129 38.8673 10.3634 39.4095 11.0322 39.4095H13.1867L12.687 41.2315C10.357 42.1409 8.70117 44.4081 8.70117 47.0562V54.675C8.70117 55.3438 9.24331 55.886 9.91211 55.886H12.7843V60.7891C12.7843 61.4579 13.3265 62 13.9953 62H20.7225C21.3913 62 21.9334 61.4579 21.9334 60.7891V55.886H40.0668V60.7891C40.0668 61.4579 40.609 62 41.2777 62H48.0049C48.6736 62 49.2159 61.4579 49.2159 60.7891V55.886H52.0881C52.7568 55.886 53.299 55.3438 53.299 54.675V47.0562C53.2989 44.4081 51.6431 42.141 49.313 41.2315ZM31 2.42188C36.9467 2.42188 41.7847 7.23584 41.7847 13.1531C41.7847 20.4116 33.5408 27.8992 30.9995 30.0344C28.4568 27.9007 20.2152 20.4228 20.2152 13.1531C20.2152 7.23584 25.0533 2.42188 31 2.42188ZM17.8117 31.7049C18.2661 30.0482 19.7898 28.8913 21.5171 28.8913H26.1727C28.3142 31.0467 30.0748 32.412 30.2634 32.5565C30.4806 32.723 30.7404 32.8064 31 32.8064C31.2597 32.8064 31.5192 32.723 31.7366 32.5565C31.9253 32.412 33.6858 31.0467 35.8273 28.8913H40.4828C42.2101 28.8913 43.7338 30.0483 44.1883 31.7049L46.6846 40.8048H43.0379V40.7703C43.0379 37.2302 40.1578 34.3499 36.6175 34.3499H36.5943C33.0541 34.3499 30.1739 37.2302 30.1739 40.7703V40.8048H15.3153L17.8117 31.7049ZM40.616 40.8048H32.5959V40.7703C32.5959 38.5656 34.3895 36.7718 36.5944 36.7718H36.6176C38.8224 36.7718 40.6162 38.5655 40.6162 40.7703V40.8048H40.616ZM19.5115 59.5781H15.2061V55.886H19.5115V59.5781ZM46.7939 59.5781H42.4885V55.886H46.7939V59.5781ZM50.877 53.4641H11.1229V47.0562C11.1229 44.9445 12.8409 43.2266 14.9524 43.2266H47.0474C49.1591 43.2266 50.8769 44.9445 50.8769 47.0562V53.4641H50.877Z"
                fill="black"
              />
              <path
                d="M38.1231 47.1348H23.8767C23.2079 47.1348 22.6658 47.6769 22.6658 48.3457C22.6658 49.0145 23.2079 49.5566 23.8767 49.5566H38.1231C38.7918 49.5566 39.3341 49.0145 39.3341 48.3457C39.3341 47.6769 38.7919 47.1348 38.1231 47.1348Z"
                fill="black"
              />
              <path
                d="M45.6955 47.1172H44.2898C43.6211 47.1172 43.0789 47.6593 43.0789 48.3281C43.0789 48.9969 43.6211 49.5391 44.2898 49.5391H45.6955C46.3641 49.5391 46.9064 48.9969 46.9064 48.3281C46.9064 47.6593 46.3643 47.1172 45.6955 47.1172Z"
                fill="black"
              />
              <path
                d="M17.7101 47.1172H16.3044C15.6356 47.1172 15.0935 47.6593 15.0935 48.3281C15.0935 48.9969 15.6356 49.5391 16.3044 49.5391H17.7101C18.3789 49.5391 18.921 48.9969 18.921 48.3281C18.921 47.6593 18.3789 47.1172 17.7101 47.1172Z"
                fill="black"
              />
              <path
                d="M36.7687 13.1526C36.7687 9.98299 34.1809 7.4043 31 7.4043C27.8192 7.4043 25.2314 9.98299 25.2314 13.1526C25.2314 16.3222 27.8192 18.9009 31 18.9009C34.1809 18.9009 36.7687 16.3222 36.7687 13.1526ZM27.6533 13.1526C27.6533 11.3184 29.1546 9.82617 31 9.82617C32.8453 9.82617 34.3468 11.3184 34.3468 13.1526C34.3468 14.9868 32.8455 16.4791 31 16.4791C29.1545 16.4791 27.6533 14.9868 27.6533 13.1526Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h6 className="text-xl-bold neutral-1000 font-semibold">
              Choose a Location
            </h6>
            <p className="text-base text-gray-500">
              Select the ideal destination to begin your journey with ease
            </p>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center gap-2">
          <div className="card-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={62}
              height={62}
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M46.6118 11.5695H41.3404V10.9738C41.3292 9.06305 39.7782 7.512 37.8674 7.52324H36.1253C35.0014 4.66841 31.7756 3.26347 28.9208 4.38742C27.4822 4.9494 26.347 6.08458 25.785 7.52324H24.0766C22.1884 7.52324 20.6598 9.05181 20.6598 10.94C20.6598 10.9513 20.6598 10.9625 20.6598 10.985V11.5807H15.3885C12.8259 11.5807 10.769 13.705 10.769 16.2676V53.4028C10.769 55.9317 12.8146 57.9885 15.3548 57.9998C15.366 57.9998 15.3772 57.9998 15.3997 57.9998H46.6118C49.1406 58.0222 51.22 55.9879 51.2312 53.4478C51.2312 53.4365 51.2312 53.4253 51.2312 53.4028V16.2563C51.2312 13.6937 49.1631 11.5695 46.6118 11.5695ZM22.9077 10.9738C22.8852 10.3331 23.391 9.79361 24.0316 9.77114C24.0429 9.77114 24.0654 9.77114 24.0766 9.77114H26.5942C27.1225 9.77114 27.5721 9.40023 27.6845 8.89446C28.0554 7.30969 29.3592 6.24194 30.9327 6.24194C32.495 6.24194 33.8437 7.34341 34.1697 8.87198C34.282 9.40023 34.7316 9.77114 35.2711 9.77114H37.8562C38.5306 9.7599 39.0813 10.2994 39.0813 10.9738V15.3909H22.9077V10.9738ZM48.9833 53.3916C48.9833 54.6841 47.938 55.7294 46.6567 55.7406C46.6455 55.7406 46.623 55.7406 46.6118 55.7406H15.3885C14.0959 55.7631 13.0282 54.7291 13.0169 53.4365C13.0169 53.4253 13.0169 53.4028 13.0169 53.3916V16.2563C13.0169 14.9301 14.0735 13.8174 15.3885 13.8174H20.6598V16.5485C20.6373 17.1218 21.0869 17.6163 21.6713 17.6388C21.6938 17.6388 21.7163 17.6388 21.7275 17.6388H40.2165C40.8234 17.6613 41.3292 17.178 41.3404 16.571C41.3404 16.5598 41.3404 16.5598 41.3404 16.5485V13.8174H46.6118C47.938 13.8174 48.9833 14.9413 48.9833 16.2563V53.3916Z"
                fill="black"
              />
              <path
                d="M27.9652 41.6914H18.2992C17.6811 41.6914 17.1753 42.1972 17.1753 42.8154V52.1441C17.1753 52.7623 17.6811 53.2681 18.2992 53.2681H27.9652C28.5834 53.2681 29.0891 52.7623 29.0891 52.1441V42.8154C29.0891 42.1972 28.5834 41.6914 27.9652 41.6914ZM26.8412 51.0202H19.4232V43.9393H26.8412V51.0202Z"
                fill="black"
              />
              <path
                d="M25.5826 45.389C25.1218 44.9956 24.425 45.0406 24.0203 45.4902L22.6154 47.0862L22.1321 46.704C21.6488 46.3106 20.9407 46.3893 20.5473 46.8726C20.1764 47.3671 20.2551 48.0752 20.7497 48.4686L22.0759 49.5251C22.548 49.896 23.2223 49.8398 23.627 49.3903L25.7175 46.9738C26.1221 46.5017 26.0547 45.7936 25.5826 45.389Z"
                fill="black"
              />
              <path
                d="M38.9911 43.9395H32.0114C31.3932 43.9395 30.8875 44.4452 30.8875 45.0634C30.8875 45.6816 31.382 46.1874 32.0114 46.1874H38.9911C39.6093 46.1874 40.1151 45.6816 40.1151 45.0634C40.1151 44.4452 39.6093 43.9395 38.9911 43.9395Z"
                fill="black"
              />
              <path
                d="M43.678 48.6602H32.0114C31.3932 48.6602 30.8875 49.1659 30.8875 49.7841C30.8875 50.4023 31.3932 50.9081 32.0114 50.9081H43.6892C44.3074 50.9081 44.8132 50.4023 44.8132 49.7841C44.8132 49.1659 44.3074 48.6602 43.678 48.6602Z"
                fill="black"
              />
              <path
                d="M45.6112 28.0133L43.0262 26.8444L40.7221 23.1803C39.9465 21.9552 38.5978 21.2134 37.1479 21.2358H28.2125C26.8975 21.2246 25.6612 21.8315 24.8632 22.8656L21.8959 26.7544L16.9056 28.1144C15.4108 28.519 14.3655 29.879 14.3655 31.4188V33.3745C14.3655 35.274 15.9165 36.8587 17.816 36.8587H17.9284C18.5016 38.4323 20.0864 39.7136 21.9409 39.7136C23.7954 39.7136 25.3802 38.4323 25.9534 36.8587H35.6531C36.2263 38.4323 37.811 39.7136 39.6656 39.7136C41.5201 39.7136 43.1048 38.4323 43.6781 36.8587H44.1838C46.0833 36.8587 47.6344 35.274 47.6344 33.3745V31.1491C47.6344 29.8003 46.8363 28.5752 45.6112 28.0133ZM21.9409 37.4207C20.8394 37.4207 19.9403 36.5215 19.9403 35.4201C19.9403 34.3186 20.8394 33.4195 21.9409 33.4195C23.0424 33.4195 23.9415 34.3186 23.9415 35.4201C23.9415 36.5328 23.0424 37.4207 21.9409 37.4207ZM39.6768 37.4207C38.5753 37.4207 37.6762 36.5215 37.6762 35.4201C37.6762 34.3186 38.5753 33.4195 39.6768 33.4195C40.7783 33.4195 41.6774 34.3186 41.6774 35.4201C41.6662 36.5328 40.7783 37.4207 39.6768 37.4207ZM44.1838 34.6108H43.8354C43.442 32.5877 41.7224 31.2165 39.6768 31.2165C37.6312 31.2165 35.9003 32.5877 35.507 34.6108H26.0995C25.7286 32.6102 23.964 31.1716 21.9409 31.194C19.929 31.194 18.1869 32.599 17.771 34.5771C17.1304 34.5546 16.6134 34.0264 16.6134 33.3745V31.4188C16.6134 30.8793 16.973 30.4073 17.4901 30.2724L22.8513 28.8113C23.0873 28.7438 23.3009 28.609 23.447 28.4066L26.6502 24.2256C27.0211 23.7423 27.6056 23.4725 28.2125 23.4837H37.1479C37.8223 23.4725 38.4517 23.8097 38.8114 24.3829L41.2953 28.3392C41.4077 28.519 41.5875 28.6651 41.7786 28.7551L44.6671 30.0588C45.0942 30.2499 45.364 30.677 45.364 31.1378L45.3752 33.3745C45.3752 34.0376 44.8582 34.5884 44.1838 34.6108Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h6 className="text-xl-bold neutral-1000 font-semibold">
              Choose Your Vehicle
            </h6>
            <p className="text-base text-gray-500">
              Browse our fleet and find the perfect car for your needs
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="card-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={62}
              height={62}
              viewBox="0 0 62 62"
              fill="none"
            >
              <g clipPath="url(#clip0_39_1134)">
                <path
                  d="M61.7728 34.1089C60.9303 30.457 57.672 27.5937 54.0977 26.7398L47.0384 25.0469L40.7293 18.6167C38.0943 15.9329 34.4262 14.3936 30.6658 14.3936H7.09004C6.62395 14.3936 6.19915 14.6611 5.99777 15.0816C5.79652 15.502 5.85428 16.0006 6.1466 16.3637L7.58737 18.154C7.68812 18.2791 7.67202 18.4595 7.55068 18.5649L1.33106 23.9661C1.06623 24.1961 0.914137 24.5297 0.914137 24.8805V31.5045L0.141195 32.9615C0.0484375 33.1361 0 33.3309 0 33.5288V38.3386C0 38.5779 0.0708399 38.8116 0.203559 39.0107L2.03329 41.7535C2.25791 42.0901 2.63597 42.2923 3.04066 42.2923H5.14879C5.71817 45.3131 8.37484 47.6061 11.5586 47.6061C14.7424 47.6061 17.399 45.3131 17.9684 42.2923H24.1976C24.8664 42.2923 25.4085 41.7501 25.4085 41.0814C25.4085 40.4127 24.8664 39.8705 24.1976 39.8705H17.9702C17.3966 36.8276 14.6465 34.5576 11.5585 34.5576C8.46724 34.5576 5.71974 36.8311 5.14648 39.8705H3.68852L2.42188 37.9717V33.8301L3.19494 32.3731C3.2877 32.1983 3.33613 32.0034 3.33613 31.8055V25.4325L9.13882 20.3933C10.1909 19.4796 10.3775 17.9472 9.60746 16.8153H30.6658C33.7806 16.8153 36.8187 18.0902 39.0009 20.3131L45.5533 26.9913C45.7124 27.1536 45.9142 27.2676 46.1353 27.3208L53.534 29.0951C53.9923 29.2045 54.4353 29.354 54.8626 29.5377L53.9921 30.0972C53.1414 30.643 52.6334 31.5735 52.6334 32.5866C52.6334 34.1977 53.9801 35.545 55.5917 35.545H59.5545C59.5686 35.711 59.5781 35.8774 59.5781 36.0438V38.0168L58.5183 39.8705H53.4956C52.9232 36.83 50.1752 34.5576 47.0844 34.5576C43.9932 34.5576 41.2479 36.8315 40.6732 39.8705H34.8528C34.1842 39.8705 33.6419 40.4127 33.6419 41.0814C33.6419 41.7501 34.1842 42.2923 34.8528 42.2923H40.6748C41.2442 45.3131 43.9008 47.6061 47.0845 47.6061C50.2682 47.6061 52.925 45.3131 53.4944 42.2923H59.2211C59.6556 42.2923 60.0567 42.0596 60.2725 41.6825L61.8406 38.9397C61.9453 38.7566 62.0002 38.5495 62.0002 38.3386V36.0439C62 35.3908 61.9229 34.7367 61.7728 34.1089ZM11.5586 45.1842C9.29661 45.1842 7.45635 43.3439 7.45635 41.0818C7.45635 38.8505 9.32603 36.98 11.5585 36.98C13.7908 36.98 15.6609 38.8477 15.6609 41.0818C15.6609 43.3438 13.8206 45.1842 11.5586 45.1842ZM47.0843 45.1842C44.8232 45.1842 42.9837 43.3454 42.9821 41.0847C42.9821 41.0836 42.9822 41.0825 42.9822 41.0814C42.9822 38.8199 44.8226 36.98 47.0849 36.98C49.3464 36.98 51.1863 38.8199 51.1863 41.0814C51.1863 41.083 51.1866 41.0846 51.1866 41.0863C51.1841 43.3462 49.345 45.1842 47.0843 45.1842ZM55.2112 32.964C54.977 32.7305 55.0196 32.3156 55.3007 32.1352L57.1065 30.9744C57.7926 31.5885 58.3815 32.3123 58.8197 33.1231H55.5917C55.3992 33.1231 55.2718 33.0244 55.2112 32.964Z"
                  fill="black"
                />
                <path
                  d="M39.5949 28.7904C40.9991 28.7904 41.775 27.0742 40.8475 26.0177L37.6949 22.4264C35.6852 20.1372 32.7855 18.8242 29.7392 18.8242H15.3369C14.6672 18.8242 14.028 19.0748 13.5372 19.5297L9.22746 23.5225C8.74151 23.9729 8.56738 24.6683 8.78389 25.2944C9.00029 25.9201 9.56652 26.3592 10.2265 26.4129C15.8664 26.8731 34.6425 28.4038 39.4603 28.7851C39.5053 28.7885 39.5501 28.7904 39.5949 28.7904ZM15.1832 21.3062C15.2251 21.2674 15.2796 21.246 15.3369 21.246H24.9858V25.1852C20.1221 24.7897 15.2354 24.3914 12.1267 24.1379L15.1832 21.3062ZM27.4075 25.3819V21.246H29.7389C32.0883 21.246 34.3247 22.2586 35.8746 24.024L37.8052 26.2233C35.2926 26.0217 31.4654 25.7115 27.4075 25.3819Z"
                  fill="black"
                />
                <path
                  d="M26.1965 33.3613H28.9048C29.5736 33.3613 30.1157 32.8191 30.1157 32.1504C30.1157 31.4817 29.5736 30.9395 28.9048 30.9395H26.1965C25.5277 30.9395 24.9856 31.4817 24.9856 32.1504C24.9856 32.8191 25.5279 33.3613 26.1965 33.3613Z"
                  fill="black"
                />
                <path
                  d="M9.92456 29.2559C9.25576 29.2559 8.71362 29.7981 8.71362 30.4668C8.71362 31.1355 9.25576 31.6777 9.92456 31.6777H12.6329C13.3017 31.6777 13.8439 31.1355 13.8439 30.4668C13.8439 29.7981 13.3017 29.2559 12.6329 29.2559H9.92456Z"
                  fill="black"
                />
                <path
                  d="M30.764 40.6185C30.5654 40.1422 30.072 39.8358 29.5565 39.8743C29.0507 39.9123 28.6156 40.2713 28.4794 40.7592C28.1903 41.7953 29.3509 42.6653 30.2677 42.12C30.7784 41.8162 30.9881 41.1658 30.764 40.6185Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_1134">
                  <rect width={62} height={62} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h6 className="text-xl-bold neutral-1000 font-semibold">
              Verification
            </h6>
            <p className="text-base text-gray-500">
              Review your information and confirm your booking
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="card-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={62}
              height={62}
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M32.464 33.8438C32.2496 33.8463 32.0407 33.9122 31.8636 34.0331C31.6866 34.1541 31.5493 34.3247 31.469 34.5236C31.3887 34.7224 31.369 34.9405 31.4124 35.1505C31.4558 35.3605 31.5603 35.553 31.7128 35.7037C31.8653 35.8544 32.059 35.9566 32.2695 35.9975C32.48 36.0384 32.6979 36.0162 32.8957 35.9335C33.0936 35.8509 33.2626 35.7115 33.3814 35.5331C33.5003 35.3546 33.5637 35.145 33.5637 34.9305C33.5616 34.6407 33.4447 34.3635 33.2385 34.1598C33.0324 33.956 32.7538 33.8424 32.464 33.8438Z"
                fill="black"
              />
              <path
                d="M28.9354 33.8438C28.721 33.8463 28.5121 33.9122 28.3351 34.0331C28.158 34.1541 28.0207 34.3247 27.9404 34.5236C27.8601 34.7224 27.8404 34.9405 27.8838 35.1505C27.9272 35.3605 28.0317 35.553 28.1842 35.7037C28.3368 35.8544 28.5304 35.9566 28.7409 35.9975C28.9514 36.0384 29.1693 36.0162 29.3672 35.9335C29.565 35.8509 29.734 35.7115 29.8529 35.5331C29.9717 35.3546 30.0351 35.145 30.0351 34.9305C30.0331 34.6407 29.9161 34.3635 29.71 34.1598C29.5038 33.956 29.2253 33.8424 28.9354 33.8438Z"
                fill="black"
              />
              <path
                d="M58.125 32.6378C58.1244 32.0859 57.9049 31.5569 57.5147 31.1667C57.1245 30.7765 56.5955 30.5571 56.0436 30.5565H53.8621C53.1374 30.5569 52.4246 30.7402 51.7896 31.0894C51.1546 31.4385 50.618 31.9423 50.2295 32.554L46.1041 25.6849C45.678 25.1471 45.1355 24.713 44.5173 24.4153C43.8992 24.1175 43.2215 23.9638 42.5354 23.9658H19.7078C19.0053 23.9642 18.3113 24.1199 17.6769 24.4217C17.0425 24.7234 16.4838 25.1635 16.0418 25.7095L11.7989 32.5641C11.413 31.9402 10.8742 31.4251 10.2335 31.0678C9.59286 30.7105 8.87153 30.5227 8.13793 30.5223H5.95636C5.40453 30.5229 4.87549 30.7424 4.4853 31.1326C4.0951 31.5228 3.87562 32.0519 3.875 32.6037C3.876 33.4774 4.22353 34.3151 4.84137 34.9329C5.4592 35.5507 6.29687 35.8983 7.17061 35.8993H8.73214L7.00653 37.2912C6.68453 37.5497 6.4248 37.8772 6.24657 38.2496C6.06834 38.622 5.97619 39.0298 5.97693 39.4427V49.6855C5.97793 50.1483 6.09481 50.6035 6.31692 51.0096C6.53903 51.4156 6.85929 51.7596 7.24848 52.0101V54.8404C7.25003 55.5329 7.52624 56.1966 8.01651 56.6858C8.50678 57.175 9.17107 57.4497 9.86364 57.4497H13.0885C13.781 57.4497 14.4453 57.175 14.9356 56.6858C15.4259 56.1966 15.7021 55.533 15.7037 54.8404V53.8759H46.2963V54.8404C46.2979 55.533 46.5741 56.1966 47.0644 56.6858C47.5547 57.175 48.219 57.4497 48.9115 57.4497H52.1364C52.8289 57.4497 53.4932 57.175 53.9835 56.6858C54.4738 56.1966 54.75 55.5329 54.7515 54.8404V52.0122C55.1403 51.7651 55.4605 51.424 55.6828 51.0205C55.905 50.6171 56.022 50.1641 56.0231 49.7035V39.4648C56.0238 39.045 55.9301 38.6305 55.7489 38.2518C55.5677 37.8732 55.3037 37.5402 54.9763 37.2774L53.3102 35.9334H54.8294C55.7032 35.9324 56.5408 35.5849 57.1587 34.967C57.7765 34.3492 58.124 33.5115 58.125 32.6378ZM53.8621 32.494H56.0436C56.0818 32.494 56.1183 32.5091 56.1453 32.5361C56.1723 32.5631 56.1875 32.5996 56.1875 32.6378C56.1871 32.9978 56.0439 33.3431 55.7893 33.5977C55.5347 33.8523 55.1895 33.9955 54.8294 33.9959H51.6571C51.8317 33.5534 52.1354 33.1736 52.5286 32.9058C52.9217 32.638 53.3863 32.4945 53.8621 32.494ZM5.8125 32.6037C5.81253 32.5656 5.8277 32.529 5.85467 32.502C5.88164 32.475 5.91821 32.4598 5.95636 32.4598H8.13794C8.61366 32.4603 9.07825 32.6038 9.47142 32.8716C9.8646 33.1395 10.1682 33.5193 10.3429 33.9618H7.17061C6.81055 33.9613 6.46535 33.8181 6.21075 33.5635C5.95614 33.309 5.81292 32.9638 5.8125 32.6037ZM13.7662 54.8404C13.7652 55.0193 13.6933 55.1905 13.5662 55.3164C13.4392 55.4423 13.2674 55.5127 13.0885 55.5122H9.86364C9.68475 55.5127 9.51295 55.4423 9.38591 55.3164C9.25887 55.1904 9.18697 55.0193 9.18598 54.8404V52.9263L11.0736 53.7884C11.1999 53.8461 11.3372 53.8759 11.4761 53.8759H13.7662V54.8404ZM20.1191 50.1847H41.2846C41.693 50.828 42.1809 51.4173 42.7369 51.9384H18.7011C19.2404 51.411 19.7163 50.8224 20.1191 50.1847ZM21.1329 48.2472C21.4001 47.6177 21.6254 46.9713 21.8073 46.3121H39.6519C39.816 46.9715 40.0273 47.6181 40.284 48.2472H21.1329ZM52.1364 55.5122H48.9115C48.7326 55.5127 48.5608 55.4423 48.4338 55.3164C48.3067 55.1905 48.2348 55.0193 48.2338 54.8404V53.8759H50.5239C50.6628 53.8759 50.8001 53.8461 50.9264 53.7884L52.814 52.9262V54.8404C52.813 55.0193 52.7411 55.1905 52.6141 55.3164C52.4871 55.4423 52.3152 55.5127 52.1364 55.5122ZM54.0856 39.4648V49.7035C54.085 49.8566 54.0406 50.0064 53.9575 50.1351C53.8744 50.2638 53.7562 50.366 53.6169 50.4296L50.3132 51.9384H47.309C43.8841 51.6866 41.8723 48.2507 41.3956 45.1995C41.3611 44.9701 41.2454 44.7606 41.0696 44.6093C40.8938 44.4579 40.6696 44.3746 40.4376 44.3746H21.0444C20.819 44.3749 20.6007 44.4537 20.4271 44.5974C20.2534 44.7411 20.1352 44.9407 20.0928 45.1621C20.081 45.2233 18.875 51.2547 14.6546 51.9384H11.6868L8.39952 50.437C8.25527 50.3712 8.13291 50.2655 8.04694 50.1323C7.96096 49.9991 7.91498 49.844 7.91443 49.6855V39.4427C7.91429 39.3192 7.94195 39.1972 7.99535 39.0859C8.04875 38.9745 8.12652 38.8766 8.2229 38.7994L11.8181 35.8993H25.6343C25.8912 35.8993 26.1376 35.7972 26.3193 35.6155C26.501 35.4338 26.603 35.1874 26.603 34.9305C26.603 34.6736 26.501 34.4272 26.3193 34.2455C26.1376 34.0638 25.8912 33.9618 25.6343 33.9618H13.213L17.5828 26.8863C17.8439 26.5774 18.1694 26.3293 18.5364 26.1595C18.9035 25.9897 19.3033 25.9023 19.7078 25.9033H42.5354C42.92 25.9021 43.3001 25.9859 43.6485 26.1487C43.9969 26.3116 44.305 26.5495 44.5507 26.8454L48.8142 33.9618H35.6858C35.4289 33.9618 35.1825 34.0638 35.0008 34.2455C34.8191 34.4272 34.7171 34.6736 34.7171 34.9305C34.7171 35.1874 34.8191 35.4338 35.0008 35.6155C35.1825 35.7972 35.4289 35.8993 35.6858 35.8993H50.1819L53.7598 38.7854C53.8616 38.867 53.9437 38.9704 54.0001 39.088C54.0565 39.2056 54.0857 39.3344 54.0856 39.4648Z"
                fill="black"
              />
              <path
                d="M17.8423 41.9642C17.7813 41.6029 17.6088 41.2697 17.3489 41.0113C17.089 40.7528 16.7549 40.5822 16.3932 40.5232L12.0916 39.821C11.8221 39.7768 11.546 39.7961 11.2852 39.8773C11.0245 39.9586 10.7863 40.0995 10.5895 40.2889C10.3928 40.4784 10.243 40.7111 10.1519 40.9685C10.0609 41.226 10.0312 41.5012 10.0651 41.7722L10.3304 43.8996C10.3789 44.2763 10.5475 44.6272 10.8112 44.9005C11.0749 45.1738 11.4197 45.3547 11.7944 45.4166L16.1915 46.1247C16.4671 46.1688 16.7493 46.1467 17.0146 46.0602C17.2799 45.9736 17.5208 45.8252 17.7174 45.627C17.914 45.4289 18.0606 45.1869 18.145 44.9209C18.2295 44.6549 18.2494 44.3726 18.2031 44.0973L17.8423 41.9642ZM12.2363 43.5252L12.0177 41.7721L15.9535 42.4146L16.2507 44.1717L12.2363 43.5252Z"
                fill="black"
              />
              <path
                d="M50.185 39.821L45.8834 40.5232C45.5217 40.5822 45.1876 40.7529 44.9277 41.0113C44.6679 41.2696 44.4953 41.6028 44.4342 41.9641L44.0734 44.0973C44.0271 44.3726 44.0471 44.6548 44.1315 44.9208C44.216 45.1868 44.3626 45.4289 44.5591 45.627C44.7557 45.8251 44.9966 45.9736 45.2619 46.0601C45.5272 46.1467 45.8093 46.1688 46.0849 46.1247L50.4821 45.4166C50.8568 45.3548 51.2016 45.1738 51.4654 44.9006C51.7291 44.6273 51.8977 44.2763 51.9461 43.8996L52.2114 41.7722C52.2454 41.5012 52.2156 41.226 52.1246 40.9685C52.0336 40.7111 51.8838 40.4783 51.687 40.2889C51.4903 40.0995 51.2521 39.9585 50.9913 39.8773C50.7306 39.7961 50.4545 39.7768 50.185 39.821ZM50.0403 43.5252L46.0258 44.1717L46.323 42.4146L50.2589 41.7721L50.0403 43.5252Z"
                fill="black"
              />
              <path
                d="M13.4956 20.722H24.3199C24.6502 20.722 24.947 20.7115 25.2269 20.3949C26.3916 19.0774 27.1793 17.7933 27.6897 16.5703H34.9959C35.1578 16.5703 35.3172 16.5297 35.4594 16.4522C35.6016 16.3747 35.7221 16.2629 35.8099 16.1268L36.5484 14.9826L37.429 16.1765C37.519 16.2986 37.6365 16.3978 37.7719 16.4662C37.9073 16.5346 38.0569 16.5702 38.2086 16.5703H40.2845C40.4468 16.5703 40.6065 16.5295 40.749 16.4517C40.8914 16.3738 41.012 16.2615 41.0997 16.1249L41.9107 14.8619L43.1137 16.2389C43.2046 16.343 43.3168 16.4264 43.4426 16.4835C43.5684 16.5407 43.705 16.5702 43.8432 16.5703H46.8582C46.9868 16.5703 47.114 16.5447 47.2326 16.495C47.3512 16.4453 47.4587 16.3724 47.5489 16.2808L50.5144 13.2658C50.6905 13.0867 50.7902 12.8463 50.7924 12.5951C50.7947 12.3439 50.6993 12.1017 50.5264 11.9195L47.7585 9.00332C47.6679 8.90798 47.559 8.83206 47.4382 8.78017C47.3174 8.72829 47.1873 8.70153 47.0558 8.70153H27.6457C27.0186 7.23845 26.1097 5.91308 24.9707 4.80099C24.7913 4.64135 24.5601 4.55211 24.3199 4.5498H13.4956C13.2387 4.54981 12.9923 4.65187 12.8106 4.83355C12.6289 5.01522 12.5269 5.26163 12.5269 5.51855V19.7532C12.5269 20.0102 12.6289 20.2566 12.8106 20.4382C12.9923 20.6199 13.2387 20.722 13.4956 20.722ZM48.4767 12.5745L46.4522 14.6328H44.2832L42.5215 12.6163C42.4226 12.5032 42.2988 12.4147 42.1598 12.3577C42.0208 12.3007 41.8705 12.2768 41.7207 12.2878C41.5709 12.2989 41.4257 12.3446 41.2966 12.4214C41.1675 12.4982 41.058 12.6039 40.9768 12.7303L39.7553 14.6328H38.6978L37.2749 12.7034C37.1818 12.5772 37.0594 12.4755 36.9184 12.407C36.7773 12.3385 36.6217 12.3053 36.465 12.3102C36.3083 12.3151 36.1551 12.3579 36.0186 12.4351C35.882 12.5122 35.7663 12.6213 35.6812 12.7531L34.4681 14.6328H28.2911C28.5614 13.3144 28.5532 11.954 28.2669 10.639H46.6397L48.4767 12.5745ZM24.0564 18.7845H18.5507V6.4873H23.9217C25.0428 7.6629 29.1451 12.6898 24.0564 18.7845ZM14.4644 6.4873H16.6132V18.7845H14.4644V6.4873Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h6 className="text-xl-bold neutral-1000 font-semibold">
              Begin Your Journey
            </h6>
            <p className="text-base text-gray-500">
              Start your adventure with confidence and ease
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
