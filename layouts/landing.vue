<template>
  <div>
    <the-header :show-search-bar="true"></the-header>
    <main class="main">
      <slot></slot>
    </main>
    <the-toast></the-toast>
  </div>
</template>
