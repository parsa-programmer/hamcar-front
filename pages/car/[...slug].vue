<template>
  <div class="container">
    <Head>
      <title>آگهی های ماشین</title>
      <Link href="/css/advertising.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>

      <icons-chevron-left />
      <a href="#" class="breadcrumb__item breadcrumb__item--active">آگهی های خودرو</a>
    </section>
    <section class="advertising">
      <div class="advertising__head">
        <h2 class="advertising__title">
          همه آگهی های فروش خودرو
          <span>( ۱،۲۳۴ آگهی )</span>
        </h2>
        <search-advert class="advertising__serach-box" />

        <button class="advertising__filter-btn">
          جدیدترین آگهی ها
         <icons-chevron-down />
        </button>
      </div>
      <div class="advertising__middle">
        <div class="selected-filters">
          <span class="selected-filters__title">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <mask id="path-1-inside-1_679_1631" fill="white">
                <path
                  d="M16.6626 0H3.33737C0.592209 0 -0.974782 3.2669 0.672312 5.55616L6.22451 13.2731C6.51283 13.6738 6.66868 14.1612 6.66868 14.6621V21.6805C6.66868 23.6433 8.86481 24.7155 10.3113 23.459L12.5322 21.5298C13.0386 21.0899 13.3313 20.4383 13.3313 19.7513V14.6621C13.3313 14.1612 13.4872 13.6738 13.7755 13.2731L19.3277 5.55616C20.9748 3.2669 19.4078 0 16.6626 0Z"
                ></path>
              </mask>
              <path
                d="M16.6626 0H3.33737C0.592209 0 -0.974782 3.2669 0.672312 5.55616L6.22451 13.2731C6.51283 13.6738 6.66868 14.1612 6.66868 14.6621V21.6805C6.66868 23.6433 8.86481 24.7155 10.3113 23.459L12.5322 21.5298C13.0386 21.0899 13.3313 20.4383 13.3313 19.7513V14.6621C13.3313 14.1612 13.4872 13.6738 13.7755 13.2731L19.3277 5.55616C20.9748 3.2669 19.4078 0 16.6626 0Z"
                stroke="#0F0F10"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                mask="url(#path-1-inside-1_679_1631)"
              ></path>
              <path
                d="M7 5H13"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            فیلتر های انتخاب شده (۶)
          </span>
          <span class="selected-filters__btn">
            مشاهده
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path
                d="M13 1L7 7L1 1"
                stroke="#007AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <!--   (selected-filters__content--open) class name for open content   -->
          <div class="selected-filters__content">
            <div class="selected-filters__item">
              <label class="selected-filters__name" for="100"
                >فیلتر انتخاب شده اول</label
              >
              <label class="checkbox">
                <input type="checkbox" value="4" id="100" />
                <span class="checkmark"></span>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="selected-filters__item">
              <label class="selected-filters__name" for="101"
                >فیلتر انتخاب شده دوم</label
              >
              <label class="checkbox">
                <input type="checkbox" value="4" id="101" />
                <span class="checkmark"></span>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="selected-filters__item">
              <label class="selected-filters__name" for="102"
                >فیلتر انتخاب شده سوم</label
              >
              <label class="checkbox">
                <input type="checkbox" value="4" id="102" />
                <span class="checkmark"></span>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="selected-filters__action">
              <button
                class="btn btn-sm btn-transparent selected-filters__delete-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 3.75H6M17.25 3.75H12M2.25 3.75L3.32985 14.5485C3.48321 16.0821 4.77371 17.25 6.31497 17.25H11.685C13.2263 17.25 14.5168 16.0821 14.6701 14.5485L15.75 3.75M9 8.25V12.75M12.375 8.25L12 12.75M5.625 8.25L6 12.75M12 3.75H9H6M12 3.75H6M12 3.75V2.25C12 1.42157 11.3284 0.75 10.5 0.75H7.5C6.67157 0.75 6 1.42157 6 2.25V3.75"
                    stroke="#EF3838"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                حذف همه
              </button>
              <button
                class="btn btn-sm btn-primary selected-filters__submit-btn"
              >
                اعمال
              </button>
            </div>
          </div>
        </div>
        <div class="other-filters">
          <div class="order-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 1H20C21.6569 1 23 2.34315 23 4V7C23 8.65685 21.6569 10 20 10H4C2.34315 10 1 8.65685 1 7V4C1 2.34315 2.34315 1 4 1Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4 14H20C21.6569 14 23 15.3431 23 17V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V17C1 15.3431 2.34315 14 4 14Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="order-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 5.5C1 6.60949 1.06075 7.43281 1.19863 8.0532C1.33399 8.66225 1.53001 9.01274 1.75864 9.24136C1.98726 9.46999 2.33775 9.66601 2.9468 9.80137C3.56719 9.93925 4.39051 10 5.5 10C6.60949 10 7.43281 9.93925 8.0532 9.80137C8.66225 9.66601 9.01274 9.46999 9.24136 9.24136C9.46999 9.01274 9.66601 8.66225 9.80137 8.0532C9.93925 7.43281 10 6.60949 10 5.5C10 4.39051 9.93925 3.56719 9.80137 2.9468C9.66601 2.33775 9.46999 1.98726 9.24136 1.75864C9.01274 1.53001 8.66225 1.33399 8.0532 1.19863C7.43281 1.06075 6.60949 1 5.5 1C4.39051 1 3.56719 1.06075 2.9468 1.19863C2.33775 1.33399 1.98726 1.53001 1.75864 1.75864C1.53001 1.98726 1.33399 2.33775 1.19863 2.9468C1.06075 3.56719 1 4.39051 1 5.5Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1 18.5C1 19.6095 1.06075 20.4328 1.19863 21.0532C1.33399 21.6622 1.53001 22.0127 1.75864 22.2414C1.98726 22.47 2.33775 22.666 2.9468 22.8014C3.56719 22.9392 4.39051 23 5.5 23C6.60949 23 7.43281 22.9392 8.0532 22.8014C8.66225 22.666 9.01274 22.47 9.24136 22.2414C9.46999 22.0127 9.66601 21.6622 9.80137 21.0532C9.93925 20.4328 10 19.6095 10 18.5C10 17.3905 9.93925 16.5672 9.80137 15.9468C9.66601 15.3378 9.46999 14.9873 9.24136 14.7586C9.01274 14.53 8.66225 14.334 8.0532 14.1986C7.43281 14.0608 6.60949 14 5.5 14C4.39051 14 3.56719 14.0608 2.9468 14.1986C2.33775 14.334 1.98726 14.53 1.75864 14.7586C1.53001 14.9873 1.33399 15.3378 1.19863 15.9468C1.06075 16.5672 1 17.3905 1 18.5Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14 5.5C14 6.60949 14.0608 7.43281 14.1986 8.0532C14.334 8.66225 14.53 9.01274 14.7586 9.24136C14.9873 9.46999 15.3378 9.66601 15.9468 9.80137C16.5672 9.93925 17.3905 10 18.5 10C19.6095 10 20.4328 9.93925 21.0532 9.80137C21.6622 9.66601 22.0127 9.46999 22.2414 9.24136C22.47 9.01274 22.666 8.66225 22.8014 8.0532C22.9392 7.43281 23 6.60949 23 5.5C23 4.39051 22.9392 3.56719 22.8014 2.9468C22.666 2.33775 22.47 1.98726 22.2414 1.75864C22.0127 1.53001 21.6622 1.33399 21.0532 1.19863C20.4328 1.06075 19.6095 1 18.5 1C17.3905 1 16.5672 1.06075 15.9468 1.19863C15.3378 1.33399 14.9873 1.53001 14.7586 1.75864C14.53 1.98726 14.334 2.33775 14.1986 2.9468C14.0608 3.56719 14 4.39051 14 5.5Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14 18.5C14 19.6095 14.0608 20.4328 14.1986 21.0532C14.334 21.6622 14.53 22.0127 14.7586 22.2414C14.9873 22.47 15.3378 22.666 15.9468 22.8014C16.5672 22.9392 17.3905 23 18.5 23C19.6095 23 20.4328 22.9392 21.0532 22.8014C21.6622 22.666 22.0127 22.47 22.2414 22.2414C22.47 22.0127 22.666 21.6622 22.8014 21.0532C22.9392 20.4328 23 19.6095 23 18.5C23 17.3905 22.9392 16.5672 22.8014 15.9468C22.666 15.3378 22.47 14.9873 22.2414 14.7586C22.0127 14.53 21.6622 14.334 21.0532 14.1986C20.4328 14.0608 19.6095 14 18.5 14C17.3905 14 16.5672 14.0608 15.9468 14.1986C15.3378 14.334 14.9873 14.53 14.7586 14.7586C14.53 14.9873 14.334 15.3378 14.1986 15.9468C14.0608 16.5672 14 17.3905 14 18.5Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <span class="other-filters__line"></span>
          <div class="other-filters__btn">
            جدیدترین آگهی
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path
                d="M13 1L7 7L1 1"
                stroke="#ABADB3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="advertising__wrapper">
        <aside class="advertising__sidebar">
          <div class="filter-group">
            <div class="filter">
              <div class="filter__header">
                <span class="filter__name">برند</span>
                <svg
                  class="filter__arrow-icon"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M13 1.5L7 7.5L1 1.5"
                    stroke="#ABADB3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="filter__body">
                <div class="filter__search">
                  <form action="">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="جستجوی نام برند"
                    />
                  </form>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter">
              <div class="filter__header">
                <span class="filter__name">مدل</span>
                <svg
                  class="filter__arrow-icon"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M13 1.5L7 7.5L1 1.5"
                    stroke="#ABADB3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="filter__body">
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="16" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="16">
                    <span class="filter__text">مدل شماره یک</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="17" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="17">
                    <span class="filter__text">مدل شماره دو</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="18" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="18">
                    <span class="filter__text">مدل شماره سه</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="19" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="19">
                    <span class="filter__text">مدل شماره چهار</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter filter--open">
              <div class="filter__header">
                <span class="filter__name">سال تولید</span>
                <svg
                  class="filter__arrow-icon"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M13 1.5L7 7.5L1 1.5"
                    stroke="#ABADB3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="filter__body filter__body--scroll-disable">
                <div class="filter__space">
                  <div class="filter__right">
                    <span>از</span>
                    <span>تا</span>
                  </div>
                  <div class="filter__wrapper">
                    <div class="dropdown-wrapper">
                      <div class="dropdown-box" onclick="openDropdown()">
                        <svg
                          class="dropdown-box__icon"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M13 1L7 7L1 1"
                            stroke="#C6C7CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <input
                          type="text"
                          class="dropdown-box__input"
                          readonly=""
                          placeholder="انتخاب کنید"
                        />
                      </div>
                      <div class="dropdown">
                        <div class="dropdown__search-box">
                          <input
                            type="text"
                            class="dropdown__input"
                            placeholder="جستجو"
                          />
                          <svg
                            class="dropdown__icon"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M0.75 7.65203C0.75 10.1868 1.33034 11.8662 2.38856 12.9222C3.44707 13.9786 5.12683 14.5542 7.65217 14.5542C10.1774 14.5542 11.8572 13.9784 12.9158 12.9219C13.974 11.8656 14.5543 10.1862 14.5543 7.65203C14.5543 5.11781 13.974 3.43842 12.9158 2.3822C11.8572 1.32569 10.1774 0.749852 7.65217 0.749852C5.12683 0.749852 3.44707 1.32545 2.38856 2.3818C1.33034 3.43786 0.75 5.1172 0.75 7.65203Z"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15.3039 15.3044L13.4541 13.4546"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <ul class="dropdown__list">
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                        </ul>
                      </div>
                    </div>
                    <div class="dropdown-wrapper">
                      <div class="dropdown-box" onclick="openDropdown()">
                        <svg
                          class="dropdown-box__icon"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M13 1L7 7L1 1"
                            stroke="#C6C7CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <input
                          type="text"
                          class="dropdown-box__input"
                          readonly=""
                          placeholder="انتخاب کنید"
                        />
                      </div>
                      <div class="dropdown">
                        <div class="dropdown__search-box">
                          <input
                            type="text"
                            class="dropdown__input"
                            placeholder="جستجو"
                          />
                          <svg
                            class="dropdown__icon"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M0.75 7.65203C0.75 10.1868 1.33034 11.8662 2.38856 12.9222C3.44707 13.9786 5.12683 14.5542 7.65217 14.5542C10.1774 14.5542 11.8572 13.9784 12.9158 12.9219C13.974 11.8656 14.5543 10.1862 14.5543 7.65203C14.5543 5.11781 13.974 3.43842 12.9158 2.3822C11.8572 1.32569 10.1774 0.749852 7.65217 0.749852C5.12683 0.749852 3.44707 1.32545 2.38856 2.3818C1.33034 3.43786 0.75 5.1172 0.75 7.65203Z"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15.3039 15.3044L13.4541 13.4546"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <ul class="dropdown__list">
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">قیمت</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="flex">
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>۳،۰۰۰،۰۰۰،۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>۵،۰۰۰،۰۰۰،۰۰۰</p>
                  <span>تومان</span>
                </div>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="30" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="30">
                  <span class="filter__text">اقساطی</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter filter--open">
            <div class="filter__header">
              <span class="filter__name">کارکرد</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__tabs">
                <span class="filter__tab-item">صفر</span>
                <span class="filter__tab-item filter__tab-item--active"
                  >کارکرده</span
                >
                <span class="filter__tab-item">همه</span>
              </div>
              <div class="flex">
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>1</p>
                  <span>کیلومتر</span>
                </div>
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>۵۰۰،۰۰۰</p>
                  <span>کیلومتر</span>
                </div>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">شهر</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="1" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="1">
                  <span class="filter__text">تبریز</span>
                  <span class="filter__number">223</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="2" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="2">
                  <span class="filter__text">تهران</span>
                  <span class="filter__number">657</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="3" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="3">
                  <span class="filter__text">اصفهان</span>
                  <span class="filter__number">655</span>
                </label>
              </div>
              <span class="filter__more-btn">مشاهده بیشتر</span>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">تعداد سیلندر</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="7" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="7">
                  <span class="filter__text">3 سیلندر</span>
                  <span class="filter__number">123</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="8" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="8">
                  <span class="filter__text">4 سیلندر</span>
                  <span class="filter__number">963</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter">
              <label for="12" class="filter__header">
                <span class="filter__name">عکس دار</span>
                <label class="checkbox">
                  <input type="checkbox" value="4" id="12" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
              </label>
            </div>
            <div class="filter">
              <label for="13" class="filter__header">
                <span class="filter__name">قیمت دار</span>
                <label class="checkbox">
                  <input type="checkbox" value="4" id="13" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
              </label>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">رنگ</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="9" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="9">
                  <span class="filter__text">
                    <span
                      class="filter__color"
                      style="background-color: #ffffff"
                    ></span>
                    سفید
                  </span>
                  <span class="filter__number">123</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="10" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="10">
                  <span class="filter__text">
                    <span
                      class="filter__color"
                      style="background-color: #1d1d1f"
                    ></span>
                    مشکی
                  </span>
                  <span class="filter__number">123</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="11" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="11">
                  <span class="filter__text">
                    <span
                      class="filter__color"
                      style="background-color: #abadb2"
                    ></span>
                    خاکستری
                  </span>
                  <span class="filter__number">123</span>
                </label>
              </div>
            </div>
          </div>
        </aside>
        <div class="advertising__container">
          <!--   (advertising__row--wide-item) class name for wide carts   -->
          <div class="advertising__row">
            <div class="advert">
              <div class="advert__badge">
                <svg
                  class="advert__safe-badge"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M17.3912 3.58107L10.7912 1.27631C10.2789 1.0974 9.72108 1.0974 9.20876 1.27631L2.60876 3.58107C1.64533 3.91751 1 4.82418 1 5.84467V13.5714C1 18.9277 6.22812 21.3362 8.88803 22.4986C9.59168 22.8061 10.4083 22.8061 11.112 22.4986C13.7719 21.3362 19 18.9277 19 13.5714V5.84467C19 4.82418 18.3547 3.9175 17.3912 3.58107Z"
                    fill="#69CE91"
                  ></path>
                  <path
                    d="M7 12L9 14L13 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="advert__hamcar-badge"
                  width="24"
                  height="72"
                  viewBox="0 0 24 72"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4924 21.0664C18.3056 24.2486 23.9998 29.3724 23.9998 35.9996C23.9997 42.6268 18.3056 47.7506 12.4924 50.9328C5.04812 55.0079 -3.97123e-07 62.9139 0 71.999L-3.14719e-06 -0.000236511C-3.14718e-06 -9.91821e-05 -1.04907e-06 4.57764e-05 -1.04907e-06 0.000183105C-6.51945e-07 9.0853 5.04812 16.9914 12.4924 21.0664Z"
                    fill="#FF9E0B"
                  ></path>
                  <path
                    d="M7.3461 34.1437C7.36902 33.3981 7.81612 32.7901 8.5269 32.5722C8.8135 32.4804 9.12302 32.4345 9.42109 32.423C11.8515 32.4116 14.2818 32.423 16.7122 32.4116C17.3313 32.4116 17.9503 32.3886 18.5694 32.3657C18.6267 32.3657 18.6955 32.3657 18.7528 32.3657C18.7757 32.3657 18.8101 32.3542 18.8445 32.3427C18.8445 32.033 18.8216 31.7348 18.8445 31.448C18.9019 30.863 18.7643 30.3583 18.2713 30.0027C18.2599 29.9912 18.2484 29.9683 18.2369 29.9453C15.1646 29.9453 12.0922 29.9453 9.01985 29.9453C8.67593 30.0027 8.32054 30.06 7.97662 30.1403C6.69265 30.4386 5.68381 31.1153 5.11061 32.3427C4.77815 33.0539 4.65205 33.811 4.62912 34.5796C4.61765 34.809 4.62912 35.0384 4.62912 35.2564C5.54624 35.2564 6.42897 35.2564 7.3461 35.2564C7.3461 34.8663 7.33463 34.4993 7.3461 34.1437Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12.253 42.7597C13.0326 42.5418 13.7433 42.1862 14.3509 41.6356C15.0732 40.9702 15.4744 40.1329 15.7151 39.2037C15.8069 38.8596 15.8298 38.504 15.8871 38.1369C15.0044 38.1369 14.1904 38.1369 13.3536 38.1369C13.3306 38.2402 13.3192 38.3319 13.2848 38.4237C13.1013 39.0431 12.8262 39.6052 12.2874 40.0067C11.5881 40.5229 10.8085 40.5917 9.98312 40.4655C8.81379 40.2935 8.10302 39.5823 7.67885 38.5269C7.41518 37.8846 7.30054 37.2078 7.28907 36.4736C6.5783 36.4736 5.86753 36.4736 5.12237 36.4736C4.96187 36.4736 4.81284 36.4736 4.65234 36.4736C4.68674 36.8063 4.73259 37.1619 4.76698 37.506C4.8243 38.2057 4.99627 38.894 5.23701 39.5478C5.56947 40.4541 6.09681 41.2226 6.83051 41.8306C7.03686 42.0026 7.25468 42.1518 7.4725 42.2779C8.14888 42.6679 8.9055 42.8744 9.68506 42.9318C10.5449 43.0006 11.4161 43.0006 12.253 42.7597Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="advert__banner">
                <img
                  src="assets/img/advert1.png"
                  alt="Hamcar"
                  class="advert__img"
                />
                <span class="advert__flag advert__flag--place">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M11.0515 0.795975L11.0852 0.04673L11.0515 0.795975ZM1.5 9.00349C1.5 10.6116 1.55208 11.8703 1.70439 12.8648C1.8567 13.8594 2.10092 14.5289 2.44161 15.0004C3.09186 15.9003 4.29205 16.3399 6.97144 16.4613L6.90356 17.9598C4.22281 17.8383 2.32925 17.406 1.22579 15.8789C0.689617 15.1369 0.391991 14.2041 0.221671 13.0919C0.0513383 11.9796 0 10.6269 0 9.0035L1.5 9.00349ZM6.97144 16.4613C7.58044 16.4889 8.25389 16.5 9 16.5V18C8.24041 18 7.54277 17.9887 6.90356 17.9598L6.97144 16.4613ZM6.1875 17.2105V14.8125H7.6875V17.2105H6.1875ZM9 16.5C9.74611 16.5 10.4196 16.4889 11.0286 16.4613L11.0964 17.9598C10.4572 17.9887 9.75959 18 9 18V16.5ZM11.0286 16.4613C13.7079 16.3399 14.9081 15.9003 15.5584 15.0004C15.8991 14.5289 16.1433 13.8594 16.2956 12.8648C16.4479 11.8703 16.5 10.6116 16.5 9.0035L18 9.00349C18 10.6269 17.9487 11.9796 17.7783 13.0919C17.608 14.2041 17.3104 15.1369 16.7742 15.8789C15.6707 17.406 13.7772 17.8383 11.0964 17.9598L11.0286 16.4613ZM11.8125 14.8125V17.2105H10.3125V14.8125H11.8125ZM9 8.25349C9.68804 8.25349 10.2688 8.04241 10.669 7.6767C11.0583 7.32099 11.3438 6.75881 11.3438 5.91105H12.8438C12.8438 7.12492 12.4197 8.10896 11.6808 8.78407C10.9529 9.44917 9.98677 9.75349 9 9.75349V8.25349ZM6.65625 5.91105C6.65625 6.75881 6.94167 7.32099 7.33098 7.6767C7.73123 8.04241 8.31196 8.25349 9 8.25349V9.75349C8.01323 9.75349 7.0471 9.44917 6.31917 8.78407C5.58031 8.10896 5.15625 7.12492 5.15625 5.91105H6.65625ZM6.98217 1.54522C4.29727 1.66583 3.09449 2.1048 2.44301 3.00467C2.10184 3.47592 1.85724 4.14527 1.7047 5.14015C1.55216 6.13498 1.5 7.39423 1.5 9.00349L0 9.0035C0 7.37897 0.0514069 6.02553 0.222024 4.91281C0.392632 3.80014 0.690791 2.86707 1.228 2.12504C2.33327 0.598356 4.22974 0.167355 6.91485 0.04673L6.98217 1.54522ZM6.94851 0.795975C7.6583 1.03825 7.65832 1.03819 7.65834 1.03814C7.65834 1.03814 7.65835 1.03811 7.65835 1.03811C7.65835 1.0381 7.65834 1.03815 7.65831 1.03823C7.65825 1.03841 7.65812 1.03877 7.65794 1.03932C7.65757 1.0404 7.65696 1.04221 7.65611 1.04473C7.6544 1.04978 7.65175 1.05766 7.64821 1.06825C7.64114 1.08945 7.63052 1.1215 7.61687 1.16343C7.58956 1.2473 7.55015 1.37053 7.50267 1.52528C7.4076 1.83515 7.28077 2.26946 7.15409 2.76585C6.89642 3.77556 6.65625 4.97873 6.65625 5.91105H5.15625C5.15625 4.78175 5.43721 3.42738 5.70067 2.39496C5.83456 1.87028 5.9683 1.41238 6.06865 1.0853C6.11888 0.921576 6.1609 0.79015 6.19059 0.69898C6.20543 0.653383 6.21721 0.617819 6.2254 0.593283C6.2295 0.581013 6.2327 0.571497 6.23494 0.564859C6.23606 0.561539 6.23694 0.558939 6.23757 0.557074C6.23789 0.556141 6.23814 0.555391 6.23834 0.554829C6.23843 0.554546 6.23851 0.55431 6.23858 0.554121C6.23861 0.554028 6.23865 0.553921 6.23866 0.553873C6.23869 0.553778 6.23872 0.553696 6.94851 0.795975ZM16.5 9.0035C16.5 7.39423 16.4478 6.13498 16.2953 5.14015C16.1428 4.14527 15.8982 3.47592 15.557 3.00467C14.9055 2.1048 13.7027 1.66584 11.0178 1.54522L11.0852 0.04673C13.7703 0.167356 15.6667 0.598358 16.772 2.12504C17.3092 2.86707 17.6074 3.80014 17.778 4.91281C17.9486 6.02553 18 7.37897 18 9.00349L16.5 9.0035ZM11.3438 5.91105C11.3438 4.97873 11.1036 3.77556 10.8459 2.76585C10.7192 2.26946 10.5924 1.83514 10.4973 1.52528C10.4499 1.37053 10.4104 1.24729 10.3831 1.16343C10.3695 1.1215 10.3589 1.08945 10.3518 1.06825C10.3483 1.05766 10.3456 1.04977 10.3439 1.04473C10.3431 1.04221 10.3424 1.0404 10.3421 1.03931C10.3419 1.03877 10.3418 1.03841 10.3417 1.03823C10.3417 1.03814 10.3417 1.0381 10.3417 1.0381C10.3417 1.03811 10.3417 1.03814 10.3417 1.03814C10.3417 1.03819 10.3417 1.03825 11.0515 0.795975C11.7613 0.553698 11.7613 0.553782 11.7613 0.553875C11.7614 0.553923 11.7614 0.554029 11.7614 0.554125C11.7615 0.554314 11.7616 0.554548 11.7617 0.554831C11.7619 0.555393 11.7621 0.556143 11.7624 0.557076C11.7631 0.558941 11.764 0.561543 11.7651 0.564861C11.7673 0.571499 11.7705 0.581015 11.7746 0.593285C11.7828 0.617823 11.7946 0.653385 11.8094 0.698982C11.8391 0.790152 11.8811 0.921577 11.9314 1.0853C12.0317 1.41238 12.1654 1.87029 12.2993 2.39496C12.5628 3.42738 12.8438 4.78175 12.8438 5.91105H11.3438ZM11.0178 1.54522C9.67575 1.48493 8.32426 1.48493 6.98217 1.54522L6.91485 0.04673C8.3018 -0.0155773 9.69821 -0.0155773 11.0852 0.04673L11.0178 1.54522ZM2.32561 9.75349H0.75V8.25349H2.32561V9.75349ZM15.6744 8.25349H17.25V9.75349H15.6744V8.25349ZM12.8438 5.91105C12.8438 6.58535 13.1655 7.15474 13.6944 7.57552C14.2329 8.00393 14.9619 8.25349 15.6744 8.25349V9.75349C14.636 9.75349 13.5747 9.39705 12.7605 8.74934C11.9368 8.09401 11.3438 7.11718 11.3438 5.91105H12.8438ZM6.65625 5.91105C6.65625 7.11718 6.06316 8.09401 5.23946 8.74934C4.42533 9.39705 3.36404 9.75349 2.32561 9.75349V8.25349C3.03807 8.25349 3.7671 8.00393 4.30557 7.57552C4.83446 7.15474 5.15625 6.58535 5.15625 5.91105H6.65625ZM9 12C10.5533 12 11.8125 13.2592 11.8125 14.8125H10.3125C10.3125 14.0876 9.72487 13.5 9 13.5V12ZM6.1875 14.8125C6.1875 13.2592 7.4467 12 9 12V13.5C8.27513 13.5 7.6875 14.0876 7.6875 14.8125H6.1875Z"
                      fill="#DCDDE0"
                    ></path>
                  </svg>
                  نمایشگاه
                </span>
                <span class="advert__flag advert__flag--picture-number">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M11.25 0.750045L11.25 0.750045L6.75 0.75002C6.477 0.750017 6.32838 0.784293 6.25488 0.812071C6.22059 0.82503 6.20535 0.835548 6.201 0.838789C6.19744 0.84144 6.19669 0.842477 6.19592 0.843537L6.1958 0.843701C6.19226 0.848549 6.17245 0.878357 6.15031 0.977337C6.13242 1.05733 6.12209 1.1328 6.10753 1.23912C6.10135 1.28428 6.09441 1.335 6.0858 1.394C6.0371 1.72776 5.94208 2.29472 5.45685 2.72869C4.98226 3.15315 4.286 3.32145 3.37481 3.32145C2.65917 3.32145 2.20443 3.49633 1.89257 3.74608C1.5731 4.00191 1.32204 4.4016 1.13852 4.99641C0.75777 6.23039 0.750001 7.99428 0.750001 10.1626L0.750001 10.1633C0.750001 13.4466 1.17202 15.0659 2.21085 15.9629C2.73623 16.4166 3.48771 16.7461 4.60592 16.9568C5.72723 17.1682 7.1603 17.25 9 17.25C10.8382 17.25 12.2703 17.1635 13.3905 16.9467C14.5073 16.7306 15.2599 16.3949 15.7868 15.9361C16.8292 15.0284 17.25 13.4048 17.25 10.1633C17.25 8.03802 17.2424 6.27213 16.861 5.02643C16.6767 4.42448 16.4241 4.01594 16.1025 3.75396C15.7899 3.49931 15.3364 3.32145 14.625 3.32145C13.7138 3.32145 13.0176 3.15315 12.543 2.72868C12.0578 2.2947 11.9628 1.72771 11.9141 1.39397C11.9055 1.33496 11.8986 1.28424 11.8924 1.23908C11.8778 1.13276 11.8675 1.0573 11.8496 0.977309C11.8275 0.878333 11.8077 0.848535 11.8042 0.8437L11.804 0.843535C11.8033 0.842481 11.8025 0.84145 11.799 0.838804C11.7946 0.835568 11.7794 0.825052 11.7451 0.812094C11.6716 0.784319 11.523 0.750042 11.25 0.750045Z"
                      stroke="#DCDDE0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <ellipse
                      rx="0.750001"
                      ry="0.75"
                      transform="matrix(-1 0 0 1 13.5 6)"
                      fill="#DCDDE0"
                    ></ellipse>
                    <path
                      d="M9 6.75C7.34315 6.75 6 8.09315 6 9.75C6 11.4069 7.34315 12.75 9 12.75C10.6569 12.75 12 11.4069 12 9.75C12 8.09315 10.6569 6.75 9 6.75Z"
                      stroke="#DCDDE0"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  5
                </span>
              </div>
              <div class="advert__body">
                <div class="advert__header">
                  <h3 class="advert__name">آئودی ، R8</h3>
                  <span class="advert__date">(10 دقیقه پیش)</span>
                  <span class="advert__date-wide">10 دقیقه پیش</span>
                </div>
                <div class="advert__info">
                  <span>مدل ۲۰۱۹</span>
                  <span>34,000 کیلومتر</span>
                  <span>اتوماتیک</span>
                </div>
                <span class="advert__location">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <mask id="path-1-inside-1_778_1497" fill="white">
                      <path
                        d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      ></path>
                    </mask>
                    <path
                      d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      stroke="#0F0F10"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      mask="url(#path-1-inside-1_778_1497)"
                    ></path>
                    <circle
                      r="2.06667"
                      transform="matrix(-1 0 0 1 8.00033 6.66667)"
                      stroke="#0F0F10"
                      stroke-width="1.2"
                    ></circle>
                  </svg>
                  تهران، فلان منطقه
                </span>
                <div class="advert__footer">
                  <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M7.36767 0.531137L7.39011 0.031641L7.36767 0.531137ZM1 6.00282C1 7.07492 1.03472 7.91401 1.13626 8.57703C1.2378 9.24011 1.40062 9.68642 1.62774 10.0007C2.06124 10.6007 2.86137 10.8938 4.64763 10.9747L4.60237 11.9737C2.81521 11.8927 1.55284 11.6045 0.817196 10.5864C0.459744 10.0917 0.261328 9.46987 0.147781 8.72841C0.0342255 7.98689 0 7.0851 0 6.00282H1ZM4.64763 10.9747C5.05362 10.9931 5.50259 11.0005 6 11.0005V12.0005C5.49361 12.0005 5.02851 11.993 4.60237 11.9737L4.64763 10.9747ZM4.125 11.4742V9.87549H5.125V11.4742H4.125ZM6 11.0005C6.49741 11.0005 6.94638 10.9931 7.35237 10.9747L7.39763 11.9737C6.97149 11.993 6.50639 12.0005 6 12.0005V11.0005ZM7.35237 10.9747C9.13863 10.8938 9.93876 10.6007 10.3723 10.0007C10.5994 9.68642 10.7622 9.24011 10.8637 8.57703C10.9653 7.91401 11 7.07492 11 6.00282H12C12 7.0851 11.9658 7.98689 11.8522 8.72841C11.7387 9.46987 11.5403 10.0917 11.1828 10.5864C10.4472 11.6045 9.18479 11.8927 7.39763 11.9737L7.35237 10.9747ZM7.875 9.87549V11.4742H6.875V9.87549H7.875ZM6 5.50282C6.45869 5.50282 6.84585 5.3621 7.11268 5.11829C7.37222 4.88115 7.5625 4.50636 7.5625 3.94119H8.5625C8.5625 4.75044 8.2798 5.40646 7.78722 5.85653C7.30194 6.29993 6.65784 6.50282 6 6.50282V5.50282ZM4.4375 3.94119C4.4375 4.50636 4.62778 4.88115 4.88732 5.11829C5.15415 5.3621 5.54131 5.50282 6 5.50282V6.50282C5.34216 6.50282 4.69806 6.29993 4.21278 5.85653C3.7202 5.40646 3.4375 4.75044 3.4375 3.94119H4.4375ZM4.65478 1.03063C2.86485 1.11104 2.06299 1.40369 1.62867 2.0036C1.40122 2.31777 1.23816 2.764 1.13646 3.42726C1.03477 4.09048 1 4.92997 1 6.00282H0C0 4.9198 0.0342713 4.01751 0.148016 3.2757C0.261755 2.53392 0.460527 1.91187 0.818664 1.41718C1.55551 0.399392 2.81983 0.112059 4.6099 0.031641L4.65478 1.03063ZM4.63234 0.531137C5.10553 0.692657 5.10555 0.692616 5.10556 0.692584C5.10556 0.692584 5.10557 0.692559 5.10557 0.692558C5.10557 0.692556 5.10556 0.692585 5.10554 0.692644C5.1055 0.692763 5.10542 0.693004 5.10529 0.693365C5.10505 0.694089 5.10464 0.695296 5.10407 0.696977C5.10294 0.700338 5.10117 0.705593 5.09881 0.712658C5.09409 0.72679 5.08701 0.748158 5.07791 0.776107C5.05971 0.832019 5.03343 0.914174 5.00178 1.01734C4.9384 1.22392 4.85384 1.51346 4.76939 1.84439C4.59762 2.51753 4.4375 3.31964 4.4375 3.94119H3.4375C3.4375 3.18832 3.6248 2.28541 3.80045 1.59713C3.88971 1.24734 3.97886 0.942076 4.04576 0.724022C4.07925 0.614872 4.10726 0.527255 4.12706 0.466475C4.13696 0.436077 4.14481 0.412368 4.15027 0.39601C4.153 0.387831 4.15513 0.381487 4.15663 0.377061C4.15737 0.374848 4.15796 0.373115 4.15838 0.371871C4.15859 0.371249 4.15876 0.370749 4.15889 0.370374C4.15896 0.370186 4.15901 0.370028 4.15905 0.369903C4.15907 0.36984 4.1591 0.369769 4.15911 0.369738C4.15913 0.369674 4.15915 0.369618 4.63234 0.531137ZM11 6.00282C11 4.92997 10.9652 4.09048 10.8635 3.42726C10.7618 2.764 10.5988 2.31777 10.3713 2.0036C9.93701 1.40369 9.13516 1.11104 7.34523 1.03063L7.39011 0.031641C9.18017 0.112059 10.4445 0.399393 11.1813 1.41718C11.5395 1.91187 11.7382 2.53392 11.852 3.2757C11.9657 4.01751 12 4.9198 12 6.00282H11ZM7.5625 3.94119C7.5625 3.31964 7.40239 2.51753 7.23061 1.84439C7.14616 1.51346 7.06161 1.22392 6.99823 1.01734C6.96657 0.914172 6.9403 0.832018 6.92209 0.776105C6.91299 0.748157 6.90591 0.726789 6.9012 0.712657C6.89884 0.705591 6.89707 0.700337 6.89594 0.696976C6.89537 0.695294 6.89496 0.694088 6.89471 0.693364C6.89459 0.693003 6.89451 0.692761 6.89447 0.692643C6.89445 0.692583 6.89444 0.692554 6.89444 0.692556C6.89444 0.692557 6.89445 0.692582 6.89445 0.692583C6.89446 0.692616 6.89447 0.692655 7.36767 0.531137C7.84086 0.36962 7.84088 0.369676 7.8409 0.369739C7.84091 0.36977 7.84093 0.369842 7.84096 0.369905C7.841 0.37003 7.84105 0.370187 7.84112 0.370375C7.84124 0.37075 7.84141 0.37125 7.84163 0.371872C7.84205 0.373116 7.84264 0.374849 7.84338 0.377063C7.84488 0.381488 7.84701 0.387832 7.84974 0.396011C7.8552 0.41237 7.86305 0.436078 7.87295 0.466476C7.89274 0.527256 7.92075 0.614873 7.95424 0.724023C8.02114 0.942077 8.1103 1.24734 8.19956 1.59713C8.3752 2.28541 8.5625 3.18832 8.5625 3.94119H7.5625ZM7.34523 1.03063C6.4505 0.990438 5.54951 0.990439 4.65478 1.03063L4.6099 0.031641C5.53453 -0.00989723 6.46547 -0.00989723 7.39011 0.031641L7.34523 1.03063ZM1.55041 6.50282H0.5V5.50282H1.55041V6.50282ZM10.4496 5.50282H11.5V6.50282H10.4496V5.50282ZM8.5625 3.94119C8.5625 4.39072 8.77702 4.77031 9.12962 5.05083C9.4886 5.33644 9.97462 5.50282 10.4496 5.50282V6.50282C9.75731 6.50282 9.04978 6.26519 8.50703 5.83338C7.95789 5.39649 7.5625 4.74527 7.5625 3.94119H8.5625ZM4.4375 3.94119C4.4375 4.74527 4.04211 5.39649 3.49297 5.83338C2.95022 6.26519 2.24269 6.50282 1.55041 6.50282V5.50282C2.02538 5.50282 2.5114 5.33644 2.87038 5.05084C3.22298 4.77031 3.4375 4.39072 3.4375 3.94119H4.4375ZM6 8.00049C7.03553 8.00049 7.875 8.83995 7.875 9.87549H6.875C6.875 9.39224 6.48325 9.00049 6 9.00049V8.00049ZM4.125 9.87549C4.125 8.83995 4.96447 8.00049 6 8.00049V9.00049C5.51675 9.00049 5.125 9.39224 5.125 9.87549H4.125Z"
                        fill="#85858F"
                      ></path>
                    </svg>
                    نمایشگاه
                  </span>
                  <div class="advert__wrapper">
                    <p class="advert__price">
                      ۱۸,۶۰۰,۰۰۰,۰۰۰
                      <span>پیش</span>
                    </p>
                    <p class="advert__price">
                      ۱,۶۰۰,۰۰۰,۰۰۰
                      <span>ماهیانه</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="advert">
              <div class="advert__badge">
                <svg
                  class="advert__safe-badge"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M17.3912 3.58107L10.7912 1.27631C10.2789 1.0974 9.72108 1.0974 9.20876 1.27631L2.60876 3.58107C1.64533 3.91751 1 4.82418 1 5.84467V13.5714C1 18.9277 6.22812 21.3362 8.88803 22.4986C9.59168 22.8061 10.4083 22.8061 11.112 22.4986C13.7719 21.3362 19 18.9277 19 13.5714V5.84467C19 4.82418 18.3547 3.9175 17.3912 3.58107Z"
                    fill="#69CE91"
                  ></path>
                  <path
                    d="M7 12L9 14L13 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="advert__verified-badge"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.4701 2.01769C11.2384 1.00444 12.7616 1.00444 13.5299 2.01769L14.5359 3.34437C14.9551 3.89723 15.64 4.18092 16.3273 4.08641L17.9767 3.85963C19.2365 3.68642 20.3136 4.76352 20.1404 6.02326L19.9136 7.67268C19.8191 8.36004 20.1028 9.04492 20.6556 9.46413L21.9823 10.4701C22.9956 11.2384 22.9956 12.7616 21.9823 13.5299L20.6556 14.5359C20.1028 14.9551 19.8191 15.64 19.9136 16.3273L20.1404 17.9767C20.3136 19.2365 19.2365 20.3136 17.9767 20.1404L16.3273 19.9136C15.64 19.8191 14.9551 20.1028 14.5359 20.6556L13.5299 21.9823C12.7616 22.9956 11.2384 22.9956 10.4701 21.9823L9.46413 20.6556C9.04492 20.1028 8.36004 19.8191 7.67268 19.9136L6.02326 20.1404C4.76352 20.3136 3.68642 19.2365 3.85963 17.9767L4.08641 16.3273C4.18092 15.64 3.89723 14.9551 3.34437 14.5359L2.01769 13.5299C1.00444 12.7616 1.00444 11.2384 2.01769 10.4701L3.34437 9.46413C3.89723 9.04492 4.18092 8.36004 4.08641 7.67268L3.85963 6.02326C3.68642 4.76352 4.76352 3.68642 6.02326 3.85963L7.67268 4.08641C8.36004 4.18092 9.04492 3.89723 9.46413 3.34437L10.4701 2.01769Z"
                    fill="#007AFF"
                  ></path>
                  <path
                    d="M9 12.333L11 14.333L15 10.333"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="advert__hamcar-badge"
                  width="24"
                  height="72"
                  viewBox="0 0 24 72"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4924 21.0664C18.3056 24.2486 23.9998 29.3724 23.9998 35.9996C23.9997 42.6268 18.3056 47.7506 12.4924 50.9328C5.04812 55.0079 -3.97123e-07 62.9139 0 71.999L-3.14719e-06 -0.000236511C-3.14718e-06 -9.91821e-05 -1.04907e-06 4.57764e-05 -1.04907e-06 0.000183105C-6.51945e-07 9.0853 5.04812 16.9914 12.4924 21.0664Z"
                    fill="#FF9E0B"
                  ></path>
                  <path
                    d="M7.3461 34.1437C7.36902 33.3981 7.81612 32.7901 8.5269 32.5722C8.8135 32.4804 9.12302 32.4345 9.42109 32.423C11.8515 32.4116 14.2818 32.423 16.7122 32.4116C17.3313 32.4116 17.9503 32.3886 18.5694 32.3657C18.6267 32.3657 18.6955 32.3657 18.7528 32.3657C18.7757 32.3657 18.8101 32.3542 18.8445 32.3427C18.8445 32.033 18.8216 31.7348 18.8445 31.448C18.9019 30.863 18.7643 30.3583 18.2713 30.0027C18.2599 29.9912 18.2484 29.9683 18.2369 29.9453C15.1646 29.9453 12.0922 29.9453 9.01985 29.9453C8.67593 30.0027 8.32054 30.06 7.97662 30.1403C6.69265 30.4386 5.68381 31.1153 5.11061 32.3427C4.77815 33.0539 4.65205 33.811 4.62912 34.5796C4.61765 34.809 4.62912 35.0384 4.62912 35.2564C5.54624 35.2564 6.42897 35.2564 7.3461 35.2564C7.3461 34.8663 7.33463 34.4993 7.3461 34.1437Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12.253 42.7597C13.0326 42.5418 13.7433 42.1862 14.3509 41.6356C15.0732 40.9702 15.4744 40.1329 15.7151 39.2037C15.8069 38.8596 15.8298 38.504 15.8871 38.1369C15.0044 38.1369 14.1904 38.1369 13.3536 38.1369C13.3306 38.2402 13.3192 38.3319 13.2848 38.4237C13.1013 39.0431 12.8262 39.6052 12.2874 40.0067C11.5881 40.5229 10.8085 40.5917 9.98312 40.4655C8.81379 40.2935 8.10302 39.5823 7.67885 38.5269C7.41518 37.8846 7.30054 37.2078 7.28907 36.4736C6.5783 36.4736 5.86753 36.4736 5.12237 36.4736C4.96187 36.4736 4.81284 36.4736 4.65234 36.4736C4.68674 36.8063 4.73259 37.1619 4.76698 37.506C4.8243 38.2057 4.99627 38.894 5.23701 39.5478C5.56947 40.4541 6.09681 41.2226 6.83051 41.8306C7.03686 42.0026 7.25468 42.1518 7.4725 42.2779C8.14888 42.6679 8.9055 42.8744 9.68506 42.9318C10.5449 43.0006 11.4161 43.0006 12.253 42.7597Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="advert__banner">
                <img
                  src="https://s100.divarcdn.com/static/pictures/1653928964/gYP27rWd.1.webp"
                  alt="Hamcar"
                  class="advert__img"
                />
                <span class="advert__flag advert__flag--place">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M11.0515 0.795975L11.0852 0.04673L11.0515 0.795975ZM1.5 9.00349C1.5 10.6116 1.55208 11.8703 1.70439 12.8648C1.8567 13.8594 2.10092 14.5289 2.44161 15.0004C3.09186 15.9003 4.29205 16.3399 6.97144 16.4613L6.90356 17.9598C4.22281 17.8383 2.32925 17.406 1.22579 15.8789C0.689617 15.1369 0.391991 14.2041 0.221671 13.0919C0.0513383 11.9796 0 10.6269 0 9.0035L1.5 9.00349ZM6.97144 16.4613C7.58044 16.4889 8.25389 16.5 9 16.5V18C8.24041 18 7.54277 17.9887 6.90356 17.9598L6.97144 16.4613ZM6.1875 17.2105V14.8125H7.6875V17.2105H6.1875ZM9 16.5C9.74611 16.5 10.4196 16.4889 11.0286 16.4613L11.0964 17.9598C10.4572 17.9887 9.75959 18 9 18V16.5ZM11.0286 16.4613C13.7079 16.3399 14.9081 15.9003 15.5584 15.0004C15.8991 14.5289 16.1433 13.8594 16.2956 12.8648C16.4479 11.8703 16.5 10.6116 16.5 9.0035L18 9.00349C18 10.6269 17.9487 11.9796 17.7783 13.0919C17.608 14.2041 17.3104 15.1369 16.7742 15.8789C15.6707 17.406 13.7772 17.8383 11.0964 17.9598L11.0286 16.4613ZM11.8125 14.8125V17.2105H10.3125V14.8125H11.8125ZM9 8.25349C9.68804 8.25349 10.2688 8.04241 10.669 7.6767C11.0583 7.32099 11.3438 6.75881 11.3438 5.91105H12.8438C12.8438 7.12492 12.4197 8.10896 11.6808 8.78407C10.9529 9.44917 9.98677 9.75349 9 9.75349V8.25349ZM6.65625 5.91105C6.65625 6.75881 6.94167 7.32099 7.33098 7.6767C7.73123 8.04241 8.31196 8.25349 9 8.25349V9.75349C8.01323 9.75349 7.0471 9.44917 6.31917 8.78407C5.58031 8.10896 5.15625 7.12492 5.15625 5.91105H6.65625ZM6.98217 1.54522C4.29727 1.66583 3.09449 2.1048 2.44301 3.00467C2.10184 3.47592 1.85724 4.14527 1.7047 5.14015C1.55216 6.13498 1.5 7.39423 1.5 9.00349L0 9.0035C0 7.37897 0.0514069 6.02553 0.222024 4.91281C0.392632 3.80014 0.690791 2.86707 1.228 2.12504C2.33327 0.598356 4.22974 0.167355 6.91485 0.04673L6.98217 1.54522ZM6.94851 0.795975C7.6583 1.03825 7.65832 1.03819 7.65834 1.03814C7.65834 1.03814 7.65835 1.03811 7.65835 1.03811C7.65835 1.0381 7.65834 1.03815 7.65831 1.03823C7.65825 1.03841 7.65812 1.03877 7.65794 1.03932C7.65757 1.0404 7.65696 1.04221 7.65611 1.04473C7.6544 1.04978 7.65175 1.05766 7.64821 1.06825C7.64114 1.08945 7.63052 1.1215 7.61687 1.16343C7.58956 1.2473 7.55015 1.37053 7.50267 1.52528C7.4076 1.83515 7.28077 2.26946 7.15409 2.76585C6.89642 3.77556 6.65625 4.97873 6.65625 5.91105H5.15625C5.15625 4.78175 5.43721 3.42738 5.70067 2.39496C5.83456 1.87028 5.9683 1.41238 6.06865 1.0853C6.11888 0.921576 6.1609 0.79015 6.19059 0.69898C6.20543 0.653383 6.21721 0.617819 6.2254 0.593283C6.2295 0.581013 6.2327 0.571497 6.23494 0.564859C6.23606 0.561539 6.23694 0.558939 6.23757 0.557074C6.23789 0.556141 6.23814 0.555391 6.23834 0.554829C6.23843 0.554546 6.23851 0.55431 6.23858 0.554121C6.23861 0.554028 6.23865 0.553921 6.23866 0.553873C6.23869 0.553778 6.23872 0.553696 6.94851 0.795975ZM16.5 9.0035C16.5 7.39423 16.4478 6.13498 16.2953 5.14015C16.1428 4.14527 15.8982 3.47592 15.557 3.00467C14.9055 2.1048 13.7027 1.66584 11.0178 1.54522L11.0852 0.04673C13.7703 0.167356 15.6667 0.598358 16.772 2.12504C17.3092 2.86707 17.6074 3.80014 17.778 4.91281C17.9486 6.02553 18 7.37897 18 9.00349L16.5 9.0035ZM11.3438 5.91105C11.3438 4.97873 11.1036 3.77556 10.8459 2.76585C10.7192 2.26946 10.5924 1.83514 10.4973 1.52528C10.4499 1.37053 10.4104 1.24729 10.3831 1.16343C10.3695 1.1215 10.3589 1.08945 10.3518 1.06825C10.3483 1.05766 10.3456 1.04977 10.3439 1.04473C10.3431 1.04221 10.3424 1.0404 10.3421 1.03931C10.3419 1.03877 10.3418 1.03841 10.3417 1.03823C10.3417 1.03814 10.3417 1.0381 10.3417 1.0381C10.3417 1.03811 10.3417 1.03814 10.3417 1.03814C10.3417 1.03819 10.3417 1.03825 11.0515 0.795975C11.7613 0.553698 11.7613 0.553782 11.7613 0.553875C11.7614 0.553923 11.7614 0.554029 11.7614 0.554125C11.7615 0.554314 11.7616 0.554548 11.7617 0.554831C11.7619 0.555393 11.7621 0.556143 11.7624 0.557076C11.7631 0.558941 11.764 0.561543 11.7651 0.564861C11.7673 0.571499 11.7705 0.581015 11.7746 0.593285C11.7828 0.617823 11.7946 0.653385 11.8094 0.698982C11.8391 0.790152 11.8811 0.921577 11.9314 1.0853C12.0317 1.41238 12.1654 1.87029 12.2993 2.39496C12.5628 3.42738 12.8438 4.78175 12.8438 5.91105H11.3438ZM11.0178 1.54522C9.67575 1.48493 8.32426 1.48493 6.98217 1.54522L6.91485 0.04673C8.3018 -0.0155773 9.69821 -0.0155773 11.0852 0.04673L11.0178 1.54522ZM2.32561 9.75349H0.75V8.25349H2.32561V9.75349ZM15.6744 8.25349H17.25V9.75349H15.6744V8.25349ZM12.8438 5.91105C12.8438 6.58535 13.1655 7.15474 13.6944 7.57552C14.2329 8.00393 14.9619 8.25349 15.6744 8.25349V9.75349C14.636 9.75349 13.5747 9.39705 12.7605 8.74934C11.9368 8.09401 11.3438 7.11718 11.3438 5.91105H12.8438ZM6.65625 5.91105C6.65625 7.11718 6.06316 8.09401 5.23946 8.74934C4.42533 9.39705 3.36404 9.75349 2.32561 9.75349V8.25349C3.03807 8.25349 3.7671 8.00393 4.30557 7.57552C4.83446 7.15474 5.15625 6.58535 5.15625 5.91105H6.65625ZM9 12C10.5533 12 11.8125 13.2592 11.8125 14.8125H10.3125C10.3125 14.0876 9.72487 13.5 9 13.5V12ZM6.1875 14.8125C6.1875 13.2592 7.4467 12 9 12V13.5C8.27513 13.5 7.6875 14.0876 7.6875 14.8125H6.1875Z"
                      fill="#DCDDE0"
                    ></path>
                  </svg>
                  نمایشگاه
                </span>
                <span class="advert__flag advert__flag--picture-number">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M11.25 0.750045L11.25 0.750045L6.75 0.75002C6.477 0.750017 6.32838 0.784293 6.25488 0.812071C6.22059 0.82503 6.20535 0.835548 6.201 0.838789C6.19744 0.84144 6.19669 0.842477 6.19592 0.843537L6.1958 0.843701C6.19226 0.848549 6.17245 0.878357 6.15031 0.977337C6.13242 1.05733 6.12209 1.1328 6.10753 1.23912C6.10135 1.28428 6.09441 1.335 6.0858 1.394C6.0371 1.72776 5.94208 2.29472 5.45685 2.72869C4.98226 3.15315 4.286 3.32145 3.37481 3.32145C2.65917 3.32145 2.20443 3.49633 1.89257 3.74608C1.5731 4.00191 1.32204 4.4016 1.13852 4.99641C0.75777 6.23039 0.750001 7.99428 0.750001 10.1626L0.750001 10.1633C0.750001 13.4466 1.17202 15.0659 2.21085 15.9629C2.73623 16.4166 3.48771 16.7461 4.60592 16.9568C5.72723 17.1682 7.1603 17.25 9 17.25C10.8382 17.25 12.2703 17.1635 13.3905 16.9467C14.5073 16.7306 15.2599 16.3949 15.7868 15.9361C16.8292 15.0284 17.25 13.4048 17.25 10.1633C17.25 8.03802 17.2424 6.27213 16.861 5.02643C16.6767 4.42448 16.4241 4.01594 16.1025 3.75396C15.7899 3.49931 15.3364 3.32145 14.625 3.32145C13.7138 3.32145 13.0176 3.15315 12.543 2.72868C12.0578 2.2947 11.9628 1.72771 11.9141 1.39397C11.9055 1.33496 11.8986 1.28424 11.8924 1.23908C11.8778 1.13276 11.8675 1.0573 11.8496 0.977309C11.8275 0.878333 11.8077 0.848535 11.8042 0.8437L11.804 0.843535C11.8033 0.842481 11.8025 0.84145 11.799 0.838804C11.7946 0.835568 11.7794 0.825052 11.7451 0.812094C11.6716 0.784319 11.523 0.750042 11.25 0.750045Z"
                      stroke="#DCDDE0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <ellipse
                      rx="0.750001"
                      ry="0.75"
                      transform="matrix(-1 0 0 1 13.5 6)"
                      fill="#DCDDE0"
                    ></ellipse>
                    <path
                      d="M9 6.75C7.34315 6.75 6 8.09315 6 9.75C6 11.4069 7.34315 12.75 9 12.75C10.6569 12.75 12 11.4069 12 9.75C12 8.09315 10.6569 6.75 9 6.75Z"
                      stroke="#DCDDE0"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  5
                </span>
              </div>
              <div class="advert__body">
                <div class="advert__header">
                  <h3 class="advert__name">آئودی ، R8</h3>
                  <span class="advert__date">(10 دقیقه پیش)</span>
                  <span class="advert__date-wide">10 دقیقه پیش</span>
                </div>
                <div class="advert__info">
                  <span>مدل ۲۰۱۹</span>
                  <span>34,000 کیلومتر</span>
                  <span>اتوماتیک</span>
                </div>
                <span class="advert__location">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <mask id="path-1-inside-1_778_1497" fill="white">
                      <path
                        d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      ></path>
                    </mask>
                    <path
                      d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      stroke="#0F0F10"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      mask="url(#path-1-inside-1_778_1497)"
                    ></path>
                    <circle
                      r="2.06667"
                      transform="matrix(-1 0 0 1 8.00033 6.66667)"
                      stroke="#0F0F10"
                      stroke-width="1.2"
                    ></circle>
                  </svg>
                  تهران، فلان منطقه
                </span>
                <div class="advert__footer">
                  <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M7.36767 0.531137L7.39011 0.031641L7.36767 0.531137ZM1 6.00282C1 7.07492 1.03472 7.91401 1.13626 8.57703C1.2378 9.24011 1.40062 9.68642 1.62774 10.0007C2.06124 10.6007 2.86137 10.8938 4.64763 10.9747L4.60237 11.9737C2.81521 11.8927 1.55284 11.6045 0.817196 10.5864C0.459744 10.0917 0.261328 9.46987 0.147781 8.72841C0.0342255 7.98689 0 7.0851 0 6.00282H1ZM4.64763 10.9747C5.05362 10.9931 5.50259 11.0005 6 11.0005V12.0005C5.49361 12.0005 5.02851 11.993 4.60237 11.9737L4.64763 10.9747ZM4.125 11.4742V9.87549H5.125V11.4742H4.125ZM6 11.0005C6.49741 11.0005 6.94638 10.9931 7.35237 10.9747L7.39763 11.9737C6.97149 11.993 6.50639 12.0005 6 12.0005V11.0005ZM7.35237 10.9747C9.13863 10.8938 9.93876 10.6007 10.3723 10.0007C10.5994 9.68642 10.7622 9.24011 10.8637 8.57703C10.9653 7.91401 11 7.07492 11 6.00282H12C12 7.0851 11.9658 7.98689 11.8522 8.72841C11.7387 9.46987 11.5403 10.0917 11.1828 10.5864C10.4472 11.6045 9.18479 11.8927 7.39763 11.9737L7.35237 10.9747ZM7.875 9.87549V11.4742H6.875V9.87549H7.875ZM6 5.50282C6.45869 5.50282 6.84585 5.3621 7.11268 5.11829C7.37222 4.88115 7.5625 4.50636 7.5625 3.94119H8.5625C8.5625 4.75044 8.2798 5.40646 7.78722 5.85653C7.30194 6.29993 6.65784 6.50282 6 6.50282V5.50282ZM4.4375 3.94119C4.4375 4.50636 4.62778 4.88115 4.88732 5.11829C5.15415 5.3621 5.54131 5.50282 6 5.50282V6.50282C5.34216 6.50282 4.69806 6.29993 4.21278 5.85653C3.7202 5.40646 3.4375 4.75044 3.4375 3.94119H4.4375ZM4.65478 1.03063C2.86485 1.11104 2.06299 1.40369 1.62867 2.0036C1.40122 2.31777 1.23816 2.764 1.13646 3.42726C1.03477 4.09048 1 4.92997 1 6.00282H0C0 4.9198 0.0342713 4.01751 0.148016 3.2757C0.261755 2.53392 0.460527 1.91187 0.818664 1.41718C1.55551 0.399392 2.81983 0.112059 4.6099 0.031641L4.65478 1.03063ZM4.63234 0.531137C5.10553 0.692657 5.10555 0.692616 5.10556 0.692584C5.10556 0.692584 5.10557 0.692559 5.10557 0.692558C5.10557 0.692556 5.10556 0.692585 5.10554 0.692644C5.1055 0.692763 5.10542 0.693004 5.10529 0.693365C5.10505 0.694089 5.10464 0.695296 5.10407 0.696977C5.10294 0.700338 5.10117 0.705593 5.09881 0.712658C5.09409 0.72679 5.08701 0.748158 5.07791 0.776107C5.05971 0.832019 5.03343 0.914174 5.00178 1.01734C4.9384 1.22392 4.85384 1.51346 4.76939 1.84439C4.59762 2.51753 4.4375 3.31964 4.4375 3.94119H3.4375C3.4375 3.18832 3.6248 2.28541 3.80045 1.59713C3.88971 1.24734 3.97886 0.942076 4.04576 0.724022C4.07925 0.614872 4.10726 0.527255 4.12706 0.466475C4.13696 0.436077 4.14481 0.412368 4.15027 0.39601C4.153 0.387831 4.15513 0.381487 4.15663 0.377061C4.15737 0.374848 4.15796 0.373115 4.15838 0.371871C4.15859 0.371249 4.15876 0.370749 4.15889 0.370374C4.15896 0.370186 4.15901 0.370028 4.15905 0.369903C4.15907 0.36984 4.1591 0.369769 4.15911 0.369738C4.15913 0.369674 4.15915 0.369618 4.63234 0.531137ZM11 6.00282C11 4.92997 10.9652 4.09048 10.8635 3.42726C10.7618 2.764 10.5988 2.31777 10.3713 2.0036C9.93701 1.40369 9.13516 1.11104 7.34523 1.03063L7.39011 0.031641C9.18017 0.112059 10.4445 0.399393 11.1813 1.41718C11.5395 1.91187 11.7382 2.53392 11.852 3.2757C11.9657 4.01751 12 4.9198 12 6.00282H11ZM7.5625 3.94119C7.5625 3.31964 7.40239 2.51753 7.23061 1.84439C7.14616 1.51346 7.06161 1.22392 6.99823 1.01734C6.96657 0.914172 6.9403 0.832018 6.92209 0.776105C6.91299 0.748157 6.90591 0.726789 6.9012 0.712657C6.89884 0.705591 6.89707 0.700337 6.89594 0.696976C6.89537 0.695294 6.89496 0.694088 6.89471 0.693364C6.89459 0.693003 6.89451 0.692761 6.89447 0.692643C6.89445 0.692583 6.89444 0.692554 6.89444 0.692556C6.89444 0.692557 6.89445 0.692582 6.89445 0.692583C6.89446 0.692616 6.89447 0.692655 7.36767 0.531137C7.84086 0.36962 7.84088 0.369676 7.8409 0.369739C7.84091 0.36977 7.84093 0.369842 7.84096 0.369905C7.841 0.37003 7.84105 0.370187 7.84112 0.370375C7.84124 0.37075 7.84141 0.37125 7.84163 0.371872C7.84205 0.373116 7.84264 0.374849 7.84338 0.377063C7.84488 0.381488 7.84701 0.387832 7.84974 0.396011C7.8552 0.41237 7.86305 0.436078 7.87295 0.466476C7.89274 0.527256 7.92075 0.614873 7.95424 0.724023C8.02114 0.942077 8.1103 1.24734 8.19956 1.59713C8.3752 2.28541 8.5625 3.18832 8.5625 3.94119H7.5625ZM7.34523 1.03063C6.4505 0.990438 5.54951 0.990439 4.65478 1.03063L4.6099 0.031641C5.53453 -0.00989723 6.46547 -0.00989723 7.39011 0.031641L7.34523 1.03063ZM1.55041 6.50282H0.5V5.50282H1.55041V6.50282ZM10.4496 5.50282H11.5V6.50282H10.4496V5.50282ZM8.5625 3.94119C8.5625 4.39072 8.77702 4.77031 9.12962 5.05083C9.4886 5.33644 9.97462 5.50282 10.4496 5.50282V6.50282C9.75731 6.50282 9.04978 6.26519 8.50703 5.83338C7.95789 5.39649 7.5625 4.74527 7.5625 3.94119H8.5625ZM4.4375 3.94119C4.4375 4.74527 4.04211 5.39649 3.49297 5.83338C2.95022 6.26519 2.24269 6.50282 1.55041 6.50282V5.50282C2.02538 5.50282 2.5114 5.33644 2.87038 5.05084C3.22298 4.77031 3.4375 4.39072 3.4375 3.94119H4.4375ZM6 8.00049C7.03553 8.00049 7.875 8.83995 7.875 9.87549H6.875C6.875 9.39224 6.48325 9.00049 6 9.00049V8.00049ZM4.125 9.87549C4.125 8.83995 4.96447 8.00049 6 8.00049V9.00049C5.51675 9.00049 5.125 9.39224 5.125 9.87549H4.125Z"
                        fill="#85858F"
                      ></path>
                    </svg>
                    نمایشگاه
                  </span>
                  <div class="advert__wrapper">
                    <p class="advert__price">
                      ۱۸,۶۰۰,۰۰۰,۰۰۰
                      <span>تومان</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="advert">
              <div class="advert__banner">
                <img
                  src="https://s100.divarcdn.com/static/pictures/1653929052/gYUO7n8R.webp"
                  alt="Hamcar"
                  class="advert__img"
                />
              </div>
              <div class="advert__body">
                <div class="advert__header">
                  <h3 class="advert__name">آئودی ، R8</h3>
                  <span class="advert__date">(10 دقیقه پیش)</span>
                  <span class="advert__date-wide">10 دقیقه پیش</span>
                </div>
                <div class="advert__info">
                  <span>مدل ۲۰۱۹</span>
                  <span>34,000 کیلومتر</span>
                  <span>اتوماتیک</span>
                </div>
                <span class="advert__location">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <mask id="path-1-inside-1_778_1497" fill="white">
                      <path
                        d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      ></path>
                    </mask>
                    <path
                      d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      stroke="#0F0F10"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      mask="url(#path-1-inside-1_778_1497)"
                    ></path>
                    <circle
                      r="2.06667"
                      transform="matrix(-1 0 0 1 8.00033 6.66667)"
                      stroke="#0F0F10"
                      stroke-width="1.2"
                    ></circle>
                  </svg>
                  تهران، فلان منطقه
                </span>
                <div class="advert__footer">
                  <div class="advert__wrapper">
                    <p class="advert__price">
                      ۱۸,۶۰۰,۰۰۰,۰۰۰
                      <span>تومان</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="advert">
              <div class="advert__badge">
                <svg
                  class="advert__safe-badge"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M17.3912 3.58107L10.7912 1.27631C10.2789 1.0974 9.72108 1.0974 9.20876 1.27631L2.60876 3.58107C1.64533 3.91751 1 4.82418 1 5.84467V13.5714C1 18.9277 6.22812 21.3362 8.88803 22.4986C9.59168 22.8061 10.4083 22.8061 11.112 22.4986C13.7719 21.3362 19 18.9277 19 13.5714V5.84467C19 4.82418 18.3547 3.9175 17.3912 3.58107Z"
                    fill="#69CE91"
                  ></path>
                  <path
                    d="M7 12L9 14L13 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="advert__verified-badge"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.4701 2.01769C11.2384 1.00444 12.7616 1.00444 13.5299 2.01769L14.5359 3.34437C14.9551 3.89723 15.64 4.18092 16.3273 4.08641L17.9767 3.85963C19.2365 3.68642 20.3136 4.76352 20.1404 6.02326L19.9136 7.67268C19.8191 8.36004 20.1028 9.04492 20.6556 9.46413L21.9823 10.4701C22.9956 11.2384 22.9956 12.7616 21.9823 13.5299L20.6556 14.5359C20.1028 14.9551 19.8191 15.64 19.9136 16.3273L20.1404 17.9767C20.3136 19.2365 19.2365 20.3136 17.9767 20.1404L16.3273 19.9136C15.64 19.8191 14.9551 20.1028 14.5359 20.6556L13.5299 21.9823C12.7616 22.9956 11.2384 22.9956 10.4701 21.9823L9.46413 20.6556C9.04492 20.1028 8.36004 19.8191 7.67268 19.9136L6.02326 20.1404C4.76352 20.3136 3.68642 19.2365 3.85963 17.9767L4.08641 16.3273C4.18092 15.64 3.89723 14.9551 3.34437 14.5359L2.01769 13.5299C1.00444 12.7616 1.00444 11.2384 2.01769 10.4701L3.34437 9.46413C3.89723 9.04492 4.18092 8.36004 4.08641 7.67268L3.85963 6.02326C3.68642 4.76352 4.76352 3.68642 6.02326 3.85963L7.67268 4.08641C8.36004 4.18092 9.04492 3.89723 9.46413 3.34437L10.4701 2.01769Z"
                    fill="#007AFF"
                  ></path>
                  <path
                    d="M9 12.333L11 14.333L15 10.333"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="advert__hamcar-badge"
                  width="24"
                  height="72"
                  viewBox="0 0 24 72"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4924 21.0664C18.3056 24.2486 23.9998 29.3724 23.9998 35.9996C23.9997 42.6268 18.3056 47.7506 12.4924 50.9328C5.04812 55.0079 -3.97123e-07 62.9139 0 71.999L-3.14719e-06 -0.000236511C-3.14718e-06 -9.91821e-05 -1.04907e-06 4.57764e-05 -1.04907e-06 0.000183105C-6.51945e-07 9.0853 5.04812 16.9914 12.4924 21.0664Z"
                    fill="#FF9E0B"
                  ></path>
                  <path
                    d="M7.3461 34.1437C7.36902 33.3981 7.81612 32.7901 8.5269 32.5722C8.8135 32.4804 9.12302 32.4345 9.42109 32.423C11.8515 32.4116 14.2818 32.423 16.7122 32.4116C17.3313 32.4116 17.9503 32.3886 18.5694 32.3657C18.6267 32.3657 18.6955 32.3657 18.7528 32.3657C18.7757 32.3657 18.8101 32.3542 18.8445 32.3427C18.8445 32.033 18.8216 31.7348 18.8445 31.448C18.9019 30.863 18.7643 30.3583 18.2713 30.0027C18.2599 29.9912 18.2484 29.9683 18.2369 29.9453C15.1646 29.9453 12.0922 29.9453 9.01985 29.9453C8.67593 30.0027 8.32054 30.06 7.97662 30.1403C6.69265 30.4386 5.68381 31.1153 5.11061 32.3427C4.77815 33.0539 4.65205 33.811 4.62912 34.5796C4.61765 34.809 4.62912 35.0384 4.62912 35.2564C5.54624 35.2564 6.42897 35.2564 7.3461 35.2564C7.3461 34.8663 7.33463 34.4993 7.3461 34.1437Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12.253 42.7597C13.0326 42.5418 13.7433 42.1862 14.3509 41.6356C15.0732 40.9702 15.4744 40.1329 15.7151 39.2037C15.8069 38.8596 15.8298 38.504 15.8871 38.1369C15.0044 38.1369 14.1904 38.1369 13.3536 38.1369C13.3306 38.2402 13.3192 38.3319 13.2848 38.4237C13.1013 39.0431 12.8262 39.6052 12.2874 40.0067C11.5881 40.5229 10.8085 40.5917 9.98312 40.4655C8.81379 40.2935 8.10302 39.5823 7.67885 38.5269C7.41518 37.8846 7.30054 37.2078 7.28907 36.4736C6.5783 36.4736 5.86753 36.4736 5.12237 36.4736C4.96187 36.4736 4.81284 36.4736 4.65234 36.4736C4.68674 36.8063 4.73259 37.1619 4.76698 37.506C4.8243 38.2057 4.99627 38.894 5.23701 39.5478C5.56947 40.4541 6.09681 41.2226 6.83051 41.8306C7.03686 42.0026 7.25468 42.1518 7.4725 42.2779C8.14888 42.6679 8.9055 42.8744 9.68506 42.9318C10.5449 43.0006 11.4161 43.0006 12.253 42.7597Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="advert__banner">
                <img
                  src="https://s100.divarcdn.com/static/pictures/1653927284/gYUyqrEL.1.webp"
                  alt="Hamcar"
                  class="advert__img"
                />
                <span class="advert__flag advert__flag--place">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M11.0515 0.795975L11.0852 0.04673L11.0515 0.795975ZM1.5 9.00349C1.5 10.6116 1.55208 11.8703 1.70439 12.8648C1.8567 13.8594 2.10092 14.5289 2.44161 15.0004C3.09186 15.9003 4.29205 16.3399 6.97144 16.4613L6.90356 17.9598C4.22281 17.8383 2.32925 17.406 1.22579 15.8789C0.689617 15.1369 0.391991 14.2041 0.221671 13.0919C0.0513383 11.9796 0 10.6269 0 9.0035L1.5 9.00349ZM6.97144 16.4613C7.58044 16.4889 8.25389 16.5 9 16.5V18C8.24041 18 7.54277 17.9887 6.90356 17.9598L6.97144 16.4613ZM6.1875 17.2105V14.8125H7.6875V17.2105H6.1875ZM9 16.5C9.74611 16.5 10.4196 16.4889 11.0286 16.4613L11.0964 17.9598C10.4572 17.9887 9.75959 18 9 18V16.5ZM11.0286 16.4613C13.7079 16.3399 14.9081 15.9003 15.5584 15.0004C15.8991 14.5289 16.1433 13.8594 16.2956 12.8648C16.4479 11.8703 16.5 10.6116 16.5 9.0035L18 9.00349C18 10.6269 17.9487 11.9796 17.7783 13.0919C17.608 14.2041 17.3104 15.1369 16.7742 15.8789C15.6707 17.406 13.7772 17.8383 11.0964 17.9598L11.0286 16.4613ZM11.8125 14.8125V17.2105H10.3125V14.8125H11.8125ZM9 8.25349C9.68804 8.25349 10.2688 8.04241 10.669 7.6767C11.0583 7.32099 11.3438 6.75881 11.3438 5.91105H12.8438C12.8438 7.12492 12.4197 8.10896 11.6808 8.78407C10.9529 9.44917 9.98677 9.75349 9 9.75349V8.25349ZM6.65625 5.91105C6.65625 6.75881 6.94167 7.32099 7.33098 7.6767C7.73123 8.04241 8.31196 8.25349 9 8.25349V9.75349C8.01323 9.75349 7.0471 9.44917 6.31917 8.78407C5.58031 8.10896 5.15625 7.12492 5.15625 5.91105H6.65625ZM6.98217 1.54522C4.29727 1.66583 3.09449 2.1048 2.44301 3.00467C2.10184 3.47592 1.85724 4.14527 1.7047 5.14015C1.55216 6.13498 1.5 7.39423 1.5 9.00349L0 9.0035C0 7.37897 0.0514069 6.02553 0.222024 4.91281C0.392632 3.80014 0.690791 2.86707 1.228 2.12504C2.33327 0.598356 4.22974 0.167355 6.91485 0.04673L6.98217 1.54522ZM6.94851 0.795975C7.6583 1.03825 7.65832 1.03819 7.65834 1.03814C7.65834 1.03814 7.65835 1.03811 7.65835 1.03811C7.65835 1.0381 7.65834 1.03815 7.65831 1.03823C7.65825 1.03841 7.65812 1.03877 7.65794 1.03932C7.65757 1.0404 7.65696 1.04221 7.65611 1.04473C7.6544 1.04978 7.65175 1.05766 7.64821 1.06825C7.64114 1.08945 7.63052 1.1215 7.61687 1.16343C7.58956 1.2473 7.55015 1.37053 7.50267 1.52528C7.4076 1.83515 7.28077 2.26946 7.15409 2.76585C6.89642 3.77556 6.65625 4.97873 6.65625 5.91105H5.15625C5.15625 4.78175 5.43721 3.42738 5.70067 2.39496C5.83456 1.87028 5.9683 1.41238 6.06865 1.0853C6.11888 0.921576 6.1609 0.79015 6.19059 0.69898C6.20543 0.653383 6.21721 0.617819 6.2254 0.593283C6.2295 0.581013 6.2327 0.571497 6.23494 0.564859C6.23606 0.561539 6.23694 0.558939 6.23757 0.557074C6.23789 0.556141 6.23814 0.555391 6.23834 0.554829C6.23843 0.554546 6.23851 0.55431 6.23858 0.554121C6.23861 0.554028 6.23865 0.553921 6.23866 0.553873C6.23869 0.553778 6.23872 0.553696 6.94851 0.795975ZM16.5 9.0035C16.5 7.39423 16.4478 6.13498 16.2953 5.14015C16.1428 4.14527 15.8982 3.47592 15.557 3.00467C14.9055 2.1048 13.7027 1.66584 11.0178 1.54522L11.0852 0.04673C13.7703 0.167356 15.6667 0.598358 16.772 2.12504C17.3092 2.86707 17.6074 3.80014 17.778 4.91281C17.9486 6.02553 18 7.37897 18 9.00349L16.5 9.0035ZM11.3438 5.91105C11.3438 4.97873 11.1036 3.77556 10.8459 2.76585C10.7192 2.26946 10.5924 1.83514 10.4973 1.52528C10.4499 1.37053 10.4104 1.24729 10.3831 1.16343C10.3695 1.1215 10.3589 1.08945 10.3518 1.06825C10.3483 1.05766 10.3456 1.04977 10.3439 1.04473C10.3431 1.04221 10.3424 1.0404 10.3421 1.03931C10.3419 1.03877 10.3418 1.03841 10.3417 1.03823C10.3417 1.03814 10.3417 1.0381 10.3417 1.0381C10.3417 1.03811 10.3417 1.03814 10.3417 1.03814C10.3417 1.03819 10.3417 1.03825 11.0515 0.795975C11.7613 0.553698 11.7613 0.553782 11.7613 0.553875C11.7614 0.553923 11.7614 0.554029 11.7614 0.554125C11.7615 0.554314 11.7616 0.554548 11.7617 0.554831C11.7619 0.555393 11.7621 0.556143 11.7624 0.557076C11.7631 0.558941 11.764 0.561543 11.7651 0.564861C11.7673 0.571499 11.7705 0.581015 11.7746 0.593285C11.7828 0.617823 11.7946 0.653385 11.8094 0.698982C11.8391 0.790152 11.8811 0.921577 11.9314 1.0853C12.0317 1.41238 12.1654 1.87029 12.2993 2.39496C12.5628 3.42738 12.8438 4.78175 12.8438 5.91105H11.3438ZM11.0178 1.54522C9.67575 1.48493 8.32426 1.48493 6.98217 1.54522L6.91485 0.04673C8.3018 -0.0155773 9.69821 -0.0155773 11.0852 0.04673L11.0178 1.54522ZM2.32561 9.75349H0.75V8.25349H2.32561V9.75349ZM15.6744 8.25349H17.25V9.75349H15.6744V8.25349ZM12.8438 5.91105C12.8438 6.58535 13.1655 7.15474 13.6944 7.57552C14.2329 8.00393 14.9619 8.25349 15.6744 8.25349V9.75349C14.636 9.75349 13.5747 9.39705 12.7605 8.74934C11.9368 8.09401 11.3438 7.11718 11.3438 5.91105H12.8438ZM6.65625 5.91105C6.65625 7.11718 6.06316 8.09401 5.23946 8.74934C4.42533 9.39705 3.36404 9.75349 2.32561 9.75349V8.25349C3.03807 8.25349 3.7671 8.00393 4.30557 7.57552C4.83446 7.15474 5.15625 6.58535 5.15625 5.91105H6.65625ZM9 12C10.5533 12 11.8125 13.2592 11.8125 14.8125H10.3125C10.3125 14.0876 9.72487 13.5 9 13.5V12ZM6.1875 14.8125C6.1875 13.2592 7.4467 12 9 12V13.5C8.27513 13.5 7.6875 14.0876 7.6875 14.8125H6.1875Z"
                      fill="#DCDDE0"
                    ></path>
                  </svg>
                  نمایشگاه
                </span>
                <span class="advert__flag advert__flag--picture-number">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M11.25 0.750045L11.25 0.750045L6.75 0.75002C6.477 0.750017 6.32838 0.784293 6.25488 0.812071C6.22059 0.82503 6.20535 0.835548 6.201 0.838789C6.19744 0.84144 6.19669 0.842477 6.19592 0.843537L6.1958 0.843701C6.19226 0.848549 6.17245 0.878357 6.15031 0.977337C6.13242 1.05733 6.12209 1.1328 6.10753 1.23912C6.10135 1.28428 6.09441 1.335 6.0858 1.394C6.0371 1.72776 5.94208 2.29472 5.45685 2.72869C4.98226 3.15315 4.286 3.32145 3.37481 3.32145C2.65917 3.32145 2.20443 3.49633 1.89257 3.74608C1.5731 4.00191 1.32204 4.4016 1.13852 4.99641C0.75777 6.23039 0.750001 7.99428 0.750001 10.1626L0.750001 10.1633C0.750001 13.4466 1.17202 15.0659 2.21085 15.9629C2.73623 16.4166 3.48771 16.7461 4.60592 16.9568C5.72723 17.1682 7.1603 17.25 9 17.25C10.8382 17.25 12.2703 17.1635 13.3905 16.9467C14.5073 16.7306 15.2599 16.3949 15.7868 15.9361C16.8292 15.0284 17.25 13.4048 17.25 10.1633C17.25 8.03802 17.2424 6.27213 16.861 5.02643C16.6767 4.42448 16.4241 4.01594 16.1025 3.75396C15.7899 3.49931 15.3364 3.32145 14.625 3.32145C13.7138 3.32145 13.0176 3.15315 12.543 2.72868C12.0578 2.2947 11.9628 1.72771 11.9141 1.39397C11.9055 1.33496 11.8986 1.28424 11.8924 1.23908C11.8778 1.13276 11.8675 1.0573 11.8496 0.977309C11.8275 0.878333 11.8077 0.848535 11.8042 0.8437L11.804 0.843535C11.8033 0.842481 11.8025 0.84145 11.799 0.838804C11.7946 0.835568 11.7794 0.825052 11.7451 0.812094C11.6716 0.784319 11.523 0.750042 11.25 0.750045Z"
                      stroke="#DCDDE0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <ellipse
                      rx="0.750001"
                      ry="0.75"
                      transform="matrix(-1 0 0 1 13.5 6)"
                      fill="#DCDDE0"
                    ></ellipse>
                    <path
                      d="M9 6.75C7.34315 6.75 6 8.09315 6 9.75C6 11.4069 7.34315 12.75 9 12.75C10.6569 12.75 12 11.4069 12 9.75C12 8.09315 10.6569 6.75 9 6.75Z"
                      stroke="#DCDDE0"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  5
                </span>
              </div>
              <div class="advert__body">
                <div class="advert__header">
                  <h3 class="advert__name">آئودی ، R8</h3>
                  <span class="advert__date">(10 دقیقه پیش)</span>
                  <span class="advert__date-wide">10 دقیقه پیش</span>
                </div>
                <div class="advert__info">
                  <span>مدل ۲۰۱۹</span>
                  <span>34,000 کیلومتر</span>
                  <span>اتوماتیک</span>
                </div>
                <span class="advert__location">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <mask id="path-1-inside-1_778_1497" fill="white">
                      <path
                        d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      ></path>
                    </mask>
                    <path
                      d="M0.116713 8C0.904956 11.9994 5.0979 14.5604 7.02718 15.544C7.64323 15.8581 8.35678 15.8581 8.97283 15.544C10.9021 14.5604 15.0951 11.9994 15.8833 8C16.5402 4.66667 14.4919 0 8 0C1.50811 0 -0.54026 4.66667 0.116713 8Z"
                      stroke="#0F0F10"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      mask="url(#path-1-inside-1_778_1497)"
                    ></path>
                    <circle
                      r="2.06667"
                      transform="matrix(-1 0 0 1 8.00033 6.66667)"
                      stroke="#0F0F10"
                      stroke-width="1.2"
                    ></circle>
                  </svg>
                  تهران، فلان منطقه
                </span>
                <div class="advert__footer">
                  <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M7.36767 0.531137L7.39011 0.031641L7.36767 0.531137ZM1 6.00282C1 7.07492 1.03472 7.91401 1.13626 8.57703C1.2378 9.24011 1.40062 9.68642 1.62774 10.0007C2.06124 10.6007 2.86137 10.8938 4.64763 10.9747L4.60237 11.9737C2.81521 11.8927 1.55284 11.6045 0.817196 10.5864C0.459744 10.0917 0.261328 9.46987 0.147781 8.72841C0.0342255 7.98689 0 7.0851 0 6.00282H1ZM4.64763 10.9747C5.05362 10.9931 5.50259 11.0005 6 11.0005V12.0005C5.49361 12.0005 5.02851 11.993 4.60237 11.9737L4.64763 10.9747ZM4.125 11.4742V9.87549H5.125V11.4742H4.125ZM6 11.0005C6.49741 11.0005 6.94638 10.9931 7.35237 10.9747L7.39763 11.9737C6.97149 11.993 6.50639 12.0005 6 12.0005V11.0005ZM7.35237 10.9747C9.13863 10.8938 9.93876 10.6007 10.3723 10.0007C10.5994 9.68642 10.7622 9.24011 10.8637 8.57703C10.9653 7.91401 11 7.07492 11 6.00282H12C12 7.0851 11.9658 7.98689 11.8522 8.72841C11.7387 9.46987 11.5403 10.0917 11.1828 10.5864C10.4472 11.6045 9.18479 11.8927 7.39763 11.9737L7.35237 10.9747ZM7.875 9.87549V11.4742H6.875V9.87549H7.875ZM6 5.50282C6.45869 5.50282 6.84585 5.3621 7.11268 5.11829C7.37222 4.88115 7.5625 4.50636 7.5625 3.94119H8.5625C8.5625 4.75044 8.2798 5.40646 7.78722 5.85653C7.30194 6.29993 6.65784 6.50282 6 6.50282V5.50282ZM4.4375 3.94119C4.4375 4.50636 4.62778 4.88115 4.88732 5.11829C5.15415 5.3621 5.54131 5.50282 6 5.50282V6.50282C5.34216 6.50282 4.69806 6.29993 4.21278 5.85653C3.7202 5.40646 3.4375 4.75044 3.4375 3.94119H4.4375ZM4.65478 1.03063C2.86485 1.11104 2.06299 1.40369 1.62867 2.0036C1.40122 2.31777 1.23816 2.764 1.13646 3.42726C1.03477 4.09048 1 4.92997 1 6.00282H0C0 4.9198 0.0342713 4.01751 0.148016 3.2757C0.261755 2.53392 0.460527 1.91187 0.818664 1.41718C1.55551 0.399392 2.81983 0.112059 4.6099 0.031641L4.65478 1.03063ZM4.63234 0.531137C5.10553 0.692657 5.10555 0.692616 5.10556 0.692584C5.10556 0.692584 5.10557 0.692559 5.10557 0.692558C5.10557 0.692556 5.10556 0.692585 5.10554 0.692644C5.1055 0.692763 5.10542 0.693004 5.10529 0.693365C5.10505 0.694089 5.10464 0.695296 5.10407 0.696977C5.10294 0.700338 5.10117 0.705593 5.09881 0.712658C5.09409 0.72679 5.08701 0.748158 5.07791 0.776107C5.05971 0.832019 5.03343 0.914174 5.00178 1.01734C4.9384 1.22392 4.85384 1.51346 4.76939 1.84439C4.59762 2.51753 4.4375 3.31964 4.4375 3.94119H3.4375C3.4375 3.18832 3.6248 2.28541 3.80045 1.59713C3.88971 1.24734 3.97886 0.942076 4.04576 0.724022C4.07925 0.614872 4.10726 0.527255 4.12706 0.466475C4.13696 0.436077 4.14481 0.412368 4.15027 0.39601C4.153 0.387831 4.15513 0.381487 4.15663 0.377061C4.15737 0.374848 4.15796 0.373115 4.15838 0.371871C4.15859 0.371249 4.15876 0.370749 4.15889 0.370374C4.15896 0.370186 4.15901 0.370028 4.15905 0.369903C4.15907 0.36984 4.1591 0.369769 4.15911 0.369738C4.15913 0.369674 4.15915 0.369618 4.63234 0.531137ZM11 6.00282C11 4.92997 10.9652 4.09048 10.8635 3.42726C10.7618 2.764 10.5988 2.31777 10.3713 2.0036C9.93701 1.40369 9.13516 1.11104 7.34523 1.03063L7.39011 0.031641C9.18017 0.112059 10.4445 0.399393 11.1813 1.41718C11.5395 1.91187 11.7382 2.53392 11.852 3.2757C11.9657 4.01751 12 4.9198 12 6.00282H11ZM7.5625 3.94119C7.5625 3.31964 7.40239 2.51753 7.23061 1.84439C7.14616 1.51346 7.06161 1.22392 6.99823 1.01734C6.96657 0.914172 6.9403 0.832018 6.92209 0.776105C6.91299 0.748157 6.90591 0.726789 6.9012 0.712657C6.89884 0.705591 6.89707 0.700337 6.89594 0.696976C6.89537 0.695294 6.89496 0.694088 6.89471 0.693364C6.89459 0.693003 6.89451 0.692761 6.89447 0.692643C6.89445 0.692583 6.89444 0.692554 6.89444 0.692556C6.89444 0.692557 6.89445 0.692582 6.89445 0.692583C6.89446 0.692616 6.89447 0.692655 7.36767 0.531137C7.84086 0.36962 7.84088 0.369676 7.8409 0.369739C7.84091 0.36977 7.84093 0.369842 7.84096 0.369905C7.841 0.37003 7.84105 0.370187 7.84112 0.370375C7.84124 0.37075 7.84141 0.37125 7.84163 0.371872C7.84205 0.373116 7.84264 0.374849 7.84338 0.377063C7.84488 0.381488 7.84701 0.387832 7.84974 0.396011C7.8552 0.41237 7.86305 0.436078 7.87295 0.466476C7.89274 0.527256 7.92075 0.614873 7.95424 0.724023C8.02114 0.942077 8.1103 1.24734 8.19956 1.59713C8.3752 2.28541 8.5625 3.18832 8.5625 3.94119H7.5625ZM7.34523 1.03063C6.4505 0.990438 5.54951 0.990439 4.65478 1.03063L4.6099 0.031641C5.53453 -0.00989723 6.46547 -0.00989723 7.39011 0.031641L7.34523 1.03063ZM1.55041 6.50282H0.5V5.50282H1.55041V6.50282ZM10.4496 5.50282H11.5V6.50282H10.4496V5.50282ZM8.5625 3.94119C8.5625 4.39072 8.77702 4.77031 9.12962 5.05083C9.4886 5.33644 9.97462 5.50282 10.4496 5.50282V6.50282C9.75731 6.50282 9.04978 6.26519 8.50703 5.83338C7.95789 5.39649 7.5625 4.74527 7.5625 3.94119H8.5625ZM4.4375 3.94119C4.4375 4.74527 4.04211 5.39649 3.49297 5.83338C2.95022 6.26519 2.24269 6.50282 1.55041 6.50282V5.50282C2.02538 5.50282 2.5114 5.33644 2.87038 5.05084C3.22298 4.77031 3.4375 4.39072 3.4375 3.94119H4.4375ZM6 8.00049C7.03553 8.00049 7.875 8.83995 7.875 9.87549H6.875C6.875 9.39224 6.48325 9.00049 6 9.00049V8.00049ZM4.125 9.87549C4.125 8.83995 4.96447 8.00049 6 8.00049V9.00049C5.51675 9.00049 5.125 9.39224 5.125 9.87549H4.125Z"
                        fill="#85858F"
                      ></path>
                    </svg>
                    نمایشگاه
                  </span>
                  <div class="advert__wrapper">
                    <p class="advert__price">
                      ۱۸,۶۰۰,۰۰۰,۰۰۰
                      <span>تومان</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-list-btn">
        <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
          <mask id="path-1-inside-1_2206_11714" fill="white">
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
            mask="url(#path-1-inside-1_2206_11714)"
          ></path>
          <path
            d="M5.83203 4.1665H10.832"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span>فیلتر آگهی ها</span>
        <span class="filter-list-btn__badge">5</span>
      </div>
      <div class="filters-page">
        <header class="nav filters-page__header">
          <p class="nav__title">
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
              <path
                d="M2.66989 1.25H13.3301C14.0863 1.25 14.7099 1.71261 15.0326 2.41337C15.3561 3.11591 15.3388 3.98905 14.845 4.70389L10.4033 11.1346C10.0835 11.5976 9.91505 12.1533 9.91505 12.7184V16.9594C9.91505 17.3316 9.76214 17.6686 9.52255 17.8854L7.74585 19.493C7.41311 19.7941 7.02357 19.8112 6.69804 19.6457C6.36477 19.4762 6.08495 19.1016 6.08495 18.5671V12.7184C6.08495 12.1533 5.9165 11.5976 5.59671 11.1346L1.15496 4.70389C0.661207 3.98905 0.64394 3.11591 0.967442 2.41337C1.29012 1.71261 1.91365 1.25 2.66989 1.25Z"
                stroke="#0F0F10"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.59766 4.66669H10.3977"
                stroke="#0F0F10"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            5 فیلتر انتخاب شده
          </p>
          <div class="nav__icon nav__icon--close-icon nav__icon--fixed-right">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1.33203 1.33331L7.9987 7.99998M14.6654 14.6666L7.9987 7.99998M7.9987 7.99998L14.6654 1.33331M7.9987 7.99998L1.33203 14.6666"
                stroke="#ABADB3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </header>
        <main class="filter-page__main">
          <div class="filter-group">
            <div class="filter">
              <div class="filter__header">
                <span class="filter__name">برند</span>
                <svg
                  class="filter__arrow-icon"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M13 1.5L7 7.5L1 1.5"
                    stroke="#ABADB3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="filter__body">
                <div class="filter__search">
                  <form action="">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="جستجوی نام برند"
                    />
                  </form>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="14" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="14">
                    <span class="filter__text">ایران خودرو</span>
                    <span class="filter__number">87</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="15" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="15">
                    <span class="filter__text">سایپا</span>
                    <span class="filter__number">23</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter">
              <div class="filter__header">
                <span class="filter__name">مدل</span>
                <svg
                  class="filter__arrow-icon"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M13 1.5L7 7.5L1 1.5"
                    stroke="#ABADB3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="filter__body">
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="16" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="16">
                    <span class="filter__text">مدل شماره یک</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="17" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="17">
                    <span class="filter__text">مدل شماره دو</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="18" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="18">
                    <span class="filter__text">مدل شماره سه</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
                <div class="filter__item">
                  <label class="checkbox">
                    <input type="checkbox" value="4" id="19" />
                    <span class="checkmark"></span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <label class="filter__data" for="19">
                    <span class="filter__text">مدل شماره چهار</span>
                    <span class="filter__number">123</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter">
              <div class="filter__header">
                <span class="filter__name">سال تولید</span>
                <svg
                  class="filter__arrow-icon"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M13 1.5L7 7.5L1 1.5"
                    stroke="#ABADB3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="filter__body filter__body--scroll-disable">
                <div class="filter__space">
                  <div class="filter__right">
                    <span>از</span>
                    <span>تا</span>
                  </div>
                  <div class="filter__wrapper">
                    <div class="dropdown-wrapper">
                      <div class="dropdown-box" onclick="openDropdown()">
                        <svg
                          class="dropdown-box__icon"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M13 1L7 7L1 1"
                            stroke="#C6C7CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <input
                          type="text"
                          class="dropdown-box__input"
                          readonly=""
                          placeholder="انتخاب کنید"
                        />
                      </div>
                      <div class="dropdown">
                        <div class="dropdown__search-box">
                          <input
                            type="text"
                            class="dropdown__input"
                            placeholder="جستجو"
                          />
                          <svg
                            class="dropdown__icon"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M0.75 7.65203C0.75 10.1868 1.33034 11.8662 2.38856 12.9222C3.44707 13.9786 5.12683 14.5542 7.65217 14.5542C10.1774 14.5542 11.8572 13.9784 12.9158 12.9219C13.974 11.8656 14.5543 10.1862 14.5543 7.65203C14.5543 5.11781 13.974 3.43842 12.9158 2.3822C11.8572 1.32569 10.1774 0.749852 7.65217 0.749852C5.12683 0.749852 3.44707 1.32545 2.38856 2.3818C1.33034 3.43786 0.75 5.1172 0.75 7.65203Z"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15.3039 15.3044L13.4541 13.4546"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <ul class="dropdown__list">
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                          <li class="dropdown__item">۱۳۸۰ - ۲۰۰۰</li>
                        </ul>
                      </div>
                    </div>
                    <div class="dropdown-wrapper">
                      <div class="dropdown-box" onclick="openDropdown()">
                        <svg
                          class="dropdown-box__icon"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M13 1L7 7L1 1"
                            stroke="#C6C7CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <input
                          type="text"
                          class="dropdown-box__input"
                          readonly=""
                          placeholder="انتخاب کنید"
                        />
                      </div>
                      <div class="dropdown">
                        <div class="dropdown__search-box">
                          <input
                            type="text"
                            class="dropdown__input"
                            placeholder="جستجو"
                          />
                          <svg
                            class="dropdown__icon"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M0.75 7.65203C0.75 10.1868 1.33034 11.8662 2.38856 12.9222C3.44707 13.9786 5.12683 14.5542 7.65217 14.5542C10.1774 14.5542 11.8572 13.9784 12.9158 12.9219C13.974 11.8656 14.5543 10.1862 14.5543 7.65203C14.5543 5.11781 13.974 3.43842 12.9158 2.3822C11.8572 1.32569 10.1774 0.749852 7.65217 0.749852C5.12683 0.749852 3.44707 1.32545 2.38856 2.3818C1.33034 3.43786 0.75 5.1172 0.75 7.65203Z"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15.3039 15.3044L13.4541 13.4546"
                              stroke="#ABADB3"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <ul class="dropdown__list">
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                          <li class="dropdown__item">1388 - 2008</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">قیمت</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="flex">
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>۳،۰۰۰،۰۰۰،۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>۵،۰۰۰،۰۰۰،۰۰۰</p>
                  <span>تومان</span>
                </div>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="30" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="30">
                  <span class="filter__text">اقساطی</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">کارکرد</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__tabs">
                <span class="filter__tab-item">صفر</span>
                <span class="filter__tab-item filter__tab-item--active"
                  >کارکرده</span
                >
                <span class="filter__tab-item">همه</span>
              </div>
              <div class="flex">
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>1</p>
                  <span>کیلومتر</span>
                </div>
                <div class="filter__selected-range">
                  <span>از</span>
                  <p>۵۰۰،۰۰۰</p>
                  <span>کیلومتر</span>
                </div>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">شهر</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="1" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="1">
                  <span class="filter__text">تبریز</span>
                  <span class="filter__number">223</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="2" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="2">
                  <span class="filter__text">تهران</span>
                  <span class="filter__number">657</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="3" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="3">
                  <span class="filter__text">اصفهان</span>
                  <span class="filter__number">655</span>
                </label>
              </div>
              <span class="filter__more-btn">مشاهده بیشتر</span>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">شاسی</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__chassis-wrapper">
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="28"
                    viewBox="0 0 59 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7065 10.4427C18.1542 10.4427 17.7065 10.8904 17.7065 11.4427C17.7065 11.995 18.1542 12.4427 18.7065 12.4427V10.4427ZM22.2477 12.4427C22.8 12.4427 23.2477 11.995 23.2477 11.4427C23.2477 10.8904 22.8 10.4427 22.2477 10.4427V12.4427ZM29.3303 10.4427C28.778 10.4427 28.3303 10.8904 28.3303 11.4427C28.3303 11.995 28.778 12.4427 29.3303 12.4427V10.4427ZM32.8716 12.4427C33.4239 12.4427 33.8716 11.995 33.8716 11.4427C33.8716 10.8904 33.4239 10.4427 32.8716 10.4427V12.4427ZM56.8147 19.2019L55.8188 19.1108L56.8147 19.2019ZM57.1724 15.2918L58.1683 15.3829L57.1724 15.2918ZM52.3209 9.51393L52.2384 10.5105L52.3209 9.51393ZM0 13.9885V18.7179H2V13.9885H0ZM13.8774 15.3532C10.4864 15.3532 7.72645 18.0861 7.72645 21.4709H9.72645C9.72645 19.2029 11.5788 17.3532 13.8774 17.3532V15.3532ZM20.0284 21.4709C20.0284 18.0861 17.2684 15.3532 13.8774 15.3532V17.3532C16.176 17.3532 18.0284 19.2029 18.0284 21.4709H20.0284ZM44.7832 15.3532C41.3922 15.3532 38.6323 18.0861 38.6323 21.4709H40.6323C40.6323 19.2029 42.4846 17.3532 44.7832 17.3532V15.3532ZM50.9342 21.4709C50.9342 18.0861 48.1742 15.3532 44.7832 15.3532V17.3532C47.0818 17.3532 48.9342 19.2029 48.9342 21.4709H50.9342ZM7.72645 21.4709C7.72645 22.5849 8.02669 23.6318 8.55136 24.533L10.2798 23.5267C9.92789 22.9223 9.72645 22.2213 9.72645 21.4709H7.72645ZM8.55136 24.533C9.61484 26.3595 11.6026 27.5887 13.8774 27.5887V25.5887C12.3391 25.5887 10.9975 24.7595 10.2798 23.5267L8.55136 24.533ZM6.31194 25.0298H9.41556V23.0298H6.31194V25.0298ZM13.8774 27.5887C16.1522 27.5887 18.14 26.3595 19.2035 24.533L17.4751 23.5267C16.7573 24.7595 15.4158 25.5887 13.8774 25.5887V27.5887ZM19.2035 24.533C19.7281 23.6318 20.0284 22.5849 20.0284 21.4709H18.0284C18.0284 22.2213 17.827 22.9223 17.4751 23.5267L19.2035 24.533ZM38.6323 21.4709C38.6323 22.5849 38.9325 23.6318 39.4572 24.533L41.1856 23.5267C40.8337 22.9223 40.6323 22.2213 40.6323 21.4709H38.6323ZM39.4572 24.533C40.5206 26.3595 42.5084 27.5887 44.7832 27.5887V25.5887C43.2449 25.5887 41.9033 24.7595 41.1856 23.5267L39.4572 24.533ZM18.3393 25.0298H40.3214V23.0298H18.3393V25.0298ZM44.7832 27.5887C47.058 27.5887 49.0458 26.3595 50.1093 24.533L48.3809 23.5267C47.6631 24.7595 46.3216 25.5887 44.7832 25.5887V27.5887ZM50.1093 24.533C50.6339 23.6318 50.9342 22.5849 50.9342 21.4709H48.9342C48.9342 22.2213 48.7328 22.9223 48.3809 23.5267L50.1093 24.533ZM49.2451 25.0298H51.5248V23.0298H49.2451V25.0298ZM57.8105 19.293L58.1683 15.3829L56.1766 15.2006L55.8188 19.1108L57.8105 19.293ZM52.4034 8.51734L44.8383 7.89098L44.6733 9.88416L52.2384 10.5105L52.4034 8.51734ZM41.1829 6.05261C38.5958 3.64036 33.1863 0 24.1794 0V2C32.5898 2 37.5303 5.38141 39.819 7.51539L41.1829 6.05261ZM24.1794 0C18.2486 0 15.0645 1.31433 12.5906 2.93061C11.9878 3.32451 11.4349 3.73089 10.911 4.12256C10.3804 4.51921 9.88901 4.89329 9.37479 5.2523C8.36164 5.95966 7.30466 6.57545 5.93962 7.01082L6.54734 8.91625C8.16714 8.39963 9.40708 7.66898 10.5197 6.89217C11.0684 6.5091 11.5971 6.10667 12.1084 5.72447C12.6264 5.33728 13.1373 4.96248 13.6846 4.60493C15.8113 3.21544 18.6102 2 24.1794 2V0ZM18.7065 12.4427H22.2477V10.4427H18.7065V12.4427ZM29.3303 12.4427H32.8716V10.4427H29.3303V12.4427ZM51.5248 25.0298C54.788 25.0298 57.5132 22.5426 57.8105 19.293L55.8188 19.1108C55.6157 21.3307 53.754 23.0298 51.5248 23.0298V25.0298ZM44.8383 7.89098C43.5323 7.78285 42.271 7.06718 41.1829 6.05261L39.819 7.51539C41.0944 8.70464 42.7588 9.72565 44.6733 9.88416L44.8383 7.89098ZM0 18.7179C0 22.2039 2.82595 25.0298 6.31194 25.0298V23.0298C3.93052 23.0298 2 21.0993 2 18.7179H0ZM58.1683 15.3829C58.4879 11.8902 55.8987 8.80674 52.4034 8.51734L52.2384 10.5105C54.6262 10.7082 56.3949 12.8146 56.1766 15.2006L58.1683 15.3829ZM2 13.9885C2 11.6727 3.96153 9.74098 6.54734 8.91625L5.93962 7.01082C2.93546 7.96898 0 10.4369 0 13.9885H2Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">سدان</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="32"
                    viewBox="0 0 59 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41556 27.5856L10.2879 27.0968L9.41556 27.5856ZM18.3393 27.5856L17.4669 27.0968L18.3393 27.5856ZM40.3214 27.5856L41.1937 27.0968L40.3214 27.5856ZM49.2451 27.5856L48.3727 27.0968L49.2451 27.5856ZM24.0184 22.175C23.4661 22.175 23.0184 22.6227 23.0184 23.175C23.0184 23.7273 23.4661 24.175 24.0184 24.175V22.175ZM34.6423 24.175C35.1945 24.175 35.6423 23.7273 35.6423 23.175C35.6423 22.6227 35.1945 22.175 34.6423 22.175V24.175ZM56.7997 22.7397L57.7958 22.8274L56.7997 22.7397ZM42.6548 10.3819L42.4852 11.3674L42.6548 10.3819ZM41.7546 10.279L41.636 11.2719L41.7546 10.279ZM0 6.31194V22.2737H2V6.31194H0ZM13.8774 18.6099C10.4506 18.6099 7.72645 21.4684 7.72645 24.9271H9.72645C9.72645 22.5126 11.6146 20.6099 13.8774 20.6099V18.6099ZM20.0284 24.9271C20.0284 21.4684 17.3042 18.6099 13.8774 18.6099V20.6099C16.1402 20.6099 18.0284 22.5126 18.0284 24.9271H20.0284ZM44.7832 18.6099C41.3565 18.6099 38.6323 21.4684 38.6323 24.9271H40.6323C40.6323 22.5126 42.5204 20.6099 44.7832 20.6099V18.6099ZM50.9342 24.9271C50.9342 21.4684 48.21 18.6099 44.7832 18.6099V20.6099C47.0461 20.6099 48.9342 22.5126 48.9342 24.9271H50.9342ZM7.72645 24.9271C7.72645 26.0699 8.02279 27.1458 8.5432 28.0745L10.2879 27.0968C9.93179 26.4613 9.72645 25.7212 9.72645 24.9271H7.72645ZM8.5432 28.0745C9.59798 29.9567 11.5837 31.2442 13.8774 31.2442V29.2442C12.358 29.2442 11.0144 28.3931 10.2879 27.0968L8.5432 28.0745ZM6.31194 28.5856H9.41556V26.5856H6.31194V28.5856ZM13.8774 31.2442C16.1712 31.2442 18.1569 29.9567 19.2116 28.0745L17.4669 27.0968C16.7405 28.3931 15.3968 29.2442 13.8774 29.2442V31.2442ZM19.2116 28.0745C19.7321 27.1458 20.0284 26.0699 20.0284 24.9271H18.0284C18.0284 25.7212 17.823 26.4613 17.4669 27.0968L19.2116 28.0745ZM38.6323 24.9271C38.6323 26.0699 38.9286 27.1458 39.449 28.0745L41.1937 27.0968C40.8376 26.4613 40.6323 25.7212 40.6323 24.9271H38.6323ZM39.449 28.0745C40.5038 29.9567 42.4895 31.2442 44.7832 31.2442V29.2442C43.2638 29.2442 41.9202 28.3931 41.1937 27.0968L39.449 28.0745ZM18.3393 28.5856H40.3214V26.5856H18.3393V28.5856ZM44.7832 31.2442C47.077 31.2442 49.0627 29.9567 50.1174 28.0745L48.3727 27.0968C47.6463 28.3931 46.3026 29.2442 44.7832 29.2442V31.2442ZM50.1174 28.0745C50.6379 27.1458 50.9342 26.0699 50.9342 24.9271H48.9342C48.9342 25.7212 48.7289 26.4613 48.3727 27.0968L50.1174 28.0745ZM49.2451 28.5856H51.5082V26.5856H49.2451V28.5856ZM57.7958 22.8274L58.2277 17.9231L56.2355 17.7476L55.8035 22.652L57.7958 22.8274ZM53.0103 11.1488L42.8243 9.39636L42.4852 11.3674L52.6712 13.1198L53.0103 11.1488ZM41.8732 9.28604C41.1626 9.20113 40.713 8.82949 40.2406 8.07241C39.9938 7.67689 39.7663 7.2154 39.4999 6.66839C39.2409 6.13655 38.9501 5.53459 38.5992 4.93336C37.8879 3.71438 36.9049 2.45214 35.2838 1.50956C33.6693 0.570842 31.5101 0 28.5255 0V2C31.257 2 33.0456 2.52166 34.2785 3.23854C35.5048 3.95155 36.2688 4.908 36.8719 5.9414C37.1782 6.46635 37.4364 6.999 37.7018 7.54402C37.9598 8.07386 38.232 8.63147 38.5438 9.13112C39.1885 10.1644 40.0912 11.0873 41.636 11.2719L41.8732 9.28604ZM28.5255 0H6.31193V2H28.5255V0ZM24.0184 24.175H34.6423V22.175H24.0184V24.175ZM51.5082 28.5856C54.7796 28.5856 57.5088 26.0862 57.7958 22.8274L55.8035 22.652C55.6075 24.8782 53.743 26.5856 51.5082 26.5856V28.5856ZM42.8243 9.39636C42.5038 9.34121 42.0739 9.31001 41.8732 9.28604L41.636 11.2719C42.0348 11.3196 42.2108 11.3202 42.4852 11.3674L42.8243 9.39636ZM0 22.2737C0 25.7597 2.82595 28.5856 6.31194 28.5856V26.5856C3.93052 26.5856 2 24.6551 2 22.2737H0ZM58.2277 17.9231C58.5159 14.6515 56.247 11.7056 53.0103 11.1488L52.6712 13.1198C54.8823 13.5002 56.4323 15.5127 56.2355 17.7476L58.2277 17.9231ZM2 6.31194C2 3.93052 3.93052 2 6.31193 2V0C2.82594 0 0 2.82595 0 6.31194H2Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">شاسی بلند</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="28"
                    viewBox="0 0 59 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41556 24.0298L10.2798 23.5267L9.41556 24.0298ZM18.3393 24.0298L17.4751 23.5267L18.3393 24.0298ZM40.3214 24.0298L41.1856 23.5267L40.3214 24.0298ZM49.2451 24.0298L48.3809 23.5267L49.2451 24.0298ZM24.1794 0C23.6271 0 23.1794 0.447715 23.1794 1C23.1794 1.55228 23.6271 2 24.1794 2V0ZM28.445 12.49C27.8927 12.49 27.445 12.9377 27.445 13.49C27.445 14.0423 27.8927 14.49 28.445 14.49V12.49ZM31.9863 14.49C32.5386 14.49 32.9863 14.0423 32.9863 13.49C32.9863 12.9377 32.5386 12.49 31.9863 12.49V14.49ZM56.8147 19.2019L57.8105 19.293L56.8147 19.2019ZM51.866 9.4673L51.7746 10.4631L51.866 9.4673ZM0 13.9885V18.7179H2V13.9885H0ZM13.8774 15.3532C10.4864 15.3532 7.72645 18.0861 7.72645 21.4709H9.72645C9.72645 19.2029 11.5788 17.3532 13.8774 17.3532V15.3532ZM20.0284 21.4709C20.0284 18.0861 17.2684 15.3532 13.8774 15.3532V17.3532C16.176 17.3532 18.0284 19.2029 18.0284 21.4709H20.0284ZM44.7832 15.3532C41.3923 15.3532 38.6323 18.0861 38.6323 21.4709H40.6323C40.6323 19.2029 42.4846 17.3532 44.7832 17.3532V15.3532ZM50.9342 21.4709C50.9342 18.0861 48.1742 15.3532 44.7832 15.3532V17.3532C47.0819 17.3532 48.9342 19.2029 48.9342 21.4709H50.9342ZM7.72645 21.4709C7.72645 22.5849 8.02669 23.6318 8.55136 24.533L10.2798 23.5267C9.92789 22.9223 9.72645 22.2213 9.72645 21.4709H7.72645ZM8.55136 24.533C9.61484 26.3595 11.6026 27.5887 13.8774 27.5887V25.5887C12.3391 25.5887 10.9975 24.7595 10.2798 23.5267L8.55136 24.533ZM6.31194 25.0298H9.41556V23.0298H6.31194V25.0298ZM13.8774 27.5887C16.1522 27.5887 18.14 26.3595 19.2035 24.533L17.4751 23.5267C16.7573 24.7595 15.4158 25.5887 13.8774 25.5887V27.5887ZM19.2035 24.533C19.7281 23.6318 20.0284 22.5849 20.0284 21.4709H18.0284C18.0284 22.2213 17.827 22.9223 17.4751 23.5267L19.2035 24.533ZM38.6323 21.4709C38.6323 22.5849 38.9325 23.6318 39.4572 24.533L41.1856 23.5267C40.8337 22.9223 40.6323 22.2213 40.6323 21.4709H38.6323ZM39.4572 24.533C40.5206 26.3595 42.5084 27.5887 44.7832 27.5887V25.5887C43.2449 25.5887 41.9033 24.7595 41.1856 23.5267L39.4572 24.533ZM18.3393 25.0298H40.3214V23.0298H18.3393V25.0298ZM44.7832 27.5887C47.058 27.5887 49.0458 26.3595 50.1093 24.533L48.3809 23.5267C47.6631 24.7595 46.3216 25.5887 44.7832 25.5887V27.5887ZM50.1093 24.533C50.634 23.6318 50.9342 22.5849 50.9342 21.4709H48.9342C48.9342 22.2213 48.7328 22.9223 48.3809 23.5267L50.1093 24.533ZM49.2451 25.0298H51.5248V23.0298H49.2451V25.0298ZM57.8105 19.293L58.1262 15.8431L56.1345 15.6609L55.8188 19.1108L57.8105 19.293ZM51.9573 8.47148C49.9439 8.28681 47.2346 8.03221 43.5914 7.68121L43.3996 9.67199C47.0449 10.0232 49.7574 10.2781 51.7746 10.4631L51.9573 8.47148ZM43.7365 7.70609C42.6366 7.43288 41.7154 6.88274 40.7127 6.13551C39.7701 5.43314 38.5876 4.41308 37.2989 3.53277C34.5562 1.65935 30.8181 0 24.1794 0V2C30.418 2 33.7625 3.53923 36.1708 5.18426C37.4575 6.06317 38.3676 6.88229 39.5176 7.73923C40.6075 8.55132 41.7789 9.28061 43.2544 9.64711L43.7365 7.70609ZM6.31194 9.6766H43.4955V7.6766H6.31194V9.6766ZM28.445 14.49H31.9863V12.49H28.445V14.49ZM51.5248 25.0298C54.788 25.0298 57.5132 22.5426 57.8105 19.293L55.8188 19.1108C55.6157 21.3307 53.754 23.0298 51.5248 23.0298V25.0298ZM0 18.7179C0 22.2039 2.82595 25.0298 6.31194 25.0298V23.0298C3.93052 23.0298 2 21.0993 2 18.7179H0ZM58.1262 15.8431C58.462 12.1731 55.6106 8.80656 51.9573 8.47148L51.7746 10.4631C54.3448 10.6989 56.3681 13.1072 56.1345 15.6609L58.1262 15.8431ZM2 13.9885C2 11.6071 3.93052 9.6766 6.31194 9.6766V7.6766C2.82595 7.6766 0 10.5026 0 13.9885H2Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">کروک</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="30"
                    viewBox="0 0 59 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.6643 1V2V1ZM6.31194 10.3894L6.82892 11.2454L6.31194 10.3894ZM1.88532 4.74434C1.33304 4.74434 0.885323 5.19206 0.885323 5.74434C0.885323 6.29663 1.33304 6.74434 1.88532 6.74434V4.74434ZM27.5597 11.8269C27.0074 11.8269 26.5597 12.2746 26.5597 12.8269C26.5597 13.3792 27.0074 13.8269 27.5597 13.8269V11.8269ZM31.101 13.8269C31.6533 13.8269 32.101 13.3792 32.101 12.8269C32.101 12.2746 31.6533 11.8269 31.101 11.8269V13.8269ZM56.6965 20.8597L57.6921 20.9532L56.6965 20.8597ZM39.008 7.32282L38.3013 8.03037L39.008 7.32282ZM57.1572 15.9546L58.1529 16.0482L57.1572 15.9546ZM0 17.2785V20.3629H2V17.2785H0ZM15.1652 16.4499C11.5148 16.4499 8.4991 19.3219 8.4991 22.9331H10.4991C10.4991 20.4878 12.557 18.4499 15.1652 18.4499V16.4499ZM21.8312 22.9331C21.8312 19.3219 18.8156 16.4499 15.1652 16.4499V18.4499C17.7733 18.4499 19.8312 20.4878 19.8312 22.9331H21.8312ZM43.4955 16.4499C39.8451 16.4499 36.8294 19.3219 36.8294 22.9331H38.8294C38.8294 20.4878 40.8873 18.4499 43.4955 18.4499V16.4499ZM50.1615 22.9331C50.1615 19.3219 47.1459 16.4499 43.4955 16.4499V18.4499C46.1036 18.4499 48.1615 20.4878 48.1615 22.9331H50.1615ZM8.4991 22.9331C8.4991 24.119 8.8273 25.2318 9.39877 26.1879L11.1155 25.1617C10.7227 24.5047 10.4991 23.7448 10.4991 22.9331H8.4991ZM9.39877 26.1879C10.5571 28.1257 12.7124 29.4164 15.1652 29.4164V27.4164C13.4234 27.4164 11.9165 26.5018 11.1155 25.1617L9.39877 26.1879ZM6.31194 26.6748H10.2571V24.6748H6.31194V26.6748ZM15.1652 29.4164C17.6179 29.4164 19.7732 28.1257 20.9316 26.1879L19.2149 25.1617C18.4138 26.5018 16.9069 27.4164 15.1652 27.4164V29.4164ZM20.9316 26.1879C21.503 25.2318 21.8312 24.119 21.8312 22.9331H19.8312C19.8312 23.7448 19.6076 24.5047 19.2149 25.1617L20.9316 26.1879ZM36.8294 22.9331C36.8294 24.119 37.1576 25.2318 37.7291 26.1879L39.4458 25.1617C39.0531 24.5047 38.8294 23.7448 38.8294 22.9331H36.8294ZM37.7291 26.1879C38.8874 28.1257 41.0427 29.4164 43.4955 29.4164V27.4164C41.7537 27.4164 40.2468 26.5018 39.4458 25.1617L37.7291 26.1879ZM20.0732 26.6748H38.5874V24.6748H20.0732V26.6748ZM43.4955 29.4164C45.9482 29.4164 48.1035 28.1257 49.2619 26.1879L47.5452 25.1617C46.7441 26.5018 45.2372 27.4164 43.4955 27.4164V29.4164ZM49.2619 26.1879C49.8333 25.2318 50.1615 24.119 50.1615 22.9331H48.1615C48.1615 23.7448 47.9379 24.5047 47.5452 25.1617L49.2619 26.1879ZM48.4035 26.6748H51.4078V24.6748H48.4035V26.6748ZM57.6921 20.9532L58.1529 16.0482L56.1616 15.8611L55.7008 20.7661L57.6921 20.9532ZM52.376 9.16632L43.2585 8.43104L43.0977 10.4246L52.2152 11.1599L52.376 9.16632ZM39.7147 6.61527C37.1731 4.07691 31.8193 0 23.6643 0V2C31.1027 2 35.9781 5.71002 38.3013 8.03037L39.7147 6.61527ZM23.6643 0C19.0668 0 15.7789 1.70665 13.0386 3.75582C11.6871 4.76654 10.4453 5.87935 9.27774 6.88397C8.0924 7.90386 6.97346 8.8216 5.79495 9.53337L6.82892 11.2454C8.16276 10.4398 9.39075 9.42516 10.5822 8.40003C11.7914 7.35964 12.9563 6.31479 14.2364 5.3575C16.7596 3.47067 19.6355 2 23.6643 2V0ZM5.79495 9.53337C5.71458 9.58192 5.63404 9.62943 5.55331 9.67587L6.55064 11.4095C6.64403 11.3557 6.73679 11.301 6.82892 11.2454L5.79495 9.53337ZM7.31194 10.3894V9.28563H5.31194V10.3894H7.31194ZM2.77065 4.74434H1.88532V6.74434H2.77065V4.74434ZM27.5597 13.8269H31.101V11.8269H27.5597V13.8269ZM7.31194 9.28563C7.31194 6.77755 5.27873 4.74434 2.77065 4.74434V6.74434C4.17416 6.74434 5.31194 7.88212 5.31194 9.28563H7.31194ZM51.4078 26.6748C54.6651 26.6748 57.3874 24.1962 57.6921 20.9532L55.7008 20.7661C55.4927 22.9816 53.633 24.6748 51.4078 24.6748V26.6748ZM43.2585 8.43104C41.9706 8.32719 40.7319 7.63124 39.7147 6.61527L38.3013 8.03037C39.544 9.27148 41.2019 10.2717 43.0977 10.4246L43.2585 8.43104ZM0 20.3629C0 23.8488 2.82595 26.6748 6.31194 26.6748V24.6748C3.93052 24.6748 2 22.7443 2 20.3629H0ZM58.1529 16.0482C58.4819 12.545 55.8831 9.44916 52.376 9.16632L52.2152 11.1599C54.6111 11.3531 56.3864 13.468 56.1616 15.8611L58.1529 16.0482ZM2 17.2785C2 16.1119 2.49648 15.0124 3.34068 13.9992C4.18778 12.9824 5.3465 12.1022 6.55064 11.4095L5.55331 9.67587C4.21453 10.4461 2.84726 11.4669 1.80411 12.7189C0.758045 13.9745 0 15.5114 0 17.2785H2Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">کوپه</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="30"
                    viewBox="0 0 59 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2571 25.6748L11.1155 25.1617L10.2571 25.6748ZM20.0732 25.6748L19.2149 25.1617L20.0732 25.6748ZM38.5874 25.6748L39.4458 25.1617L38.5874 25.6748ZM48.4035 25.6748L47.5452 25.1617L48.4035 25.6748ZM2.2926 17.4499L1.31607 17.2345L2.2926 17.4499ZM6.31194 18.4499C6.86422 18.4499 7.31194 18.0022 7.31194 17.4499C7.31194 16.8976 6.86422 16.4499 6.31194 16.4499V18.4499ZM56.6965 20.8597L57.6921 20.9532L56.6965 20.8597ZM39.008 7.32282L39.7147 6.61527L39.008 7.32282ZM15.1652 16.4499C11.5148 16.4499 8.4991 19.3219 8.4991 22.9332H10.4991C10.4991 20.4878 12.557 18.4499 15.1652 18.4499V16.4499ZM21.8312 22.9332C21.8312 19.3219 18.8156 16.4499 15.1652 16.4499V18.4499C17.7733 18.4499 19.8312 20.4878 19.8312 22.9332H21.8312ZM43.4955 16.4499C39.8451 16.4499 36.8294 19.3219 36.8294 22.9332H38.8294C38.8294 20.4878 40.8873 18.4499 43.4955 18.4499V16.4499ZM50.1615 22.9332C50.1615 19.3219 47.1459 16.4499 43.4955 16.4499V18.4499C46.1036 18.4499 48.1615 20.4878 48.1615 22.9332H50.1615ZM8.4991 22.9332C8.4991 24.119 8.8273 25.2318 9.39877 26.1879L11.1155 25.1617C10.7227 24.5047 10.4991 23.7448 10.4991 22.9332H8.4991ZM9.39877 26.1879C10.5571 28.1257 12.7124 29.4164 15.1652 29.4164V27.4164C13.4234 27.4164 11.9165 26.5018 11.1155 25.1617L9.39877 26.1879ZM5.02813 26.6748H10.2571V24.6748H5.02813V26.6748ZM15.1652 29.4164C17.6179 29.4164 19.7732 28.1257 20.9316 26.1879L19.2149 25.1617C18.4138 26.5018 16.9069 27.4164 15.1652 27.4164V29.4164ZM20.9316 26.1879C21.503 25.2318 21.8312 24.119 21.8312 22.9332H19.8312C19.8312 23.7448 19.6076 24.5047 19.2149 25.1617L20.9316 26.1879ZM36.8294 22.9332C36.8294 24.119 37.1576 25.2318 37.7291 26.1879L39.4458 25.1617C39.0531 24.5047 38.8294 23.7448 38.8294 22.9332H36.8294ZM37.7291 26.1879C38.8874 28.1257 41.0427 29.4164 43.4955 29.4164V27.4164C41.7537 27.4164 40.2468 26.5018 39.4458 25.1617L37.7291 26.1879ZM20.0732 26.6748H38.5874V24.6748H20.0732V26.6748ZM43.4955 29.4164C45.9482 29.4164 48.1035 28.1257 49.2619 26.1879L47.5452 25.1617C46.7441 26.5018 45.2372 27.4164 43.4955 27.4164V29.4164ZM49.2619 26.1879C49.8333 25.2318 50.1615 24.119 50.1615 22.9332H48.1615C48.1615 23.7448 47.9379 24.5047 47.5452 25.1617L49.2619 26.1879ZM48.4035 26.6748H51.4078V24.6748H48.4035V26.6748ZM57.6921 20.9532L58.1529 16.0482L56.1616 15.8611L55.7008 20.7661L57.6921 20.9532ZM52.376 9.16632L43.2585 8.43104L43.0977 10.4246L52.2152 11.1599L52.376 9.16632ZM39.7147 6.61527C37.1731 4.07691 31.8193 0 23.6643 0V2C31.1027 2 35.9781 5.71002 38.3013 8.03037L39.7147 6.61527ZM23.6643 0C15.973 0 10.8313 2.01851 7.36898 5.27841C3.92749 8.51873 2.28063 12.8614 1.31607 17.2345L3.26913 17.6653C4.19759 13.4558 5.72479 9.5735 8.73999 6.73453C11.7344 3.91514 16.332 2 23.6643 2V0ZM1.31607 17.2345C0.999936 18.6678 0.755098 20.1141 0.545695 21.5368L2.52438 21.8281C2.7298 20.4325 2.96673 19.0363 3.26913 17.6653L1.31607 17.2345ZM2.2926 18.4499H6.31194V16.4499H2.2926V18.4499ZM58.1529 16.0482C58.4819 12.5451 55.8831 9.44916 52.376 9.16632L52.2152 11.1599C54.6111 11.3531 56.3864 13.468 56.1616 15.8611L58.1529 16.0482ZM51.4078 26.6748C54.6651 26.6748 57.3874 24.1962 57.6921 20.9532L55.7008 20.7661C55.4927 22.9816 53.633 24.6748 51.4078 24.6748V26.6748ZM43.2585 8.43104C41.9706 8.32719 40.7319 7.63124 39.7147 6.61527L38.3013 8.03037C39.544 9.27148 41.2019 10.2717 43.0977 10.4246L43.2585 8.43104ZM5.02813 24.6748C3.48449 24.6748 2.30481 23.3198 2.52438 21.8281L0.545695 21.5368C0.143205 24.2714 2.29995 26.6748 5.02813 26.6748V24.6748Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">هاچبک</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="28"
                    viewBox="0 0 59 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41556 24.0298L10.2798 23.5267L9.41556 24.0298ZM18.3393 24.0298L17.4751 23.5267L18.3393 24.0298ZM40.3214 24.0298L41.1856 23.5267L40.3214 24.0298ZM49.2451 24.0298L48.3809 23.5267L49.2451 24.0298ZM47.3587 1V2V1ZM40.5482 1V0V1ZM37.9173 5.88388L37.0369 5.40963L37.9173 5.88388ZM51.2663 5.13154L50.2753 5.26552L51.2663 5.13154ZM13.8774 15.3532C10.4864 15.3532 7.72645 18.0861 7.72645 21.4709H9.72645C9.72645 19.2029 11.5788 17.3532 13.8774 17.3532V15.3532ZM20.0284 21.4709C20.0284 18.0861 17.2684 15.3532 13.8774 15.3532V17.3532C16.176 17.3532 18.0284 19.2029 18.0284 21.4709H20.0284ZM44.7832 15.3532C41.3923 15.3532 38.6323 18.0861 38.6323 21.4709H40.6323C40.6323 19.2029 42.4846 17.3532 44.7832 17.3532V15.3532ZM50.9342 21.4709C50.9342 18.0861 48.1742 15.3532 44.7832 15.3532V17.3532C47.0819 17.3532 48.9342 19.2029 48.9342 21.4709H50.9342ZM7.72645 21.4709C7.72645 22.5849 8.02669 23.6318 8.55136 24.533L10.2798 23.5267C9.92789 22.9223 9.72645 22.2213 9.72645 21.4709H7.72645ZM8.55136 24.533C9.61484 26.3595 11.6026 27.5887 13.8774 27.5887V25.5887C12.3391 25.5887 10.9975 24.7595 10.2798 23.5267L8.55136 24.533ZM6.31194 25.0298H9.41556V23.0298H6.31194V25.0298ZM13.8774 27.5887C16.1522 27.5887 18.14 26.3595 19.2035 24.533L17.4751 23.5267C16.7573 24.7595 15.4158 25.5887 13.8774 25.5887V27.5887ZM19.2035 24.533C19.7281 23.6318 20.0284 22.5849 20.0284 21.4709H18.0284C18.0284 22.2213 17.827 22.9223 17.4751 23.5267L19.2035 24.533ZM38.6323 21.4709C38.6323 22.5849 38.9325 23.6318 39.4572 24.533L41.1856 23.5267C40.8337 22.9223 40.6323 22.2213 40.6323 21.4709H38.6323ZM39.4572 24.533C40.5206 26.3595 42.5084 27.5887 44.7832 27.5887V25.5887C43.2449 25.5887 41.9033 24.7595 41.1856 23.5267L39.4572 24.533ZM18.3393 25.0298H40.3214V23.0298H18.3393V25.0298ZM44.7832 27.5887C47.058 27.5887 49.0458 26.3595 50.1093 24.533L48.3809 23.5267C47.6631 24.7595 46.3216 25.5887 44.7832 25.5887V27.5887ZM50.1093 24.533C50.634 23.6318 50.9342 22.5849 50.9342 21.4709H48.9342C48.9342 22.2213 48.7328 22.9223 48.3809 23.5267L50.1093 24.533ZM49.2451 25.0298H52.3487V23.0298H49.2451V25.0298ZM58.6606 18.7179V12.9641H56.6606V18.7179H58.6606ZM52.2573 4.99756C52.1104 3.91132 51.7745 2.67927 51.0165 1.69946C50.2203 0.670412 49.018 0 47.3587 0V2C48.4062 2 49.0216 2.38949 49.4346 2.92327C49.8857 3.5063 50.1502 4.34002 50.2753 5.26552L52.2573 4.99756ZM0 6.31193V8.6766H2V6.31193H0ZM0 8.6766V18.7179H2V8.6766H0ZM1 9.6766H33.2407V7.6766H1V9.6766ZM47.3587 0H40.5482V2H47.3587V0ZM40.5482 0H6.31194V2H40.5482V0ZM38.7977 6.35814L41.4286 1.47426L39.6678 0.525744L37.0369 5.40963L38.7977 6.35814ZM33.2407 9.6766C35.5624 9.6766 37.6966 8.40209 38.7977 6.35814L37.0369 5.40963C36.2848 6.80593 34.8268 7.6766 33.2407 7.6766V9.6766ZM52.3487 25.0298C55.8347 25.0298 58.6606 22.2039 58.6606 18.7179H56.6606C56.6606 21.0993 54.7301 23.0298 52.3487 23.0298V25.0298ZM54.9051 8.38894C53.5333 8.11633 52.4895 6.71523 52.2573 4.99756L50.2753 5.26552C50.574 7.47452 52.0008 9.85092 54.5153 10.3506L54.9051 8.38894ZM6.31194 23.0298C3.93052 23.0298 2 21.0993 2 18.7179H0C0 22.2039 2.82595 25.0298 6.31194 25.0298V23.0298ZM58.6606 12.9641C58.6606 10.7384 57.0882 8.82273 54.9051 8.38894L54.5153 10.3506C55.7624 10.5984 56.6606 11.6927 56.6606 12.9641H58.6606ZM2 6.31193C2 3.93052 3.93052 2 6.31194 2V0C2.82595 0 0 2.82595 0 6.31193H2Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">ون</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="31"
                    viewBox="0 0 59 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.9058 19.0284C30.9058 19.5807 31.3535 20.0284 31.9058 20.0284C32.4581 20.0284 32.9058 19.5807 32.9058 19.0284H30.9058ZM45.4538 3.6824L44.4837 3.92494L45.4538 3.6824ZM56.8121 21.9238L57.808 22.0144L56.8121 21.9238ZM46.4759 7.77086L45.5058 8.01339L46.4759 7.77086ZM57.1957 17.7045L56.1998 17.614L57.1957 17.7045ZM0 14.8433V21.4429H2V14.8433H0ZM13.8774 18.0284C10.4803 18.0284 7.72645 20.7823 7.72645 24.1794H9.72645C9.72645 21.8869 11.5849 20.0284 13.8774 20.0284V18.0284ZM20.0284 24.1794C20.0284 20.7823 17.2745 18.0284 13.8774 18.0284V20.0284C16.1699 20.0284 18.0284 21.8869 18.0284 24.1794H20.0284ZM44.7832 18.0284C41.3861 18.0284 38.6323 20.7823 38.6323 24.1794H40.6323C40.6323 21.8869 42.4907 20.0284 44.7832 20.0284V18.0284ZM50.9342 24.1794C50.9342 20.7823 48.1803 18.0284 44.7832 18.0284V20.0284C47.0757 20.0284 48.9342 21.8869 48.9342 24.1794H50.9342ZM7.72645 24.1794C7.72645 25.2981 8.02601 26.3498 8.54995 27.2556L10.2812 26.2541C9.92857 25.6446 9.72645 24.9371 9.72645 24.1794H7.72645ZM8.54995 27.2556C9.61198 29.0915 11.5994 30.3303 13.8774 30.3303V28.3303C12.3422 28.3303 11.0004 27.4974 10.2812 26.2541L8.54995 27.2556ZM6.31194 27.7548H9.41556V25.7548H6.31194V27.7548ZM13.8774 30.3303C16.1554 30.3303 18.1429 29.0915 19.2049 27.2556L17.4737 26.2541C16.7544 27.4974 15.4126 28.3303 13.8774 28.3303V30.3303ZM19.2049 27.2556C19.7288 26.3498 20.0284 25.2981 20.0284 24.1794H18.0284C18.0284 24.9371 17.8263 25.6446 17.4737 26.2541L19.2049 27.2556ZM38.6323 24.1794C38.6323 25.2981 38.9318 26.3498 39.4558 27.2556L41.187 26.2541C40.8344 25.6446 40.6323 24.9371 40.6323 24.1794H38.6323ZM39.4558 27.2556C40.5178 29.0915 42.5052 30.3303 44.7832 30.3303V28.3303C43.248 28.3303 41.9062 27.4974 41.187 26.2541L39.4558 27.2556ZM18.3393 27.7548H40.3214V25.7548H18.3393V27.7548ZM44.7832 30.3303C47.0612 30.3303 49.0487 29.0915 50.1107 27.2556L48.3795 26.2541C47.6602 27.4975 46.3184 28.3303 44.7832 28.3303V30.3303ZM50.1107 27.2556C50.6346 26.3498 50.9342 25.2981 50.9342 24.1794H48.9342C48.9342 24.9371 48.7321 25.6446 48.3795 26.2541L50.1107 27.2556ZM49.2451 27.7548H51.522V25.7548H49.2451V27.7548ZM57.808 22.0144L58.1916 17.7951L56.1998 17.614L55.8162 21.8333L57.808 22.0144ZM52.6884 10.9604L51.0944 10.7612L50.8464 12.7457L52.4404 12.945L52.6884 10.9604ZM30.9058 11.302V19.0284H32.9058V11.302H30.9058ZM47.4461 7.52833L46.424 3.43987L44.4837 3.92494L45.5058 8.01339L47.4461 7.52833ZM42.0183 0H35.4471V2H42.0183V0ZM4.54129 12.302H6.15097V10.302H4.54129V12.302ZM6.15097 12.302H31.9058V10.302H6.15097V12.302ZM7.15097 11.302V9.69224H5.15097V11.302H7.15097ZM30.9058 4.54129V6.15095H32.9058V4.54129H30.9058ZM30.9058 6.15095V11.302H32.9058V6.15095H30.9058ZM9.69226 7.15095H31.9058V5.15095H9.69226V7.15095ZM46.424 3.43987C45.9186 1.41823 44.1021 0 42.0183 0V2C43.1844 2 44.2009 2.79364 44.4837 3.92494L46.424 3.43987ZM35.4471 0C32.939 0 30.9058 2.0332 30.9058 4.54129H32.9058C32.9058 3.13778 34.0436 2 35.4471 2V0ZM51.522 27.7548C54.7865 27.7548 57.5124 25.2655 57.808 22.0144L55.8162 21.8333C55.6143 24.0543 53.7521 25.7548 51.522 25.7548V27.7548ZM51.0944 10.7612C49.3274 10.5403 47.878 9.25591 47.4461 7.52833L45.5058 8.01339C46.138 10.5423 48.2598 12.4224 50.8464 12.7457L51.0944 10.7612ZM0 21.4429C0 24.9289 2.82595 27.7548 6.31194 27.7548V25.7548C3.93052 25.7548 2 23.8243 2 21.4429H0ZM58.1916 17.7951C58.4997 14.4058 56.0654 11.3825 52.6884 10.9604L52.4404 12.945C54.7473 13.2333 56.4103 15.2987 56.1998 17.614L58.1916 17.7951ZM7.15097 9.69224C7.15097 8.28873 8.28874 7.15095 9.69226 7.15095V5.15095C7.18417 5.15095 5.15097 7.18416 5.15097 9.69224H7.15097ZM2 14.8433C2 13.4398 3.13777 12.302 4.54129 12.302V10.302C2.0332 10.302 0 12.3352 0 14.8433H2Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">وانت</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="53"
                    height="37"
                    viewBox="0 0 53 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5714 23.5C31.5714 24.0523 32.0191 24.5 32.5714 24.5C33.1237 24.5 33.5714 24.0523 33.5714 23.5H31.5714ZM46.468 11.4159L47.4194 11.1078L46.468 11.4159ZM45.9045 9.67546L44.9531 9.98352L45.9045 9.67546ZM13.1429 25C9.88092 25 7.28571 27.7138 7.28571 31H9.28571C9.28571 28.7633 11.0397 27 13.1429 27V25ZM19 31C19 27.7138 16.4048 25 13.1429 25V27C15.246 27 17 28.7633 17 31H19ZM39.8571 25C36.5952 25 34 27.7138 34 31H36C36 28.7633 37.754 27 39.8571 27V25ZM45.7143 31C45.7143 27.7138 43.1191 25 39.8571 25V27C41.9603 27 43.7143 28.7633 43.7143 31H45.7143ZM7.28571 31C7.28571 32.0856 7.56801 33.1077 8.06373 33.9899L9.8073 33.0101C9.47647 32.4214 9.28571 31.7359 9.28571 31H7.28571ZM8.06373 33.9899C9.06835 35.7777 10.9592 37 13.1429 37V35C11.7308 35 10.4823 34.2114 9.8073 33.0101L8.06373 33.9899ZM6.31193 34.5H8.93551V32.5H6.31193V34.5ZM13.1429 37C15.3265 37 17.2174 35.7777 18.222 33.9899L16.4784 33.0101C15.8034 34.2114 14.5549 35 13.1429 35V37ZM18.222 33.9899C18.7177 33.1077 19 32.0856 19 31H17C17 31.7359 16.8092 32.4214 16.4784 33.0101L18.222 33.9899ZM34 31C34 32.0856 34.2823 33.1077 34.778 33.9899L36.5216 33.0101C36.1908 32.4214 36 31.7359 36 31H34ZM34.778 33.9899C35.7826 35.7777 37.6735 37 39.8571 37V35C38.4451 35 37.1966 34.2114 36.5216 33.0101L34.778 33.9899ZM17.3502 34.5H35.6498V32.5H17.3502V34.5ZM39.8571 37C42.0408 37 43.9317 35.7777 44.9363 33.9899L43.1927 33.0101C42.5177 34.2114 41.2692 35 39.8571 35V37ZM44.9363 33.9899C45.432 33.1077 45.7143 32.0856 45.7143 31H43.7143C43.7143 31.7359 43.5235 32.4214 43.1927 33.0101L44.9363 33.9899ZM44.0645 34.5H46.6881V32.5H44.0645V34.5ZM6.31194 2H27.5715V0H6.31194V2ZM40.8509 4.99992H32.5714V6.99992H40.8509V4.99992ZM53 28.1881V19.2402H51V28.1881H53ZM47.4194 11.1078L46.8558 9.3674L44.9531 9.98352L45.5166 11.7239L47.4194 11.1078ZM31.5714 5.99992V18.5H33.5714V5.99992H31.5714ZM31.5714 18.5V23.5H33.5714V18.5H31.5714ZM0 6.31194V18.5H2V6.31194H0ZM0 18.5V28.1881H2V18.5H0ZM32.5714 17.5H1V19.5H32.5714V17.5ZM49.5597 13.6193C48.5448 13.0969 47.7695 12.1889 47.4194 11.1078L45.5166 11.7239C46.031 13.3125 47.1643 14.6357 48.6444 15.3975L49.5597 13.6193ZM40.8509 6.99992C42.7205 6.99992 44.3771 8.2048 44.9531 9.98352L46.8558 9.3674C46.0127 6.76366 43.5877 4.99992 40.8509 4.99992V6.99992ZM46.6881 34.5C50.1741 34.5 53 31.674 53 28.1881H51C51 30.5695 49.0695 32.5 46.6881 32.5V34.5ZM27.5715 2C29.7806 2 31.5714 3.79083 31.5714 5.99992H33.5714C33.5714 2.68625 30.8852 0 27.5715 0V2ZM6.31193 32.5C3.93052 32.5 2 30.5695 2 28.1881H0C0 31.674 2.82595 34.5 6.31193 34.5V32.5ZM53 19.2402C53 16.8719 51.6582 14.6994 49.5597 13.6193L48.6444 15.3975C50.0841 16.1385 51 17.6291 51 19.2402H53ZM6.31194 0C2.82595 0 0 2.82595 0 6.31194H2C2 3.93052 3.93052 2 6.31194 2V0Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">کامیونت</span>
                </div>
                <div class="filter__chassis">
                  <svg
                    width="59"
                    height="34"
                    viewBox="0 0 59 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.76219 29.1127L6.89827 29.6164L7.76219 29.1127ZM18.0949 29.1127L18.9588 29.6164L18.0949 29.1127ZM46.53 29.1127L45.6661 29.6164L46.53 29.1127ZM56.8627 29.1127L57.7267 29.6164L56.8627 29.1127ZM0 26.1535C0 26.7058 0.447715 27.1535 1 27.1535C1.55228 27.1535 2 26.7058 2 26.1535H0ZM21.875 19.235C21.3227 19.235 20.875 19.6827 20.875 20.235C20.875 20.7873 21.3227 21.235 21.875 21.235V19.235ZM32.3125 21.235C32.8647 21.235 33.3125 20.7873 33.3125 20.235C33.3125 19.6827 32.8647 19.235 32.3125 19.235V21.235ZM12.9286 25.1535C12.3763 25.1535 11.9286 25.6012 11.9286 26.1535C11.9286 26.7058 12.3763 27.1535 12.9286 27.1535V25.1535ZM30.8214 0C30.2691 0 29.8214 0.447715 29.8214 1C29.8214 1.55228 30.2691 2 30.8214 2V0ZM50.8361 26.6634C51.1178 27.1385 51.7312 27.2953 52.2063 27.0137C52.6814 26.7321 52.8382 26.1187 52.5566 25.6436L50.8361 26.6634ZM42.9254 11.3573L43.7856 10.8474L42.9254 11.3573ZM46.4545 9.33814L47.2905 8.78935L46.4545 9.33814ZM46.4545 4.4988L47.2905 5.04759L46.4545 4.4988ZM38.3288 3.60324L37.4686 4.11316L38.3288 3.60324ZM12.9286 19.235C9.08957 19.235 5.96428 22.3253 5.96428 26.1535H7.96428C7.96428 23.4444 10.1796 21.235 12.9286 21.235V19.235ZM51.6964 19.235C47.8574 19.235 44.7321 22.3253 44.7321 26.1535H46.7321C46.7321 23.4444 48.9474 21.235 51.6964 21.235V19.235ZM58.6606 26.1535C58.6606 22.3253 55.5353 19.235 51.6964 19.235V21.235C54.4453 21.235 56.6606 23.4444 56.6606 26.1535H58.6606ZM5.96428 26.1535C5.96428 27.4135 6.30426 28.5974 6.89827 29.6164L8.62612 28.6091C8.20519 27.887 7.96428 27.0495 7.96428 26.1535H5.96428ZM6.89827 29.6164C8.10264 31.6824 10.3533 33.072 12.9286 33.072V31.072C11.0886 31.072 9.48425 30.0812 8.62612 28.6091L6.89827 29.6164ZM12.9286 33.072C15.5038 33.072 17.7545 31.6824 18.9588 29.6164L17.231 28.6091C16.3729 30.0812 14.7686 31.072 12.9286 31.072V33.072ZM44.7321 26.1535C44.7321 27.4135 45.0721 28.5974 45.6661 29.6164L47.3939 28.6091C46.973 27.887 46.7321 27.0495 46.7321 26.1535H44.7321ZM45.6661 29.6164C46.8704 31.6824 49.1211 33.072 51.6964 33.072V31.072C49.8564 31.072 48.2521 30.0812 47.3939 28.6091L45.6661 29.6164ZM51.6964 33.072C54.2716 33.072 56.5223 31.6824 57.7267 29.6164L55.9988 28.6091C55.1407 30.0812 53.5364 31.072 51.6964 31.072V33.072ZM57.7267 29.6164C58.3207 28.5974 58.6606 27.4135 58.6606 26.1535H56.6606C56.6606 27.0495 56.4197 27.887 55.9988 28.6091L57.7267 29.6164ZM2 26.1535C2 20.1757 6.8856 15.3166 12.9286 15.3166V13.3166C5.79559 13.3166 0 19.0566 0 26.1535H2ZM12.9286 15.3166H33.1232V13.3166H12.9286V15.3166ZM21.875 21.235H32.3125V19.235H21.875V21.235ZM18.9588 29.6164C21.5716 25.1343 18.2331 19.235 12.9286 19.235V21.235C16.693 21.235 19.0649 25.4632 17.231 28.6091L18.9588 29.6164ZM30.8381 25.1535H12.9286V27.1535H30.8381V25.1535ZM46.7321 6.91847C46.7321 6.2272 46.937 5.58594 47.2905 5.04759L45.6185 3.95001C45.0581 4.80367 44.7321 5.82454 44.7321 6.91847H46.7321ZM47.2905 8.78935C46.937 8.251 46.7321 7.60974 46.7321 6.91847H44.7321C44.7321 8.0124 45.0581 9.03327 45.6185 9.88693L47.2905 8.78935ZM33.7594 0H30.8214V2H33.7594V0ZM31.5406 6.26838L22.828 9.41226L23.5069 11.2935L32.2195 8.14965L31.5406 6.26838ZM37.4686 4.11316L42.0652 11.8672L43.7856 10.8474L39.1891 3.09331L37.4686 4.11316ZM42.0652 11.8672L50.8361 26.6634L52.5566 25.6436L43.7856 10.8474L42.0652 11.8672ZM36.211 24.154L43.7766 11.8821L42.0741 10.8325L34.5085 23.1044L36.211 24.154ZM45.6185 9.88693C46.0755 10.583 46.7065 11.048 47.4632 11.1588C48.2 11.2668 48.8836 11.0134 49.4191 10.6274C50.4692 9.87053 51.2053 8.44051 51.2053 6.91847H49.2053C49.2053 7.84794 48.7387 8.65244 48.2497 9.0049C48.0157 9.17357 47.8457 9.19351 47.7531 9.17995C47.6804 9.1693 47.5062 9.11798 47.2905 8.78935L45.6185 9.88693ZM47.2905 5.04759C47.5062 4.71896 47.6804 4.66764 47.7531 4.65699C47.8457 4.64343 48.0157 4.66337 48.2497 4.83204C48.7387 5.1845 49.2053 5.989 49.2053 6.91847H51.2053C51.2053 5.39643 50.4692 3.96641 49.4191 3.20956C48.8836 2.82359 48.2 2.57018 47.4632 2.67811C46.7065 2.78895 46.0755 3.25395 45.6185 3.95001L47.2905 5.04759ZM21.3839 14.3166C21.3839 12.9622 22.2329 11.7532 23.5069 11.2935L22.828 9.41226C20.7613 10.158 19.3839 12.1194 19.3839 14.3166H21.3839ZM37.7857 10.6541C37.7857 7.42335 34.5796 5.1718 31.5406 6.26838L32.2195 8.14965C33.9548 7.52345 35.7857 8.80918 35.7857 10.6541H37.7857ZM30.8381 27.1535C33.0281 27.1535 35.0617 26.0182 36.211 24.154L34.5085 23.1044C33.7234 24.378 32.3342 25.1535 30.8381 25.1535V27.1535ZM33.7594 2C35.2822 2 36.6921 2.80322 37.4686 4.11316L39.1891 3.09331C38.0524 1.17578 35.9885 0 33.7594 0V2ZM33.1232 15.3166C35.6982 15.3166 37.7857 13.2291 37.7857 10.6541H35.7857C35.7857 12.1245 34.5936 13.3166 33.1232 13.3166V15.3166Z"
                      fill="#85858F"
                    ></path>
                  </svg>
                  <span class="filter__chassis-name">موتورسیکلت</span>
                </div>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">تعداد سیلندر</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="7" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="7">
                  <span class="filter__text">3 سیلندر</span>
                  <span class="filter__number">123</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="8" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="8">
                  <span class="filter__text">4 سیلندر</span>
                  <span class="filter__number">963</span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter">
              <label for="201" class="filter__header">
                <span class="filter__name">عکس دار</span>
                <input
                  class="toggle-checkbox"
                  type="checkbox"
                  onclick="this.classList.toggle('toggle-checkbox--active')"
                  id="201"
                />
              </label>
            </div>
            <div class="filter">
              <label for="202" class="filter__header">
                <span class="filter__name">قیمت دار</span>
                <input
                  class="toggle-checkbox"
                  type="checkbox"
                  checked=""
                  onclick="this.classList.toggle('toggle-checkbox--active')"
                  id="202"
                />
              </label>
            </div>
            <div class="filter">
              <label for="203" class="filter__header">
                <span class="filter__name">تخفیف دار</span>
                <input
                  class="toggle-checkbox"
                  type="checkbox"
                  checked=""
                  onclick="this.classList.toggle('toggle-checkbox--active')"
                  id="203"
                />
              </label>
            </div>
            <div class="filter">
              <label for="204" class="filter__header">
                <span class="filter__name">کارشناسی شده</span>
                <input
                  class="toggle-checkbox"
                  type="checkbox"
                  onclick="this.classList.toggle('toggle-checkbox--active')"
                  id="204"
                />
              </label>
            </div>
          </div>
          <div class="filter">
            <div class="filter__header">
              <span class="filter__name">رنگ</span>
              <svg
                class="filter__arrow-icon"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M13 1.5L7 7.5L1 1.5"
                  stroke="#ABADB3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="filter__body">
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="9" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="9">
                  <span class="filter__text">
                    <span
                      class="filter__color"
                      style="background-color: #ffffff"
                    ></span>
                    سفید
                  </span>
                  <span class="filter__number">123</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="10" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="10">
                  <span class="filter__text">
                    <span
                      class="filter__color"
                      style="background-color: #1d1d1f"
                    ></span>
                    مشکی
                  </span>
                  <span class="filter__number">123</span>
                </label>
              </div>
              <div class="filter__item">
                <label class="checkbox">
                  <input type="checkbox" value="4" id="11" />
                  <span class="checkmark"></span>
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </label>
                <label class="filter__data" for="11">
                  <span class="filter__text">
                    <span
                      class="filter__color"
                      style="background-color: #abadb2"
                    ></span>
                    خاکستری
                  </span>
                  <span class="filter__number">123</span>
                </label>
              </div>
            </div>
          </div>
        </main>
        <footer class="filter-page__footer">
          <button class="btn btn-primary filter-page__submit-btn">
            نمایش 234 آگهی
          </button>
          <button class="btn btn-transparent filter-page__delete-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M0.832031 4.16634H6.66536M19.1654 4.16634H13.332M2.4987 4.16634L3.69853 16.1647C3.86893 17.8687 5.30282 19.1663 7.01532 19.1663H12.9821C14.6946 19.1663 16.1285 17.8687 16.2989 16.1647L17.4987 4.16634M9.9987 9.16634V14.1663M13.7487 9.16634L13.332 14.1663M6.2487 9.16634L6.66536 14.1663M13.332 4.16634H9.9987H6.66536M13.332 4.16634H6.66536M13.332 4.16634V2.49967C13.332 1.5792 12.5858 0.833008 11.6654 0.833008H8.33203C7.41156 0.833008 6.66536 1.5792 6.66536 2.49967V4.16634"
                stroke="#EF3838"
                stroke-width="1.66667"
                stroke-linecap="round"
              ></path>
            </svg>
            حذف همه
          </button>
        </footer>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style>
</style>