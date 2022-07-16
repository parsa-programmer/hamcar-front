<template>
  <icons-check v-if="icon == Icon.check"></icons-check>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    v-else-if="icon == Icon.exclamation"
  >
    <mask id="path-1-inside-1_636_1231" fill="white">
      <path
        d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
      />
    </mask>
    <path
      d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
      stroke="#0F0F10"
      stroke-width="3.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      mask="url(#path-1-inside-1_636_1231)"
    />
    <path
      d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z"
      fill="#0F0F10"
    />
    <path
      d="M12 7L12 13"
      stroke="#0F0F10"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    v-else-if="icon == Icon.edit"
  >
    <path
      d="M0.75 12C0.75 14.4534 0.882437 16.3737 1.21748 17.8813C1.55063 19.3803 2.07405 20.4249 2.82458 21.1754C3.57511 21.9259 4.61969 22.4494 6.11874 22.7825C7.62631 23.1176 9.54662 23.25 12 23.25C14.4534 23.25 16.3737 23.1176 17.8813 22.7825C19.3803 22.4494 20.4249 21.9259 21.1754 21.1754C21.9259 20.4249 22.4494 19.3803 22.7825 17.8813C23.1176 16.3737 23.25 14.4534 23.25 12C23.25 9.54662 23.1176 7.62631 22.7825 6.11874C22.4494 4.61969 21.9259 3.57511 21.1754 2.82458C20.4249 2.07405 19.3803 1.55063 17.8813 1.21748C16.3737 0.882437 14.4534 0.75 12 0.75C9.54662 0.75 7.62631 0.882437 6.11874 1.21748C4.61969 1.55063 3.57511 2.07405 2.82458 2.82458C2.07405 3.57511 1.55063 4.61969 1.21748 6.11874C0.882437 7.62631 0.75 9.54662 0.75 12Z"
      stroke="#85858F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.1577 8.18182L12.9195 6.33429C13.3244 5.90978 14.0046 5.88646 14.4388 6.2822L17.658 9.21592C18.0923 9.61167 18.1161 10.2766 17.7113 10.7011L15.8182 12.6864M11.1577 8.18182L6.28868 13.2877C6.08633 13.4999 5.98271 13.7844 6.00236 14.0738L6.20234 17.0187C6.23993 17.5724 6.71141 18.0021 7.27903 18L10.2983 17.9888C10.595 17.9877 10.8781 17.8667 11.0805 17.6545L15.8182 12.6864M11.1577 8.18182L15.8182 12.6864"
      stroke="#85858F"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="icon == Icon.refresh"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.735775 11.375C1.16269 11.375 1.50211 11.0185 1.5002 10.5916C1.50007 10.5611 1.5 10.5306 1.5 10.5C1.5 7.21344 2.28376 5.02705 3.58621 3.65948C4.87561 2.3056 6.91705 1.5 10 1.5C13.0829 1.5 15.1244 2.3056 16.4138 3.65948C16.9144 4.18507 17.3383 4.8316 17.6706 5.61505C17.7984 5.9163 18.0863 6.125 18.4135 6.125C18.9271 6.125 19.2971 5.62917 19.1034 5.15343C17.705 1.71781 14.6705 0 10 0C3.33333 0 0 3.5 0 10.5C0 10.5527 0.000189174 10.6053 0.000567523 10.6576C0.00346753 11.0588 0.334608 11.375 0.735775 11.375ZM2.32941 15.385C2.20164 15.0837 1.91374 14.875 1.58652 14.875C1.07287 14.875 0.702915 15.3708 0.896565 15.8466C2.29504 19.2822 5.32951 21 10 21C16.6667 21 20 17.5 20 10.5C20 10.4473 19.9998 10.3947 19.9994 10.3424C19.9965 9.94124 19.6654 9.625 19.2642 9.625C18.8373 9.625 18.4979 9.98151 18.4998 10.4084C18.4999 10.4389 18.5 10.4694 18.5 10.5C18.5 13.7866 17.7162 15.9729 16.4138 17.3405C15.1244 18.6944 13.0829 19.5 10 19.5C6.91705 19.5 4.87561 18.6944 3.58621 17.3405C3.08565 16.8149 2.6617 16.1684 2.32941 15.385Z"
      fill="#85858F"
    />
    <path
      d="M19.1315 0.875V6.125H13.9141"
      stroke="#85858F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.868546 20.125L0.868546 14.875L6.08594 14.875"
      stroke="#85858F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="icon == Icon.solid_check"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
  >
    <path
      d="M13 1.42969L4.42871 10.001"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 6.57422L4.42851 10.0027"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    v-else-if="icon == Icon.solid_close"
  >
    <path
      d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <icons-search
    v-else-if="icon == Icon.search"
    :hash-color="hashColor"
  ></icons-search>
</template>

<script setup lang="ts">
import { Icon } from "~~/models/utilities/Icon";
interface Props {
  hashColor?: string;
  icon: Icon;
}
const { icon, hashColor = "#0F0F10" } = defineProps<Props>();
</script>

<style>
</style>