<template>
  <label>
    <input ref="inp" type="checkbox" @change="changeColorTheme" />
    <span class="slider"></span>
  </label>
</template>

<script setup>
const theme = ref("light");
const inp = ref(null);

onMounted(() => {
  theme.value = localStorage.getItem("theme") ?? "light";
  if (theme.value == "dark") {
    inp.value.checked = false;
  } else {
    inp.value.checked = true;
  }
});

const changeColorTheme = (e) => {
  //Dark
  if (e.target.checked) {
    //Light
    localStorage.setItem("theme", "light");
    setTheme("light");
    theme.value = "light";
  } else {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
    theme.value = "dark";
  }
};
</script>

<style scoped>
.toggle-switch {
  position: relative;
  width: 200px;
}

label {
  position: absolute;
  width: 48px;
  height: 24px;
  background-color: #434347;
  border-radius: 50px;
  cursor: pointer;
}

input {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 50px;
  height: 24px;
  right: -1px;
  border-radius: 50px;
  transition: 0.3s;
}

input:checked ~ .slider {
  background-color: var(--color-gray-300);
}

.slider::before {
  content: url("data:image/svg+xml,%0A%3Csvg width='11' height='12' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.9647 8.27434C11.038 8.08792 10.9949 7.8727 10.8564 7.73429C10.718 7.59587 10.5133 7.56331 10.3428 7.65258C9.76711 7.95401 9.11906 8.12357 8.43246 8.12357C6.0409 8.12357 4.10216 6.06214 4.10216 3.51925C4.10216 2.48979 4.41936 1.54051 4.95568 0.773984C5.06904 0.611967 5.07605 0.392194 4.97326 0.222389C4.87048 0.0525834 4.67945 -0.0316667 4.4938 0.0109341C1.92509 0.600395 1.19549e-07 3.02921 0 5.93723C-1.37652e-07 9.28561 2.55285 12 5.70195 12C8.07278 12 10.1046 10.4616 10.9647 8.27434Z' fill='%230F0F10'/%3E%3C/svg%3E%0A");
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

input:checked ~ .slider::before {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6 0C6.23669 0 6.42857 0.191878 6.42857 0.428571V1.28571C6.42857 1.52241 6.23669 1.71429 6 1.71429C5.76331 1.71429 5.57143 1.52241 5.57143 1.28571V0.428571C5.57143 0.191878 5.76331 0 6 0Z' fill='%230F0F10' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.00003 9.42857C3.40076 9.42857 2.54362 8.57143 2.57145 6C2.59929 3.42857 3.40076 2.57143 6.00003 2.57143C8.59929 2.57143 9.4286 3.42857 9.4286 6C9.4286 8.57143 8.59929 9.42857 6.00003 9.42857Z' fill='%230F0F10' /%3E%3Cpath d='M6.42857 10.7143C6.42857 10.4776 6.23669 10.2857 6 10.2857C5.76331 10.2857 5.57143 10.4776 5.57143 10.7143V11.5714C5.57143 11.8081 5.76331 12 6 12C6.23669 12 6.42857 11.8081 6.42857 11.5714V10.7143Z' fill='%230F0F10' /%3E%3Cpath d='M12 6C12 6.23669 11.8081 6.42857 11.5714 6.42857H10.7143C10.4776 6.42857 10.2857 6.23669 10.2857 6C10.2857 5.76331 10.4776 5.57143 10.7143 5.57143H11.5714C11.8081 5.57143 12 5.76331 12 6Z' fill='%230F0F10' /%3E%3Cpath d='M1.28571 6.42857C1.52241 6.42857 1.71429 6.23669 1.71429 6C1.71429 5.76331 1.52241 5.57143 1.28571 5.57143H0.428571C0.191878 5.57143 0 5.76331 0 6C0 6.23669 0.191878 6.42857 0.428571 6.42857H1.28571Z' fill='%230F0F10' /%3E%3Cpath d='M1.41124 1.41124C1.57861 1.24387 1.84996 1.24387 2.01733 1.41124L2.62342 2.01733C2.79079 2.1847 2.79079 2.45606 2.62342 2.62342C2.45606 2.79079 2.1847 2.79079 2.01733 2.62342L1.41124 2.01733C1.24387 1.84996 1.24387 1.57861 1.41124 1.41124Z' fill='%230F0F10' /%3E%3Cpath d='M2.01733 10.7662C1.84996 10.9336 1.57861 10.9336 1.41124 10.7662C1.24387 10.5988 1.24387 10.3275 1.41124 10.1601L2.01733 9.55403C2.1847 9.38667 2.45606 9.38667 2.62342 9.55403C2.79079 9.7214 2.79079 9.99276 2.62342 10.1601L2.01733 10.7662Z' fill='%230F0F10' /%3E%3Cpath d='M10.7662 1.41124C10.5988 1.24387 10.3275 1.24387 10.1601 1.41124L9.55403 2.01733C9.38667 2.1847 9.38667 2.45606 9.55403 2.62342C9.7214 2.79079 9.99276 2.79079 10.1601 2.62342L10.7662 2.01733C10.9336 1.84996 10.9336 1.57861 10.7662 1.41124Z' fill='%230F0F10' /%3E%3Cpath d='M10.1601 10.7662C10.3275 10.9336 10.5988 10.9336 10.7662 10.7662C10.9336 10.5988 10.9336 10.3275 10.7662 10.1601L10.1601 9.55403C9.99276 9.38667 9.7214 9.38667 9.55403 9.55403C9.38667 9.7214 9.38667 9.99276 9.55403 10.1601L10.1601 10.7662Z' fill='%230F0F10' /%3E%3C/svg%3E");
  transform: translateX(24px);
  background-color: white;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>