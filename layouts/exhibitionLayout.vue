<template>
  <div>
    <Head>
      <Title>{{ $route.meta.title ?? "پنل نمایشگاه" }}</Title>
    </Head>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
      <div class="container">
        <section class="breadcrumb">
          <nuxt-link to="/" class="breadcrumb__item">
            <icons-home></icons-home>
            همکار
          </nuxt-link>
          <template v-if="!$route.meta.title">
            <icons-left-arrow></icons-left-arrow>
            <a class="breadcrumb__item breadcrumb__item--active"
              >پنل نمایشگاه</a
            >
          </template>
          <template v-else>
            <icons-left-arrow></icons-left-arrow>
            <nuxt-link to="/account" class="breadcrumb__item"
              >پنل نمایشگاه</nuxt-link
            >

            <icons-left-arrow></icons-left-arrow>
            <a class="breadcrumb__item breadcrumb__item--active">{{
              $route.meta.title
            }}</a>
          </template>
        </section>
        <section class="dashboard">
          <account-the-side-bar>
            <li
              :class="[
                'sidebar__item',
                { 'sidebar__item--active': path == '/account/exhibition' },
              ]"
              @click="$router.push('/account/exhibition')"
            >
              <icons-menu
                :width="20"
                :height="20"
                hash-color="var(--color-black)"
              />
              صفحه اصلی
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active':
                    path == '/account/exhibition/adverts',
                },
              ]"
              @click="$router.push('/account/exhibition/adverts')"
            >
              <account-icons-adverts
                :width="20"
                :height="21"
                hash-color="var(--color-black)"
              />
              <span
                v-if="
                  accountStore.exhibition == null &&
                  (accountStore.consultant == null ||
                    accountStore.consultant.role == ConsultantRole.employee)
                "
              >
                آگهی های من</span
              >
              <span v-else> آگهی های نمایشگاه</span>
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active':
                    path == '/account/exhibition/consultants',
                },
              ]"
              @click="$router.push('/account/exhibition/consultants')"
            >
              <icons-users />
              مدیریت مشاوران
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active': path == '/account/exhibition/saved',
                },
              ]"
              @click="$router.push('/account/exhibition/saved')"
            >
              <icons-save
                hash-color="var(--color-black)"
                :width="17"
                :height="21"
              />
              ذخیره شده ها
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active': path == '/account/exhibition/notify',
                },
              ]"
              @click="$router.push('/account/exhibition/notify')"
            >
              <icons-notification />
              گوش به زنگ
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active':
                    path == '/account/exhibition/parking',
                },
              ]"
              @click="$router.push('/account/exhibition/parking')"
            >
              <icons-parking />
              پارکینگ
            </li>
            <li
              :class="[
                'sidebar__item',
                { 'sidebar__item--active': path == '/account/messages' },
              ]"
              @click="$router.push('/account/exhibition/messages')"
            >
              <account-icons-comment
                :width="20"
                :height="21"
                hash-color="var(--color-black)"
              />
              پیام های من
              <span
                class="sidebar__badge"
                v-if="chatStore.newMessageCount > 0"
                >{{ chatStore.newMessageCount }}</span
              >
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active':
                    path == '/account/exhibition/transactions',
                },
              ]"
              @click="$router.push('/account/exhibition/transactions')"
            >
              <icons-wallet />
              لیست تراکنش ها
            </li>
            <li
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active': path == '/account/exhibition/notes',
                },
              ]"
              @click="$router.push('/account/exhibition/notes')"
            >
              <icons-edit :width="20" :height="21" />
              یادداشت ها
            </li>
            <li
              v-if="accountStore.exhibition"
              :class="[
                'sidebar__item',
                {
                  'sidebar__item--active':
                    path == '/account/exhibition/packages',
                },
              ]"
              @click="$router.push('/account/exhibition/packages')"
            >
              <icons-megaphone :width="20" :height="19" />
              پکیج ها
              <span class="sidebar__badge">جدید!</span>
            </li>
          </account-the-side-bar>
          <account-the-mobile-side-bar>
            <div :class="['item', { active: path == '/account/exhibition' }]">
              <nuxt-link class="item-icon" to="/account/exhibition">
                <icons-menu />
              </nuxt-link>
              صفحه اصلی
            </div>

            <div :class="['item', { active: path == '/account/exhibition/adverts' }]">
              <nuxt-link class="item-icon" to="/account/exhibition/adverts">
                <account-icons-adverts />
              </nuxt-link>
              <template
                v-if="
                  accountStore.exhibition ||
                  accountStore.consultant?.role == ConsultantRole.manager
                "
              >
                آگهی های نمایشگاه
              </template>
              <template v-else> آگهی های من </template>
            </div>
            <div
              v-if="
                accountStore.exhibition ||
                accountStore.consultant?.role == ConsultantRole.manager
              "
              :class="[
                'item',
                { active: path == '/account/exhibition/consultants' },
              ]"
            >
              <nuxt-link class="item-icon" to="/account/exhibition/consultants">
                <icons-users
                  hash-color="var(--color-error)"
                  :width="32"
                  :height="32"
                />
              </nuxt-link>
              مدیریت مشاوران
            </div>
            <div :class="['item', { active: path == '/account/exhibition/saved' }]">
              <nuxt-link class="item-icon" to="/account/exhibition/saved">
                <icons-save hash-color="#CD6AFF" :width="23" :height="28" />
              </nuxt-link>
              ذخیره شده ها
            </div>
            <div :class="['item', { active: path == '/account/exhibition/notify' }]">
              <nuxt-link to="/account/exhibition/notify" class="item-icon">
                <icons-notification
                  hash-color="#0FE784"
                  :width="23"
                  :height="28"
                />
              </nuxt-link>
              گوش به زنگ
            </div>
            <div :class="['item', { active: path == '/account/exhibition/parking' }]">
              <nuxt-link to="/account/exhibition/parking" class="item-icon">
                <icons-parking hash-color="#F724D5" :width="28" :height="28" />
              </nuxt-link>
              پارکینگ
            </div>
            <div :class="['item', { active: path == '/account/exhibition/messages' }]">
              <nuxt-link to="/account/exhibition/messages" class="item-icon">
                <account-icons-comment />
              </nuxt-link>
              پیام های من
            </div>
            <div :class="['item', { active: path == '/account/exhibition/transactions' }]">
              <nuxt-link to="/account/exhibition/transactions" class="item-icon">
                <icons-wallet :width="28" :height="28" hash-color="#FFD600" />
              </nuxt-link>
              لیست تراکنش ها
            </div>
            <div :class="['item', { active: path == '/account/exhibition/notes' }]">
              <nuxt-link to="/account/exhibition/notes" class="item-icon">
                <icons-edit :width="28" :height="28" hash-color="#5B6CFF" />
              </nuxt-link>
              یادداشت ها
            </div>
            <div
              v-if="accountStore.exhibition"
              :class="['item', { active: path == '/account/exhibition/packages' }]"
            >
              <nuxt-link to="/account/exhibition/packages" class="item-icon">
                <icons-megaphone hash-color="#07DCD5" />
              </nuxt-link>
              پکیج ها
            </div>
            <div class="item">
              <nuxt-link class="item-icon">
                <icons-exit :width="26" :height="28" />
              </nuxt-link>
              خروج
            </div>
          </account-the-mobile-side-bar>
          <div class="page__wraper">
            <slot />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "#imports";
