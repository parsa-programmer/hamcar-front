<template>
  <aside class="advertising__sidebar" v-if="loading">
    <h-skeletor  width="100%" height="800px"/>
  </aside>
  <aside class="advertising__sidebar" v-else>
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
                <div class="dropdown-box" @click="openDropdown()">
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
                    readonly
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
                <div class="dropdown-box" @click="openDropdown()">
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
                    readonly
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
          <span class="filter__tab-item filter__tab-item--active">کارکرده</span>
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
</template>

<script setup lang="ts">
const loading=ref(true);

onMounted(()=>{
  setTimeout(()=>{
    loading.value=false;
  },1000);
})
</script>

<style>
</style>