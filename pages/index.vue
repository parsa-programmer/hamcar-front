<template>
  <div>
    <Head>
      <Link href="/css/landing.css" rel="stylesheet" />
      <Title>همکار</Title>
    </Head>
    <section class="info">
      <div class="container">
        <div class="info__wrapper">
          <div class="input-group info__search-box">
            <input
              type="text"
              class="form-control light-border"
              placeholder="جستجو میان همه آگهی ها..."
            />
            <svg
              class="input-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M0.75 9.56522C0.75 12.7584 1.48072 14.916 2.85325 16.2857C4.22608 17.6557 6.3841 18.3804 9.56522 18.3804C12.7462 18.3804 14.9043 17.6554 16.2772 16.2852C17.6497 14.9153 18.3804 12.7576 18.3804 9.56522C18.3804 6.37281 17.6497 4.21516 16.2772 2.84522C14.9043 1.475 12.7462 0.75 9.56522 0.75C6.3841 0.75 4.22608 1.47469 2.85325 2.84472C1.48072 4.21445 0.75 6.37206 0.75 9.56522Z"
                stroke="#C6C7CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.1326 19.1304L16.8203 16.8182"
                stroke="#C6C7CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="info__lists">
            <div class="info__item info__item--active">شاسی</div>
            <div class="info__item">
              برند
              <div class="info-data" style="display: none">
                <div class="info-data__header">
                  <input
                    type="text"
                    class="form-control info-data__input"
                    placeholder="برند مورد نظرتان را اینجا جستجو کنید ..."
                  />
                  <div class="info-data__countries">
                    <div class="info-data__country">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                      >
                        <rect
                          x="0.25"
                          y="0.678711"
                          width="23.5"
                          height="16.6429"
                          rx="1.46429"
                          fill="white"
                          stroke="#F5F5F5"
                          stroke-width="0.5"
                        ></rect>
                        <mask
                          id="mask0_7170_11009"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="18"
                        >
                          <rect
                            x="0.25"
                            y="0.678711"
                            width="23.5"
                            height="16.6429"
                            rx="1.46429"
                            fill="white"
                            stroke="white"
                            stroke-width="0.5"
                          ></rect>
                        </mask>
                        <g mask="url(#mask0_7170_11009)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 6.143H24V0.428711H0V6.143Z"
                            fill="#38BB56"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 17.5717H24V11.8574H0V17.5717Z"
                            fill="#DE1B27"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.42829 5C1.2705 5 1.14258 5.12792 1.14258 5.28571V5.85714C1.14258 6.01494 1.2705 6.14286 1.42829 6.14286H1.99972C2.15752 6.14286 2.28544 6.01494 2.28544 5.85714V5.28571C2.28544 5.12792 2.15752 5 1.99972 5H1.42829ZM3.71401 5C3.55621 5 3.42829 5.12792 3.42829 5.28571V5.85714C3.42829 6.01494 3.55621 6.14286 3.71401 6.14286H4.28544C4.44323 6.14286 4.57115 6.01494 4.57115 5.85714V5.28571C4.57115 5.12792 4.44323 5 4.28544 5H3.71401ZM5.71401 5.28571C5.71401 5.12792 5.84193 5 5.99972 5H6.57115C6.72895 5 6.85686 5.12792 6.85686 5.28571V5.85714C6.85686 6.01494 6.72895 6.14286 6.57115 6.14286H5.99972C5.84193 6.14286 5.71401 6.01494 5.71401 5.85714V5.28571ZM8.28544 5C8.12764 5 7.99972 5.12792 7.99972 5.28571V5.85714C7.99972 6.01494 8.12764 6.14286 8.28544 6.14286H8.85686C9.01466 6.14286 9.14258 6.01494 9.14258 5.85714V5.28571C9.14258 5.12792 9.01466 5 8.85686 5H8.28544ZM10.2854 5.28571C10.2854 5.12792 10.4134 5 10.5711 5H11.1426C11.3004 5 11.4283 5.12792 11.4283 5.28571V5.85714C11.4283 6.01494 11.3004 6.14286 11.1426 6.14286H10.5711C10.4134 6.14286 10.2854 6.01494 10.2854 5.85714V5.28571ZM12.8569 5C12.6991 5 12.5711 5.12792 12.5711 5.28571V5.85714C12.5711 6.01494 12.6991 6.14286 12.8569 6.14286H13.4283C13.5861 6.14286 13.714 6.01494 13.714 5.85714V5.28571C13.714 5.12792 13.5861 5 13.4283 5H12.8569ZM14.8569 5.28571C14.8569 5.12792 14.9848 5 15.1426 5H15.714C15.8718 5 15.9997 5.12792 15.9997 5.28571V5.85714C15.9997 6.01494 15.8718 6.14286 15.714 6.14286H15.1426C14.9848 6.14286 14.8569 6.01494 14.8569 5.85714V5.28571ZM17.4283 5C17.2705 5 17.1426 5.12792 17.1426 5.28571V5.85714C17.1426 6.01494 17.2705 6.14286 17.4283 6.14286H17.9997C18.1575 6.14286 18.2854 6.01494 18.2854 5.85714V5.28571C18.2854 5.12792 18.1575 5 17.9997 5H17.4283ZM19.4283 5.28571C19.4283 5.12792 19.5562 5 19.714 5H20.2854C20.4432 5 20.5711 5.12792 20.5711 5.28571V5.85714C20.5711 6.01494 20.4432 6.14286 20.2854 6.14286H19.714C19.5562 6.14286 19.4283 6.01494 19.4283 5.85714V5.28571ZM21.9997 5C21.8419 5 21.714 5.12792 21.714 5.28571V5.85714C21.714 6.01494 21.8419 6.14286 21.9997 6.14286H22.5711C22.7289 6.14286 22.8569 6.01494 22.8569 5.85714V5.28571C22.8569 5.12792 22.7289 5 22.5711 5H21.9997ZM1.14258 12.1429C1.14258 11.9851 1.2705 11.8571 1.42829 11.8571H1.99972C2.15752 11.8571 2.28544 11.9851 2.28544 12.1429V12.7143C2.28544 12.8721 2.15752 13 1.99972 13H1.42829C1.2705 13 1.14258 12.8721 1.14258 12.7143V12.1429ZM3.71401 11.8571C3.55621 11.8571 3.42829 11.9851 3.42829 12.1429V12.7143C3.42829 12.8721 3.55621 13 3.71401 13H4.28544C4.44323 13 4.57115 12.8721 4.57115 12.7143V12.1429C4.57115 11.9851 4.44323 11.8571 4.28544 11.8571H3.71401ZM5.71401 12.1429C5.71401 11.9851 5.84193 11.8571 5.99972 11.8571H6.57115C6.72895 11.8571 6.85686 11.9851 6.85686 12.1429V12.7143C6.85686 12.8721 6.72895 13 6.57115 13H5.99972C5.84193 13 5.71401 12.8721 5.71401 12.7143V12.1429ZM8.28544 11.8571C8.12764 11.8571 7.99972 11.9851 7.99972 12.1429V12.7143C7.99972 12.8721 8.12764 13 8.28544 13H8.85686C9.01466 13 9.14258 12.8721 9.14258 12.7143V12.1429C9.14258 11.9851 9.01466 11.8571 8.85686 11.8571H8.28544ZM10.2854 12.1429C10.2854 11.9851 10.4134 11.8571 10.5711 11.8571H11.1426C11.3004 11.8571 11.4283 11.9851 11.4283 12.1429V12.7143C11.4283 12.8721 11.3004 13 11.1426 13H10.5711C10.4134 13 10.2854 12.8721 10.2854 12.7143V12.1429ZM12.8569 11.8571C12.6991 11.8571 12.5711 11.9851 12.5711 12.1429V12.7143C12.5711 12.8721 12.6991 13 12.8569 13H13.4283C13.5861 13 13.714 12.8721 13.714 12.7143V12.1429C13.714 11.9851 13.5861 11.8571 13.4283 11.8571H12.8569ZM14.8569 12.1429C14.8569 11.9851 14.9848 11.8571 15.1426 11.8571H15.714C15.8718 11.8571 15.9997 11.9851 15.9997 12.1429V12.7143C15.9997 12.8721 15.8718 13 15.714 13H15.1426C14.9848 13 14.8569 12.8721 14.8569 12.7143V12.1429ZM17.4283 11.8571C17.2705 11.8571 17.1426 11.9851 17.1426 12.1429V12.7143C17.1426 12.8721 17.2705 13 17.4283 13H17.9997C18.1575 13 18.2854 12.8721 18.2854 12.7143V12.1429C18.2854 11.9851 18.1575 11.8571 17.9997 11.8571H17.4283ZM19.4283 12.1429C19.4283 11.9851 19.5562 11.8571 19.714 11.8571H20.2854C20.4432 11.8571 20.5711 11.9851 20.5711 12.1429V12.7143C20.5711 12.8721 20.4432 13 20.2854 13H19.714C19.5562 13 19.4283 12.8721 19.4283 12.7143V12.1429ZM21.9997 11.8571C21.8419 11.8571 21.714 11.9851 21.714 12.1429V12.7143C21.714 12.8721 21.8419 13 21.9997 13H22.5711C22.7289 13 22.8569 12.8721 22.8569 12.7143V12.1429C22.8569 11.9851 22.7289 11.8571 22.5711 11.8571H21.9997Z"
                            fill="white"
                            fill-opacity="0.5"
                          ></path>
                          <mask id="path-6-inside-1_7170_11009" fill="white">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8463 7.73242C10.5021 8.04596 10.2861 8.49776 10.2861 9.00001C10.2861 9.94679 11.0536 10.7143 12.0004 10.7143C12.9472 10.7143 13.7147 9.94679 13.7147 9.00001C13.7147 8.50724 13.5068 8.06303 13.1739 7.75032"
                            ></path>
                          </mask>
                          <path
                            d="M10.4615 7.31C10.0034 7.72726 9.7147 8.33033 9.7147 9.00001H10.8576C10.8576 8.6652 11.0008 8.36466 11.2311 8.15484L10.4615 7.31ZM9.7147 9.00001C9.7147 10.2624 10.7381 11.2857 12.0004 11.2857V10.1429C11.3692 10.1429 10.8576 9.6312 10.8576 9.00001H9.7147ZM12.0004 11.2857C13.2628 11.2857 14.2861 10.2624 14.2861 9.00001H13.1433C13.1433 9.6312 12.6316 10.1429 12.0004 10.1429V11.2857ZM14.2861 9.00001C14.2861 8.34302 14.0082 7.75004 13.5651 7.33383L12.7827 8.16681C13.0054 8.37602 13.1433 8.67146 13.1433 9.00001H14.2861Z"
                            fill="#D80915"
                            mask="url(#path-6-inside-1_7170_11009)"
                          ></path>
                          <rect
                            x="11.4287"
                            y="8.42871"
                            width="1.14286"
                            height="2.28571"
                            rx="0.571429"
                            fill="#D80915"
                          ></rect>
                        </g>
                      </svg>
                      ایرانی
                    </div>
                    <div class="info-data__country">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_7170_11060)">
                          <rect
                            y="0.428711"
                            width="24"
                            height="17.1429"
                            rx="1.71429"
                            fill="white"
                          ></rect>
                          <rect
                            y="0.428711"
                            width="24"
                            height="17.1429"
                            fill="#F1361D"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.71389 7.48007L3.69863 8.9167L4.44219 6.55613L2.45312 5.08344L4.92794 5.06116L5.71389 2.71436L6.49984 5.06116L8.97466 5.08344L6.98559 6.55613L7.72915 8.9167L5.71389 7.48007Z"
                            fill="#FFDC42"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_7170_11060">
                            <rect
                              y="0.428711"
                              width="24"
                              height="17.1429"
                              rx="1.71"
                              fill="white"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      چینی
                    </div>
                    <div class="info-data__country">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.928711"
                          width="23"
                          height="16.1429"
                          rx="1.5"
                          fill="white"
                          stroke="#F5F5F5"
                        ></rect>
                        <mask
                          id="mask0_469_663"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="18"
                        >
                          <rect
                            x="0.25"
                            y="0.678711"
                            width="23.5"
                            height="16.6429"
                            rx="1.46429"
                            fill="white"
                            stroke="white"
                            stroke-width="0.5"
                          ></rect>
                        </mask>
                        <g mask="url(#mask0_469_663)">
                          <circle cx="12" cy="9" r="4" fill="#E01B41"></circle>
                          <mask
                            id="mask1_469_663"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="8"
                            y="5"
                            width="8"
                            height="8"
                          >
                            <circle cx="12" cy="9" r="4" fill="white"></circle>
                          </mask>
                          <g mask="url(#mask1_469_663)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.00012 9.57136C9.14298 10.6428 10.8573 11.2856 12.0001 9.57136C13.143 7.85707 15.4287 7.85707 16.0001 9.57136C16.5716 11.2856 16.0001 12.9999 16.0001 12.9999H8.00012C8.00012 12.9999 6.85727 8.49993 8.00012 9.57136Z"
                              fill="#0E4B9C"
                            ></path>
                          </g>
                          <path
                            opacity="0.75"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29112 3.47738C5.37001 3.34072 5.54475 3.2939 5.68141 3.3728L6.17628 3.65851C6.31294 3.73741 6.35976 3.91215 6.28086 4.04881L4.85229 6.52316C4.77339 6.65982 4.59865 6.70664 4.462 6.62774L3.96712 6.34203C3.83047 6.26313 3.78365 6.08839 3.86254 5.95174L5.29112 3.47738ZM17.8235 3.65851C17.6869 3.73741 17.6401 3.91215 17.719 4.04881L19.1475 6.52316C19.2264 6.65982 19.4012 6.70664 19.5378 6.62774L20.0327 6.34203C20.1693 6.26313 20.2162 6.08839 20.1373 5.95174L18.7087 3.47738C18.6298 3.34072 18.4551 3.2939 18.3184 3.3728L17.8235 3.65851ZM16.3389 4.51566C16.2023 4.59455 16.1554 4.76929 16.2343 4.90595L17.6629 7.38031C17.7418 7.51696 17.9165 7.56378 18.0532 7.48489L18.5481 7.19917C18.6847 7.12027 18.7315 6.94553 18.6527 6.80888L17.2241 4.33452C17.1452 4.19787 16.9704 4.15104 16.8338 4.22994L16.3389 4.51566ZM3.86254 12.0488C3.78365 11.9122 3.83047 11.7374 3.96712 11.6585L4.462 11.3728C4.59865 11.2939 4.77339 11.3407 4.85229 11.4774L6.28086 13.9517C6.35976 14.0884 6.31294 14.2631 6.17628 14.342L5.68141 14.6277C5.54475 14.7066 5.37001 14.6598 5.29112 14.5232L3.86254 12.0488ZM5.45174 10.8014C5.31508 10.8803 5.26826 11.055 5.34716 11.1917L6.77573 13.666C6.85463 13.8027 7.02937 13.8495 7.16602 13.7706L7.6609 13.4849C7.79755 13.406 7.84437 13.2312 7.76547 13.0946L6.3369 10.6202C6.25801 10.4836 6.08327 10.4368 5.94661 10.5157L5.45174 10.8014ZM17.6629 10.6202C17.7418 10.4836 17.9165 10.4368 18.0532 10.5157L18.5481 10.8014C18.6847 10.8803 18.7315 11.055 18.6527 11.1917L17.2241 13.666C17.1452 13.8027 16.9704 13.8495 16.8338 13.7706L16.3389 13.4849C16.2023 13.406 16.1554 13.2312 16.2343 13.0946L17.6629 10.6202ZM19.5378 11.3728C19.4012 11.2939 19.2264 11.3407 19.1475 11.4774L17.719 13.9517C17.6401 14.0884 17.6869 14.2631 17.8235 14.342L18.3184 14.6277C18.4551 14.7066 18.6298 14.6598 18.7087 14.5232L20.1373 12.0488C20.2162 11.9122 20.1693 11.7374 20.0327 11.6585L19.5378 11.3728ZM7.16602 4.22994C7.02937 4.15104 6.85463 4.19787 6.77573 4.33452L5.34716 6.80888C5.26826 6.94553 5.31508 7.12027 5.45174 7.19917L5.94661 7.48489C6.08327 7.56378 6.25801 7.51696 6.3369 7.38031L7.76547 4.90595C7.84437 4.76929 7.79755 4.59455 7.6609 4.51566L7.16602 4.22994Z"
                            fill="#262626"
                          ></path>
                        </g>
                      </svg>
                      کره ای
                    </div>
                    <div class="info-data__country">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.928711"
                          width="23"
                          height="16.1429"
                          rx="1.5"
                          fill="white"
                          stroke="#F5F5F5"
                        ></rect>
                        <mask
                          id="mask0_469_682"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="18"
                        >
                          <rect
                            x="0.25"
                            y="0.678711"
                            width="23.5"
                            height="16.6429"
                            rx="1.46429"
                            fill="white"
                            stroke="white"
                            stroke-width="0.5"
                          ></rect>
                        </mask>
                        <g mask="url(#mask0_469_682)">
                          <circle
                            cx="12.0003"
                            cy="9.00028"
                            r="5.14286"
                            fill="url(#paint0_linear_469_682)"
                          ></circle>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_469_682"
                            x1="6.85742"
                            y1="3.85742"
                            x2="6.85742"
                            y2="14.1431"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#D81441"></stop>
                            <stop offset="1" stop-color="#BB0831"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      ژاپنی
                    </div>
                    <div class="info-data__country">
                      <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                      >
                        <rect
                          y="0.428711"
                          width="24"
                          height="17.1429"
                          rx="1.71429"
                          fill="white"
                        ></rect>
                        <mask
                          id="mask0_7170_10963"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="18"
                        >
                          <rect
                            y="0.428711"
                            width="24"
                            height="17.1429"
                            rx="1.71429"
                            fill="white"
                          ></rect>
                        </mask>
                        <g mask="url(#mask0_7170_10963)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 6.143H24V0.428711H0V6.143Z"
                            fill="#262626"
                          ></path>
                          <g filter="url(#filter0_d_7170_10963)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 11.8574H24V6.14307H0V11.8574Z"
                              fill="#F01515"
                            ></path>
                          </g>
                          <g filter="url(#filter1_d_7170_10963)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 17.5717H24V11.8574H0V17.5717Z"
                              fill="#FFD521"
                            ></path>
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_7170_10963"
                            x="0"
                            y="6.14307"
                            width="24"
                            height="5.71436"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset></feOffset>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_7170_10963"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_7170_10963"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <filter
                            id="filter1_d_7170_10963"
                            x="0"
                            y="11.8574"
                            width="24"
                            height="5.71436"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset></feOffset>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_7170_10963"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_7170_10963"
                              result="shape"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                      آلمانی
                    </div>
                  </div>
                  <div class="info-data__filter-btn">
                    <svg
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_2055_9120" fill="white">
                        <path
                          d="M13.8855 0H2.78114C0.493508 0 -0.812318 2.72241 0.56026 4.63013L5.18709 11.0609C5.42735 11.3948 5.55724 11.801 5.55724 12.2184V18.0671C5.55724 19.7028 7.38734 20.5963 8.59277 19.5492L10.4435 17.9415C10.8655 17.5749 11.1094 17.032 11.1094 16.4594V12.2184C11.1094 11.801 11.2393 11.3948 11.4796 11.0609L16.1064 4.63013C17.479 2.72241 16.1732 0 13.8855 0Z"
                        ></path>
                      </mask>
                      <path
                        d="M13.8855 0H2.78114C0.493508 0 -0.812318 2.72241 0.56026 4.63013L5.18709 11.0609C5.42735 11.3948 5.55724 11.801 5.55724 12.2184V18.0671C5.55724 19.7028 7.38734 20.5963 8.59277 19.5492L10.4435 17.9415C10.8655 17.5749 11.1094 17.032 11.1094 16.4594V12.2184C11.1094 11.801 11.2393 11.3948 11.4796 11.0609L16.1064 4.63013C17.479 2.72241 16.1732 0 13.8855 0Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        mask="url(#path-1-inside-1_2055_9120)"
                      ></path>
                      <path
                        d="M5.83203 4.16675H10.832"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    فیلتر
                  </div>
                </div>
                <div class="info-data__main">
                  <div class="brand">
                    <h4 class="brand__letter">الف</h4>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <h4 class="brand__letter">ب</h4>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <h4 class="brand__letter">پ</h4>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <h4 class="brand__letter">ت</h4>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <h4 class="brand__letter">ج</h4>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                    <a href="#" class="brand__name">برند یک</a>
                  </div>
                </div>
                <div class="info-data__main-mobile">
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">الف</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">ب</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">پ</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">ت</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">ث</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">ب</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">پ</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <div class="brand__wrapper">
                    <h4 class="brand__letter">ت</h4>
                    <div class="brand__list">
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                      <a href="#" class="brand__name">برند یک</a>
                    </div>
                  </div>
                  <span class="brand__scroll">
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.44531 6.66664L7.00087 1.11108M7.00087 1.11108L7.00087 18.8889M7.00087 1.11108L12.5564 6.66664"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="info-data__footer">
                  <div class="navigation">
                    <a href="#" class="navigation__link">
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      قبلی
                    </a>
                    <div class="navigation__dots">
                      <span
                        class="navigation__dot navigation__dot--active"
                      ></span>
                      <span class="navigation__dot"></span>
                      <span class="navigation__dot"></span>
                    </div>
                    <a
                      href="#"
                      class="navigation__link navigation__link--active"
                    >
                      بعدی
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path
                          d="M7 13L1 7L7 1"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="info__item">سال ساخت</div>
            <div class="info__item">میانبر</div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-content">
      <div class="container">
        <div class="main-content__wrapper">
          <landing-sidebar />
          <div class="content">
            <h-image
              src="static/img/car1.jpg"
              alt="Hamcar.ir"
              class="content__img"
            />
            <div>
              <span>کوپه</span>
            </div>
          </div>
        </div>
        <div class="picture-lists">
          <div class="picture-lists__item">
            <h-image src="static/img/car2.jpg" alt="Hamcar.ir" />
          </div>
          <div class="picture-lists__item picture-lists__item--active">
            <h-image src="static/img/car3.jpg" alt="Hamcar.ir" />
          </div>
          <div class="picture-lists__item">
            <h-image src="static/img/car4.jpg" alt="Hamcar.ir" />
          </div>
        </div>
        <nuxt-link to="/car" class="btn btn-primary main-content__link"
          >نمایش 54613 آگهی موتور سیکلت
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const openModal = () => {
  isOpen.value = true;
};

definePageMeta({
  layout: "landing",
});
</script>