import { ToastType } from "~~/composables/useToast";
import {
  ConsultantDto,
  ConsultantRole,
} from "~~/models/exhibitions/Exhibition.Commands";
import { ExhibitionStatus } from "~~/models/exhibitions/Exhibition.Models";
import { GetCurrentConsultant } from "~~/services/consultant.service";
import { GetNardebans } from "~~/services/exhibition.service";
import { useAccountStore } from "~~/stores/account.store";
import { authStore } from "~~/stores/auth.store";
import { UseChatStore } from "~~/stores/chat.store";

const route = useRoute();
const toast = useToast();
const router = useRouter();

const chatStore = UseChatStore();
const accountStore = useAccountStore();

const path = ref(route.path);
watch(
  () => route.path,
  (val) => {
    path.value = val;
  }
);

onMounted(async () => {
  var { transaction } = route.query;
  if (transaction && transaction.toString() == "success") {
    toast.showToast("تراکنش با موفقیت انجام شد", ToastType.success);
    router.push({
      path: route.path,
    });
  }
  var consult = await GetCurrentConsultant();

  if (accountStore.exhibition == null && consult.data == null) {
    await router.push("/account");
  }
  accountStore.consultant = consult.data ?? ({} as ConsultantDto);
  var nardebans = await GetNardebans();
  accountStore.nardebans = nardebans.data ?? 0;
  await chatStore.initConnection();
});
</script>
  
  <style scoped>
.page__wraper {
  width: 100%;
  overflow: hidden;
}
.dashboard {
  display: flex;
  gap: 1rem;
}
@media screen and (max-width: 400px) {
  .alert__notify a {
    width: 70% !important;
  }
}
@media screen and (max-width: 768px) {
  .page__wraper {
    overflow: unset !important;
    padding-bottom: 4rem;
  }
  .main {
    padding-top: 0.5rem !important;
  }
}
@media screen and (max-width: 768px) {
  .profile__sidebar {
    display: none !important;
  }
}
.profile__sidebar {
  border-radius: var(--app-border-radius);
  background-color: var(--color-white);
  padding: 1.5rem;
  /* width: 18.5rem; */
  width: 381px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar__menu {
}
.sidebar__item {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  cursor: pointer;
  user-select: none;
  position: relative;
}
.sidebar__item--active {
  border-radius: 14px;
  background-color: var(--color-gray-300);
}
.sidebar__badge {
  border-radius: 0.5rem;
  background-color: #ef3838;
  padding: 0 7px;
  color: var(--color-white);
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  margin-right: auto;
  display: block;
  position: absolute;
  left: 0;
}
.item.active .item-icon {
  background: var(--color-gray-200);
}
.item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-black-200);
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  flex-grow: 1;
  width: 70px;
  text-align: center;
}
.item-icon {
  border: 2px solid var(--color-gray-200);
  background: transparent;
  border-radius: 20px;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>